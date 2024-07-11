import { useState } from "react"
import Maps from "../../../components/fragments/maps/Maps"
import DefaultLayout from "../../../components/layout/DefaultLayout"
import { camera, jalanRusak } from "../../../image"
import { dataDetailLaporan } from "../../../utils/dataObject"
import { finishReportByOfficer } from "../../../service/report"
import { postImage } from "../../../service/imagePost"


const SubmitReportOfficer = () => {

    const [formData, setFormData] = useState({
        id_report: '668a0bbbffbfcb46a26abd63',
        message: 'sudah beres',
        imageReport: null as File | null,
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
            setFormData({ ...formData, imageReport: selectedImage || null });
        } else {
            console.log('error');

        }
    };


    // const navigate = useNavigate()
    // navigate('/laporan-saya-officer')
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const imageUrl = await postImage({ image: formData.imageReport });

        if (imageUrl) {
            finishReportByOfficer({ ...formData, imageReport: [imageUrl] }, (result: any) => {
                console.log(result);
            })

        }
    }



    return (
        <DefaultLayout>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-3 gap-8 lg:gap-0">
                <div className="left space-y-6">
                    {dataDetailLaporan.map((item, index) => (
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
            <Maps markerPosition={{ lat: -6.840540, lng: 107.430687 }} zoom={10}
                text="Lokasi kejadian" className="h-[370px]  rounded-md my-5" />

            <div className="images ">
                {formData.imageReport && formData.imageReport instanceof Blob ? (
                    <img className="h-[170px] md:h-[300px] w-auto mx-auto rounded-md" src={URL.createObjectURL(formData.imageReport)} />
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
                    <button className={`border-2 border-primary  text-primary px-4 py-2 rounded-md ${formData.imageReport === null ? 'hidden' : ''}`} type="button" onClick={() => handleFileManager('add')} >Ubah Gambar</button>
                </div>
            </div>




            <button className="bg-primary text-white px-4 py-2 rounded-md w-full mt-4" onClick={handleSubmit}>Selesaikan Pengaduan</button>




        </DefaultLayout>
    )
}

export default SubmitReportOfficer