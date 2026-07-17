export default function List( {items} ){
    return(
        <div className="text-center bg-cyan-100 py-16">
            <ul>
                {items.map((item , index) => (
                    <li className="mt-4 text-2xl font-bold text-gray-800" key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}