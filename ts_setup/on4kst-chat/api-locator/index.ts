export interface Locator {
  callsign: string;
  locator: string;
  lat: number;
  lng: number;
}

/**
 * I.
 * The world is divided into 18×18 = 324 big squares. 
 * Each square is 20° wide (longitude) × 10° tall (latitude).
 * 
 * II.
 * Each big field is divided into 10×10 = 100 smaller squares. Each is 2° wide × 1° tall.
 * Example: "20" means column 2 and row 0 inside the JO field
 * 
 * III.
 * Each square is divided into 24×24 = 576 tiny squares. Each is about 5 km × 2.5 km.
 * Example: "HI" means column H (7th) and row I (8th) inside square 20
 */
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
    subsquareLng = (loc.charCodeAt(4) - 65) * (2 / 24);
    subsquareLat = (loc.charCodeAt(5) - 65) * (1 / 24);
  }

  // Calculate center of grid square
  const lng = fieldLng + squareLng + subsquareLng + 1; // +1 for center
  const lat = fieldLat + squareLat + subsquareLat + 0.5; // +0.5 for center

  return { lat, lng };
}

/**
 * Haversine formula 
 * 
 * Imagine Earth is a perfectly round ball. You have two points on the surface. 
 * The Haversine formula finds the shortest path along the curved surface (not through the ball, but around it - like an airplane flies).
 * 
 * a = sin²(Δlat/2) + cos(lat1) × cos(lat2) × sin²(Δlon/2)
 * c = 2 × atan2(√a, √(1−a))
 * distance = R × c
 */
export function calculateBearing(
  fromLocator: string,
  toLocator: string,
  calibrationOffset: number = 0
): number | undefined {
  const from = locatorToCoords(fromLocator);
  const to = locatorToCoords(toLocator);
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


export function locatorToBounds(locator: string): [[number, number], [number, number]] | null {
  // Maidenhead locator must be at least 4 characters
  if (!locator || locator.length < 4) {
    return null;
  }
  
  const loc = locator.toUpperCase();
  
  // First pair: Field (A-R), each is 20° longitude, 10° latitude
  const field1 = loc.charCodeAt(0) - 'A'.charCodeAt(0);
  const field2 = loc.charCodeAt(1) - 'A'.charCodeAt(0);
  
  // Second pair: Square (0-9), each is 2° longitude, 1° latitude
  const square1 = parseInt(loc.charAt(2));
  const square2 = parseInt(loc.charAt(3));
  
  // Validate
  if (field1 < 0 || field1 > 17 || field2 < 0 || field2 > 17 ||
      isNaN(square1) || isNaN(square2)) {
    return null;
  }
  
  // Calculate southwest corner
  const swLng = -180 + (field1 * 20) + (square1 * 2);
  const swLat = -90 + (field2 * 10) + (square2 * 1);
  
  // Northeast corner is +2° lng, +1° lat from southwest
  const neLng = swLng + 2;
  const neLat = swLat + 1;
  
  return [[swLat, swLng], [neLat, neLng]];
}