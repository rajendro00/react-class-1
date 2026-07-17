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
            <div className="flex items-center justify-center  py-8">
                    <button
                        onClick={handleClick}
                        className=" bg-green-500 px-6 py-3 text-xl font-bold text-white text-center"
                    >
                        click value {count} time
                    </button>
                </div>
            <List items={listData} />
            <div className="bg-blue-200 py-12">
                <div className=" flex flex-wrap justify-center gap-4 ">
                    <Card
                    cardTitle ="Card Title" 
                    cardDescription = "This is the card description"
                    cardImage = {cardimage}
                    imageAlt = "Description of the Image"
                    />
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
                    />
                </div>
            </div>
            <Card2/>
                
        </>
    )
}

export default About;