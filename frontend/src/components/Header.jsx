const Header = ({ title }) => {
    return (
        <>
            <div className="p-4 border-b border-gray-200">
                <span className="text-sm font-semibold">{ title }</span>
            </div>
        </>
    )
}

export default Header