import { useState } from "react";
import Card from "../../components/elemets/card/Card"
import InputReport from "../../components/elemets/input/InputReport"
import DefaultLayout from "../../components/layout/DefaultLayout"
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import Maps from "../../components/fragments/maps/Maps";

const CreateReport = () => {

    const [markerPosition, setMarkerPosition] = useState({ lat: -6.840540, lng: 107.430687 });

    // Komponen untuk menangani event klik pada peta
    const MapEvents = () => {
        useMapEvents({
            click(e: any) {
                // Memperbarui posisi marker dengan posisi klik
                setMarkerPosition(e.latlng);
            }
        });
        return null;
    };

    return (
        <DefaultLayout>
            <Card>
                <h1 className="text-lg font-semibold text-primary py-4 border-b-2 border-primary" >Buat Laporan</h1>
                <div className="grid grid-cols-2 mt-4s gap-4">
                    <div className="input-report mt-4">
                        <InputReport htmlFor="title" title="Judul Laporan  " type="text" onChange={() => { }} value="" />
                        <InputReport htmlFor="title" title="Lokasi kejadian  " type="text" onChange={() => { }} value="" placeholder="nama jalan atau tempat.." />
                        <label className="font-medium" htmlFor="message" >Deskripsi Laporan  </label>
                        <textarea id="message" rows={4} className="block p-2.5 w-full bg-gray-300 rounded-md outline-none mt-2" ></textarea>

                    </div>

                    <Maps markerPosition={markerPosition} zoom={13} text="Lokasi kejadian" >
                        <MapEvents />
                    </Maps>
                    <div className="image-input">

                    </div>
                </div>

            </Card>
        </DefaultLayout>

    )
}

export default CreateReport