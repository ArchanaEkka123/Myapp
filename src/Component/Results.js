import "../Design/Results.css";
import navtitle from "./Image/navtitle/Spardha.png";
import SecondRunnerUp from "./Image/SecondRunnerUp/SecondRunnerUP.png";
import SchoolChampion from "./Image/SchoolChampion/SchoolChampion.png";
import FirstRunnerUP from "./Image/FirstRunnerUP/FirstRunnerUp.png";
function Results() {
  return (
    <>
      <div className="Result-container">
        <div className="Result-section1">
          <div className="Result">
            <img src={navtitle} alt="" />
            <p className="page1"> Spardha 2024 Results</p>
            <h3 className="page2">Celebrating Victory and Sportsmanship</h3>
            <p className="page3">
              The results of Spardha 2024 reflect the hard work, determination,
              and passion of our talented athletes. Congratulations to all the
              winners and participants who have given their best in this
              thrilling event! Below, you will find the winners across various
              sports categories.
            </p>
          </div>
        </div>
        <div className="Champions-grp">
          <div className="champion-one">
            <img className="SecondRunnerUp" src={SecondRunnerUp} alt="" />
            <p className="rp1">2nd Runner Up </p>
            <p className="sp1">Trophy and Rs. 25,000 Cash: Name of School</p>
          </div>
          <div className="champion-one">
            <img className="SchoolChampion" src={SchoolChampion} alt="" />
            <p className="rp2">School Champion </p>
            <p className="sp2">Trophy and Rs. 1,00,000 Cash: Name of School</p>
          </div>
          <div className="champion-one">
            <img className="FirstRunnerUp" src={FirstRunnerUP} alt="" />
            <p className="rp3">1st Runner Up </p>
            <p className="sp3">Trophy and Rs. 50,000 Cash: Name of School</p>
          </div>
          <div className="result-div2">
            <img className="rkj" src="/About/Spardha.png" alt="" />
            <p className="rp4">Team Event Winners</p>
            <p className="sp4">
              What Makes SPARDHA 2024 an Event You Can’t Miss!
            </p>
          </div>
        </div>
        <div className="Trophy-container">
          <div className="game-container">
            <img className="trophy" src="/About/Trophy.png" alt="" />

            <p className="game">Basketball</p>
            <div className="category">
              <p className="under">
                <span>Under 14</span>{" "}
              </p>
              <p className="male">
                <span>Male</span> : Winning Team Name
              </p>
              <p className="female">
                <span>Female</span> : Winning Team Name
              </p>

              <p className="under">
                <span>Under 19</span>
              </p>
              <p className="male">
                {" "}
                <span>Male</span> : Winning Team Name
              </p>
              <p className="female">
                <span>Female</span> : Winning Team Name
              </p>
            </div>
          </div>
          <div className="game-container">
            <img className="trophy" src="/About/Trophy.png" alt="" />

            <p className="game">Kabaddi</p>
            <div className="category">
              <p className="under">
                <span>Under 14</span>{" "}
              </p>
              <p className="male">
                <span>Male</span> : Winning Team Name
              </p>
              <p className="female">
                <span>Female</span> : Winning Team Name
              </p>

              <p className="under">
                <span>Under 19</span>
              </p>
              <p className="male">
                {" "}
                <span>Male</span> : Winning Team Name
              </p>
              <p className="female">
                <span>Female</span> : Winning Team Name
              </p>
            </div>
          </div>
          <div className="game-container">
            <img className="trophy" src="/About/Trophy.png" alt="" />

            <p className="game">Volleyball</p>
            <div className="category">
              <p className="under">
                <span>Under 14</span>{" "}
              </p>
              <p className="male">
                <span>Male</span> : Winning Team Name
              </p>
              <p className="female">
                <span>Female</span> : Winning Team Name
              </p>

              <p className="under">
                <span>Under 19</span>
              </p>
              <p className="male">
                {" "}
                <span>Male</span> : Winning Team Name
              </p>
              <p className="female">
                <span>Female</span> : Winning Team Name
              </p>
            </div>
          </div>
          .
          <div className="game-container">
            <img className="trophy" src="/About/Trophy.png" alt="" />

            <p className="game">Kho-Kho</p>
            <div className="category">
              <p className="under">
                <span>Under 14</span>{" "}
              </p>
              <p className="male">
                <span>Male</span> : Winning Team Name
              </p>
              <p className="female">
                <span>Female</span> : Winning Team Name
              </p>

              <p className="under">
                <span>Under 19</span>
              </p>
              <p className="male">
                {" "}
                <span>Male</span> : Winning Team Name
              </p>
              <p className="female">
                <span>Female</span> : Winning Team Name
              </p>
            </div>
          </div>
          <div className="game-container">
            <img className="trophy" src="/About/Trophy.png" alt="" />

            <p className="game">Tug of War</p>
            <div className="category">
              <p className="under">
                <span>Under 14</span>{" "}
              </p>
              <p className="male">
                <span>Male</span> : Winning Team Name
              </p>
              <p className="female">
                <span>Female</span> : Winning Team Name
              </p>

              <p className="under">
                <span>Under 19</span>
              </p>
              <p className="male">
                {" "}
                <span>Male</span> : Winning Team Name
              </p>
              <p className="female">
                <span>Female</span> : Winning Team Name
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;
