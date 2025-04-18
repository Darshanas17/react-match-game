import { Component } from "react";
import "./App.css";

const tabsList = [
  { tabId: "FRUIT", displayText: "Fruits" },
  { tabId: "ANIMAL", displayText: "Animals" },
  { tabId: "PLACE", displayText: "Places" },
];
const imagesList = [
  {
    id: "b11ec8ce-35c9-4d67-a7f7-07516d0d8186",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/orange-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/orange-thumbnail-img.png",
    category: "FRUIT",
  },
  {
    id: "04ac6b9f-b7e7-45f7-a8fc-fd48f3f72526",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/panda-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/panda-thumbnail-img.png",
    category: "ANIMAL",
  },
  {
    id: "a132f546-5b2b-4c0d-b9e4-e524bdf904cc",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/zebra-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/zebra-thumbnail-img.png",
    category: "ANIMAL",
  },
  {
    id: "d89386da-94db-4275-9cb5-249c6e071a19",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/paris-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/paris-thumbnail-img.png",
    category: "PLACE",
  },
  {
    id: "d810bbb0-1683-407a-8db6-898fe7b75782",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/giraffe-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/giraffe-thumbnail-img.png",
    category: "ANIMAL",
  },
  {
    id: "176aab62-e86a-4ccd-8b89-5b83c3f02506",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/taj-mahal-thumbnail-img.png",
    category: "PLACE",
  },
  {
    id: "0e8daf1b-45b0-4eb0-9dde-383fede78a9b",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/monkey-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/monkey-thumbnail-img.png",
    category: "ANIMAL",
  },
  {
    id: "1a38bf4a-659d-4470-956c-56c1bedd26ac",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/cheetah-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/cheetah-thumbnail-img.png",
    category: "ANIMAL",
  },
  {
    id: "8f2ebd70-4fdd-47a0-b4f9-a6c654b519ab",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/ooti-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/ooti-thumbnail-img.png",
    category: "PLACE",
  },
  {
    id: "7a72c38e-a83d-48eb-b9ce-ae3c0361cc49",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/pineapple-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/pineapple-thumbnail-img.png",
    category: "FRUIT",
  },
  {
    id: "97a33ed5-98ed-4c95-a8f0-1595880b3b69",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/strawberry-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/strawberry-thumbnail-img.png",
    category: "FRUIT",
  },
  {
    id: "07e20159-a950-4c22-9ca8-5ed71563ae24",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/maldives-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/maldives-thumbnail-img.png",
    category: "PLACE",
  },
  {
    id: "43883239-8a28-47dc-9e93-43ef31654c17",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/emerald-lake-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/emerald-thumbnail-lake-img.png",
    category: "PLACE",
  },
  {
    id: "49865ac4-b5e8-4d04-893b-d69ad6004da8",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/watermelon-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/watermelon-thumbnail-img.png",
    category: "FRUIT",
  },
  {
    id: "649ab251-7fd6-4d65-aa0f-39020ce25932",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/elephant-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/elephant-thumbnail-img.png",
    category: "ANIMAL",
  },
  {
    id: "1d0d1c41-e05e-4820-8614-34ee5ada20e0",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/jammu-hills-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/jammu-thumbnail-hills-img.png",
    category: "PLACE",
  },
  {
    id: "88b4ab36-a0c1-4c56-9ce5-3b80dd8c7669",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/fierce-coyote-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/fierce-thumbnail-coyote-img.png",
    category: "ANIMAL",
  },
  {
    id: "8a841bf8-3222-44da-b0fb-4c60190402d7",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/lidder-valley-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/lidder-thumbnail-valley-img.png",
    category: "PLACE",
  },
  {
    id: "d406e63c-eaaf-49ea-88a6-ed6a1572eb97",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/kivi-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/kivi-thumbnail-img.png",
    category: "FRUIT",
  },
  {
    id: "e997ebf9-9a47-4b7e-9035-01ae372d73dc",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/dragon-fruit-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/dragon-thumbnail-fruit-img.png",
    category: "FRUIT",
  },
  {
    id: "c7fbe10e-3282-4fca-815b-91b75d5228cb",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/match-game/goa-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/goa-thumbnail-img.png",
    category: "PLACE",
  },
  {
    id: "4210274c-7304-44d6-8690-c5251252cd10",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/papaya-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/papaya-thumbnail-img.png",
    category: "FRUIT",
  },
  {
    id: "057b6193-a80d-4036-9e6e-fe847c99fbb6",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/mixed-fruits-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/mixed-thumbnail-fruits-img.png",
    category: "FRUIT",
  },
  {
    id: "4e56c59b-835b-4802-87fe-77aaaa5b9526",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/match-game/fox-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/fox-thumbnail-img.png",
    category: "ANIMAL",
  },
  {
    id: "ad75a7b1-0875-4700-977b-2c45924509aa",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/lotus-temple-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/lotus-thumbnail-temple-img.png",
    category: "PLACE",
  },
  {
    id: "525aba17-ed5c-4f09-ad1c-b6bff222c97a",
    imageUrl: "https://assets.ccbp.in/frontend/react-js/match-game/dog-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/dog-thumbnail-img.png",
    category: "ANIMAL",
  },
  {
    id: "c6c66b00-c130-47d2-9d3a-1c3378d08aba",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/apple-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/apple-thumbnail-img.png",
    category: "FRUIT",
  },
  {
    id: "6078b408-4f10-46d3-8815-db14403dbd73",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/bhadrinath-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/bhadrinath-thumbnail-img.png",
    category: "PLACE",
  },
  {
    id: "a2baca84-3beb-49d1-bced-f9a88c161bec",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/camel-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/camel-thumbnail-img.png",
    category: "ANIMAL",
  },
  {
    id: "1edac278-8390-4da9-b914-5f41fb49283c",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/cherry-img.png",
    thumbnailUrl:
      "https://assets.ccbp.in/frontend/react-js/match-game/cherry-thumbnail-img.png",
    category: "FRUIT",
  },
];
const GAME_DURATION = 60;
const TIME_BONUS = 2;

class App extends Component {
  state = {
    score: 0,
    activeTabId: "FRUIT",
    currentMainImage: imagesList[0],
    isGameRunning: true,
    timeLeft: GAME_DURATION,
    gameOver: false,
  };

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps, prevState) {
    const { timeLeft, isGameRunning } = this.state;
    if (timeLeft === 0 && isGameRunning) {
      this.endGame();
    }
  }

  componentWillUnmount() {
    this.clearTimer();
  }

  startTimer = () => {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeLeft: Math.max(0, prevState.timeLeft - 1),
      }));
    }, 1000);
  };

  clearTimer = () => {
    clearInterval(this.timer);
  };

  endGame = () => {
    this.clearTimer();
    this.setState({ isGameRunning: false, gameOver: true });
  };

  handleTabClick = (tabId) => {
    this.setState({ activeTabId: tabId });
  };

  getFilteredImages = () => {
    const { activeTabId } = this.state;
    return imagesList.filter((image) => image.category === activeTabId);
  };

  getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imagesList.length);
    return imagesList[randomIndex];
  };

  handleThumbnailClick = (id) => {
    const { currentMainImage } = this.state;

    if (currentMainImage.id === id) {
      this.setState((prevState) => ({
        score: prevState.score + 1,
        timeLeft: Math.min(GAME_DURATION, prevState.timeLeft + TIME_BONUS),
        currentMainImage: this.getRandomImage(),
      }));
    } else {
      this.endGame();
    }
  };

  resetGame = () => {
    this.setState(
      {
        score: 0,
        activeTabId: "FRUIT",
        currentMainImage: imagesList[0],
        isGameRunning: true,
        timeLeft: GAME_DURATION,
        gameOver: false,
      },
      this.startTimer
    );
  };

  renderNavbar = () => {
    const { score, timeLeft } = this.state;

    return (
      <nav className="navbar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="logo"
        />
        <div className="score-timer-container">
          <div className="score-container">
            <p className="score-label">Score:</p>
            <span className="score-value">{score}</span>
          </div>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-icon"
            />
            <span className="time-left">{timeLeft} sec</span>
          </div>
        </div>
      </nav>
    );
  };

  renderGameView = () => {
    const { activeTabId, currentMainImage } = this.state;
    const filteredImages = this.getFilteredImages();

    return (
      <div className="game-view">
        <div className="main-image-container">
          <img
            src={currentMainImage.imageUrl}
            alt="match"
            className="main-image"
          />
        </div>

        <ul className="tabs">
          {tabsList.map((tab) => (
            <li key={tab.tabId}>
              <button
                type="button"
                className={`tab-btn ${
                  activeTabId === tab.tabId ? "active" : ""
                }`}
                onClick={() => this.handleTabClick(tab.tabId)}
              >
                {tab.displayText}
              </button>
            </li>
          ))}
        </ul>

        <ul className="thumbnails-grid">
          {filteredImages.map((image) => (
            <li key={image.id}>
              <button
                type="button"
                className="thumbnail-btn"
                onClick={() => this.handleThumbnailClick(image.id)}
              >
                <img
                  src={image.thumbnailUrl}
                  alt="thumbnail"
                  className="thumbnail-img"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  renderScoreCard = () => {
    const { score } = this.state;

    return (
      <div className="score-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="trophy"
          className="trophy-img"
        />
        <p className="score-title">YOUR SCORE</p>
        <p className="final-score">{score}</p>
        <button
          className="play-again-btn"
          type="button"
          onClick={this.resetGame}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
            className="reset-icon"
          />
          PLAY AGAIN
        </button>
      </div>
    );
  };

  render() {
    const { isGameRunning } = this.state;

    return (
      <div className="app-container">
        {this.renderNavbar()}

        <main className="game-container">
          {isGameRunning ? this.renderGameView() : this.renderScoreCard()}
        </main>
      </div>
    );
  }
}

export default App;
