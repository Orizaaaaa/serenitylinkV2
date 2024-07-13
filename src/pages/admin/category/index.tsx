import { useState } from "react";
import Card from "../../../components/elemets/card/Card"
import DefaultLayout from "../../../components/layout/DefaultLayout"
import { buttonKategori } from "../../../utils/dataObject"
import { FaPlus } from "react-icons/fa";
import { Modal, ModalBody, ModalContent, useDisclosure } from "@nextui-org/react";
import InputReport from "../../../components/elemets/input/InputReport";
import { camera } from "../../../image";
import { IoCloseCircleOutline } from "react-icons/io5";
import ButtonPrimary from "../../../components/elemets/buttonPrimary";


const CategoryAdmin = () => {

    const [formData, setFormData] = useState({
        name: '',
        categori: '',
        image: null as File | null
    });
    const handleCategory = (value: string) => {
        setFormData({ ...formData, categori: value })
    }

    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleAddCategory = () => {
        onOpen();
    }

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

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
            setFormData({ ...formData, image: selectedImage || null });
        } else {
            console.log('error');

        }
    };
    return (
        <DefaultLayout>
            <Card  >
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
                            <button onClick={handleAddCategory} className="w-[70px] h-[70px] bg-gray-400 rounded-full flex justify-center items-center" ><FaPlus /></button>
                            <p className="mt-1" >Tambah Kategori</p>
                        </div>

                        {buttonKategori.map((category, index) => (
                            <div className="image flex-col justify-center items-center" key={index}>
                                <img onClick={() => handleCategory(category.value)}
                                    className={`w-[70px] h-[70px] mx-auto rounded-full object-cover   cursor-pointer 
                                    ${formData.categori === category.value ? 'border-2 border-primary' : ''}`}
                                    src={category.image} alt={'image kategori'} />
                                <button className={`flex mt-1  ${formData.categori === category.value ? 'block' : 'hidden'}`} ><IoCloseCircleOutline size={20} color="red" /></button>
                                <p className="text-sm md:text-base mt-1">{category.name}</p>
                            </div>


                        ))}

                    </div>
                </Card>

                {/* modal */}
                <Modal
                    size={'xl'}
                    isOpen={isOpen}
                    onClose={onClose}
                    isDismissable={false} isKeyboardDismissDisabled={true}
                >
                    <ModalContent>
                        <>
                            <ModalBody>
                                <form action="">
                                    <InputReport htmlFor="title" title="Nama Kategori : " type="text" onChange={handleChange} value={formData.name} />

                                    <h1 className=" font-medium" >Logo Kategori :  </h1>
                                    <div className="images ">
                                        {formData.image && formData.image instanceof Blob ? (
                                            <img className="h-[170px] md:h-[300px] w-auto mx-auto rounded-md" src={URL.createObjectURL(formData.image)} />
                                        ) : (
                                            <div className="images border-dashed border-2 border-black rounded-md h-[200px] bg-gray-300">
                                                <button className="flex-col justify-center items-center h-full w-full " type="button" onClick={() => handleFileManager('add')} >
                                                    <img className="w-20 h-20 mx-auto" src={camera} />
                                                    <p>*Masukan logo dari kategori tersebut</p>
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
                                            <button className={`border-2 border-primary  text-primary px-4 py-2 rounded-md ${formData.image === null ? 'hidden' : ''}`} type="button" onClick={() => handleFileManager('add')} >Ubah Gambar</button>
                                        </div>
                                    </div>
                                    <ButtonPrimary className="w-full mt-5 rounded-md"  >Simpan</ButtonPrimary>
                                </form>
                            </ModalBody>
                        </>
                    </ModalContent>
                </Modal>
            </div >

        </DefaultLayout >
    )
}

export default CategoryAdmin