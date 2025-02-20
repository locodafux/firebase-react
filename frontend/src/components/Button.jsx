const PrimaryButton = ({ text }) => {
    return (
        <>
            <button  className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-200 hover:text-black transition">
               { text } 
            </button>
        </>
    )
}

export { PrimaryButton }
