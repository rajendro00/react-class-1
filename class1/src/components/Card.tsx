export default function Card( {cardTitle, cardDescription, cardImage, imageAlt} ){
    return(
        <>
            <div className=" bg-gray-100 p-6">
                <div className=" w-full max-w-[300px] py-6 rounded-2xl bg-white shadow-lg">
                    <img src={cardImage} alt={imageAlt} className="h-12 w-12 mx-auto" />
                    <div className="text-center p-2">
                        <h2 className="mt-4 text-2xl font-bold text-gray-800"> {cardTitle} </h2>

                        <p className="mt-3 text-gray-600"> {cardDescription} </p>
                    </div>
                </div>
            </div>
        </>
    )
}