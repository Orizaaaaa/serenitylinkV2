
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

type Props = {
    markerPosition: any
    zoom: number
    text: string
    children?: React.ReactNode
    className?: string
}

const Maps = ({ markerPosition, zoom, text, children, className }: Props) => {


    return (
        <MapContainer className={className} center={markerPosition} zoom={zoom} scrollWheelZoom={false} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {children}
            <Marker position={markerPosition} >
                <Popup>
                    {text}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Maps