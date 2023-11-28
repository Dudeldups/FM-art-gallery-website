import introImageDesktop from "/assets/images/desktop/image-hero@2x.jpg";
import introImageTablet from "/assets/images/tablet/image-hero@2x.jpg";
import introImageMobile from "/assets/images/mobile/image-hero@2x.jpg";
import introImageBase from "/assets/images/mobile/image-hero.jpg";

import galleryImage1Desktop from "/assets/images/desktop/image-grid-1@2x.jpg";
import galleryImage1Tablet from "/assets/images/tablet/image-grid-1@2x.jpg";
import galleryImage1Mobile from "/assets/images/mobile/image-grid-1@2x.jpg";
import galleryImage1Base from "/assets/images/mobile/image-grid-1.jpg";

import galleryImage2Desktop from "/assets/images/desktop/image-grid-2@2x.jpg";
import galleryImage2Tablet from "/assets/images/tablet/image-grid-2@2x.jpg";
import galleryImage2Mobile from "/assets/images/mobile/image-grid-2@2x.jpg";
import galleryImage2Base from "/assets/images/mobile/image-grid-2.jpg";

import galleryImage3Desktop from "/assets/images/desktop/image-grid-3@2x.jpg";
import galleryImage3Tablet from "/assets/images/tablet/image-grid-3@2x.jpg";
import galleryImage3Mobile from "/assets/images/mobile/image-grid-3@2x.jpg";
import galleryImage3Base from "/assets/images/mobile/image-grid-3.jpg";

import Button from "../Button/Button";

import "./Homepage.scss";

interface HomepageProps {
  setIsModalShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Homepage({ setIsModalShown }: HomepageProps) {
  return (
    <>
      <header className="intro-container">
        <div className="intro">
          <picture className="intro__image">
            <source srcSet={introImageDesktop} media="(min-width: 61.25rem)" />
            <source srcSet={introImageTablet} media="(min-width: 43.75rem)" />
            <source srcSet={introImageMobile} media="(min-width: 23.5rem)" />

            <img
              src={introImageBase}
              alt="A man and a woman are looking at a black and white drawing of an elderly woman."
            />
          </picture>

          <h2 className="intro__title">Modern Art Gallery</h2>
          <div className="intro__text">
            <p className="intro__desc">
              The arts in the collection of the Modern Art Gallery all started
              from a spark of inspiration. Will these pieces inspire you? Visit
              us and find out.
            </p>
            <Button setIsModalShown={setIsModalShown} isPrimary={true} />
          </div>
        </div>
      </header>

      <section className="gallery">
        <div className="gallery__container1">
          <picture className="gallery__image1">
            <source
              srcSet={galleryImage1Desktop}
              media="(min-width: 61.25rem)"
            />
            <source
              srcSet={galleryImage1Tablet}
              media="(min-width: 43.75rem)"
            />
            <source srcSet={galleryImage1Mobile} media="(min-width: 23.5rem)" />

            <img
              src={galleryImage1Base}
              alt="A room from the gallery with paintings on the wall and a display in the middle of the room."
            />
          </picture>

          <div className="gallery__text text1">
            <h2 className="gallery__title">Your Day at the Gallery</h2>
            <p className="gallery__desc">
              Wander through our distinct collections and find new insights
              about our artists. Dive into the details of their creative
              process.
            </p>
          </div>
        </div>

        <div className="gallery__container2">
          <picture className="gallery__image2">
            <source
              srcSet={galleryImage2Desktop}
              media="(min-width: 61.25rem)"
            />
            <source
              srcSet={galleryImage2Tablet}
              media="(min-width: 43.75rem)"
            />
            <source srcSet={galleryImage2Mobile} media="(min-width: 23.5rem)" />

            <img
              src={galleryImage2Base}
              alt="An abstract painting on the wall and a bench in front of it."
            />
          </picture>

          <picture className="gallery__image3">
            <source
              srcSet={galleryImage3Desktop}
              media="(min-width: 61.25rem)"
            />
            <source
              srcSet={galleryImage3Tablet}
              media="(min-width: 43.75rem)"
            />
            <source srcSet={galleryImage3Mobile} media="(min-width: 23.5rem)" />

            <img
              src={galleryImage3Base}
              alt="Visitors to the gallery are looking at paintings on the wall."
            />
          </picture>

          <div className="gallery__blackTextBox">
            <h2 className="gallery__title">Come & Be Inspired</h2>
            <p className="gallery__desc">
              We’re excited to welcome you to our gallery and see how our
              collections influence you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
