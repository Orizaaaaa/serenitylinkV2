
import Card from '../../../components/elemets/card/Card'
import Maps from '../../../components/fragments/maps/Maps'
import DefaultLayout from '../../../components/layout/DefaultLayout'
import { manusiaLaptop } from '../../../image'


const DashboardAdmin = () => {

    const dataCard = [
        {
            name: 'Di Proses',
            value: 2
        },
        {
            name: 'Menunggu',
            value: 4
        },
        {
            name: 'Selesai',
            value: 9
        },

    ]

    const colorCard = (value: string) => {
        if (value === 'Di Proses') {
            return ('text-[#FF7F0A]')
        } else if (value === 'Menunggu') {
            return ('text-primary')
        } else if (value === 'Selesai') {
            return ('text-lime-700')
        }

    }

    const dataMaps =
        [
            {
                lat: -6.840540,
                lng: 107.430687
            },
            {
                lat: -6.840540,
                lng: 107.430690
            },

        ]

    return (
        <DefaultLayout>
            <Card>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="flex-col space-y-3 my-auto">
                        <h1 className=" text-lg font-semibold md:text-2xl md:font-bold font-inter" >Selamat datang di dashboard Admin !</h1>
                        <p className="text-gray-500 text-sm md:text-base" >Senang melihat Anda kembali. Mari kita mulai hari ini dengan mengelola pengaudan yang telah di ajukan oleh masyarakat</p>
                    </div>
                    <div className="flex justify-center">
                        <img src={manusiaLaptop} alt="dashboard" />
                    </div>
                </div>
            </Card>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-4">
                {dataCard.map((item, index) => (
                    <Card key={index}>
                        <div className="flex-col">
                            <h1>{item.name}</h1>
                            <h1 className={`text-2xl font-semibold ${colorCard(item.name)}`}>{item.value}</h1>
                        </div>
                    </Card>
                ))}
            </div >




        </DefaultLayout>

    )
}

export default DashboardAdmin