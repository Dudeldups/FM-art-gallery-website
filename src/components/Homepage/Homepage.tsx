import introImage from "../../assets/images/desktop/image-hero.jpg";
import galleryImage1 from "../../assets/images/desktop/image-grid-1.jpg";
import galleryImage2 from "../../assets/images/desktop/image-grid-2.jpg";
import galleryImage3 from "../../assets/images/desktop/image-grid-3.jpg";

import Button from "../Button/Button";

import "./Homepage.scss";

interface HomepageProps {
  setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Homepage({ setIsModalShown }: HomepageProps) {
  return (
    <>
      <header className="intro">
        <img
          className="intro__image"
          src={introImage}
          alt="A man and a woman are looking at a black and white drawing of an elderly woman."
        />

        <h2 className="intro__title">Modern Art Gallery</h2>
        <p className="intro__desc">
          The arts in the collection of the Modern Art Gallery all started from
          a spark of inspiration. Will these pieces inspire you? Visit us and
          find out.
        </p>
        <Button setIsModalShown={setIsModalShown} isPrimary={true} />
      </header>

      <section className="gallery">
        <img
          className="gallery__image1"
          src={galleryImage1}
          alt="A room from the gallery with paintings on the wall and a display in the middle of the room."
        />
        <h2 className="gallery__title">Your Day at the Gallery</h2>
        <p className="gallery__desc">
          Wander through our distinct collections and find new insights about
          our artists. Dive into the details of their creative process.
        </p>

        <img
          className="gallery__image2"
          src={galleryImage2}
          alt="A room from the gallery with a painting on the wall and a bench in front of it."
        />
        <img
          className="gallery__image3"
          src={galleryImage3}
          alt="Visitors to the gallery are looking at paintings on the wall."
        />
        <h2 className="gallery__title">Come & Be Inspired</h2>
        <p className="gallery__desc">
          We’re excited to welcome you to our gallery and see how our
          collections influence you.
        </p>
      </section>
    </>
  );
}
