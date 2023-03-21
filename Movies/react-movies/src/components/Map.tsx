import { useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import coordinateDTO from "./coordinates.model";

let defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [16, 37]
})

L.Marker.prototype.options.icon = defaultIcon

export default function Map(props: mapProps) {

    const [coordinates, setCoordinates] = useState<coordinateDTO[]>(props.coordinates)

    return (
    <MapContainer
      center={[56.287251, 44.079462]} zoom={16.5}
      style={{height: props.height}}
    >
      <TileLayer attribution="React Movies"
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MapClick setCoordinates={coords => {
        setCoordinates([coords])
        props.handleMapClick(coords)
      }}/>
      {coordinates.map((coordinate, i)=> <Marker key={i}
        position={[coordinate.lat, coordinate.lng]} />)}
    </MapContainer>
  )
}

interface mapProps {
    height: string;
    coordinates: coordinateDTO[];
    handleMapClick(coordinates: coordinateDTO): void;
}

Map.defaultProps = {
    height: '500px'
}


function MapClick(props: mapClickProps) {
  useMapEvent('click', event => {
    props.setCoordinates({lat: event.latlng.lat, lng: event.latlng.lng})
  })
  return null
}

interface mapClickProps {
  setCoordinates(coordinates: coordinateDTO): void;
}
