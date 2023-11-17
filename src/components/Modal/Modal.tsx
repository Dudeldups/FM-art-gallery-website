import Button from "../Button/Button";
import Map from "../Map/Map";

import "./Modal.scss";

interface ModalProps {
  setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ setIsModalShown }: ModalProps) {
  return (
    <section className="modal">
      <div className="map-container">
        <Map />

        <div className="button-container">
          <Button setIsModalShown={setIsModalShown} isPrimary={false} />
        </div>
      </div>

      <div className="location-bg">
        <div className="location">
          <h2 className="location__title">Our Location</h2>

          <div className="location__text">
            <address>
              <span className="location__street">99 King Street</span>
              <span>
                Newport
                <br />
                RI 02840
                <br />
                United States of America
              </span>
            </address>

            <p className="location__desc">
              Our newly opened gallery is located near the Edward King House on
              99 King Street, the Modern Art Gallery is free to all visitors and
              open seven days a week from 8am to 9pm.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
