import Attributes from "../modules/Attributes";
import BannerFood from "../modules/BannerFood";
import Companies from "../modules/Companies";
import Definition from "../modules/Definition";
import Guide from "../modules/Guide";
import Instruction from "../modules/Instruction";
import Restrictions from "../modules/Restriction";

function HomePage() {
  return (
    <div>
      <BannerFood />
      <Attributes />
      <Definition />
      <Companies />
      <Instruction />
      <Guide />
      <Restrictions />
    </div>
  );
}

export default HomePage;
