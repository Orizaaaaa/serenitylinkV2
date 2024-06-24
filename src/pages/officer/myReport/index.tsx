
import DefaultLayout from '../../../components/layout/DefaultLayout'
import { IoSearch } from 'react-icons/io5'
import CardLink from '../../../components/elemets/card/CardLink'
import { jalanRusak } from '../../../image'
import { FaCalendar, FaLocationDot } from 'react-icons/fa6'
import Card from '../../../components/elemets/card/Card'


const MyReportOfficer = () => {
    return (
        <DefaultLayout>
            <Card>
                <div className="grid ">
                    <div className="flex-col space-y-3 my-auto">
                        <h1 className=" text-lg font-semibold md:text-2xl md:font-bold font-inter" >Halaman Laporan Saya </h1>
                        <p className="text-gray-500 text-sm md:text-base" >Ini adalah halaman pengaduan yang berisikan pengaduan yang telah anda selesaikan</p>
                    </div>
                </div>
            </Card >
            <div className="w-full  mt-4 relative ">
                <input className="w-full rounded-md bg-white outline-none py-2 ps-11" type="text" placeholder="ketik laporan..." name="" id="" />
                <IoSearch size={20} color="#7C7C7C" className="absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6  gap-3" >
                <CardLink to="/laporan-saya-officer/detail-laporan" >
                    <div className="images h-[150px] w-full relative">
                        <img className='rounded-lg w-full h-full' src={jalanRusak} alt="jalan rusak" />
                    </div>
                    <div className="space-y-2 mt-1">
                        <h1 className=' font-semibold text-lg'>Jalan Rusak</h1>

                        <div className="flex items-center gap-1 ">
                            <FaLocationDot color='#6E849C' />
                            <p className='text-gray-500 text-sm'>jalan kalimulya</p>
                        </div>
                        <div className="flex items-center gap-1 ">
                            <FaCalendar color='#6E849C' />
                            <p className='text-gray-500 text-sm'>12/12/2024</p>
                        </div>



                        <p className='text-gray-500' >ada pohon tumbang menutupi jalan ...</p>
                        <div className="w-full my-3">
                            <p className=' text-white  text-sm p-1 rounded-lg bg-[#FF7F0A] text-center' >Di proses</p>
                        </div>
                    </div>
                </CardLink>


            </div>
        </DefaultLayout>
    )
}

export default MyReportOfficer