import { IoEyeOffOutline } from "react-icons/io5";
import "./App.css";

function App() {
  return (
    <>
      <div className=" w-11/12 py-16 gap-20 items-center mx-auto grid grid-cols-1 lg:grid-cols-2 lg:py-60 lg:w-[70%]  ">
        <div className="  text-white text-center lg:text-left">
          <h1 className="font-semibold text-3xl mb-4 lg:text-4xl lg:font-bold">
            Learn to code by watching others
          </h1>
          <p className=" text-lg ">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </div>
        <div>
          <div className=" mb-5 rounded bg-[#2f37be]">
            <p className="h-20 w-8/12 text-lg text-white text-center items-center p-3 m-auto">
              Try it free 7 days then $20/mo. thereafter
            </p>
          </div>

          <form className="w-full h-100px bg-white rounded p-3">
            <input
              type="text"
              placeholder="First Name"
              className="w-full mb-5 h-10 p-2 border font-semibold mt-3 "
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full mb-5 h-10 p-2 border font-semibold "
            />
            <input
              type="email"
              placeholder="email"
              className="w-full mb-5 h-10 p-2 border font-semibold"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="password"
                className=" w-full mb-5 h-10 p-2 border font-semibold "
              />
              <IoEyeOffOutline className="absolute right-5 top-2 " />
            </div>
            <button className="bg-[#38cc8c] text-white h-14 w-full rounded font-semibold text-lg mb-4">
              CLAIM YOUR FREE TRIAL
            </button>
            <p className="text-[#b9b6d3] text-center text-base font-semibold">
              By clicking the button, you are agreeing to our
              <span className="text-red-600 text-base font-semibold ml-1">
                Terms and Services
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
