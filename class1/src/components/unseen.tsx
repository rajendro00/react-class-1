import UnseenIcon1 from "../assets/image/bussinessStatuss/businessstats1.png"
import UnseenIcon2 from "../assets/image/bussinessStatuss/businessstats2.png"
import UnseenIcon3 from "../assets/image/bussinessStatuss/businessstats3.png"
import UnseenIcon4 from "../assets/image/bussinessStatuss/businessstats4.png"
const stats = [
    {
      id: 1,
      icon: UnseenIcon1,
      number: "2,245,341",
      title: "Members",
    },
    {
      id: 2,
      icon: UnseenIcon2,
      number: "46,328",
      title: "Clubs",
    },
    {
      id: 3,
      icon: UnseenIcon3,
      number: "828,867",
      title: "Event Bookings",
    },
    {
      id: 4,
      icon: UnseenIcon4,
      number: "1,926,436",
      title: "Payments",
    },
  ];


export default function Unseen(){
    return(
        <section className="bg-[#F5F7FA]  py-16">
            <div className="max-w-[1152px] mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-[50px] items-center">

                    {/* Left Side */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 leading-tight">
                        Helping a local
                        <br />
                        <span className="text-green-500">
                            business reinvent itself
                        </span>
                        </h2>

                        <p className="mt-4 text-gray-500">
                        We reached here with our hard work and dedication.
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="grid grid-cols-2 gap-10">
                        {stats.map(item =>(
                            <div key={item.id} className="flex items-center gap-4">
                                <img src={item.icon} alt={item.title} className="w-10 h-10" />
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-800">
                                        {item.number}
                                    </h3>

                                    <p className="text-gray-500">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}