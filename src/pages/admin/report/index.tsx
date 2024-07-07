
import DefaultLayout from "../../../components/layout/DefaultLayout"
import { IoSearch } from "react-icons/io5"
import CardLink from "../../../components/elemets/card/CardLink"
import { FaCalendar, FaLocationDot } from "react-icons/fa6"
import { useEffect, useState } from "react"
import { getAllReport } from "../../../service/report"
import { formatCatrgory, formatDate, statusChange } from "../../../utils/helper"


const ReportAdmin = () => {

    const [dataReport, setDataReport] = useState([]);

    useEffect(() => {
        getAllReport((result: any) => {
            setDataReport(result.data)
        })
    }, []);

    console.log(dataReport);

    return (
        <DefaultLayout>
            <div className="w-full  mt-4 relative ">
                <input className="w-full rounded-md bg-white outline-none py-2 ps-11" type="text" placeholder="ketik laporan..." name="" id="" />
                <IoSearch size={20} color="#7C7C7C" className="absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6  gap-3" >

                {dataReport?.map((item: any, index: any) => (
                    <CardLink to="/laporan-admin/submit-laporan-admin" key={index} >
                        <div className="images h-[150px] w-full relative">
                            <img className='rounded-lg w-full h-full' src={item.imageReport.map((item: any) => item)} alt="jalan rusak" />
                        </div>
                        <div className="space-y-2 mt-1">
                            <h1 className=' font-semibold text-lg'>{item.title}</h1>

                            <div className="flex items-center gap-1 ">
                                <FaLocationDot color='#6E849C' />
                                <p className='text-gray-500 text-sm'>{item.address}</p>
                            </div>
                            <div className="flex items-center gap-1 ">
                                <FaCalendar color='#6E849C' />
                                <p className='text-gray-500 text-sm'>{formatDate(item.createdAt)}</p>
                            </div>



                            <p className='text-gray-500' >{formatCatrgory(item.description)}</p>
                            <div className="w-full my-3">
                                <p className={` text-white  text-sm p-1 rounded-lg ${statusChange(item.status)} text-center`} >{item.status}</p>
                            </div>
                        </div>
                    </CardLink>
                ))}

            </div>
        </DefaultLayout>
    )
}

export default ReportAdmin