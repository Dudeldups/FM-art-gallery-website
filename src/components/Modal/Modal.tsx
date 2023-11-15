import Button from "../Button/Button";

import "./Modal.scss";

interface ModalProps {
  setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ setIsModalShown }: ModalProps) {
  return <Button setIsModalShown={setIsModalShown} isPrimary={false} />;
}
