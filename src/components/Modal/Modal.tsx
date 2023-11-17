import Button from "../Button/Button";

import mobileSmallMapImage from "../../assets/images/mobile/image-map.png";
import mobileBigMapImage from "../../assets/images/mobile/image-map@2x.png";
import tabletMapImage from "../../assets/images/tablet/image-map@2x.png";
import desktopMapImage from "../../assets/images/desktop/image-map@2x.png";

import "./Modal.scss";
import Map from "../Map/Map";

interface ModalProps {
  setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ setIsModalShown }: ModalProps) {
  return (
    <section className="modal">
      <div className="map-container">
        <picture className="modal__map-image">
          <source srcSet={desktopMapImage} media="(min-width: 61.25rem)" />
          <source srcSet={tabletMapImage} media="(min-width: 43.75rem)" />
          <source srcSet={mobileBigMapImage} media="(min-width: 23.5rem)" />

          <img
            src={mobileSmallMapImage}
            alt="A map for the location of the gallery at 99 King Street, Newport, USA."
          />
        </picture>

        <div className="button-container">
          <Button setIsModalShown={setIsModalShown} isPrimary={false} />
        </div>
      </div>

      <Map />

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
