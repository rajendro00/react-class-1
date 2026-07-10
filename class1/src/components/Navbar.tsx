import { Link } from "react-router-dom";

function Nav(){
    return(
        <>
            <nav className="bg-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between">
                        <h1 className="text-2xl font-bold text-white"><Link to="/">My Blog</Link></h1>
                        <ul className="flex items-center gap-8 text-white font-medium">
                            <li className="hover:text-cyan-400 transition duration-300"><Link to="/">Home</Link></li>
                            <li className="hover:text-cyan-400 transition duration-300"><Link to="/about">About</Link></li>
                            <li className="hover:text-cyan-400 transition duration-300"><Link to="/gallery">Gallery</Link></li>
                            <li className="hover:text-cyan-400 transition duration-300"><Link to="/services">Services</Link></li>
                            <li className="hover:text-cyan-400 transition duration-300"><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;