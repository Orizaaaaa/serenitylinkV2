
import Card from '../../../components/elemets/card/Card'
import DefaultLayout from '../../../components/layout/DefaultLayout'


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

    return (
        <DefaultLayout>
            <div className="grid grid-cols-3 gap-3">
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