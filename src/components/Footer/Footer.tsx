import "./Footer.scss";

interface FooterProps {
  isColored: boolean;
}

const Footer = ({ isColored }: FooterProps) => {
  return (
    <footer className={`footer ${isColored ? "colored" : ""}`}>
      <p className="footer__title">Modern Art Gallery</p>
      <p className="footer__desc">
        The Modern Art Gallery is free to all visitors and open seven days a
        week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
      </p>
      <div className="icon-container"></div>
    </footer>
  );
};

export default Footer;
