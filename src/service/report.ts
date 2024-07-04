import { axiosInterceptor } from "./axiosInterceptor";

export const createReport = async (formUnitWork: any, callback: any) => {
    await axiosInterceptor.post('/reports', formUnitWork)
        .then((result) => {
            callback(true, result.data)
        }).catch((err: any) => {
            console.log(false, err);
        });
}