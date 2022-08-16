import Contactus from "./Contactus";
import Pricingcard from "./Pricingcard";

function Pricing() {
  const PrimePlan = [
    "Whatsapp Campign",
    "10000 Messages",
    "Per Messages Price  \u20B9 0.15",
    "Delivery Time 4 hours",
  ];
  const ElitePlan = [
    "Whatsapp Campign",
    "50000 Messages",
    "Per Messages Price  \u20B9 0.10",
    "Delivery Time 8 hours",
  ];
  return (
    <div className="flex mx-20">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-3xl">Packages</h1>
        <div className="flex items-center justify-center">
          <Pricingcard PlanName={"Prime"} Price={"1500"} Features={PrimePlan} />
          <Pricingcard PlanName={"Elite"} Price={"5000"} Features={ElitePlan} />
        </div>
      </div>
    <Contactus/>
    </div>
  );
}

export default Pricing;
