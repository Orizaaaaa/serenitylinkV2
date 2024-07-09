import { axiosInterceptor } from "./axiosInterceptor";

export const getReportByUnitWork = (id: string, callback: any) => {
    axiosInterceptor.get(`/reports/user/${id}`)
        .then((res) => {
            callback(true, res.data);
        }).catch((err) => {
            callback(false, err)
        })
}