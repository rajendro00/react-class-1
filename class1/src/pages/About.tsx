// import { use } from "react";

// const categories = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Node"
// ];

const users = [
  { id: 1, name: "Rahims", active: true },
  { id: 2, name: "Karim", active: false },
  { id: 3, name: "Hasan", active: true },
  { id: 4, name: "Sakib", active: false },
];


function About(){
    
    return(
        <>
        {users
            .filter(user => user.active)
            .map(value => (
                <ul>
                    <li key={value.id}>{value.name}</li>
                </ul>
            ))
        }
        </>
    )
}

export default About;