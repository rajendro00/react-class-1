// import { Link } from "react-router-dom";

// const menus = [
//     {
//         id:1,
//         name: "Home",
//         path:"/"
//     },
//     {
//         id:2,
//         name: "About",
//         path:"/about"
//     },
//     {
//         id:3,
//         name: "Gallery",
//         path:"/gallery"
//     },
//     {
//         id:1,
//         name: "Home",
//         path:"/"
//     },
//     {
//         id:4,
//         name: "Services",
//         path:"/services"
//     },
//     {
//         id:5,
//         name: "Blog",
//         path:"/blog"
//     },
// ]

// function Nav(){
//     return(
//         <>
//             <nav className="bg-slate-900">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <div className="flex items-center justify-between">
//                         <h1 className="text-2xl font-bold text-white"><Link to="/">My Blog</Link></h1>
//                         <ul className="flex items-center gap-8 text-white font-medium">
//                             {menus.map(menu => (
//                                 <li className="hover:text-cyan-400 transition duration-300" key={menu.id}><Link to={menu.path}>{menu.name}</Link></li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Nav;