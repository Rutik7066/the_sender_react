import { ReactComponent as LoginSvg } from "../svgs/login.svg";
import { useState } from "react";
import { auth, Login as login } from "../Fireop";
import Navbar from "../components/NavBar";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  let navigate = useNavigate();
  async function Signin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((r) => {
        navigate("/admin");
        localStorage.setItem("email", JSON.stringify(r.user.email));
      })
      .catch((e) => {
        setError(true);
      });
  }

  return (
    <div className="w-full">
      <Navbar />
      <div className="flex justify-around items-center">
        <LoginSvg className="w-2/6 my-auto" />
        <div className=" my-auto w-72">
          <form onSubmit={Signin}>
            <h1 className="mb-4 font-bold text-xl ">LOG IN</h1>
            <div className="mb-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="username"
                placeholder="Username"
              />
            </div>
            <div className="mb-4">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="text-center pt-1  pb-1 mb-2">
              <button
                className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md bg-blue-600 hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full "
                type="submit"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Log in
              </button>
            </div>
            <div className="flex items-center justify-between">
              {error === true ? <Loginfailed /> : <div></div>}
            </div>
            <h1 className="text-sm font-semibold text-gray-800">
              To create account <br />
              contact us on +91 9503679576
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}

function Loginfailed() {
  return (
    <div
      className="bg-red-100 rounded-lg py-5 px-6 mb-4  text-sm text-red-700 inline-flex items-center w-full"
      role="alert"
    >
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="times-circle"
        className="w-4 h-4 mr-2 fill-current"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"
        ></path>
      </svg>
      Log In Failed Check Credentials.
    </div>
  );
}
