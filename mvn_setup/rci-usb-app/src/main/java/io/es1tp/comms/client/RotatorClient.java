package io.es1tp.comms.client;

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

import lombok.Value;

public interface RotatorClient {

  AzimuthQuery azimuthQuery();
  
  ElevationQuery elevationQuery();
  
  PositionQuery positionQuery();
  
  CommandBuilder command();

  interface PositionQuery {
    Position find();
  }
  
  interface ElevationQuery {
    int find();
  }

  interface AzimuthQuery {
    int find();
  }
  
  interface CommandBuilder {
    // Movement commands
    MovementBuilder move();
    
    // Stop commands
    StopBuilder stop();
    
    // Speed commands
    SpeedBuilder speed(int level);
    
    // Query commands (alternative to dedicated query methods)
    CommandBuilder queryAzimuth();
    CommandBuilder queryElevation();
    CommandBuilder queryPosition();
  }
  
  interface MovementBuilder {
    // Absolute positioning
    TargetBuilder to();
    
    // Directional rotation
    DirectionBuilder rotate();
  }
  
  interface TargetBuilder {
    TargetBuilder azimuth(int degrees);
    TargetBuilder elevation(int degrees);
    void execute();
  }
  
  interface DirectionBuilder {
    ExecutableCommand right();
    ExecutableCommand left();
    ExecutableCommand up();
    ExecutableCommand down();
  }
  
  interface StopBuilder {
    ExecutableCommand azimuth();
    ExecutableCommand elevation();
    ExecutableCommand all();
  }
  
  interface SpeedBuilder {
    void execute();
  }
  
  interface ExecutableCommand {
    void execute();
  }
  
  @Value 
  public static class Position {
    int azimuth;
    int elevation;
  }
}
