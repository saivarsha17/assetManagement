import './App.css';
import { IMAGES } from './images/asset';
import { CreateMarket } from './createMarket.js';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState(true);

  return (
    <>
      {modal && (
        <div>
          <CreateMarket setModal={setModal} />
        </div>
      )}

      {!modal && (
        <div className="mainContainer">
          <div className="createLotContainer">
            <div className="questionMainContainer">
              <div className="textContainer">Most Played</div>

              <img
                className="questionMarkContainer"
                alt="questionMark"
                src={IMAGES.QUESTION_MARK}
              />
            </div>
            <div className="imagesContainer">
              <img className="imageContainer" src={IMAGES.PEOPLE} alt="loop" />
              <img
                className="loopContainer"
                alt="people"
                src={IMAGES.LOOP_MARK}
              />
              <img
                className="imageContainer"
                alt="people"
                src={IMAGES.PEOPLE}
              />
            </div>
            <div className="userLotContainer">Multi-user Lot</div>
            <div className="descriptionContainer">
              In this lot multiple people will bet against you. The condition
              for the lot to start is both sides should have equal funds.
            </div>
            <div
              className="createLotButtonContainer"
              onClick={() => setModal(true)}
            >
              Create Lot
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
