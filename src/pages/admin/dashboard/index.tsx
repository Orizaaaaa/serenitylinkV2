
import Card from '../../../components/elemets/card/Card'
import MapsAdmin from '../../../components/fragments/mapsAdmin/MapsAdmin'
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

    const markers = [
        { lat: -6.840540, lng: 107.430687, popupText: 'Hola amigos' },
        { lat: -7.039868, lng: 107.520927, popupText: 'Marker 2' },
        { lat: -6.884082, lng: 107.541306, popupText: 'Marker 3' },
        // Tambahkan marker lainnya di sini
    ];

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

            {/* <MapContainer className={'h-[370px] rounded-md my-5'} center={{ lat: -6.917464, lng: 107.619125 }} zoom={10} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers.map((marker, index) => (
                    <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }}>
                        <Popup>
                            {marker.popupText}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer> */}
            <MapsAdmin center={{ lat: -6.917464, lng: 107.619125 }} dataMarker={markers} />




        </DefaultLayout>

    )
}

export default DashboardAdmin