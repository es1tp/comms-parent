
// Great circle path calculator for smooth polylines
export function calculateGreatCirclePath(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
  numPoints: number = 20
): [number, number][] {
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const toDeg = (rad: number) => (rad * 180) / Math.PI;

  const φ1 = toRad(lat1);
  const λ1 = toRad(lng1);
  const φ2 = toRad(lat2);
  const λ2 = toRad(lng2);

  const Δφ = φ2 - φ1;
  const Δλ = λ2 - λ1;

  // Haversine formula for distance
  const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  // Generate intermediate points
  const points: [number, number][] = [];
  
  for (let i = 0; i <= numPoints; i++) {
    const fraction = i / numPoints;
    
    const A = Math.sin((1 - fraction) * c) / Math.sin(c);
    const B = Math.sin(fraction * c) / Math.sin(c);
    
    const x = A * Math.cos(φ1) * Math.cos(λ1) + B * Math.cos(φ2) * Math.cos(λ2);
    const y = A * Math.cos(φ1) * Math.sin(λ1) + B * Math.cos(φ2) * Math.sin(λ2);
    const z = A * Math.sin(φ1) + B * Math.sin(φ2);
    
    const φi = Math.atan2(z, Math.sqrt(x * x + y * y));
    const λi = Math.atan2(y, x);
    
    points.push([toDeg(φi), toDeg(λi)]);
  }
  
  return points;
}