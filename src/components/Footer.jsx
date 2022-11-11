import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebookSquare,
  faInstagramSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <FontAwesomeIcon icon={faTwitterSquare} size="lg" />
      <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
      <FontAwesomeIcon icon={faInstagramSquare} size="lg" />
      <FontAwesomeIcon icon={faGithubSquare} size="lg" />
    </div>
  );
}
export default Footer;
