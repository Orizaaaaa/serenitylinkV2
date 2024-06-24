import Maps from "../../../components/fragments/maps/Maps"
import DefaultLayout from "../../../components/layout/DefaultLayout"
import { jalanRusak } from "../../../image"


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

            <div className="coment">

                <h1 className="text-primary font-semibold" >Komentar (0)</h1>
                <div className="display-coment bg-white w-full min-h-60 rounded-md p-3">
                    <p className="text-gray-400" >Belum ada komentar</p>
                </div>

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