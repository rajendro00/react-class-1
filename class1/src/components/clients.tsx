import client1 from "../assets/image/clients/client1.png"
import client2 from "../assets/image/clients/client2.png"
import client3 from "../assets/image/clients/client3.png"
import client4 from "../assets/image/clients/client4.png"
import client5 from "../assets/image/clients/client5.png"
import client6 from "../assets/image/clients/client6.png"
import client7 from "../assets/image/clients/client7.png"
import Community1 from "../assets/image/community/community1.png"
import Community2 from "../assets/image/community/community2.png"
import Community3 from "../assets/image/community/community3.png"
import Unseen from "../assets/image/unseen.png"

const clients = [

    {id: 1, image: client1,},
    {id: 2, image: client2,},
    {id: 3, image: client3,},
    {id: 4, image: client4,},
    {id: 5, image: client5,},
    {id: 6, image: client6,},
    {id: 7, image: client7},
];

const community = [
  {
    id: 1,
    icon: Community1,
    title: "Membership Organisations",
    desc: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 2,
    icon: Community2,
    title: "National Associations",
    desc: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id: 3,
    icon: Community3,
    title: "Clubs And Groups",
    desc: "Our membership management software provides full automation of membership renewals and payments",
  },
];

export default function Clients(){
  return(
    <section className="py-16">
      <div className="mx-auto max-w-[1152px]">

        {/* clients */}
        <div className="text-center">
          <h2 className="text-[36px] font-semibold text-[#4D4D4D]">
            Our Clients
          </h2>

          <p className="mt-2 text-[#717171]">
            We have been working with some Fortune 500+ clients
          </p>
        </div>

        <div className="mt-10 flex items-center justify-between">
          {clients.map(item => (
            <img key={item.id} src={item.image} alt="" className="h-12 w-12 object-contain" />
          ))}
        </div>

        {/* Community */}
        <div className="mt-20 text-center">
          <h2 className="mx-auto max-w-[542px] text-[36px] font-semibold leading-[44px] text-[#4D4D4D]">
            Manage your entire community in a single system
          </h2>

          <p className="mt-3 text-[#717171]">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8">
          {community.map(item =>(
            <div key={item.id}>
              <img src={item.icon} alt="" className="mx-auto h-16" />
              <h3 className="mt-6 text-center text-[28px] font-bold text-[#4D4D4D]">{item.title}</h3>
              <p className="mt-4 text-sm leading-6 text-[#717171]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Unseen */}

        <div className="mt-24 flex items-center justify-between">
          {/* Left */}
          <div className="w-[441px] flex-shrink-0">
            <img
              src={Unseen}
              alt="Unseen"
              className="w-full"
            />
          </div>

          {/* Right */}
          <div className="w-[661px] flex-shrink-0">
            <h2 className="text-[36px] font-semibold leading-[44px] text-[#4D4D4D]">
              The unseen of spending three years at Pixelgrade
            </h2>

            <p className="mt-4 text-[14px] leading-6 text-[#717171]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Sed sit amet justo ipsum. Sed accumsan quam vitae est varius
              fringilla. Pellentesque placerat vestibulum lorem sed porta.
              Nullam mattis tristique iaculis.
            </p>

            <button className="mt-8 rounded bg-[#4CAF4F] px-8 py-3 text-white transition hover:bg-green-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
    
  )
}