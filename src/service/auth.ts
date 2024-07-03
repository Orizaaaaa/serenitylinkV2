import axios from "axios";

export const url = import.meta.env.VITE_BASE_API
export const cloudName = import.meta.env.VITE_CLOUDINARY_NAME
export const cloudApiKey = import.meta.env.VITE_CLOUDINARY_API_KEY
export const cloudApiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET

export const loginService = (formLogin: any, callback: any) => {
    axios.post(`${url}/user/login`, formLogin)
        .then((res) => {
            callback(true, res.data);
        }).catch((err) => {
            callback(false, err)
        })
}

export const register = (formRegister: any, callback: any) => {
    axios.post(`${url}/user/register`, formRegister)
        .then((res) => {
            callback(true, res.data);
            console.log(res.data);

        }).catch((err) => {
            callback(false, err);
        });
};
