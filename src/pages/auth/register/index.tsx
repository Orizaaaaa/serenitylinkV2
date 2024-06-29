import { FaEyeSlash } from "react-icons/fa6"
import InputForm from "../../../components/elemets/input/InputForm"
import { logo } from "../../../image"
import { IoEye } from "react-icons/io5"
import { Link } from "react-router-dom"
import ButtonPrimary from "../../../components/elemets/buttonPrimary"
import { useState } from "react"

const Register = () => {
    const [showPassword, setShowPassword] = useState(true)
    const [disabled, setDisabled] = useState(true)
    const [typePassword, setTypePassword] = useState("password")
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user'
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, } = e.target;
        setForm({ ...form, [name]: value });

        const updatedValues = {
            ...form,
            [name]: value,
        };

        if (updatedValues.email !== "" && updatedValues.password !== "" && (updatedValues.email.includes('@gmail.com') || updatedValues.email.includes('@test.com'))) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

    }

    const togglePassword = () => {
        setShowPassword(!showPassword);
        if (typePassword === "password") {
            setTypePassword("text");
        } else {
            setTypePassword("password");
        }
    }


    return (
        <div className="login">
            <div className="container mx-auto flex justify-center items-center w-[100vw] h-[100vh]">
                <form className='p-6 bg-[#F1FAEE] rounded-lg w-96 m-3 lg:m-0' >

                    <div className="logo flex justify-center my-5">
                        <img className="h-24" src={logo} alt='logo' />
                    </div>

                    <InputForm placeholder='Masukkan Nama' type='text' htmlFor={'name'} value={form.name} onChange={handleChange} />
                    <InputForm placeholder='Masukkan Email' type='email' htmlFor={'email'} value={form.email} onChange={handleChange} />
                    <div className="relative">
                        <button onClick={togglePassword} type='button' className='icon-password h-full  bg-transparent flex absolute right-0 justify-center items-center pe-4' >
                            {showPassword ? <FaEyeSlash size={20} color='#636363' /> : <IoEye size={20} color='#636363' />}
                        </button>
                        <InputForm className='form-input-login' htmlFor="password" onChange={handleChange} type={typePassword} value={form.password} placeholder="Masukkan Kata Sandi" />
                    </div>
                    <ButtonPrimary type='submit' bg={`${disabled ? 'bg-slate-400' : 'bg-primaryblue'}`} disabled={disabled} className={`rounded-lg w-full mb-3 font-medium`}>
                        Register
                    </ButtonPrimary>

                    <p className='text-sm  mt-3' >Apakah sudah punya akun? <Link to={'/login'} className='text-primaryblue font-bold' >Login</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default Register