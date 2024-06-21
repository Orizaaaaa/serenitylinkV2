import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    title?: string,
    to: string,
    children: React.ReactNode
}

const CardLink = ({ title, children, to }: Props) => {
    return (
        <Link to={to} className="rounded-md hover: border-stroke transform transition-transform duration-300 hover:scale-105 bg-white p-4 lg:px-7.5 lg:py-6 shadow-default dark:border-strokedark ">
            <div className=" rounded-full ">
                {children}
            </div>

            {/* <p className="text-[#777980] my-3">
                {title}
            </p> */}
        </Link>
    )
}

export default CardLink