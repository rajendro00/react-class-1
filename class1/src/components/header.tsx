import { Link } from "react-router-dom";
import Logo from "../assets/sitelogo.svg"

export default function Header() {
  const menus = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Service", path: "/service" },
    { id: 3, name: "Feature", path: "/feature" },
    { id: 4, name: "Product", path: "/product" },
    { id: 5, name: "Testimonial", path: "/testimonial" },
    { id: 6, name: "FAQ", path: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F5F7FA]  ">
      <div className="mx-auto flex h-[84px] w-full max-w-[1152px] items-center justify-between">

        {/* Logo */}
        <Link className="flex items-center gap-2" to="/">
          <img src={Logo} alt="Site Logo" />
          <h2 className="text-[30px] font-bold text-[#263238]">Nexcent</h2>
        </Link>

        {/* Nav */}
        <nav>
          <ul className="flex items-center gap-12">
            {menus.map(menu => (
              <li key={menu.id}>
                <Link className="text-[16px] font-medium text-[#18191F] transition hover:text-[#4CAF4F]" to={menu.path}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* button */}
        <div className="flex items-center gap-4">
          <Link className="text-[14px] font-medium text-[#4CAF4F] hover:text-green-700" to="/login">Login</Link>
          <Link className="rounded-md bg-[#4CAF4F] px-5 py-3 text-[14px] font-medium text-white transition hover:bg-green-600" to="/signup">Signup</Link>
        </div>
      </div>
    </header>

    // Our Clients Section
  );
}