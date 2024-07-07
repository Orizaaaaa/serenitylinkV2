import { useParams } from "react-router-dom"
import Maps from "../../../components/fragments/maps/Maps"
import DefaultLayout from "../../../components/layout/DefaultLayout"
import { useEffect, useState } from "react"
import { getReportById } from "../../../service/report"
import { formatDate, parseCoordinate } from "../../../utils/helper"


interface Report {
    address: string;
    category: string;
    comment: string[];
    createdAt: string;
    description: string;
    imageReport: string[];
    latitude: string;
    longitude: string;
    reporter: string;
    status: string;
    title: string;
    updatedAt: string;
    _id: string;
    unitWorks: any
}

const DetailReportUser = () => {
    const { id }: any = useParams()
    const [dataReport, setDataReport] = useState<Report | null>(null);
    console.log(id);
    useEffect(() => {
        getReportById(id, (result: any) => {
            console.log(result.data);
            setDataReport(result.data)
        })
    }, []);


    const dataDetailLaporan = [
        {
            title: 'Judul Laporan  ',
            text: dataReport?.title
        },
        {
            title: 'Nomor Laporan ',
            text: dataReport?._id
        },
        {
            title: 'Tanggal Laporan  ',
            text: formatDate(dataReport?.createdAt || '')
        },
        {
            title: 'Kategori Laporan  ',
            text: dataReport?.category
        },
        {
            title: 'Lokasi Kejadian  ',
            text: dataReport?.address
        },
        {
            title: 'Status  ',
            text: dataReport?.status
        },
        {
            title: 'Deskripsi Laporan  ',
            text: dataReport?.description
        },
    ]



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
                    <img className="h-[170px] md:h-[300px] rounded-md w-auto  mx-auto" src={dataReport?.imageReport[0]} alt="" />
                </div>
            </div>

            {/* maps */}
            <Maps markerPosition=
                {{
                    lat: parseCoordinate(dataReport?.latitude || '0'),
                    lng: parseCoordinate(dataReport?.longitude || '0')
                }}
                zoom={10} text="Lokasi kejadian" className="h-[370px]  rounded-md my-5" />

            <div className="coment">
                <h1 className="text-primary font-semibold" >Komentar (0)</h1>
                <div className="display-comment bg-white w-full min-h-60 rounded-md p-3">

                    {dataReport?.comment.length === 0 &&
                        <p className="text-gray-400">Belum ada komentar</p>
                    }

                    {dataReport?.comment.map((item, index) => (
                        <div className="comment" key={index}>
                            <p className="text-gray-500 text-sm">{item}</p>
                        </div>
                    ))}

                </div>

                <h1 className="mt-4">Pesan : </h1>
                <input className="w-full h-9 rounded-md bg-gray-400  px-3 outline-none" type="text" name="" id="" />

                <div className="flex justify-end ">
                    <button className="bg-primary text-white px-4 py-2 rounded-md  mt-4" >Kirim pesan</button>
                </div>
            </div>



        </DefaultLayout >
    )
}

export default DetailReportUser