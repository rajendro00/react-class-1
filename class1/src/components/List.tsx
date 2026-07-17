export default function List( {items} ){
    return(
        <div className="mx-auto max-w-[1152px] text-center">
            <ul>
                {items.map((item , index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}