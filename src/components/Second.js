import { ReactComponent as SecondSvg } from "../svgs/second.svg";

function Second() {
  return (
    <div className="flex items-center justify-between mx-20">
      <div className="w-96 p-10">
        <SecondSvg />
      </div>
      <div>
        <h5 className="font-bold text-3xl  pb-4">
          WhatsApp Marketing <br />
          Communicating with customers on their preferred platform
        </h5>
        <h4 className="font-semibold text-xl  pb-2">
          5 Top Reasons To Use WhatsApp For Marketing In 2022
        </h4>
        <ul className="font-medium text-xl ">
          <li>1. Fast, secure, and cost-effective</li>
          <li>2. Wider demographic reach</li>
          <li>3. Supports engaging and personalised communication</li>
          <li>4. Helps gain valuable customer insights</li>
          <li>5. Facilitates automation and FAQ</li>
        </ul>
      </div>
    </div>
  );
}

export default Second;
