package io.es1tp.comms.client;

import org.junit.jupiter.api.Test;

public class ClientTest {
  final RotatorClient client = RotatorClientImpl.builder().build();
  
  
  
  @Test
  public void left() {
    client.command().move().rotate().right().execute();
    
    client.command()
    .move()
    .to()
    .azimuth(100)
    .execute();
  }
}
