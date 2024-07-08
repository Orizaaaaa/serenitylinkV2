import { Autocomplete, AutocompleteItem, Button, Card, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, useDisclosure } from "@nextui-org/react"
import DefaultLayout from "../../../components/layout/DefaultLayout"
import { Table, TableHeader, TableBody, TableColumn, TableRow, TableCell } from "@nextui-org/table";
import ButtonPrimary from "../../../components/elemets/buttonPrimary";
import ModalDefault from "../../../components/fragments/modal/Modal";
import { useEffect, useState } from "react";
import InputReport from "../../../components/elemets/input/InputReport";
import { getAllUser } from "../../../service/user";
import { capitalizeWords } from "../../../utils/helper";

const OfficerList = () => {
    const { onOpen, onClose, isOpen } = useDisclosure();
    const [dataUser, setDataUser] = useState([]);
    const [formData, setFormData] = useState({
        name: ' ',
        email: '',
        unitKerja: '',
        password: ''
    })
    const handleAddCategory = () => {
        onOpen();
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    const animals = [
        { label: "Cat", value: "cat", description: "The second most popular pet in the world" },
        { label: "Dog", value: "dog", description: "The most popular pet in the world" },
        { label: "Elephant", value: "elephant", description: "The largest land animal" },
        { label: "Lion", value: "lion", description: "The king of the jungle" },
        { label: "Tiger", value: "tiger", description: "The largest cat species" },
        { label: "Giraffe", value: "giraffe", description: "The tallest land animal" },

    ];

    //get all user

    useEffect(() => {
        getAllUser((result: any) => {
            const data = result.data ? result.data.filter((role: any) =>
                role.role !== 'user') : [];
            setDataUser(data)
        })
    }, []);

    console.log(dataUser);


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

            <Dropdown  >
                <DropdownTrigger>
                    <Button
                        variant="bordered"
                        className="my-4"
                    >
                        Pilih Unit Kerja
                    </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions"  >
                    <DropdownItem key="new">Basarnas</DropdownItem>
                    <DropdownItem key="copy">Dinas Kesehatan</DropdownItem>
                    <DropdownItem key="edit">Dinas sosial</DropdownItem>
                </DropdownMenu>
            </Dropdown>

            <Card>
                <ButtonPrimary className=" rounded-md  m-3" onClick={handleAddCategory} >Tambah Petugas</ButtonPrimary>

                <Table aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>N0</TableColumn>
                        <TableColumn>NAME</TableColumn>
                        <TableColumn>ROLE</TableColumn>
                        <TableColumn>UNIT KERJA</TableColumn>
                        <TableColumn>ACTION</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {dataUser?.map((user: any, index: any) => (
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
                        {animals.map((animal) => (
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