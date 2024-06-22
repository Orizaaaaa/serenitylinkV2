import { useState } from "react";
import Card from "../../components/elemets/card/Card"
import InputReport from "../../components/elemets/input/InputReport"
import DefaultLayout from "../../components/layout/DefaultLayout"
import { useMapEvents } from 'react-leaflet';
import Maps from "../../components/fragments/maps/Maps";
import { camera } from "../../image";
import { useNavigate } from "react-router-dom";

const CreateReport = () => {
    const [formData, setFormData] = useState({
        title: "",
        image: null as File | null,
        lat: -6.840540,
        long: 107.430687,
        location: '',
        desc: ''

    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Komponen untuk menangani event klik pada peta
    const MapEvents = () => {
        useMapEvents({
            click(e: any) {
                // Memperbarui posisi marker dengan posisi klik
                setFormData({ ...formData, lat: e.latlng.lat, long: e.latlng.lng, });
            }
        });
        return null;
    };


    //input gambar
    const handleFileManager = (fileName: string) => {
        if (fileName === 'add') {
            const fileInput = document.getElementById("image-input-add") as HTMLInputElement | null;
            fileInput ? fileInput.click() : null;
        } else {
            console.log('error');

        }
    };
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, InputSelect: string) => {
        if (InputSelect === 'add') {
            const selectedImage = e.target.files?.[0];
            setFormData({ ...formData, image: selectedImage || null });
        } else {
            console.log('error');

        }
    };

    // submit image
    const navigate = useNavigate()
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log(formData);
        navigate('/dashboard')
    };



    return (
        <DefaultLayout>
            <Card>
                <h1 className="text-lg font-semibold text-primary py-4 border-b-2 border-primary" >Buat Laporan</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-4">
                    <div className="input-report mt-4">
                        <InputReport htmlFor="title" title="Judul Laporan  " type="text" onChange={handleChange} value={formData.title} />
                        <InputReport htmlFor="location" title="Lokasi kejadian  " type="text" onChange={handleChange} value={formData.location} placeholder="nama jalan atau tempat.." />
                        <label className="font-medium" htmlFor="desc" >Deskripsi Laporan  </label>
                        <textarea onChange={handleChange} name="desc" id="desc" cols={30} value={formData.desc} rows={4} className="block p-2.5 w-full bg-gray-300 rounded-md outline-none mt-2" ></textarea>
                    </div>

                    {/* images input */}
                    <div className="images ">
                        {formData.image && formData.image instanceof Blob ? (
                            <img className="h-[170px] md:h-[300px] w-auto mx-auto rounded-md" src={URL.createObjectURL(formData.image)} />
                        ) : (
                            <div className="images border-dashed border-2 border-black rounded-md h-[200px] bg-gray-300">
                                <button className="flex-col justify-center items-center h-full w-full " type="button" onClick={() => handleFileManager('add')} >
                                    <img className="w-20 h-20 mx-auto" src={camera} />
                                    <p>*Masukan gambar sebagai bukti kuat pengajuan laporan</p>
                                </button>
                            </div>
                        )}

                        <input
                            type="file"
                            className="hidden"
                            id="image-input-add"
                            onChange={(e) => handleImageChange(e, 'add')}
                        />

                        <div className="flex justify-center gap-3 mt-3">
                            <button className={`border-2 border-primary  text-primary px-4 py-2 rounded-md ${formData.image === null ? 'hidden' : ''}`} type="button" onClick={() => handleFileManager('add')} >Ubah Gambar</button>
                            <button className="bg-primary text-white px-4 py-2 rounded-md" onClick={handleSubmit}>Kirim Laporan</button>
                        </div>
                    </div>
                </div>

                {/* maps */}
                <Maps markerPosition={{ lat: formData.lat, lng: formData.long }} zoom={13} text="Lokasi kejadian" className="h-[370px]  rounded-md mt-4" >
                    <MapEvents />
                </Maps>

            </Card>
        </DefaultLayout>

    )
}

export default CreateReport