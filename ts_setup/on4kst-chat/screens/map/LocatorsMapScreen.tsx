import { Text, YStack } from 'tamagui';
import { LeafletView, MapLayer, MapLayerType, MapMarker, MapShape, MapShapeType } from 'react-native-leaflet-view';
import { Locator, locatorToBounds, locatorToCoords } from '@/api-locator';
import React from 'react';
import { calculateGreatCirclePath } from './create-circle-path';

const mapLayer: MapLayer = {
  attribution: '&copy; <a href="https://carto.com/attributions">CARTO</a>',
  baseLayerIsChecked: true,
  baseLayerName: 'OpenStreetMap',
  layerType: MapLayerType.TILE_LAYER,
  //url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
};

function markers(a: Locator, b: Locator): MapMarker[] {
  return [
    {
      id: 'A',
      position: [a.lat, a.lng],
      title: `${a.callsign} - ${a.locator}`,
      icon: '📍',
      size: [16, 16],
    },
    {
      id: 'B',
      position: [b.lat, b.lng],
      title: `${b.callsign} - ${b.locator}`,
      icon: '📍',
      size: [16, 16],
    },
  ]
}

// Polyline between the two points
function mapShapes(a: Locator, b: Locator): MapShape[] {
  const smoothPath = calculateGreatCirclePath(a.lat, a.lng, b.lat, b.lng, 20);

  // Get grid square bounds
  const boundsA = locatorToBounds(a.locator)!;
  const boundsB = locatorToBounds(b.locator)!;

  return [
    {
      shapeType: MapShapeType.POLYLINE,
      color: '#FF003C',
      id: 'path',
      
      /*positions: [
        [a.lat, a.lng],
        [b.lat, b.lng],
      ],*/

      positions: smoothPath,
      
      // @ts-ignore
      weight: 2,
      dashArray: 5,
      opacity: 0.4,

    },

      // Add rectangles for grid squares
    {
      shapeType: MapShapeType.RECTANGLE,
      bounds: boundsA,
      color: '#00FF88',
      id: 'square-a',
      // @ts-ignore
      weight: 1,
    },
    {
      shapeType:  MapShapeType.RECTANGLE,
      bounds: boundsB,
      color: '#0088FF',
      id: 'square-b',
      // @ts-ignore
      weight: 1,
    }
  
  ]
}


export const LocatorsMapScreen: React.FC<{
  from: string | undefined | null,
  to: string | undefined | null
}> = ({ from, to }) => {

  if (!from || !to) {
    return (<Text>can't calculate cords</Text>)
  }

  const coordsA = locatorToCoords(from);
  const coordsB = locatorToCoords(to);

  if (!coordsA || !coordsB) {
    return (<Text>can't calculate cords</Text>)
  }
  const centerLat = (coordsA.lat + coordsB.lat) / 2;
  const centerLng = (coordsA.lng + coordsB.lng) / 2;

  const a: Locator = { 
    locator: from,
    callsign: 'callsign',
    ...coordsA
  };
  const b: Locator = {
    locator: to,
    callsign: 'callsign',
    ...coordsB
  };
  
  return (
  <YStack flex={1} backgroundColor="$background" 
    // Force actual dimensions
    width="100%" 
    height="100%"
  >
    <LeafletView
      mapCenterPosition={{
        lat: centerLat,
        lng: centerLng,
      }}
      
      zoom={4}
      mapLayers={[mapLayer]}
      mapMarkers={markers(a, b)}
      mapShapes={mapShapes(a, b)}
    />
  </YStack>)
}





