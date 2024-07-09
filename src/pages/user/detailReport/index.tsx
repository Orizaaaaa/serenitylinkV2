import { useParams } from "react-router-dom";
import Maps from "../../../components/fragments/maps/Maps";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import { useEffect, useState } from "react";
import { getReportById } from "../../../service/report";
import { formatDate, parseCoordinate } from "../../../utils/helper";

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
    unitWorks: any;
}

const DetailReportUser = () => {
    const { id }: any = useParams();
    const name = localStorage.getItem("name");
    const [dataReport, setDataReport] = useState<Report | null>(null);

    useEffect(() => {
        getReportById(id, (result: any) => {
            setDataReport(result.data);
        });
    }, [id]);

    const dataDetailLaporan = [
        { title: "Judul Laporan", text: dataReport?.title },
        { title: "Nomor Laporan", text: dataReport?._id },
        { title: "Tanggal Laporan", text: formatDate(dataReport?.createdAt || "") },
        { title: "Kategori Laporan", text: dataReport?.category },
        { title: "Lokasi Kejadian", text: dataReport?.address },
        { title: "Status", text: dataReport?.status },
        { title: "Deskripsi Laporan", text: dataReport?.description },
    ];


    console.log(dataReport);


    return (
        <DefaultLayout>
            <div className="grid grid-cols-1 lg:grid-cols-2 my-3 gap-8 lg:gap-0">
                <div className="left space-y-6">
                    {dataDetailLaporan.map((item, index) => (
                        <div className="text" key={index}>
                            <h1 className="text-lg font-semibold">{item.title}</h1>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="right">
                    <img
                        className="h-[170px] md:h-[300px] rounded-md w-auto mx-auto"
                        src={dataReport?.imageReport[0]}
                        alt=""
                    />
                </div>
            </div>

            <Maps
                markerPosition={{
                    lat: parseCoordinate(dataReport?.latitude || "0"),
                    lng: parseCoordinate(dataReport?.longitude || "0"),
                }}
                zoom={10}
                text="Lokasi kejadian"
                className="h-[370px] rounded-md my-5"
            />

            <div className="coment">
                <h1 className="text-primary font-semibold">Komentar ({dataReport?.comment.length})</h1>
                <div className="display-comment bg-white w-full min-h-60 rounded-md p-3">
                    {dataReport?.comment.length === 0 && (
                        <p className="text-gray-400">Belum ada komentar</p>
                    )}

                    {dataReport?.comment.map((item: any, index) => (
                        <>
                            {item.name !== name ? (
                                <div className="comment p-2 bg-gray-500 w-fit rounded-tl-2xl rounded-r-xl" key={index} >
                                    <p className="text-white text-sm">{item.name}</p>
                                    <p className="text-white text-sm">{item.message}</p>
                                </div>
                            ) : (
                                <div className="flex justify-end">
                                    <div className="comment p-2 bg-primary w-fit rounded-tr-2xl rounded-l-xl  " key={index} >
                                        <p className="text-white text-sm">{item.name}</p>
                                        <p className="text-white text-sm">{item.message}</p>
                                    </div>
                                </div>

                            )

                            }

                        </>



                    ))}
                </div>

                <h1 className="mt-4">Pesan :</h1>
                <input
                    className="w-full h-9 rounded-md bg-gray-400 px-3 outline-none"
                    type="text"
                />

                <div className="flex justify-end">
                    <button className="bg-primary text-white px-4 py-2 rounded-md mt-4">
                        Kirim pesan
                    </button>
                </div>
            </div>
        </DefaultLayout >
    );
};

export default DetailReportUser;
