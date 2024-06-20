
import Header from '../../components/fragments/home/Header'
import Hero from '../../components/fragments/home/Hero'
import Categories from '../../components/fragments/home/Kategori'
import TimeLine from '../../components/fragments/home/Timeline'
import Footer from '../../components/fragments/home/Footer'
import Aos from "aos";

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
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Home