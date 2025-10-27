package io.es1tp.comms.web;

/*-
 * #%L
 * rci-usb-app
 * %%
 * Copyright (C) 2015 - 2025 Copyright 2025 ES1TP
 * %%
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * #L%
 */

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.es1tp.comms.client.RotatorClient;
import io.es1tp.comms.client.RotatorClient.Position;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;




@RestController
@RequestMapping("/rest/api/rotators")
@Slf4j
@RequiredArgsConstructor
public class RotatorController {

  private final RotatorClient rotator;
  
  @GetMapping("/raw")
  public ResponseEntity<?> sendRawCommand(@RequestParam(name = "cmd") String cmd) {
    try {
      log.info("Sending raw command: {}", cmd);
      rotator.raw().send(cmd);
      return ResponseEntity.ok(new SuccessResponse("Raw command sent: " + cmd));
    } catch (Exception e) {
      log.error("Failed to send raw command: {}", cmd, e);
      return ResponseEntity.internalServerError()
          .body("Failed to send raw command: " + e.getMessage());
    }
  }

  /**
   * Stop all rotator movement
   * GET /rest/api/rotators/stop
   */
  @GetMapping("/stop")
  public ResponseEntity<?> stop() {
    try {
      log.info("Stopping all rotator movement");
      rotator.command()
          .stop()
          .all()
          .execute();
      return ResponseEntity.ok().body("Rotator stopped");
    } catch (Exception e) {
      log.error("Failed to stop rotator", e);
      return ResponseEntity.internalServerError().body("Failed to stop rotator: " + e.getMessage());
    }
  }

  /**
   * Get current azimuth or set azimuth bearing
   * GET /rest/api/rotators/azimuth - returns current azimuth
   * GET /rest/api/rotators/azimuth?bearing=180 - sets azimuth to 180°
   */
  @GetMapping("/azimuth")
  public ResponseEntity<?> azimuth(@RequestParam(name = "bearing", required = false) Integer bearing) {
    try {
      if (bearing == null) {
        // Query current azimuth
        log.info("Querying current azimuth");
        int currentAzimuth = rotator.azimuthQuery().find();
        log.info("Current azimuth: {}°", currentAzimuth);
        return ResponseEntity.ok(new AzimuthResponse(currentAzimuth));
      } else {
        // Set azimuth
        log.info("Setting azimuth to: {}°", bearing);
        rotator.command()
            .move()
            .to()
            .azimuth(bearing)
            .execute();
        return ResponseEntity.ok(new SuccessResponse("Azimuth set to " + bearing + "°"));
      }
    } catch (IllegalArgumentException e) {
      log.error("Invalid azimuth value: {}", bearing, e);
      return ResponseEntity.badRequest().body("Invalid azimuth: " + e.getMessage());
    } catch (Exception e) {
      log.error("Failed to handle azimuth request", e);
      return ResponseEntity.internalServerError().body("Failed to process azimuth request: " + e.getMessage());
    }
  }

  /**
   * Get current elevation or set elevation angle
   * GET /rest/api/rotators/elevation - returns current elevation
   * GET /rest/api/rotators/elevation?angle=45 - sets elevation to 45°
   */
  @GetMapping("/elevation")
  public ResponseEntity<?> elevation(@RequestParam(name = "angle", required = false) Integer angle) {
    try {
      if (angle == null) {
        // Query current elevation
        log.info("Querying current elevation");
        int currentElevation = rotator.elevationQuery().find();
        log.info("Current elevation: {}°", currentElevation);
        return ResponseEntity.ok(new ElevationResponse(currentElevation));
      } else {
        // Set elevation (requires azimuth too, so we get current azimuth first)
        log.info("Setting elevation to: {}°", angle);
        int currentAzimuth = rotator.azimuthQuery().find();
        rotator.command()
            .move()
            .to()
            .azimuth(currentAzimuth)
            .elevation(angle)
            .execute();
        return ResponseEntity.ok(new SuccessResponse("Elevation set to " + angle + "°"));
      }
    } catch (IllegalArgumentException e) {
      log.error("Invalid elevation value: {}", angle, e);
      return ResponseEntity.badRequest().body("Invalid elevation: " + e.getMessage());
    } catch (Exception e) {
      log.error("Failed to handle elevation request", e);
      return ResponseEntity.internalServerError().body("Failed to process elevation request: " + e.getMessage());
    }
  }

  /**
   * Get current position (azimuth and elevation)
   * GET /rest/api/rotators/position
   */
  @GetMapping("/position")
  public ResponseEntity<?> position() {
    try {
      log.info("Querying current position");
      Position pos = rotator.positionQuery().find();
      log.info("Current position: az={}°, el={}°", pos.getAzimuth(), pos.getElevation());
      return ResponseEntity.ok(new PositionResponse(pos.getAzimuth(), pos.getElevation()));
    } catch (Exception e) {
      log.error("Failed to query position", e);
      return ResponseEntity.internalServerError().body("Failed to query position: " + e.getMessage());
    }
  }

  /**
   * Set position (azimuth and elevation)
   * POST /rest/api/rotators/position?azimuth=180&elevation=45
   */
  @PostMapping("/position")
  public ResponseEntity<?> setPosition(
      @RequestParam(name = "azimuth") Integer azimuth,
      @RequestParam(name = "elevation") Integer elevation) {
    try {
      log.info("Setting position to: az={}°, el={}°", azimuth, elevation);
      rotator.command()
          .move()
          .to()
          .azimuth(azimuth)
          .elevation(elevation)
          .execute();
      return ResponseEntity.ok(new SuccessResponse(
          String.format("Position set to az=%d°, el=%d°", azimuth, elevation)));
    } catch (IllegalArgumentException e) {
      log.error("Invalid position values: az={}, el={}", azimuth, elevation, e);
      return ResponseEntity.badRequest().body("Invalid position: " + e.getMessage());
    } catch (Exception e) {
      log.error("Failed to set position", e);
      return ResponseEntity.internalServerError().body("Failed to set position: " + e.getMessage());
    }
  }

  /**
   * Start rotating in a direction
   * GET /rest/api/rotators/rotate?direction=right
   * Directions: right, left, up, down
   */
  @GetMapping("/rotate")
  public ResponseEntity<?> rotate(@RequestParam(name = "direction") String direction) {
    try {
      log.info("Starting rotation: {}", direction);
      
      switch (direction.toLowerCase()) {
        case "right":
        case "cw":
          rotator.command().move().rotate().right().execute();
          break;
        case "left":
        case "ccw":
          rotator.command().move().rotate().left().execute();
          break;
        case "up":
          rotator.command().move().rotate().up().execute();
          break;
        case "down":
          rotator.command().move().rotate().down().execute();
          break;
        default:
          return ResponseEntity.badRequest()
              .body("Invalid direction. Use: right, left, up, down");
      }
      
      return ResponseEntity.ok(new SuccessResponse("Rotating " + direction));
    } catch (Exception e) {
      log.error("Failed to start rotation: {}", direction, e);
      return ResponseEntity.internalServerError()
          .body("Failed to start rotation: " + e.getMessage());
    }
  }

  /**
   * Stop specific axis
   * GET /rest/api/rotators/stop?axis=azimuth
   * Axes: azimuth, elevation, all
   */
  @GetMapping("/stop/axis")
  public ResponseEntity<?> stopAxis(@RequestParam(name = "axis", defaultValue = "all") String axis) {
    try {
      log.info("Stopping axis: {}", axis);
      
      switch (axis.toLowerCase()) {
        case "azimuth":
        case "az":
          rotator.command().stop().azimuth().execute();
          break;
        case "elevation":
        case "el":
          rotator.command().stop().elevation().execute();
          break;
        case "all":
          rotator.command().stop().all().execute();
          break;
        default:
          return ResponseEntity.badRequest()
              .body("Invalid axis. Use: azimuth, elevation, all");
      }
      
      return ResponseEntity.ok(new SuccessResponse("Stopped " + axis));
    } catch (Exception e) {
      log.error("Failed to stop axis: {}", axis, e);
      return ResponseEntity.internalServerError()
          .body("Failed to stop axis: " + e.getMessage());
    }
  }

  /**
   * Set rotation speed
   * GET /rest/api/rotators/speed?level=3
   * Levels: 1 (slowest) to 4 (fastest)
   */
  @GetMapping("/speed")
  public ResponseEntity<?> speed(@RequestParam(name = "level") Integer level) {
    try {
      log.info("Setting speed to level: {}", level);
      rotator.command()
          .speed(level)
          .execute();
      return ResponseEntity.ok(new SuccessResponse("Speed set to level " + level));
    } catch (IllegalArgumentException e) {
      log.error("Invalid speed level: {}", level, e);
      return ResponseEntity.badRequest().body("Speed level must be between 1 and 4");
    } catch (Exception e) {
      log.error("Failed to set speed", e);
      return ResponseEntity.internalServerError()
          .body("Failed to set speed: " + e.getMessage());
    }
  }

  // Response DTOs
  public record AzimuthResponse(int azimuth) {}
  
  public record ElevationResponse(int elevation) {}
  
  public record PositionResponse(int azimuth, int elevation) {}
  
  public record SuccessResponse(String message) {}
}
