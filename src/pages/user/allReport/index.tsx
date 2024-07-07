import { IoSearch } from 'react-icons/io5'
import DefaultLayout from '../../../components/layout/DefaultLayout'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from 'react-icons/io'
import { useEffect, useRef, useState } from 'react'
import Card from '../../../components/elemets/card/Card'
import { getAllReport } from '../../../service/report'
import CardReport from '../../../components/fragments/CardReport/CardReport'


const AllReportUser = () => {
    // untuk dropdown
    const [isOpen, setIsOpen] = useState(false);
    const [dataReport, setDataReport] = useState([]);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [selectedStatus, setSelectedStatus] = useState("");
    const [searchData, setSearchData] = useState("");

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleStatusSelect = (status: any) => {
        setSelectedStatus(status);
    };

    useEffect(() => {
        getAllReport((result: any) => {
            setDataReport(result.data)
        })
    }, []);

    console.log(dataReport);

    const handleSearch = (e: any) => {
        setSearchData(e.target.value);
    };

    const filteredData = dataReport.filter((item: any) => {
        return (
            item.title && item.title.toLowerCase().includes(searchData.toLowerCase()) &&
            (selectedStatus === "" || item.status === selectedStatus)
        );
    });





    return (
        <DefaultLayout>

            <Card>
                <div className="grid ">
                    <div className="flex-col space-y-3 my-auto">
                        <h1 className=" text-lg font-semibold md:text-2xl md:font-bold font-inter" >Halaman Semua Laporan </h1>
                        <p className="text-gray-500 text-sm md:text-base" >Ini adalah halaman pengaduan yang berisikan semua informasi pengaduan di citatah</p>
                    </div>
                </div>
            </Card >

            {/* search and dropdown */}
            <div className="w-full  mt-4 relative ">
                <input value={searchData}
                    onChange={handleSearch} className="w-full rounded-md bg-white outline-none py-2 ps-11" type="text" placeholder="ketik laporan..." name="" id="" />
                <IoSearch size={20} color="#7C7C7C" className="absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <div className="flex mt-4 gap-3">
                <Link to={"/dashboard-user/buat-laporan-user"} className="bg-primary text-white px-4 py-2 rounded-md " >
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
                            <button className="text-gray-700 block px-4 py-2 text-sm" onClick={() => handleStatusSelect("")}>
                                Semua Status
                            </button>
                            <button onClick={() => handleStatusSelect("Menunggu")} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">
                                Menunggu
                            </button>
                            <button onClick={() => handleStatusSelect("Diproses")} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">
                                Di Proses
                            </button>
                            <button onClick={() => handleStatusSelect("Selesai")} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">
                                selesai
                            </button>

                        </div>
                    </div>
                </div>
            </div>


            {/* data semua laporan */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6  gap-3" >
                {filteredData.map((item: any, index: any) => (
                    <CardReport location={`/dashboard-user/detail-laporan-user/${item.id}`}
                        image={item.imageReport.map((item: any) => item)} title={item.title} address={item.address} status={item.status}
                        date={item.createdAt} desc={item.description} key={index} />
                ))}


            </div>

        </DefaultLayout>

    )
}

export default AllReportUser