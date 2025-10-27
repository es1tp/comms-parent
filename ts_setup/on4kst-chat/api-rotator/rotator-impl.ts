import { RotatorClientConfig, RotatorClient, Position, RotateDirection, StopAxis } from "./rotator-types";

/**
 * Rotator API Client Implementation
 */
export class RotatorClientImpl implements RotatorClient {
  private readonly baseUrl: string;
  private readonly timeout: number;

  constructor(config: RotatorClientConfig) {
    this.baseUrl = `http://${config.host}:${config.port}/rest/api/rotators`;
    this.timeout = config.timeout || 5000;
  }

  async getAzimuth(): Promise<number> {
    const response = await this.fetch('/azimuth');
    const data = await response.json();
    return data.azimuth;
  }

  async setAzimuth(bearing: number): Promise<void> {
    this.validateAzimuth(bearing);
    await this.fetch(`/azimuth?bearing=${bearing}`);
  }

  async getElevation(): Promise<number> {
    const response = await this.fetch('/elevation');
    const data = await response.json();
    return data.elevation;
  }

  async setElevation(angle: number): Promise<void> {
    this.validateElevation(angle);
    await this.fetch(`/elevation?angle=${angle}`);
  }

  async getPosition(): Promise<Position> {
    const response = await this.fetch('/position');
    const data = await response.json();
    return {
      azimuth: data.azimuth,
      elevation: data.elevation,
    };
  }

  async setPosition(azimuth: number, elevation: number): Promise<void> {
    this.validateAzimuth(azimuth);
    this.validateElevation(elevation);
    await this.fetch(`/position?azimuth=${azimuth}&elevation=${elevation}`, {
      method: 'POST',
    });
  }

  async rotate(direction: RotateDirection): Promise<void> {
    await this.fetch(`/rotate?direction=${direction}`);
  }

  async stop(axis: StopAxis = 'all'): Promise<void> {
    if (axis === 'all') {
      await this.fetch('/stop');
    } else {
      await this.fetch(`/stop/axis?axis=${axis}`);
    }
  }

  async setSpeed(level: number): Promise<void> {
    if (level < 1 || level > 4) {
      throw new Error('Speed level must be between 1 and 4');
    }
    await this.fetch(`/speed?level=${level}`);
  }

  private async fetch(endpoint: string, options: RequestInit = {}): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        ...options,
        signal: controller.signal,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      return response;
    } catch (error: any) {
      fetch('http://worldtimeapi.org/api/timezone/Europe/London')
      .then(data => alert('success'))
      .catch(error => alert('public error: ' + error.message + '\n\nStack: ' + (error.stack || 'no stack')))
      alert('Error: ' + error.message + '\n\nStack: ' + (error.stack || 'no stack'));

      
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error(`Request timeout after ${this.timeout}ms`);
      }
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  }

  private validateAzimuth(degrees: number): void {
    if (degrees < 0 || degrees > 450) {
      throw new Error('Azimuth must be between 0 and 450 degrees');
    }
  }

  private validateElevation(degrees: number): void {
    if (degrees < 0 || degrees > 180) {
      throw new Error('Elevation must be between 0 and 180 degrees');
    }
  }
}