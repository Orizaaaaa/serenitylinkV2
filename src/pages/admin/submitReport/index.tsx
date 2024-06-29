import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import Maps from "../../../components/fragments/maps/Maps";
import DefaultLayout from "../../../components/layout/DefaultLayout";
import ButtonPrimary from "../../../components/elemets/buttonPrimary";
import { jalanRusak } from "../../../image";
import { dataDetailLaporan } from "../../../utils/dataObject";


const SubmitReport = () => {

    const animals = [
        { label: "Cat", value: "cat", description: "The second most popular pet in the world" },
        { label: "Dog", value: "dog", description: "The most popular pet in the world" },
        { label: "Elephant", value: "elephant", description: "The largest land animal" },
        { label: "Lion", value: "lion", description: "The king of the jungle" },
        { label: "Tiger", value: "tiger", description: "The largest cat species" },
        { label: "Giraffe", value: "giraffe", description: "The tallest land animal" },

    ];
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
                    {animals.map((animal) => (
                        <AutocompleteItem key={animal.value} value={animal.value}>
                            {animal.label}
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