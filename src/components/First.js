import { ReactComponent as Firstsvg } from "../svgs/first.svg";

function First() {
  return (
    <div className="flex items-center justify-between my-24 mx-20">
      {/* Right Side ------------------------------------*/}
      <div className="m-5">
        <h4 className="font-bold text-5xl pb-4">
          Digital Marketing
          <br /> Solution with a Lot of Punch.
        </h4>
        <p className="text-xl  ">
          An online professional can build a digital marketing plan for startups
          and developing enterprises to help them expand and retain pleased
          customers. Your digital consultant will be able to jumpstart campaigns
          and help you get the most out of your marketing budget. We have a
          variety of digital marketing tools to help you grow your business at
          any level.
        </p>
      </div>
      {/* Left Side ------------------------------------*/}
      <div className="m-5">
        <Firstsvg className="w-96" />
      </div>
    </div>
  );
}

export default First;
