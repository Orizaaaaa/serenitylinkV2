import { useState } from "react";
import Card from "../../../components/elemets/card/Card"
import DefaultLayout from "../../../components/layout/DefaultLayout"
import { buttonKategori } from "../../../utils/dataObject"


const CategoryAdmin = () => {

    const [formData, setFormData] = useState({
        categori: ''
    });
    const handleCategory = (value: string) => {
        setFormData({ ...formData, categori: value })
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
                <Card >
                    <div className='flex flex-wrap justify-start mx-auto mt-5 gap-10 '>

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
                    {/* {buttonKategori.map((category, index) => (
                        <button
                            className={`p-3 md:p-6 mx-auto rounded-full ${formData.categori === category.value ? 'bg-primary text-black' : ''}`}
                            key={index}
                            onClick={() => handleCategory(category.value)}
                        >
                            <img className="w-[70px] h-[70px] " src={category.image} alt={'image kategori'} />
                            <p className="text-sm md:text-base mt-3">{category.name}</p>
                        </button>
                    ))} */}
                </Card>
            </div >

        </DefaultLayout >
    )
}

export default CategoryAdmin