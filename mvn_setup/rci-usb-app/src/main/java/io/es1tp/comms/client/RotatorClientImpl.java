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

import java.nio.charset.StandardCharsets;
import java.util.Arrays;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicReference;

import com.fazecast.jSerialComm.SerialPort;
import com.fazecast.jSerialComm.SerialPortEvent;
import com.fazecast.jSerialComm.SerialPortMessageListener;

import io.es1tp.comms.client.gs232a.GS232CommandBuilder;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class RotatorClientImpl implements RotatorClient {

  private final SerialPort port;
  private final AtomicReference<CompletableFuture<String>> pendingResponse = new AtomicReference<>();
  private static final long DEFAULT_TIMEOUT_MS = 2000;

  @Override
  public RawCommandSender raw() {
    return new RawCommandSenderImpl();
  }

  @Override
  public AzimuthQuery azimuthQuery() {
    return new AzimuthQueryImpl();
  }

  @Override
  public ElevationQuery elevationQuery() {
    return new ElevationQueryImpl();
  }

  @Override
  public PositionQuery positionQuery() {
    return new PositionQueryImpl();
  }

  @Override
  public CommandBuilder command() {
    return new CommandBuilderFluentImpl();
  }

  private void sendCommand(String command) {
    try {
      final byte[] cmd = command.getBytes(StandardCharsets.UTF_8);
      port.writeBytes(cmd, cmd.length);
      Thread.sleep(50); // Small delay to ensure command is sent
    } catch (Exception e) {
      throw new RuntimeException("Failed to send command: " + command, e);
    }
  }

  private String sendCommandAndWaitForResponse(String command, long timeoutMs) {
    CompletableFuture<String> future = new CompletableFuture<>();
    pendingResponse.set(future);

    sendCommand(command);

    try {
      return future.get(timeoutMs, TimeUnit.MILLISECONDS);
    } catch (Exception e) {
      throw new RuntimeException("Failed to get response for command: " + command, e);
    } finally {
      pendingResponse.set(null);
    }
  }

  private void handleResponse(String response) {
    CompletableFuture<String> future = pendingResponse.get();
    if (future != null && !future.isDone()) {
      future.complete(response);
    }
  }
  
  
  //Raw Command Sender Implementation
  private class RawCommandSenderImpl implements RawCommandSender {
   
   @Override
   public void send(String command) {
     String cmd = GS232CommandBuilder.create()
         .raw(command)
         .build();
     sendCommand(cmd);
   }
  }

  // Query Implementations
  private class AzimuthQueryImpl implements AzimuthQuery {
    @Override
    public int find() {
      String cmd = GS232CommandBuilder.create()
          .queryAzimuth()
          .build();

      String response = sendCommandAndWaitForResponse(cmd, DEFAULT_TIMEOUT_MS);

      if (response.matches("\\+0\\d{3}")) {
        return Integer.parseInt(response.substring(2));
      }

      throw new RuntimeException("Invalid azimuth response: " + response);
    }
  }

  private class ElevationQueryImpl implements ElevationQuery {
    @Override
    public int find() {
      String cmd = GS232CommandBuilder.create()
          .queryElevation()
          .build();

      String response = sendCommandAndWaitForResponse(cmd, DEFAULT_TIMEOUT_MS);

      if (response.matches("\\+0\\d{3}")) {
        return Integer.parseInt(response.substring(2));
      }

      throw new RuntimeException("Invalid elevation response: " + response);
    }
  }

  private class PositionQueryImpl implements PositionQuery {
    @Override
    public Position find() {
      String cmd = GS232CommandBuilder.create()
          .queryPosition()
          .build();

      String response = sendCommandAndWaitForResponse(cmd, DEFAULT_TIMEOUT_MS);

      // Parse response format: +0aaa+0eee
      if (response.matches("\\+0\\d{3}\\+0\\d{3}")) {
        int azimuth = Integer.parseInt(response.substring(2, 5));
        int elevation = Integer.parseInt(response.substring(7, 10));
        return new Position(azimuth, elevation);
      }

      throw new RuntimeException("Invalid position response: " + response);
    }
  }

  // Command Builder Fluent Implementation
  private class CommandBuilderFluentImpl implements RotatorClient.CommandBuilder {

    @Override
    public MovementBuilder move() {
      return new MovementBuilderImpl();
    }

    @Override
    public StopBuilder stop() {
      return new StopBuilderImpl();
    }

    @Override
    public SpeedBuilder speed(int level) {
      return new SpeedBuilderImpl(level);
    }

    @Override
    public RotatorClient.CommandBuilder queryAzimuth() {
      String cmd = GS232CommandBuilder.create()
          .queryAzimuth()
          .build();
      sendCommand(cmd);
      return this;
    }

    @Override
    public RotatorClient.CommandBuilder queryElevation() {
      String cmd = GS232CommandBuilder.create()
          .queryElevation()
          .build();
      sendCommand(cmd);
      return this;
    }

    @Override
    public RotatorClient.CommandBuilder queryPosition() {
      String cmd = GS232CommandBuilder.create()
          .queryPosition()
          .build();
      sendCommand(cmd);
      return this;
    }
  }

  // Movement Builder Implementation
  private class MovementBuilderImpl implements MovementBuilder {

    @Override
    public TargetBuilder to() {
      return new TargetBuilderImpl();
    }

    @Override
    public DirectionBuilder rotate() {
      return new DirectionBuilderImpl();
    }
  }

  // Target Builder Implementation
  private class TargetBuilderImpl implements TargetBuilder {
    private Integer targetAzimuth;
    private Integer targetElevation;

    @Override
    public TargetBuilder azimuth(int degrees) {
      this.targetAzimuth = degrees;
      return this;
    }

    @Override
    public TargetBuilder elevation(int degrees) {
      this.targetElevation = degrees;
      return this;
    }

    @Override
    public void execute() {
      if (targetAzimuth == null) {
        throw new IllegalStateException("Azimuth must be specified");
      }

      String cmd;
      if (targetElevation != null) {
        cmd = GS232CommandBuilder.create()
            .moveToPosition(targetAzimuth, targetElevation)
            .build();
      } else {
        cmd = GS232CommandBuilder.create()
            .moveToAzimuth(targetAzimuth)
            .build();
      }

      sendCommand(cmd);
    }
  }

  // Direction Builder Implementation
  private class DirectionBuilderImpl implements DirectionBuilder {

    @Override
    public ExecutableCommand right() {
      return () -> {
        String cmd = GS232CommandBuilder.create()
            .rotateRight()
            .build();
        sendCommand(cmd);
      };
    }

    @Override
    public ExecutableCommand left() {
      return () -> {
        String cmd = GS232CommandBuilder.create()
            .rotateLeft()
            .build();
        sendCommand(cmd);
      };
    }

    @Override
    public ExecutableCommand up() {
      return () -> {
        String cmd = GS232CommandBuilder.create()
            .rotateUp()
            .build();
        sendCommand(cmd);
      };
    }

    @Override
    public ExecutableCommand down() {
      return () -> {
        String cmd = GS232CommandBuilder.create()
            .rotateDown()
            .build();
        sendCommand(cmd);
      };
    }
  }

  // Stop Builder Implementation
  private class StopBuilderImpl implements StopBuilder {

    @Override
    public ExecutableCommand azimuth() {
      return () -> {
        String cmd = GS232CommandBuilder.create()
            .stopAzimuth()
            .build();
        sendCommand(cmd);
      };
    }

    @Override
    public ExecutableCommand elevation() {
      return () -> {
        String cmd = GS232CommandBuilder.create()
            .stopElevation()
            .build();
        sendCommand(cmd);
      };
    }

    @Override
    public ExecutableCommand all() {
      return () -> {
        String cmd = GS232CommandBuilder.create()
            .stopAll()
            .build();
        sendCommand(cmd);
      };
    }
  }

  // Speed Builder Implementation
  private class SpeedBuilderImpl implements SpeedBuilder {
    private final int level;

    public SpeedBuilderImpl(int level) {
      this.level = level;
    }

    @Override
    public void execute() {
      String cmd = GS232CommandBuilder.create()
          .setSpeed(level)
          .build();
      sendCommand(cmd);
    }
  }

  public void close() {
    if (port != null && port.isOpen()) {
      port.closePort();
    }
  }

  public static Builder builder() {
    return new Builder();
  }

  // Builder for creating RotatorClient
  public static class Builder {

    private String portNameFilter = "tty.usbmodem";

    public Builder portNameFilter(String filter) {
      this.portNameFilter = filter;
      return this;
    }

    public RotatorClientImpl build() {
      final SerialPort port = Arrays.asList(SerialPort.getCommPorts())
          .stream()
          .filter(t -> t.getSystemPortName().startsWith(portNameFilter))
          .findAny()
          .orElseThrow(() -> new RuntimeException("RCI-USB controller not found"));

      port.setBaudRate(9600);
      port.setNumDataBits(8);
      port.setParity(SerialPort.NO_PARITY);
      port.setNumStopBits(SerialPort.ONE_STOP_BIT);
      port.setFlowControl(SerialPort.FLOW_CONTROL_DISABLED);

      if (!port.openPort()) {
        throw new RuntimeException("Failed to open serial port: " + port.getSystemPortName());
      }

      RotatorClientImpl client = new RotatorClientImpl(port);

      port.addDataListener(new SerialPortMessageListener() {
        @Override
        public byte[] getMessageDelimiter() {
          return new byte[] { 0x0A }; // '\n' line feed
        }

        @Override
        public boolean delimiterIndicatesEndOfMessage() {
          return true;
        }

        @Override
        public int getListeningEvents() {
          return SerialPort.LISTENING_EVENT_DATA_RECEIVED;
        }

        @Override
        public void serialEvent(SerialPortEvent event) {
          String response = new String(event.getReceivedData(), StandardCharsets.UTF_8).trim();
          System.out.println("Response: [" + response + "]");
          client.handleResponse(response);
        }
      });

      return client;
    }
  }

}
