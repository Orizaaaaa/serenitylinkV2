import Card from "../../components/elemets/card/Card"
import DefaultLayout from "../../components/layout/DefaultLayout"
import { manusiaLaptop } from "../../image"
import { IoSearch } from "react-icons/io5";

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <DefaultLayout>
            <Card>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex-col space-y-3 my-auto">
                        <h1 className=" text-lg font-semibold md:text-2xl md:font-bold font-inter" >Selamat datang di dashboard masyarakat !</h1>
                        <p className="text-gray-500 text-sm md:text-base" >Senang melihat Anda kembali. Mari kita mulai hari ini dengan membuat pengaduan yang bijak dan bermanfaat</p>
                    </div>
                    <div className="flex justify-center">
                        <img src={manusiaLaptop} alt="dashboard" />
                    </div>
                </div>
            </Card >

            <div className="w-full  mt-4 relative ">
                <input className="w-full rounded-md bg-white outline-none py-2 ps-9" type="text" name="" id="" />
                <IoSearch size={20} color="#7C7C7C" className="absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <button className="bg-primary text-white px-4 py-2 rounded-md mt-4" >
                Buat Laporan
            </button>
            <button className=" bg-white text-black px-4 py-2 rounded-md  w-fit  " >
                Status
            </button>

        </DefaultLayout >
    )
}

export default Dashboard