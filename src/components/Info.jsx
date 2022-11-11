import image from "../assets/Rectangle 90.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Info() {
  return (
    <div className="info">
      <img src={image} alt="image" />
      <h1>Mohammed Sayed</h1>
      <h2>Frontend Developer</h2>
      <a href="https://facebook.com/msabdalaal">fb/msabdalaal</a>
      <div className="buttons">
        <a>
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
          Email
        </a>
        <a>
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
export default Info;
