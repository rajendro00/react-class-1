import { use } from "react";
import About from "./components/about";  
// import { table } from "console";

const students = [
  {
    id: 1,
    name: "Rahim",
    class: 10,
    result: "A+",
  },
  {
    id: 2,
    name: "Karim",
    class: 9,
    result: "A",
  },
  {
    id: 3,
    name: "Hasan",
    class: 8,
    result: "B",
  },
];

function Amader1(){
   return(
    <div>
        {students.map(student => (
            <div key={student.id}>
                <h2>{student.name}</h2>
                <p>Class : {student.class}</p>
                <p>Result : {student.result}</p>
            </div>
        ))}
    </div>
   );
    
}

const users = [
  { id: 1, name: "Rahim", age: 20 },
  { id: 2, name: "Karim", age: 25 },
  { id: 3, name: "Hasan", age: 30 },
];

function Amader(){

    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

const categories = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node"
];

function Categore(){
    return(
        <div>
            {categories.map(category => (
                <button key={category}>
                    {category}
                    </button>
            ))}
        </div>
    )
}

const countries = [
  "Bangladesh",
  "India",
  "Pakistan",
  "Japan"
];

function Country(){
    return(
        <select name="" id="">
            {countries.map(country => (
                <option key={country}>{country}</option>
            ))}
        </select>
    )
}

// Numbering
const books = [
  "JavaScript",
  "React",
  "Node",
  "MongoDB"
];

function Numbering(){
    return(
        <div>
            {books.map((number, index) => (
                <p key={index}>{index + 1}. {number}</p>
            ))}
        </div>
    )
}

// Even/Odd Color (Logic)

const numbers = [10,20,30,40,50];

function EvenOdd(){
    return(
        <div>
            {numbers.map((number,index) => (
                <p key={index} style={{color:index%2===0 ? "green" : "red"}}>{number}</p>
            ))}
        </div>
    )
}

// nested app
const studentss = [
  {
    id:1,
    name:"Rahim",
    subjects:["Math","English","ICT"]
  },
  {
    id:2,
    name:"Karim",
    subjects:["Physics","Chemistry"]
  }
];

function student(){
    return(
        <>
        {studentss.map(student => (
            <div key={student.id}>
                <h2>{student.name}</h2>
                <ul>
                    {student.subjects.map((subject, index) => (
                        <li key={index}>{subject}</li>
                    ))}
                </ul>
            </div>
        ))
        }
        </>
    )
}

// active

const userss = [
  {
    id:1,
    name:"Rahim",
    active:true
  },
  {
    id:2,
    name:"Karim",
    active:false
  },
  {
    id:3,
    name:"Hasan",
    active:true
  }
];

function Active(){
    return(
        <>
        {userss.map(user => {
            if(user.active){
                return (
                    <h2 key={user.id}>{user.name}</h2>
                )
            }
            return null
        })
        }
        </>
    )
}

export default Active;
