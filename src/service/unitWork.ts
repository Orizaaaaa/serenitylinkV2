import { axiosInterceptor } from "./axiosInterceptor"

export const getAllUnitWork = (callback: any) => {
    //kalo error tambah utl api aja
    axiosInterceptor.get('/unit-work/list')
        .then((res) => {
            callback(res.data);
        })
        .catch((error) => {
            console.error("Error fetching all unit work:", error);
        });
}

export const createUnitWork = async (formUnitWork: any, callback: any) => {
    await axiosInterceptor.post('/unit-work', formUnitWork)
        .then((result) => {

        }).catch((err) => {

        });

}