import GalleryLogo from "../Icons/GalleryLogo";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import XIcon from "../Icons/XIcon";

import "./Footer.scss";

interface FooterProps {
  isColored: boolean;
}

const Footer = ({ isColored }: FooterProps) => {
  return (
    // colored class changes from black background to orange
    <div className={`footer-container ${isColored ? "colored" : ""}`}>
      <footer className="footer">
        <GalleryLogo />
        <p className="footer__desc">
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>

        <div className="icon-container">
          <a className="icon-link" href="#">
            <FacebookIcon />
          </a>
          <a className="icon-link" href="#">
            <InstagramIcon />
          </a>
          <a className="icon-link" href="#">
            <XIcon />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
