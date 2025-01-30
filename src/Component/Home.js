import RotaryPresent from "./Image/RotaryPresent/RotaryPresents.png";
import TheMagicOfRotary from "./Image/TheMagicOfRotary/TheMagicOfRotary.png";
import Vss from "./Image/Vss/vss.png";
import Spardha from "./Image/Spardha/Header.png";
import GirlWithBAt from "./Image/GirlWithBAt/GirlWithBat.png";
import BoyWithFootball from "./Image/BoyWithFootball/BoyWithFootball.png";
import BoyWithBAt from "./Image/BoyWithBAt/BoyWithBat.png";
import navtitle from "./Image/navtitle/Spardha.png";
import SportCategories from "./Image/SportCategories/SportCategories.png";
import SeprateMaleAndFemaleCompetition from "./Image/SeprateMaleAndFemaleCompetition/SeprateMaleAndFemaleCompetition.png";
import ExcitingPrizes from "./Image/ExcitingPrizes/ExcitingPrizes.png";
import ExclusiveCulturePerformance from "./Image/ExclusiveCulturePerformance/ExclusiveCulturePerformance.png";
import CompetionWithPassion from "./Image/CompetionWithPassion/CompetionWithPassion.png";
import ShowcaseYourTalent from "./Image/ShowcaseYourTalent/ShowcaseYourTalent.png";
import BuildTeamSprit from "./Image/BuildTeamSprit/BuildTeamSprit.png";
import EarnRecognition from "./Image/EarnRecognition/EarnRecognition.png";
// import Swimming from "./Image/Swimming/Swimming.png";
// import Basketball from "./Image/Basketball/Basketball.png";
// import LawnTennis from "./Image/LawnTennis/LawnTennis.png";
// import LongJump from "./Image/LongJump/LongJump.png";
// import KhoKho from "./Image/KhoKho/KhoKho.png";
// import Kabddi from "./Image/Kabddi/Kabddi.png";
// import HundredMeterRace from "./Image/HundredMeterRace/HundredMeterRace.png";
// import HighJump from "./Image/HighJump/HighJump.png";
// import Volleyball from "./Image/Volleyball/Volleyball.png";
// import Chess from "./Image/Chess/Chess.png";
// import TableTennis from "./Image/TableTennis/TableTennis.png";
// import Badminton from "./Image/Badminton/Badminton.png";
// import TugOfWar from "./Image/TugOfWar/TugOfWar.png";
// import TwoHundredMetersRace from "./Image/TwoHundredMetersRace/TwoHundredMetersRace.png";
// import ShotPut from "./Image/ShotPut/ShotPut.png";
// import DiscusThrow from "./Image/DiscusThrow/DiscusThrow.png";
// import TripleJump from "./Image/TripleJump/TripleJump.png";
// import FourHundredMetersRelay from "./Image/FourHundredMetersRelay/FourHundredMetersRelay.png";
// import AgeCrieteria from "./Image/AgeCrieteria/AgeCriteria.png";
// import GenderCategories from "./Image/GenderCategories/GenderCategories.png";
import "../Design/Home.css";

function HomeContent() {
  return (
    <div className="Home">
      <div className="Section-one">
        <img
          className="TheMagicOfRotary"
          src={TheMagicOfRotary}
          alt="The Magic of Rotary"
        />
        <img
          className="RotaryPresent"
          src='/About/image 36.png'
          alt=" Rotary Present"
        />
        <img className="Vss" src={Vss} alt="Vss" />
      </div>
      <div className="Section-two">
        <img className="Header" src={Spardha} alt="Spardha" />
        <p className="Header_title">
          A Thrilling 3-Day Sports Extravaganza Featuring 18 Exciting Events.
        </p>
      </div>

      <div className="Champions">
        <div className="Section-three">
          <img className="GirlWithBAt" src={GirlWithBAt} alt="" />
          <img className="BoyWithFootBall" src={BoyWithFootball} alt="" />
          <img className="BoyWithBAt" src={BoyWithBAt} alt="" />
        </div>
        <div className="inner-section">
          <p className="para1">
            Rotary Club of Raipur Greater presents SPARDHA 2024, a platform for
            young athletes to compete,
            <br /> showcase talent, and push their limits in a wide variety of
            sports.
          </p>
        </div>
      </div>

      <div className="Section-four">
        <img className="p1" src={navtitle} alt="" />
        <p className="p2">Event Highlights</p>
        <p className="p3">What Makes SPARDHA 2024 an Event You Can’t Miss!</p>
      </div>
      <div className="SportFrame">
        <img
          className="SportImages"
          src={SportCategories}
          alt="18 Sport categories"
        />
        <img
          className="SportImages"
          src={SeprateMaleAndFemaleCompetition}
          alt="Seprate Male And Female Competition"
        />
        <img
          className="SportImages"
          src={ExcitingPrizes}
          alt="Exciting Prizes"
        />
        <img
          className="SportImages"
          src={ExclusiveCulturePerformance}
          alt="Exclusive Culture Performance"
        />
      </div>

      <div className="Midsection">
        <img src={navtitle} alt="" />
        <p className="child01">Why You Should Participate</p>
        <p className="child02"> It’s More Than Just a Competition</p>
      </div>
      <div className="Team">
        <img src={CompetionWithPassion} alt=" Competion With Passion" />
        <img src={ShowcaseYourTalent} alt=" Showcase Your Talent" />
        <img src={BuildTeamSprit} alt=" Build Team Sprit" />
        <img src={EarnRecognition} alt=" Earn Recognition" />
      </div>
      <div className="Discover">
        <img src={navtitle} alt="" />
        <p className="d1">Discover the Sports</p>
        <p className="d2">18 Sports Categories</p>
      </div>
      {/* <div className="Item_Container">
        <div>
          {" "}
          <img className="All-items" src={Swimming} alt="" />
          <p className="nameOfItems">Swimming</p>
        </div>
        <div>
          <img className="All-items" src={Basketball} alt="" />
          <p className="nameOfItems">Basketball</p>
        </div>
        <div>
          <img className="All-items" src={LawnTennis} alt="" />
          <p className="nameOfItems">Lawn Tennis</p>
        </div>
        <div>
          <img className="All-items" src={TableTennis} alt="" />
          <p className="nameOfItems">Table Tennis</p>
        </div>
        <div>
          <img className="All-items" src={Badminton} alt="" />
          <p className="nameOfItems">Badminton</p>
        </div>
        <div>
          <img className="All-items" src={Chess} alt="" />
          <p className="nameOfItems">Chess</p>
        </div>
        <div>
          <img className="All-items" src={Volleyball} alt="" />
          <p className="nameOfItems">Volleyball</p>
        </div>
        <div>
          <img className="All-items" src={KhoKho} alt="" />
          <p className="nameOfItems">Kho-Kho</p>
        </div>
        <div>
          <img className="All-items" src={Kabddi} alt="" />
          <p className="nameOfItems">Kabaddi</p>
        </div>
        <div>
          <img className="All-items" src={TugOfWar} alt="" />
          <p className="nameOfItems">Tug of War</p>
        </div>
        <div>
          <img className="All-items" src={HundredMeterRace} alt="" />
          <p className="nameOfItems">100 Meters Race</p>
        </div>
        <div>
          <img className="All-items" src={TwoHundredMetersRace} alt="" />
          <p className="nameOfItems">200 Meters Race</p>
        </div>
        <div>
          <img className="All-items" src={FourHundredMetersRelay} alt="" />
          <p className="nameOfItems">400 Meters Relay</p>
        </div>
        <div>
          <img className="All-items" src={ShotPut} alt="" />
          <p className="nameOfItems">Shot Put</p>
        </div>
        <div>
          <img className="All-items" src={DiscusThrow} alt="" />
          <p className="nameOfItems">Discus Throw</p>
        </div>
        <div>
          <img className="All-items" src={TripleJump} alt="" />
          <p className="nameOfItems">Triple Jump</p>
        </div>
        <div>
          <img className="All-items" src={HighJump} alt="" />
          <p className="nameOfItems">High Jump</p>
        </div>
        <div>
          <img className="All-items" src={LongJump} alt="" />
          <p className="nameOfItems">Long Jump</p>
        </div>
      </div>
      <div className="pqt">
        <img src={navtitle} alt="" />
        <p className="pd">Who Can Participate?</p>
        <p className="cd">
          Check the Age and Gender Eligibility Criteria for SPARDHA 2024
        </p>
      </div>
      <div className="Flexible">
        <img src={AgeCrieteria} alt="" />
        <img src={GenderCategories} alt="" />
      </div> */}
    </div>
  );
}

export default HomeContent;
