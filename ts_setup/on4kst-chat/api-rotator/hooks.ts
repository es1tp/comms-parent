import React from "react";
import { RotatorClientImpl } from "./rotator-impl";
import { RotatorClient } from "./rotator-types";

export function useRotator(config: { ip: string, port: number}) {

  const impl: RotatorClient = React.useMemo(() => new RotatorClientImpl({
    host: config.ip,
    port: config.port
  }), [config.ip, config.port]);

  return impl;
}