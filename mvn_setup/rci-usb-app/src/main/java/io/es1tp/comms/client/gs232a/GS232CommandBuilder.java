package io.es1tp.comms.client.gs232a;

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

/**
 * Fluent builder for GS-232A protocol commands
 */
public class GS232CommandBuilder {

  private final StringBuilder command = new StringBuilder();

  private GS232CommandBuilder() {
  }

  public static GS232CommandBuilder create() {
    return new GS232CommandBuilder();
  }

  // ========== Query Commands ==========
  
  /**
   * Query current azimuth position
   * Returns: +0nnn
   */
  public GS232CommandBuilder queryAzimuth() {
    command.append("C");
    return this;
  }

  /**
   * Query current elevation position
   * Returns: +0nnn
   */
  public GS232CommandBuilder queryElevation() {
    command.append("B");
    return this;
  }

  /**
   * Query both azimuth and elevation
   * Returns: +0aaa+0eee
   */
  public GS232CommandBuilder queryPosition() {
    command.append("C2");
    return this;
  }

  // ========== Movement Commands ==========

  /**
   * Start rotating right/clockwise
   */
  public GS232CommandBuilder rotateRight() {
    command.append("R");
    return this;
  }

  /**
   * Start rotating left/counter-clockwise
   */
  public GS232CommandBuilder rotateLeft() {
    command.append("L");
    return this;
  }

  /**
   * Start rotating up
   */
  public GS232CommandBuilder rotateUp() {
    command.append("U");
    return this;
  }

  /**
   * Start rotating down
   */
  public GS232CommandBuilder rotateDown() {
    command.append("D");
    return this;
  }

  // ========== Stop Commands ==========

  /**
   * Stop azimuth rotation
   */
  public GS232CommandBuilder stopAzimuth() {
    command.append("A");
    return this;
  }

  /**
   * Stop elevation rotation
   */
  public GS232CommandBuilder stopElevation() {
    command.append("E");
    return this;
  }

  /**
   * Stop all rotation (cancel current command)
   */
  public GS232CommandBuilder stopAll() {
    command.append("S");
    return this;
  }

  // ========== Position Commands ==========

  /**
   * Move to specific azimuth angle
   * @param degrees 0-360 or 0-450 depending on rotator
   */
  public GS232CommandBuilder moveToAzimuth(int degrees) {
    validateAzimuth(degrees);
    command.append(String.format("M%03d", degrees));
    return this;
  }

  /**
   * Move to specific azimuth and elevation
   * @param azimuth 0-360 or 0-450
   * @param elevation 0-180
   */
  public GS232CommandBuilder moveToPosition(int azimuth, int elevation) {
    validateAzimuth(azimuth);
    validateElevation(elevation);
    command.append(String.format("W%03d %03d", azimuth, elevation));
    return this;
  }

  // ========== Speed Commands ==========

  /**
   * Set rotation speed (azimuth only)
   * @param level 1 (slowest) to 4 (fastest)
   */
  public GS232CommandBuilder setSpeed(int level) {
    if (level < 1 || level > 4) {
      throw new IllegalArgumentException("Speed level must be between 1 and 4");
    }
    command.append("X").append(level);
    return this;
  }

  // ========== Calibration Commands ==========

  /**
   * Offset calibration for azimuth trimmer
   * (must be at counter-clockwise limit)
   */
  public GS232CommandBuilder calibrateAzimuthOffset() {
    command.append("O");
    return this;
  }

  /**
   * Offset calibration for elevation trimmer
   * (must be at down/0° position)
   */
  public GS232CommandBuilder calibrateElevationOffset() {
    command.append("O2");
    return this;
  }

  /**
   * Full scale calibration for azimuth
   * (must be at full scale position)
   */
  public GS232CommandBuilder calibrateAzimuthFullScale() {
    command.append("F");
    return this;
  }

  /**
   * Full scale calibration for elevation
   * (must be at 180° position)
   */
  public GS232CommandBuilder calibrateElevationFullScale() {
    command.append("F2");
    return this;
  }

  // ========== Help Commands ==========

  /**
   * Display azimuth command list
   */
  public GS232CommandBuilder helpAzimuth() {
    command.append("H");
    return this;
  }

  /**
   * Display elevation command list
   */
  public GS232CommandBuilder helpElevation() {
    command.append("H2");
    return this;
  }

  // ========== Timed Buffer Commands ==========

  /**
   * Set up timed azimuth stepping sequence
   * @param intervalSeconds time to wait between angles (1-999)
   * @param angles list of azimuth angles to step through
   */
  public GS232CommandBuilder timedAzimuthSequence(int intervalSeconds, int... angles) {
    if (intervalSeconds < 1 || intervalSeconds > 999) {
      throw new IllegalArgumentException("Interval must be between 1 and 999 seconds");
    }
    if (angles.length < 1 || angles.length > 3800) {
      throw new IllegalArgumentException("Must provide 1-3800 angles");
    }

    command.append(String.format("M%03d", intervalSeconds));
    for (int angle : angles) {
      validateAzimuth(angle);
      command.append(String.format(" %03d", angle));
    }
    return this;
  }

  /**
   * Set up timed azimuth/elevation stepping sequence
   * @param intervalSeconds time to wait between positions (1-999)
   * @param positions array of {azimuth, elevation} pairs (max 1900 pairs)
   */
  public GS232CommandBuilder timedPositionSequence(int intervalSeconds, int[]... positions) {
    if (intervalSeconds < 1 || intervalSeconds > 999) {
      throw new IllegalArgumentException("Interval must be between 1 and 999 seconds");
    }
    if (positions.length < 1 || positions.length > 1900) {
      throw new IllegalArgumentException("Must provide 1-1900 position pairs");
    }

    command.append(String.format("W%03d", intervalSeconds));
    for (int[] pos : positions) {
      if (pos.length != 2) {
        throw new IllegalArgumentException("Each position must be {azimuth, elevation}");
      }
      validateAzimuth(pos[0]);
      validateElevation(pos[1]);
      command.append(String.format(" %03d %03d", pos[0], pos[1]));
    }
    return this;
  }

  /**
   * Start automatic stepping through timed sequence
   * (must be preceded by timedAzimuthSequence or timedPositionSequence)
   */
  public GS232CommandBuilder startTimedSequence() {
    command.append("T");
    return this;
  }

  /**
   * Query current point number in timed sequence
   * Returns: +nnnn+mmmm (current point + total points)
   */
  public GS232CommandBuilder querySequenceStatus() {
    command.append("N");
    return this;
  }

  // ========== Raw Command ==========

  /**
   * Append a raw command string (for custom/undocumented commands)
   */
  public GS232CommandBuilder raw(String rawCommand) {
    command.append(rawCommand);
    return this;
  }

  // ========== Build Methods ==========

  /**
   * Build the command string without carriage return
   */
  public String buildRaw() {
    return command.toString();
  }

  /**
   * Build the command string with carriage return terminator
   */
  public String build() {
    return command.toString() + "\r";
  }

  /**
   * Build and return as byte array (UTF-8) with carriage return
   */
  public byte[] buildBytes() {
    return build().getBytes(java.nio.charset.StandardCharsets.UTF_8);
  }

  /**
   * Clear the builder to start a new command
   */
  public GS232CommandBuilder clear() {
    command.setLength(0);
    return this;
  }

  // ========== Validation Methods ==========

  private void validateAzimuth(int degrees) {
    if (degrees < 0 || degrees > 450) {
      throw new IllegalArgumentException("Azimuth must be between 0 and 450 degrees");
    }
  }

  private void validateElevation(int degrees) {
    if (degrees < 0 || degrees > 180) {
      throw new IllegalArgumentException("Elevation must be between 0 and 180 degrees");
    }
  }

  @Override
  public String toString() {
    return command.toString();
  }
}
