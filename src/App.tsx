import { useState } from "react";

import Homepage from "./components/Homepage/Homepage";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [isModalShown, setIsModalShown] = useState(false);

  return (
    <>
      <header className="sr-only">
        <h1>Welcome to the Modern Art Gallery</h1>
      </header>
      <main>
        {isModalShown ? (
          <Modal setIsModalShown={setIsModalShown} />
        ) : (
          <Homepage setIsModalShown={setIsModalShown} />
        )}
      </main>
      <Footer isColored={isModalShown ? true : false} />
    </>
  );
};

export default App;
