
import { useState } from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout'
import { camera } from '../../image';
import axios from 'axios';
import { cloudName } from '../../service/auth';
import ButtonPrimary from '../../components/elemets/buttonPrimary';
import InputForm from '../../components/elemets/input/InputForm';


const CobaGambar = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        image: null as File | null,
    });


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


    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const apiRequest = new FormData();
        apiRequest.append('file', formData.image as File);  // Menggunakan 'file' sebagai parameter
        apiRequest.append('upload_preset', 'kszcrdts');  // Ganti dengan upload preset Anda

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
                apiRequest
            );
            console.log(response.data.secure_url);
        } catch (error) {
            console.error('Error uploading the image', error);
        }
    }

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    console.log(formData);


    return (
        <DefaultLayout>
            <InputForm onChange={handleChange} htmlFor="name" title="Name" type="text" value={formData.name} placeholder="Name" />
            <InputForm onChange={handleChange} htmlFor="email" title="email" type="email" value={formData.email} placeholder="Email" />
            <InputForm onChange={handleChange} htmlFor="password" title="password" type="text" value={formData.password} placeholder="password" />

            <div className="images ">
                {formData.image && formData.image instanceof Blob ? (
                    <img className="h-[170px] md:h-[300px] w-auto mx-auto rounded-md" src={URL.createObjectURL(formData.image)} />
                ) : (
                    <div className="images border-dashed border-2 border-black rounded-md h-[200px] bg-gray-300">
                        <button className="flex-col justify-center items-center h-full w-full " type="button" onClick={() => handleFileManager('add')} >
                            <img className="w-20 h-20 mx-auto" src={camera} />
                            <p>*Masukan gambar sebagai bukti laporan selesai</p>
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
                </div>
                <ButtonPrimary onClick={handleSubmit} >Kirim</ButtonPrimary>
            </div>
        </DefaultLayout>
    )
}

export default CobaGambar