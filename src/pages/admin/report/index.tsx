
import DefaultLayout from "../../../components/layout/DefaultLayout"
import { IoSearch } from "react-icons/io5"
import { useEffect, useState } from "react"
import { getAllReport } from "../../../service/report"
import CardReport from "../../../components/fragments/CardReport/CardReport"


const ReportAdmin = () => {

    const [dataReport, setDataReport] = useState([]);

    useEffect(() => {
        getAllReport((result: any) => {
            setDataReport(result.data)
        })
    }, []);

    console.log(dataReport);

    return (
        <DefaultLayout>
            <div className="w-full  mt-4 relative ">
                <input className="w-full rounded-md bg-white outline-none py-2 ps-11" type="text" placeholder="ketik laporan..." name="" id="" />
                <IoSearch size={20} color="#7C7C7C" className="absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6  gap-3" >

                {dataReport?.map((item: any, index: any) => (
                    <CardReport location={`/laporan-admin/submit-laporan-admin/${item.id}`}
                        image={item.imageReport.map((item: any) => item)} title={item.title} address={item.address} status={item.status}
                        date={item.createdAt} desc={item.description} key={index} />
                ))}

            </div>
        </DefaultLayout>
    )
}

export default ReportAdmin