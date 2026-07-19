import { use, useState } from "react"




export default function useState1(){
  const [count, setCount] = useState(0);

  function handleClick11(){
    setCount(count + 1)
  }

  const [isOn, setIsOn] = useState(false);

  function handleClick22(){
    setIsOn(!isOn)
  }

  const [activeTab, setActiveTab] = useState("Home");
 

  const tabs1 = [
  {
    title: "Home",
    content: "Welcome to our Home Page."
  },
  {
    title: "About",
    content: "This is our About Page."
  },
  {
    title: "Contact",
    content: "You can contact us anytime."
  },
  {
    title: "Gallery",
    content: "We provide many services."
  }
];

const tabs2 = [
  "HTML",
  "CSS",
  "JavaScript",
  "React"
];

const tabs3 = [
  {
    title: "Home",
    color: "bg-red-500"
  },
  {
    title: "About",
    color: "bg-green-500"
  },
  {
    title: "Services",
    color: "bg-blue-500"
  }
];

const [activeTabs3, setActiveTabs3] = useState("Home")

const [activeTabs2, setActiveTabs2] = useState(tabs2[0])

  const tabs = ["Home", "About", "Contact", "Services"]

  const faqs = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library."
  },
  {
    id: 2,
    question: "What is useState?",
    answer: "useState is a React Hook."
  },
  {
    id: 3,
    question: "What is JSX?",
    answer: "JSX lets you write HTML-like code in React."
  },

];
  const [activeFaq, setActiveFaq] = useState(null)

  return(
    <>
        <div className="flex flex-col items-center justify-center  py-8 gap-2">
            <button
                onClick={handleClick11}
                className=" bg-green-500 px-6 py-3 text-xl font-bold text-white text-center"
            >
                click value {count} time
            </button>

            <h2>{ isOn ? "Light ON" : "Light OFF" }</h2>
            <button
                onClick={handleClick22}
                className=" bg-green-500 px-6 py-3 text-xl font-bold text-white text-center"
            >
                Toggle
            </button>
        </div>

        <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg">
          {/* Tab */}

          <div className="flex gap-3 border-b pb-4">
            {tabs.map((item, index) => (
              <button onClick={() => setActiveTab(item)}  key={index} className={`py-4 px-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === item ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-blue-100"
              }`} >{item}</button>
            ))}
          </div>

          {/* Content */}
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-800"> {activeTab}  Content</h2>
            <p className="mt-3 text-gray-600 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, itaque!</p>
          </div>
        </div>
        <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg">
          {/* Tab */}

          <div className="flex gap-3 border-b pb-4">
            {tabs1.map((item) => (
              <button onClick={() => setActiveTab(item.title)} key={item.title} className={`py-4 px-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === item.title ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-blue-100"} `} >
                {item.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-800"> {activeTab}  Content</h2>
            <p className="mt-3 text-gray-600 leading-7">{}</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg">
          {/* Tab */}

          <div className="flex gap-3 border-b pb-4">
            <button onClick={() => setActiveTab("Home")} className={`py-6 px-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "Home" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            } `}>
              Home
            </button>
            <button onClick={() => setActiveTab("About")} className={`py-6 px-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "About" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            } `}>
              About
            </button>
            <button onClick={() => setActiveTab("Contact")} className={`py-6 px-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTab === "Contact" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            } `}>
              Contact
            </button>
          </div>

          {/* Content */}
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-800"> {activeTab}  page </h2>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg">
          {/* Tab */}

          <div className="flex gap-3 border-b pb-4">
            {tabs2.map((item, index) => (
              <button key={index} onClick={() => setActiveTabs2(item)} className={`py-6 px-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTabs2 === item ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
            } `}>
              {item} {index + 1}
            </button>
            ))}
          </div>

          {/* Content */}
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-800"> You selected {activeTabs2} </h2>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-20 p-6 bg-white rounded-2xl shadow-lg">
          {/* Tab */}

          <div className="flex gap-3 border-b pb-4">
            {tabs3.map((item) => (
              <button key={item.title} onClick={() => setActiveTabs3(item.title)} className={`py-6 px-3 rounded-lg font-semibold transition-all duration-300 ${
              activeTabs3 === item.title ? ` ${item.color} text-white` : "bg-gray-100 text-gray-700"
            } `}>
              {item.title} 
            </button>
            ))}
          </div>

          {/* Content */}
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-gray-800"> You selected {activeTabs3} </h2>
          </div>
        </div>

            {/* faq */}
            <div className="bg-white mt-20 p-6 mx-auto max-w-3xl rounded-2xl shadow-lg">
              <div>
                {faqs.map((item) => (
                 <div key={item.id}>
                  <h2 onClick={() => setActiveFaq( activeFaq === item.id ? null : item.id )} >{item.question}</h2>
                  {activeFaq === item.id && (
                    <p>{item.answer}</p>
                  )}
                 </div>
                ))}
              </div>
            </div>

        
    </>
  )
}