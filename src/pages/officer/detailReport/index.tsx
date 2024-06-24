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

        </DefaultLayout>
    )
}

export default DetailRaportOfficer