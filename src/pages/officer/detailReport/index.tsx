import { useState } from "react"
import Maps from "../../../components/fragments/maps/Maps"
import DefaultLayout from "../../../components/layout/DefaultLayout"
import { camera, jalanRusak } from "../../../image"
import { useNavigate } from "react-router-dom"


const DetailRaportOfficer = () => {

    const data = [
        {
            title: 'Judul Laporan  ',
            text: 'Jalan rusak'
        },
        {
            title: 'Nomor Laporan ',
            text: '85787eydyuxhbjkkksawekninookkontol'
        },
        {
            title: 'Tanggal Laporan  ',
            text: '12/12/2024'
        },
        {
            title: 'Kategori Laporan  ',
            text: 'Jalan'
        },
        {
            title: 'Lokasi Kejadian  ',
            text: 'Jalan kantor baru'
        },
        {
            title: 'Deskripsi Laporan  ',
            text: 'Banyak lubang dalam, sedalam perasaan'
        },
    ]
    const [formData, setFormData] = useState({
        title: "",
        image: null as File | null,
        lat: -6.840540,
        long: 107.430687,
        location: '',
        desc: '',
        categori: ''

    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleCategory = (value: string) => {
        setFormData({ ...formData, categori: value })
    }
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
            <div className="grid grid-cols-1 lg:grid-cols-2 my-3 gap-8 lg:gap-0">
                <div className="left space-y-6">
                    {data.map((item, index) => (
                        <div className="text" key={index}>
                            <h1 className="text-lg font-semibold">{item.title} </h1>
                            <p>{item.text}</p>
                        </div>
                    ))}

                </div>
                <div className="right">
                    <img className="h-[170px] md:h-[300px] rounded-md w-auto  mx-auto" src={jalanRusak} alt="" />
                </div>
            </div>

            {/* maps */}
            <Maps markerPosition={{ lat: -6.840540, lng: 107.430687 }} zoom={13} text="Lokasi kejadian" className="h-[370px]  rounded-md my-5" />
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
                </div>
            </div>

            <div className="coment">

                <h1 className="mt-4">Pesan : </h1>
                <input className="w-full h-9 rounded-md bg-gray-400  px-3 outline-none" type="text" name="" id="" />

                <div className="flex justify-end ">
                    <button className="bg-primary text-white px-4 py-2 rounded-md  mt-4" >Kirim pesan</button>
                </div>
            </div>



        </DefaultLayout>
    )
}

export default DetailRaportOfficer