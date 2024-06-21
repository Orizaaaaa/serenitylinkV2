
import Header from '../../components/fragments/home/Header'
import Hero from '../../components/fragments/home/Hero'
import Categories from '../../components/fragments/home/Kategori'
import TimeLine from '../../components/fragments/home/Timeline'
import Footer from '../../components/fragments/home/Footer'
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import CardLink from '../../components/elemets/card/CardLink'
import { jalanRusak, rusak } from '../../image'

type Props = {}

const Home = (props: Props) => {
    return (
        <>
            <Header />
            <Hero />
            <section id="alurAduan">
                <TimeLine />
            </section>
            <section id="kategori">
                <Categories />
            </section>
            <section id="laporan">
                <div className="py-12 min-h-screen md:pt-24 heroBack">
                    <h1 className="text-center text-2xl md:text-5xl out text-slate-900 font-extrabold mb-8 md:mb-16 uppercase">
                        list report
                    </h1>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-3">
                            <CardLink to="/" >
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
                            <CardLink to="/" >
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
                            <CardLink to="/" >
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
                            <CardLink to="/" >
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
                            <CardLink to="/" >
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
                            <CardLink to="/" >
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
                            <CardLink to="/" >
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
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home