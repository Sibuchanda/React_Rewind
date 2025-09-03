import { IoMoonSharp } from "react-icons/io5";
import { CiSun } from "react-icons/ci";
import { useEffect, useState } from "react";



export const Darklight = () => {
    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem("AppTheme") || "light";
    });

       const handleButtonToggle = ()=>{
       setTheme((prev)=> prev==='light' ? "dark" : "light");
   }


    // Saving the theme to localStorage whenever it changes
    useEffect(()=>{
       localStorage.setItem("AppTheme", theme);
    },[theme]);

  return (
    <div className={`min-h-screen ${theme==='light' ? "bg-gray-100" : "bg-black"}`}>
      <nav className={`w-full h-20 ${theme==="light" ? "bg-white" : "bg-black"} flex items-center justify-between`}>
        <div className={`logo ml-10 rounded-full ${theme==='light' ? "bg-black" : "bg-white"} text-white w-10 h-10 flex items-center justify-center`}>
          <h1 className={`font-bold ${theme==='light' ? "text-white" : "text-black"}`}>D</h1>
        </div>
        <div className="navList mr-10 flex gap-4 items-center p-4">
          <ul className="flex gap-6 text-blue-400 mr-8">
            <li className="hover:text-blue-600 cursor-pointer font-bold">
              Home
            </li>
            <li className="hover:text-blue-600 cursor-pointer font-bold">
              Features
            </li>
            <li className="hover:text-blue-600 cursor-pointer font-bold">
              Services
            </li>
            <li className="hover:text-blue-600 cursor-pointer font-bold">
              About us
            </li>
          </ul>
          <div className="toggle">
            <button onClick={handleButtonToggle}>
            {
                theme==='light' ? (
                    <IoMoonSharp className={`text-2xl cursor-pointer ${theme==="light" ? "text-black" : "text-white"}`} />
                ) : (
                    <CiSun className={`text-2xl cursor-pointer ${theme==="light" ? "text-black" : "text-white"}`} />
                )
            }
            </button>
          </div>
        </div>
      </nav>
      <section>
        <div className={`container1 flex flex-col items-center mt-20 ${theme==='light' ? "bg-gray-100" : "bg-black"}`}>
          <h1 className={`font-bold text-6xl ${theme==='light' ? "text-black" : "text-white"}`}>Features</h1>
          <div className="boxes flex gap-6 mt-6 justify-between items-center">
            <div className="box w-60 h-60 bg-sky-200 rounded-md"></div>
            <div className="box w-60 h-60 bg-sky-200 rounded-md"></div>
            <div className="box w-60 h-60 bg-sky-200 rounded-md"></div>
            <div className="box w-60 h-60 bg-sky-200 rounded-md"></div>
          </div>
        </div>
        <div className={`container2 h-auto flex flex-col ${theme==='light' ? "bg-gray-100" : "bg-black"}`}>
          <h1 className={`font-bold text-6xl text-center mt-6 ${theme==='light' ? "text-black" : "text-white"}`}>Services</h1>
          <div className="services mt-6 p-6">
            <ul className="flex flex-col gap-8 items-center justify-center">
              <li className={`${theme==='light' ? "text-black" : "text-white"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloremque, asperiores facere quas deleniti tempore
                cumque consequuntur labore iusto error. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. At id corrupti aliquam. Rem
                velit harum cumque iure consectetur impedit distinctio?
              </li>
              <li className={`${theme==='light' ? "text-black" : "text-white"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloremque, asperiores facere quas deleniti tempore
                cumque consequuntur labore iusto error. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. At id corrupti aliquam. Rem
                velit harum cumque iure consectetur impedit distinctio?
              </li>
              <li className={`${theme==='light' ? "text-black" : "text-white"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloremque, asperiores facere quas deleniti tempore
                cumque consequuntur labore iusto error. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. At id corrupti aliquam. Rem
                velit harum cumque iure consectetur impedit distinctio?
              </li>
              <li className={`${theme==='light' ? "text-black" : "text-white"}`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia doloremque, asperiores facere quas deleniti tempore
                cumque consequuntur labore iusto error. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. At id corrupti aliquam. Rem
                velit harum cumque iure consectetur impedit distinctio?
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
