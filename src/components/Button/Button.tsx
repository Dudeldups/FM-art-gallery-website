import "./Button.scss";

interface ButtonProps {
  setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
  isPrimary: boolean;
}

const Button = ({ setIsModalShown, isPrimary }: ButtonProps) => {
  return isPrimary ? (
    <button
      className="modal-button primary"
      onClick={() => setIsModalShown(true)}>
      Our location
    </button>
  ) : (
    <button
      className="modal-button secondary"
      onClick={() => setIsModalShown(false)}>
      Back to home
    </button>
  );
};

export default Button;
