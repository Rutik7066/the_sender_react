import { ReactComponent as MarketingSvg } from "../svgs/Marketing.svg";

function Third() {
  return (
    <div className="flex w-screen items-center justify-around my-15">
      <div>
        <h4 className=" font-bold text-4xl mb-2">Our Services</h4>
        <ul className=" font-medium text-xl">
          <li>1. Whatsapp automation.</li>
          <li>
            2. Whatsapp Bulk Messesges to wide number of pepople around us.
          </li>
          <li>3. Persolised whatsapp chatbots.</li>
          <li>
            4. Whatsapp campaign to particular region pepole as per your
            requirment.
          </li>
          <li>5. and Much more at low prices</li>
        </ul>
      </div>
      <div className="m-5">
        <MarketingSvg className="w-96" />
      </div>
    </div>
  );
}

export default Third;
