
import { useEffect, useState } from "react";
import { getCategories } from "../../../service/category";


const Categories = () => {
  const [category, setCategory] = useState([] as any);
  useEffect(() => {
    getCategories((result: any) => {
      setCategory(result.data)
    })
  }, []);

  return (
    <>
      <div className='py-12  bg-[#F7F7F7]'>
        <div data-aos='fade-zoom-in' data-aos-easing='ease-in-back' data-aos-duration='1000' data-aos-delay='200' data-aos-offset='0'>
          <h1 className='text-center text-2xl md:text-5xl out text-primary-600 font-extrabold mb-8 uppercase'>kategori</h1>
          <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 container mx-auto gap-5'>
            {category.map((category: any, index: any) => (
              <div className=" p-6 mx-auto" key={index} >
                <img className="w-full h-[100px] " src={category.image} alt={'image kategori'} />
                <p className="text-sm md:text-base mt-3  text-gray-400 text-center" >{category.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
