import { useState } from "react";

import introImage from "./assets/images/desktop/image-hero.jpg";
import galleryImage1 from "./assets/images/desktop/image-grid-1.jpg";
import galleryImage2 from "./assets/images/desktop/image-grid-2.jpg";
import galleryImage3 from "./assets/images/desktop/image-grid-3.jpg";

import Button from "./components/Button";

const App = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  setIsModalShown(false);

  return isModalShown ? (
    <>
      <p>Hello</p>
    </>
  ) : (
    <>
      <main>
        <header className="intro">
          <img
            className="intro__image"
            src={introImage}
            alt="A man and a woman are looking at a black and white drawing of an elderly woman."
          />

          <h1 className="intro__title">Modern Art Gallery</h1>
          <p className="intro__desc">
            The arts in the collection of the Modern Art Gallery all started
            from a spark of inspiration. Will these pieces inspire you? Visit us
            and find out.
          </p>
          <Button />
        </header>

        <section className="showcase">
          <img
            className="showcase__image1"
            src={galleryImage1}
            alt="A room from the gallery with paintings on the wall and a display in the middle of the room."
          />
          <h2 className="showcase__title">Your Day at the Gallery</h2>
          <p className="showcase__desc">
            Wander through our distinct collections and find new insights about
            our artists. Dive into the details of their creative process.
          </p>

          <img
            className="showcase__image2"
            src={galleryImage2}
            alt="A room from the gallery with a painting on the wall and a bench in front of it."
          />
          <img
            className="showcase__image3"
            src={galleryImage3}
            alt="Visitors to the gallery are looking at paintings on the wall."
          />
          <h2 className="showcase__title">Come & Be Inspired</h2>
          <p className="showcase__desc">
            We’re excited to welcome you to our gallery and see how our
            collections influence you.
          </p>
        </section>
      </main>
      <footer>
        <p>Modern Art Gallery</p>
        <p>
          The Modern Art Gallery is free to all visitors and open seven days a
          week from 8am to 9pm. Find us at 99 King Street, Newport, USA.
        </p>
        LINKS
      </footer>
    </>
  );
};

export default App;
