import { axiosInterceptor } from "./axiosInterceptor"

export const getAllUnitWork = (callback: any) => {
    //kalo error tambah utl api aja
    axiosInterceptor.get('/unit-work')
        .then((res) => {
            callback(res.data);
            console.log(res.data);
        })
        .catch((error) => {
            console.error("Error fetching all unit work:", error);
        });
}