import { NavLink } from "react-router-dom";

function NavBar() {
  const navlist = [
    { title: "New Campaign", route: "" },
    // { title: "Scheduled Campaign", route: "scheduled" },
    { title: "Report", route: "report" },
    { title: "Profile", route: "profile" },
  ];

  const style =
    "w-full font-thin uppercase text-gray-800 active:text-blue-600 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 active:border-r-4 active:border-blue-500 ";

  const activestyle =
    "w-full font-thin uppercase text-blue-600 flex items-center p-4 my-2 transition-colors duration-200 justify-start bg-gradient-to-r from-white to-blue-100 border-r-4 border-blue-500 ";


  const navitem = navlist.map((r) => (
    <li key={r.title}>
      <NavLink end
        to={r.route}
        className={({ isActive }) => (isActive ? activestyle : style)}
      >
        <span className="text-left">
          <svg
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 2048 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
          </svg>
        </span>
        <span className="mx-4 text-sm font-normal">{r.title}</span>
      </NavLink>
    </li>
  ));

  return (
    <nav className="h-full w-full">
      <ul className="h-full w-full">{navitem}</ul>
    </nav>
  );
}

export default NavBar;
