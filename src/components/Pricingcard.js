import { AiOutlineCheckCircle as Checkmark } from "react-icons/ai";

function Pricingcard({ Price, PlanName, Features }) {
  const FeatureList = Features.map((r) => (
    <li className="mb-3 flex items-center "  key={r.toString()}>
      <Checkmark className="mr-2" />
      {r}
    </li>
  ));

  return (
    <div className="m-10">
    <div className="shadow-lg rounded-2xl w-64 bg-indigo-500 dark:bg-gray-800 p-4 ">
      <div className="flex text-white  items-center justify-between">
        <p className="text-4xl font-medium mb-2">{PlanName}</p>
        <p className="text-3xl font-bold flex flex-col mb-2">{"\u20B9"} {Price}</p>
      </div>
      <p className="text-white text-md mt-4">Plan include :</p>
      <ul className="text-sm text-white w-full mt-6 mb-6">{FeatureList}</ul>
    </div>
    </div>
  );
}

export default Pricingcard;
