import { useEffect, useRef, useState } from "react";
import DefaultLayout from "../../components/layout/DefaultLayout"
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import Card from "../../components/elemets/card/Card";

const MyReport = () => {

    // untuk dropdown
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <DefaultLayout>
            <Card>
                <div className="grid ">
                    <div className="flex-col space-y-3 my-auto">
                        <h1 className=" text-lg font-semibold md:text-2xl md:font-bold font-inter" >Halaman Laporan Saya </h1>
                        <p className="text-gray-500 text-sm md:text-base" >Ini adalah halaman pengaduan yang berisikan pengaduan yang sebelum nya telah anda  buat</p>
                    </div>
                </div>
            </Card >

            {/* search and dropdown */}
            <div className="w-full  mt-4 relative ">
                <input className="w-full rounded-md bg-white outline-none py-2 ps-11" type="text" placeholder="ketik laporan..." name="" id="" />
                <IoSearch size={20} color="#7C7C7C" className="absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <div className="flex mt-4 gap-3">
                <Link to={"/dashboard/buat-laporan"} className="bg-primary text-white px-4 py-2 rounded-md " >
                    Buat Laporan
                </Link>

                {/* dropdown status */}
                <div className="relative inline-block text-left" ref={dropdownRef}>
                    <button className=" bg-white text-black px-4 py-2 rounded-md flex justify-center items-center gap-2" onClick={toggleDropdown} >
                        Status
                        <IoIosArrowDown />
                    </button>
                    <div
                        id="dropdownMenu"
                        className={`${isOpen ? '' : 'hidden'} z-9999 origin-top-right absolute right-0 md:left-0 mt-2 w-56 rounded-md bg-white`}
                        role="menu"
                    >
                        <div className="py-1" role="none">
                            <button className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">
                                Menunggu
                            </button>
                            <button className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">
                                Di Proses
                            </button>

                        </div>
                    </div>
                </div>
            </div>


        </DefaultLayout>
    )
}

export default MyReport