import "./Button.scss";

import rightArrow from "/assets/images/icon-arrow-right.svg";
import leftArrow from "/assets/images/icon-arrow-left.svg";

interface ButtonProps {
  setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  isPrimary: boolean;
}

const Button = ({ setIsModalShown, isPrimary }: ButtonProps) => {
  const handleClick = (showModal: boolean) => {
    setIsModalShown(showModal);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isPrimary ? (
    <button className="modal-button primary" onClick={() => handleClick(true)}>
      <span className="modal-button__text">Our location</span>
      <span className="modal-button__arrow" aria-hidden="true">
        <img src={rightArrow} alt="" />
      </span>
    </button>
  ) : (
    <button
      className="modal-button secondary"
      onClick={() => handleClick(false)}>
      <span className="modal-button__text">Back to home</span>
      <span className="modal-button__arrow" aria-hidden="true">
        <img src={leftArrow} alt="" />
      </span>
    </button>
  );
};

export default Button;
