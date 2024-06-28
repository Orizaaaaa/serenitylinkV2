import { useState } from "react";
import Card from "../../../components/elemets/card/Card"
import DefaultLayout from "../../../components/layout/DefaultLayout"
import { buttonKategori } from "../../../utils/dataObject"
import { FaPlus } from "react-icons/fa";
import { Button, Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";


const CategoryAdmin = () => {

    const [formData, setFormData] = useState({
        categori: ''
    });
    const handleCategory = (value: string) => {
        setFormData({ ...formData, categori: value })
    }

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleButton = () => {
        onOpen();
    }
    return (
        <DefaultLayout>
            <Card>
                <div className="grid ">
                    <div className="flex-col space-y-3 my-auto">
                        <h1 className=" text-lg font-semibold md:text-2xl md:font-bold font-inter" >Halaman Kategori </h1>
                        <p className="text-gray-500 text-sm md:text-base" >Ini adalah halaman kategori anda dapat menambah atau menghapus kategori</p>
                    </div>
                </div>
            </Card >
            <div className="listcategory my-4">
                <Card  >
                    <div className='flex flex-wrap justify-center mx-auto mt-5 gap-10 w-full'>
                        <div className="flex flex-col justify-center items-center">
                            <button onClick={handleButton} className="w-[70px] h-[70px] bg-gray-400 rounded-full flex justify-center items-center" ><FaPlus /></button>
                            <p className="mt-3" >Tambah Kategori</p>
                        </div>

                        {buttonKategori.map((category, index) => (
                            <div className="image flex-col justify-center items-center" key={index}>
                                <img onClick={() => handleCategory(category.value)}
                                    className={`w-[70px] h-[70px] mx-auto rounded-full object-cover   cursor-pointer
                                    ${formData.categori === category.value ? 'border-2 border-primary' : ''}`}
                                    src={category.image} alt={'image kategori'} />
                                <p className="text-sm md:text-base mt-3">{category.name}</p>
                            </div>


                        ))}

                    </div>
                </Card>

                <Modal
                    size={'md'}
                    isOpen={isOpen}
                    onClose={onClose}
                    isDismissable={false} isKeyboardDismissDisabled={true}
                >
                    <ModalContent>
                        <>
                            <ModalBody>

                                <p>halllo</p>

                            </ModalBody>
                        </>
                    </ModalContent>
                </Modal>
            </div >

        </DefaultLayout >
    )
}

export default CategoryAdmin