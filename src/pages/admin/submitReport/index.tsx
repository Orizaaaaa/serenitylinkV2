import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import Maps from "../../../components/fragments/maps/Maps";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import ButtonPrimary from "../../../components/elemets/buttonPrimary";
import { useEffect, useState } from "react";
import { getAllUnitWork } from "../../../service/unitWork";
import { useParams } from "react-router-dom";
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
}

const SubmitReport = () => {
    const { id = "" } = useParams();
    const [unitKerja, setUnitKerja] = useState([]);
    const [dataReport, setDataReport] = useState<Report | null>(null);
    const [formData, setFormData] = useState({
        report_id: '',
        unit_work_id: ''
    })


    useEffect(() => {
        getReportById(id, (result: any) => {
            console.log(result);
            setDataReport(result.data)
        })
    }, []);

    useEffect(() => {
        getAllUnitWork((result: any) => {
            const data = result.unitWork
            setUnitKerja(data)
        })
    }, [])

    //value dropdown
    const dataDropdown = unitKerja.map((unit: { name: string, _id: string }) => ({
        label: unit.name,
        value: unit._id,
    }));

    //ambil data dropdown
    const getItem = (item: any) => {
        setFormData({ ...formData, unit_work_id: item.value })
    }

    console.log('ini data report', dataReport);
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



    //logic dropdown adalah ketika nanti nge fetch data unit kerja masukan data nya ke state tersebut
    console.log('parse babi', parseCoordinate(dataReport?.latitude || '0'));

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
            <Maps markerPosition={{
                lat: parseCoordinate(dataReport?.latitude || '0'),
                lng: parseCoordinate(dataReport?.longitude || '0'),
            }} zoom={10} text={`${dataReport?.address}`} className="h-[370px]  rounded-md my-5" />

            <h1 className="mt-2 text-lg font-semibold" >Unit Kerja</h1>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Autocomplete
                    label="Pilih Unit Kerja"
                    className="w-full"
                >
                    {dataDropdown.map((item) => (
                        <AutocompleteItem key={item.value} value={item.value} onClick={() => getItem(item)}  >
                            {item.label}
                        </AutocompleteItem>
                    ))}
                </Autocomplete>
            </div>
            <ButtonPrimary className="w-full rounded-md mt-3"  >
                Kirim
            </ButtonPrimary>

            <ButtonPrimary className="w-full rounded-md mt-3" bg="bg-red-700"  >
                Hapus Laporan
            </ButtonPrimary>
        </DefaultLayout>
    )
}

export default SubmitReport