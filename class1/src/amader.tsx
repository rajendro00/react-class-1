// import { use } from "react";
// import { it } from "node:test";
import { use } from "react";
import About from "./components/about";  
// import { it } from "node:test";
// // import { link } from "fs";
// // import { it } from "node:test";
// // import { table } from "console";

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

const employees = [
  {
    id: 1,
    name: "Alice",
    position: "Frontend Developer",
    salary: 50000,
    skills: ["HTML", "CSS", "React"],
  },
  {
    id: 2,
    name: "Bob",
    position: "Backend Developer",
    salary: 65000,
    skills: ["Node.js", "Express", "MongoDB"],
  },
];

function employee(){
    return(
        <>
        {employees.map(value => (
            <div key={value.id}>
                <h2>{value.name}</h2>
                <p>{value.position}</p>
                <p>{value.salary}</p>
                
                <ul>
                    {value.skills.map((item, index) =>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        ))}
        </>
    )
}

const products2 = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
    discount: 10
  },
  {
    id: 2,
    name: "Phone",
    price: 500,
    discount: 20
  },
  {
    id: 3,
    name: "Watch",
    price: 200,
    discount: 5
  }
];

function Discount(){
    return(
        <>
        {products2.map(product => {
            const finalPrice = product.price - (product.price * product.discount) / 100 ;
            return(
                <div key={product.id}>
                    <h2>{product.name}</h2>
                    <p>Price : {product.price}</p>
                    <p>Discount :{product.discount}%</p>
                    <p>Final Price :{finalPrice}</p>
                </div>
            )
        })}
        </>
    )
}

const movies = [
  {
    id: 1,
    name: "Avengers",
    rating: 5
  },
  {
    id: 2,
    name: "Batman",
    rating: 4
  },
  {
    id: 3,
    name: "Superman",
    rating: 3
  }
];

function RatingStar(){
    return(
        <>
        {movies.map(user => (
            <div key={user.id}>
                <h2>{user.name}</h2>
                
                <p>{" ⭐ ".repeat(user.rating )}</p>
            </div>
        ))}
        </>
    )
}

// dynamic class
const students3 = [
  {
    id: 1,
    name: "Rahim",
    pass: true
  },
  {
    id: 2,
    name: "Karim",
    pass: false
  }
];

function DynamicClass(){
    return (
        <>
        {students3.map(student => (
            <h2 key={student.id} className= {student.pass ? "bg-green-500" : "bg-red-500"} >{student.name}</h2>
        ))}
        </>
    )
}

const employees2 = [
  {
    id: 1,
    name: "Alice",
    company: {
      name: "Google",
      location: "USA"
    }
  },
  {
    id: 2,
    name: "Bob",
    company: {
      name: "Microsoft",
      location: "Canada"
    }
  }
];

function Employees2(){
    return (
        <>
        {employees2.map(employee => (
            <div key={employee.id}>
                <h2>{employee.name}</h2>
                <p> Company : {employee.company.name}</p>
                <p> Location : {employee.company.location}</p>
            </div>
        ))}
        </>
    )
}

const products = [
  {
    id: 1,
    name: "Laptop",
    stock: 5
  },
  {
    id: 2,
    name: "Phone",
    stock: 0
  },
  {
    id: 3,
    name: "Watch",
    stock: 12
  }
];

function ProductStock(){
    return(
        <>
        {products.map(product => (
            <div key={product.id}>
                <h2>{product.name}</h2>
                <button disabled={product.stock === 0}>Buy Now</button>
            </div>
        ))}
        </>
    )
}

const categories5 = [
  {
    id: 1,
    name: "Electronics",
    products: ["Laptop", "Phone", "TV"]
  },
  {
    id: 2,
    name: "Fashion",
    products: ["Shirt", "Pant", "Shoes"]
  },
  {
    id: 3,
    name: "Cosmetics",
    products: []
  }
];

function Categories5(){
    return (
        <>
        {categories5.map(category => (
            <div key={category.id}>
                <h2>{category.name}</h2>
                <ul>
                    {category.products.length === 0 ? 
                        ( <li>No product</li> ) :
                        (category.products.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))) 
                    }
                </ul>
            </div>
        ))}
        </>
    )
}

const products6 = [
  "Laptop",
  "Phone",
  "Watch",
  "TV",
  "Camera"
];

function Products6(){
    return (
        <>
        {
            products6
                    .slice(0,3)
                    .map((value, index) => (
                        <h2 key={index}>{value}</h2>
                    ))
        }
        </>
    )
}


const orders = [
  {
    id: 1,
    customer: "Rahim",
    items: [
      { name: "Laptop", qty: 1 },
      { name: "Mouse", qty: 2 }
    ]
  },
  {
    id: 2,
    customer: "Karim",
    items: [
      { name: "Phone", qty: 1 },
      { name: "Charger", qty: 1 },
      { name: "Headphone", qty: 2 }
    ]
  }
];

function DataUi(){
    return(
        <>
        {orders.map(user => (
            <div key={user.id}>
                <h2>{user.customer}</h2>
                <ul>
                   {
                   user.items.length > 0 ? 
                   (user.items.map((item, index) => (
                        <li key={index}>{item.name} ({item.qty})</li>
                    ))
                   ) : ( <li>Not Found</li> )
                   }
                </ul>
            </div>
        ))}
        </>
    )
}

// filter 

const products10 = [
  {
    id: 1,
    name: "Laptop",
    price: 800,
  },
  {
    id: 2,
    name: "Phone",
    price: 400,
  },
  {
    id: 3,
    name: "TV",
    price: 1200,
  },
  {
    id: 4,
    name: "Watch",
    price: 200,
  },
];

function Products10(){
    return(
        <>
        {products10
                .filter(pric => pric.price > 500)
                .map(user=> (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.price}</p>
                    </div>
                ))
        }
        </>
    )
}

const employees11 = [
  {
    id: 1,
    name: "Alice",
    salary: 60000,
    active: true,
  },
  {
    id: 2,
    name: "Bob",
    salary: 45000,
    active: true,
  },
  {
    id: 3,
    name: "Charlie",
    salary: 70000,
    active: false,
  },
  {
    id: 4,
    name: "David",
    salary: 80000,
    active: true,
  },
];

function Employee111(){
    return (
        <>
        {
        employees11
                .filter( pricee => pricee.salary > 50000 && pricee.active )
                .map(user => (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                        <p>{user.salary}</p>
                    </div>
                ))
        }
        </>
    )
}

 const cart11 = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 1000 },
    { id: 3, name: "Keyboard", price: 2000 }
  ];
function Cart11(){

    const totalPrice = cart11.reduce((total, item) => {
        return total + item.price;
    }, 0);

    return(
        <>
        <h2>Total Price : {totalPrice}</h2>
        </>
    )
}

 const cart = [
    { name: "Laptop", qty: 2 },
    { name: "Phone", qty: 3 },
    { name: "Mouse", qty: 5 }
  ];


  function Cart22(){

    const TotalQty = cart.reduce((total, item) => {
        return total + item.qty
    }, 0)

    return(
        <>
        <h2>Total QTY : {TotalQty}</h2>
        </>
    )
  }


  function ActiveUser(){

    const users = [
    { name: "Rahim", active: true },
    { name: "Karim", active: false },
    { name: "Hasan", active: true },
    { name: "Rakib", active: true }
  ];

    const totalUser = users.reduce((count, user) => {
        return user.active ? count + 1 : count;
    }, 0);

    return(
        <>
        <p>Active User : {totalUser}</p>
        </>
    )
  }

  const products1111 = [
    { name: "Laptop" },
    { name: "Phone" },
    { name: "Mouse" }
  ];


  function ProductName(){
    const names = products1111.reduce((result, product) => {
        return result + product.name + ", "  ;
    }, "");

    return(
        <>
        <h2> {names} </h2>
        </>
    )
  }

   const products123 = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 25000 },
    { name: "TV", price: 70000 }
  ];

  function MaxItem(){
    const Max = products123.reduce((max, item) => {
        return max.price > item.price ? max : item;
    });
    return(
        <>
        <h2>{Max.name}</h2>
        <h3>{Max.price}</h3>
        </>
    )
  }

  const employees234 = [
    { name: "Rahim", salary: 20000 },
    { name: "Karim", salary: 30000 },
    { name: "Hasan", salary: 25000 }
  ];

  function Employees234(){
    const totalSalary = employees234.reduce((sum, employe) => {
        return sum + employe.salary;
    }, 0)
    return(
        <>
        {employees234.map(user => (
            <h2>{user.name} - {user.salary} </h2>
        ))}
         <p>Total salary : {totalSalary}</p>
        </>
    )
  }

export default Employees234;
