import { Autocomplete, AutocompleteItem, Card, useDisclosure } from "@nextui-org/react"
import DefaultLayout from "../../../components/layout/DefaultLayout"
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import ButtonPrimary from "../../../components/elemets/buttonPrimary";
import ModalDefault from "../../../components/fragments/modal/Modal";
import { useEffect, useState } from "react";
import InputReport from "../../../components/elemets/input/InputReport";
import { getAllUser } from "../../../service/user";
import { capitalizeWords } from "../../../utils/helper";
import { getAllUnitWork } from "../../../service/unitWork";

const OfficerList = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const [selectedUnitWork, setSelectedUnitWork] = useState('');
    const [unitKerja, setUnitKerja] = useState([]);
    const [dataUser, setDataUser] = useState([]);
    const [formData, setFormData] = useState({
        name: ' ',
        email: '',
        unitKerja: '',
        password: ''
    })

    //get all user
    useEffect(() => {
        getAllUser((result: any) => {
            const data = result.data ? result.data.filter((role: any) =>
                role.role !== 'user') : [];
            setDataUser(data)
        })
    }, []);


    //getAllUnitKerja
    useEffect(() => {
        getAllUnitWork((result: any) => {
            setUnitKerja(result.unitWork)
        })
    }, []);

    const handleAddCategory = () => {
        onOpen();
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    //dropdown
    const dataDropdown = unitKerja.map((unit: { name: string, _id: string }) => ({
        label: unit.name,
        value: unit._id,
    }));


    //get item dari dropdown
    const getItem = (item: any) => {
        console.log(item.label);
        setSelectedUnitWork(item.label)

    }


    // filter data by get item dropdown
    const filteredData = dataUser.filter((item: any) => {
        console.log(item.unitWork);
        return (
            item?.unitWork?.name && item.unitWork.name.includes(selectedUnitWork)
        );
    });




    return (
        <DefaultLayout>

            <div className="rounded-md  bg-white p-4 lg:px-7.5 lg:py-6 shadow-default dark:border-strokedark mb-4">
                <div className=" rounded-full ">
                    <div className="grid ">
                        <div className="flex-col space-y-3 my-auto">
                            <h1 className=" text-lg font-semibold md:text-2xl md:font-bold font-inter" >Halaman Petugas </h1>
                            <p className="text-gray-500 text-sm md:text-base" >Ini adalah halaman kategori anda dapat menambah atau menghapus seorang petugas</p>
                        </div>
                    </div>
                </div>
            </div>


            <Card>
                <div className="grid grid-cols-2 p-3 gap-3">
                    <Autocomplete
                        label="Filter Berdasarkan Unit Kerja"
                        className=""
                        clearButtonProps={{ size: 'sm', onClick: () => setSelectedUnitWork('') }}
                    >
                        {dataDropdown.map((item) => (
                            <AutocompleteItem key={item.value} value={item.value}
                                onClick={() => getItem(item)}   >
                                {item.label}
                            </AutocompleteItem>

                        ))}
                    </Autocomplete>
                    <ButtonPrimary className=" rounded-md" onClick={handleAddCategory} >Tambah Petugas</ButtonPrimary>
                </div>


                <Table aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>N0</TableColumn>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>ROLE</TableColumn>
                        <TableColumn>UNIT KERJA</TableColumn>
                        <TableColumn>ACTION</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {filteredData?.map((user: any, index: any) => (
                            <TableRow key={index}>
                                <TableCell>{index + 1}</TableCell>
                                <TableCell>{capitalizeWords(user.name)}</TableCell>
                                <TableCell>{capitalizeWords(user.role)}</TableCell>
                                <TableCell>{user.unitWork ? capitalizeWords(user.unitWork.name) : '-'}</TableCell>
                                <TableCell><ButtonPrimary className="bg-red-700 rounded-md w-full" >Delete</ButtonPrimary></TableCell>
                            </TableRow>
                        ))}

                        {/* key nya di buat index */}
                    </TableBody>
                </Table>
            </Card>

            <ModalDefault isOpen={isOpen} onClose={onClose}>
                <InputReport marginY="my-1" htmlFor="name" title="Nama Petugas  " type="text" onChange={handleChange} value={formData.name} />
                <InputReport marginY="my-1" htmlFor="email" title="Email  " type="text" onChange={handleChange} value={formData.email} />
                <h1 className="font-medium" >Unit Kerja</h1>
                <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                    <Autocomplete
                        label="Pilih Unit Kerja"
                        className="w-full"
                    >
                        {dataDropdown.map((animal) => (
                            <AutocompleteItem key={animal.value} value={animal.value}>
                                {animal.label}
                            </AutocompleteItem>
                        ))}
                    </Autocomplete>
                </div>

                <InputReport marginY="my-1" htmlFor="password" title="Password " type="text" onChange={handleChange} value={formData.password} />

                <ButtonPrimary className="rounded-md w-full"  >Buat Petugas</ButtonPrimary>
            </ModalDefault>
        </DefaultLayout>
    )
}

export default OfficerList