import "../Design/About.css";
import "../Design/Contact.css";
import { CiFacebook } from "react-icons/ci";
function Contact() {
  return (
    <div className="Contact-container">
      <div className="section-div4">
        <img className="sp" src="/About/spardha.png" alt="" />
        <p className="pbox">CONTACT US</p>
        <h4>Get in Touch with Spardha 2024</h4>
        <p className="pbox3">
          Do you have any questions or need more information about Spardha 2024?
          We are here to assist you! Whether you're a participant, coach,
          sponsor, or a sports enthusiast, feel free to reach out to us for any
          inquiries.
        </p>
      </div>
      <div className="card-container">
        <p className="gi">General Inquiries</p>
        <div className="card-box">
          <div className="card">
            <img src="/About/Director.png" alt="" />
            <div className="card-content">
              <p className="card-name">Rtn. Hrishabh Soni</p>
              <p className="degination">Director - Sports</p>
              <p className="mobile-no">+91 7621800000</p>
            </div>
          </div>
          <div className="card">
            <img src="/About/Chairman.png" alt="" />
            <div className="card-content">
              <p className="card-name">Rtn. Dr. Sowmya Raghubir</p>
              <p className="degination">Spardha Chairman </p>
              <p className="mobile-no">+91 8962837132</p>
            </div>
          </div>
          <div className="card">
            <img src="/About/Co Chairman.png" alt="" />
            <div className="card-content">
              <p className="card-name">Rtn. Sankalp Varvandkar</p>
              <p className="degination">Spardha Co Chairman </p>
              <p className="mobile-no">+91 9893663816</p>
            </div>
          </div>
          <div className="card">
            <img src="/About/President.png" alt="" />
            <div className="card-content">
              <h3 className="card-name">Rtn. Pankaj Chopra</h3>
              <p className="degination">President</p>
              <p className="mobile-no">+91 8964899999</p>
            </div>
          </div>
          <div className="card">
            <img src="" alt="" />
            <div className="card-content">
              <h3 className="card-name">Rtn.Ankesh Jalan</h3>
              <p className="degination">Secretary</p>
              <p className="mobile-no">+91</p>
            </div>
          </div>
          <div className="card">
            <img src="" alt="" />
            <div className="card-content">
              <h3 className="card-name">Rtn.Manish Agrawal</h3>
              <p className="degination">Treasurer</p>
              <p className="mobile-no">+91 8878870005</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Contact-div">
        {" "}
        <p className="email">Email</p>
        <p className="gmail">spardharcrg@gmail.com</p>
        <p className="social">Social</p>
        <CiFacebook />
      </div>
    </div>
  );
}
export default Contact;
