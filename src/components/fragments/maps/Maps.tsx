
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

type Props = {
    markerPosition: any
    zoom: number
    text: string
    children: React.ReactNode
}

const Maps = ({ markerPosition, zoom, text, children }: Props) => {


    return (
        <MapContainer className="mt-4" center={markerPosition} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {children}
            <Marker position={markerPosition}>
                <Popup>
                    {text}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Maps