/**
 * Rotator API Client Interface
 */
export interface RotatorClient {
  /**
   * Get current azimuth position
   * @returns Current azimuth in degrees (0-450)
   */
  getAzimuth(): Promise<number>;

  /**
   * Set azimuth position
   * @param bearing Target azimuth in degrees (0-450)
   */
  setAzimuth(bearing: number): Promise<void>;

  /**
   * Get current elevation position
   * @returns Current elevation in degrees (0-180)
   */
  getElevation(): Promise<number>;

  /**
   * Set elevation position
   * @param angle Target elevation in degrees (0-180)
   */
  setElevation(angle: number): Promise<void>;

  /**
   * Get current position (azimuth and elevation)
   * @returns Position object with azimuth and elevation
   */
  getPosition(): Promise<Position>;

  /**
   * Set position (azimuth and elevation)
   * @param azimuth Target azimuth in degrees (0-450)
   * @param elevation Target elevation in degrees (0-180)
   */
  setPosition(azimuth: number, elevation: number): Promise<void>;

  /**
   * Start rotating in a direction
   * @param direction Direction to rotate: 'right' | 'left' | 'up' | 'down'
   */
  rotate(direction: RotateDirection): Promise<void>;

  /**
   * Stop rotation
   * @param axis Optional axis to stop: 'azimuth' | 'elevation' | 'all' (default: 'all')
   */
  stop(axis?: StopAxis): Promise<void>;

  /**
   * Set rotation speed
   * @param level Speed level 1 (slowest) to 4 (fastest)
   */
  setSpeed(level: number): Promise<void>;
}

export type RotateDirection = 'right' | 'left' | 'up' | 'down' | 'cw' | 'ccw';
export type StopAxis = 'azimuth' | 'elevation' | 'all' | 'az' | 'el';

export interface Position {
  azimuth: number;
  elevation: number;
}

export interface RotatorClientConfig {
  host: string;
  port: number;
  timeout?: number;
}