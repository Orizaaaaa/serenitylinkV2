import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import Maps from "../../../components/fragments/maps/Maps";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import ButtonPrimary from "../../../components/elemets/buttonPrimary";
import { jalanRusak } from "../../../image";
import { dataDetailLaporan } from "../../../utils/dataObject";
import { useEffect, useState } from "react";
import { getAllUnitWork } from "../../../service/unitWork";


const SubmitReport = () => {
    const [unitKerja, setUnitKerja] = useState([]);
    useEffect(() => {
        getAllUnitWork((result: any) => {
            const data = result.unitWork
            setUnitKerja(data)
        })
    }, [])

    const dataDropdown = unitKerja.map((unit: { name: string, _id: string }) => ({
        label: unit.name,
        value: unit._id,
    }));

    //logic dropdown adalah ketika nanti nge fetch data unit kerja masukan data nya ke state tersebut

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
            <Maps markerPosition={{ lat: -6.840540, lng: 107.430687 }} zoom={13} text="Lokasi kejadian" className="h-[370px]  rounded-md my-5" />

            <h1 className="mt-2 text-lg font-semibold" >Unit Kerja</h1>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Autocomplete
                    label="Pilih Unit Kerja"
                    className="w-full"
                >
                    {dataDropdown.map((item) => (
                        <AutocompleteItem key={item.value} value={item.value}>
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