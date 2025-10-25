package io.es1tp.comms;

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


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

import io.es1tp.comms.client.RotatorClientImpl;
import lombok.extern.slf4j.Slf4j;


@SpringBootApplication
@EnableAutoConfiguration
@Slf4j
@Import(value = { 

})
public class Application {
  public static void main(String[] args) throws Exception {
    SpringApplication.run(new Class<?>[] { Application.class }, args);
  }
  

  @Configuration
  public static class AppConfig {
    @Bean
    public RotatorClientImpl rotator() {
      return RotatorClientImpl.builder().build();
    }
  }
}
