

type Props = {
    htmlFor: string
    title?: string
    type: string
    onChange: any
    value: number | string
    placeholder?: string,
    className?: string
    styleTitle?: string
}

const InputReport = ({ htmlFor, title, type, onChange, value, placeholder }: Props) => {
    return (
        <div className="input my-6">
            <label htmlFor={htmlFor} className="font-medium " >{title} </label>
            <input type={type}
                name={htmlFor}
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className='w-full bg-gray-300 rounded-md py-1 px-2 outline-none mt-2'
            />
        </div>
    )
}

export default InputReport