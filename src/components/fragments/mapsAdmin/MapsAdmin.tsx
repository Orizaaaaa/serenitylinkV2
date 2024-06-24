import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

type Props = {
    dataMarker?: any
    center: any
}

const MapsAdmin = ({ center, dataMarker }: Props) => {
    return (
        <MapContainer className={'h-[370px] rounded-md my-5'} center={center} zoom={10} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {dataMarker.map((marker: any, index: any) => (
                <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }}>
                    <Popup>
                        <p>hallo</p>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}

export default MapsAdmin