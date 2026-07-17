import { useState } from "react";

import List from "../components/List";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import cardimage from "../assets/react.svg";

function About(){

    const [count, setCount] = useState(0);;

    function handleClick(){
        setCount(count + 1);
    }
    

    const listData = ["item1", "item2", "item3" ];

    return(
        <>
            <div className="flex items-center justify-center bg-gray-100 py-8">
                <div className="w-80 rounded-2xl bg-white p-4 text-center shadow-xl">
                    <h1 className="mb-8 text-6xl font-bold text-blue-600">
                    {count}
                    </h1>

                    <div className="flex justify-center gap-4">
                    <button
                        onClick={handleClick}
                        className=" bg-green-500 px-6 py-3 text-xl font-bold text-white"
                    >
                        +
                    </button>

                    </div>
                </div>
            </div>
            <List items={listData} />
            <div className=" flex flex-wrap justify-center gap-4 ">
                <Card
            cardTitle ="Card Title" 
            cardDescription = "This is the card description"
            cardImage = {cardimage}
            imageAlt = "Description of the Image"
            /><Card
            cardTitle ="Card Title" 
            cardDescription = "This is the card description"
            cardImage = {cardimage}
            imageAlt = "Description of the Image"
            /><Card
            cardTitle ="Card Title" 
            cardDescription = "This is the card description"
            cardImage = {cardimage}
            imageAlt = "Description of the Image"
            />
            </div>
            <Card2/>
                
        </>
    )
}

export default About;