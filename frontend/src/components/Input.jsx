const Input = ({value, setValue, type}) => {
    return (
        <>

            <input
                className="text-sm w-full h-10 rounded-md border border-gray-400 mt-1 px-2 focus:outline-none focus:ring-2 focus:ring-gray-600"
                type = {type}
                value = {value}
                onChange = {(e) => setValue(e.target.value)}
                required
            />
        </>
    )
}

export default Input