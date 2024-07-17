
import { useEffect, useState } from 'react'
import Card from '../../../components/elemets/card/Card'
import MapsAdmin from '../../../components/fragments/mapsAdmin/MapsAdmin'
import DefaultLayout from '../../../components/layout/DefaultLayout'
import { manusiaLaptop } from '../../../image'
import { coordinateDashboard, statusDashboard } from '../../../service/dashboard'
import { parseCoordinate } from '../../../utils/helper'

interface Report {
    Menunggu: number
    Diproses: number
    Selesai: number
}

const DashboardAdmin = () => {
    const [dataDashboard, setDataDashboard] = useState({} as Report);
    const [dataCoordinate, setDataCoordinate] = useState([]);
    useEffect(() => {
        statusDashboard((result: any) => {
            setDataDashboard(result.data)
        })
        coordinateDashboard((result: any) => {
            setDataCoordinate(result.data)
        })
    }, []);


    //card
    const dataCard = [

        {
            name: 'Menunggu',
            value: dataDashboard.Menunggu
        },
        {
            name: 'Di Proses',
            value: dataDashboard.Diproses
        },
        {
            name: 'Selesai',
            value: dataDashboard.Selesai
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

    //marker error
    const markers = dataCoordinate.map((item: any) => {
        return {
            lat: parseCoordinate(item.latitude),
            lng: parseCoordinate(item.longitude),
            popupText: item.title
        }

    })

    console.log('marker', markers);




    console.log(dataCoordinate);


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

            <MapsAdmin center={{ lat: -6.917464, lng: 107.619125 }} dataMarker={markers} />




        </DefaultLayout>

    )
}

export default DashboardAdmin