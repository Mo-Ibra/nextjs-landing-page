function Title({align = 'center', header, description}) {
    return (
        <div className={`text-${align} mb-10`}>
            <h3 className="text-gray-900 font-bold text-5xl my-2 drop-shadow-md">{header}</h3>
            <span className="text-gray-500">{description}</span>
        </div>
    )
}

export default Title