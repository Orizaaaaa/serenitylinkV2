import Card from "../../components/elemets/card/Card"
import DefaultLayout from "../../components/layout/DefaultLayout"
import { manusiaLaptop } from "../../image"


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
        </DefaultLayout >
    )
}

export default Dashboard