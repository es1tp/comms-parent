export function locatorToCoords(locator: string): { lat: number; lng: number } | null {
  if (!locator || locator.length < 4) return null;
  
  const loc = locator.toUpperCase();
  
  // Parse field (first 2 chars: AA-RR)
  const fieldLng = (loc.charCodeAt(0) - 65) * 20 - 180;
  const fieldLat = (loc.charCodeAt(1) - 65) * 10 - 90;
  
  // Parse square (next 2 digits: 00-99)
  const squareLng = parseInt(loc[2]) * 2;
  const squareLat = parseInt(loc[3]) * 1;
  
  // Parse subsquare if present (next 2 chars: aa-xx, optional)
  let subsquareLng = 0;
  let subsquareLat = 0;
  
  if (loc.length >= 6) {
    subsquareLng = (loc.charCodeAt(4) - 65) * (2/24);
    subsquareLat = (loc.charCodeAt(5) - 65) * (1/24);
  }
  
  // Calculate center of grid square
  const lng = fieldLng + squareLng + subsquareLng + 1; // +1 for center
  const lat = fieldLat + squareLat + subsquareLat + 0.5; // +0.5 for center
  
  return { lat, lng };
}


export function calculateBearing(
  fromLocator: string, 
  toLocator: string,
  calibrationOffset: number = 0
): number | undefined {
  const from = locatorToCoords(fromLocator);
  const to = locatorToCoords(toLocator);
  
  console.log({from, to});
  if (!from || !to) return undefined;
  
  // Convert to radians
  const lat1 = from.lat * Math.PI / 180;
  const lat2 = to.lat * Math.PI / 180;
  const dLng = (to.lng - from.lng) * Math.PI / 180;
  
  // Calculate bearing using haversine formula
  const y = Math.sin(dLng) * Math.cos(lat2);
  const x = Math.cos(lat1) * Math.sin(lat2) -
            Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLng);
  
  const bearing = Math.atan2(y, x) * 180 / Math.PI;
  
  // Apply calibration offset and normalize to 0-360
  return Math.round((bearing + calibrationOffset + 360) % 360);
}


export function calculateDistance(fromLocator: string, toLocator: string): number | undefined {
  const from = locatorToCoords(fromLocator);
  const to = locatorToCoords(toLocator);
  
  if (!from || !to) return undefined;
  
  const R = 6371; // Earth's radius in kilometers
  
  // Convert to radians
  const lat1 = from.lat * Math.PI / 180;
  const lat2 = to.lat * Math.PI / 180;
  const dLat = (to.lat - from.lat) * Math.PI / 180;
  const dLng = (to.lng - from.lng) * Math.PI / 180;
  
  // Haversine formula
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1) * Math.cos(lat2) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
  return Math.round((R * c)); // Distance in km
}