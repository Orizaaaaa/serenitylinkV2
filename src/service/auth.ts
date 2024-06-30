import axios from "axios";

export const url = import.meta.env.VITE_BASE_API

type Props = {
    formRegister: string,
    formLogin: string,
    callback: any
}

export const login = ({ formLogin, callback }: Props) => {
    axios.post(`${url}/auth/login`, formLogin)
        .then((res) => {
            callback(true, res.data);
        }).catch((err) => {
            callback(false, err)
        })
}

export const register = ({ formRegister, callback }: Props) => {
    axios.post(`${url}/auth/register`, formRegister)
        .then((res) => {
            callback(true, res.data);
        }).catch((err) => {
            callback(false, err);
        });
};
