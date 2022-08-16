import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="flex w-full py-4 justify-between">
      {/* Title */}
      <Link to="/"  className="font-bold text-2xl px-20">The Sender</Link>
      {/* Nav options */}
      <ul className="flex justify-center items-center font-bold text-gray-700 px-20">
        <li className="px-4  hover:text-cyan-500 active:text-cyan-500">
          <Link to="/">Home</Link>
        </li>
        <li className="px-4 hover:text-cyan-500 active:text-cyan-500">
          <Link to="/login">Log in</Link>
        </li>
      </ul>
    </nav>
  );
}
