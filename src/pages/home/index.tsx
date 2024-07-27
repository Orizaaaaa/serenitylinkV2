
import Header from '../../components/fragments/home/Header'
import Hero from '../../components/fragments/home/Hero'
import Categories from '../../components/fragments/home/Kategori'
import TimeLine from '../../components/fragments/home/Timeline'
import Footer from '../../components/fragments/home/Footer'
import { useEffect, useState } from 'react'
import { getAllReport } from '../../service/report'
import CardReport from '../../components/fragments/CardReport/CardReport'


const Home = () => {
    const [dataReport, setDataReport] = useState([]);
    useEffect(() => {
        getAllReport((result: any) => {
            setDataReport(result.data);
        });

    }, []);

    const dataFilter = dataReport.filter((item: any) => item.status === "Diproses");




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
                <div className="py-28 heroBack">
                    <h1 className="text-center text-2xl md:text-5xl out text-slate-900 font-extrabold mb-8 md:mb-16 uppercase">
                        list report
                    </h1>
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-3" data-aos="fade-up">

                            {dataFilter.map((item: any, index: any) => (
                                <CardReport
                                    location={`/dashboard-user`}
                                    image={item.imageReport.map((img: any) => img)}
                                    title={item.title}
                                    address={item.address}
                                    status={item.status}
                                    date={item.createdAt}
                                    desc={item.description}
                                    key={index}
                                />
                            ))}

                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home