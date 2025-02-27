/*import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AddItemModal from "../ModalWithForm/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import { getItems, deleteItem, addItem } from "../../utils/api";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { signup, signin, getUserData, editUserProfile } from "../../utils/auth";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpModalOpen(true);
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddClick = () => {
    if (!isLoggedIn) {
      console.error("User is not logged in. Please log in first.");
      setIsLoginModalOpen(true);
      return;
    }
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    if (!card._id) {
      console.error("Selected card is missing _id", card);
      return;
    }
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleCardDelete = async (card) => {
    if (!card._id) {
      console.error("Card is missing _id", card);
      return;
    }

    try {
      await deleteItem(card._id);
      setClothingItems((prevItems) =>
        prevItems.filter((item) => item._id !== card._id)
      );
      closeActiveModal();
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const handleAddItemSubmit = async (item) => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      console.error("No token found, please log in.");
      return;
    }

    try {
      const newItem = await addItem(item);
      setClothingItems([newItem, ...clothingItems]);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      console.error("No token found, please log in.");
      return;
    }

    !isLiked
      ? api
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);

    const fetchItems = async () => {
      try {
        const items = await getItems();
        setClothingItems(items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();

    const token = localStorage.getItem("jwt");
    if (token) {
      getUserData(token)
        .then((data) => {
          setCurrentUser(data);
          setIsLoggedIn(true);
        })
        .catch(console.error);
    }
  }, []);

  const handleRegister = (userData) => {
    signup(userData)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          console.log("JWT saved to localStorage:", res.token);
          return signin({ email: userData.email, password: userData.password });
        }
        throw new Error("Registration failed");
      })
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          return getUserData(res.token);
        }
        throw new Error("Login failed");
      })
      .then((data) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
      })
      .catch(console.error);
  };

  const handleLogin = (credentials) => {
    signin(credentials)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          console.log("JWT saved to localStorage:", res.token);
          return getUserData(res.token);
        }
        throw new Error("Login failed");
      })
      .then((data) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
        setIsLoginModalOpen(false);
      })
      .catch(console.error);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const handleEditProfileClick = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleEditProfile = async (updatedUserData) => {
    try {
      const updatedUser = await editUserProfile(updatedUserData);
      setCurrentUser(updatedUser);
      setIsEditProfileModalOpen(false);
    } catch (error) {
      console.error("Failed to update user profile", error);
    }
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <Router>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <CurrentUserContext.Provider value={currentUser}>
          <div className="page" style={{ fontFamily: "CabinetGrotesk" }}>
            <div className="page__content">
              <Header
                handleAddClick={handleAddClick}
                weatherData={weatherData}
                isLoggedIn={isLoggedIn}
                user={currentUser}
                onLogout={handleLogout}
                onLoginClick={handleLoginClick}
                onSignUpClick={handleSignUpClick}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      weatherData={weatherData}
                      clothingItems={clothingItems}
                      handleCardClick={handleCardClick}
                      onCardLike={handleCardLike}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    isLoggedIn ? (
                      <Profile
                        clothingItems={clothingItems}
                        onCardClick={handleCardClick}
                        handleAddClick={handleAddClick}
                        onEditProfileClick={handleEditProfileClick}
                      />
                    ) : (
                      <div>Please log in to view your profile.</div>
                    )
                  }
                />
              </Routes>
            </div>
            <AddItemModal
              isOpen={activeModal === "add-garment"}
              onAddItem={handleAddItemSubmit}
              onCloseModal={closeActiveModal}
            />
            <ItemModal
              isOpen={activeModal === "preview"}
              activeModal={activeModal}
              item={selectedCard}
              onClose={closeActiveModal}
              onDelete={handleCardDelete}
            />
            <EditProfileModal
              isOpen={isEditProfileModalOpen}
              onClose={() => setIsEditProfileModalOpen(false)}
              currentUser={currentUser}
              onEditProfile={handleEditProfile}
            />
            {isLoginModalOpen && (
              <LoginModal
                onLogin={handleLogin}
                onClose={() => setIsLoginModalOpen(false)}
                onRegister={() => {
                  setIsLoginModalOpen(false);
                  setIsSignUpModalOpen(true);
                }}
              />
            )}
            {isSignUpModalOpen && (
              <SignUpModal
                onSignUp={handleRegister}
                onClose={() => setIsSignUpModalOpen(false)}
              />
            )}
            <Footer />
          </div>
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </Router>
  );
}

export default App;*/

import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { coordinates, APIkey } from "../../utils/constants";
import Header from "../Header/Header";
import Main from "../Main/Main";
import AddItemModal from "../ModalWithForm/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import { getItems, deleteItem, addItem } from "../../utils/api";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { signup, signin, getUserData, editUserProfile } from "../../utils/auth";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import LoginModal from "../LoginModal/LoginModal";
import SignUpModal from "../SignUpModal/SignUpModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpModalOpen(true);
  };

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleAddClick = () => {
    if (!isLoggedIn) {
      console.error("User is not logged in. Please log in first.");
      setIsLoginModalOpen(true);
      return;
    }
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleCardClick = (card) => {
    if (!card._id) {
      console.error("Selected card is missing _id", card);
      return;
    }
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleCardDelete = async (card) => {
    if (!card._id) {
      console.error("Card is missing _id", card);
      return;
    }

    try {
      await deleteItem(card._id);
      setClothingItems((prevItems) =>
        prevItems.filter((item) => item._id !== card._id)
      );
      closeActiveModal();
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const handleAddItemSubmit = async (item) => {
    const token = localStorage.getItem("jwt");

    if (!token) {
      console.error("No token found, please log in.");
      return;
    }

    try {
      const newItem = await addItem(item);
      setClothingItems([newItem, ...clothingItems]);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      console.error("No token found, please log in.");
      return;
    }

    !isLiked
      ? api
          .addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : api
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);

    const fetchItems = async () => {
      try {
        const items = await getItems();
        setClothingItems(items);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();

    const token = localStorage.getItem("jwt");
    if (token) {
      getUserData(token)
        .then((data) => {
          setCurrentUser(data);
          setIsLoggedIn(true);
        })
        .catch(console.error);
    }
  }, []);

  const handleRegister = (userData) => {
    console.log("Registering with data:", userData);

    signup(userData)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          console.log("JWT saved to localStorage:", res.token);
          return signin({ email: userData.email, password: userData.password });
        }
        throw new Error("Registration failed");
      })
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          return getUserData(res.token);
        }
        throw new Error("Login failed");
      })
      .then((data) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
      })
      .catch(console.error);
  };

  const handleLogin = (credentials) => {
    signin(credentials)
      .then((res) => {
        if (res.token) {
          localStorage.setItem("jwt", res.token);
          console.log("JWT saved to localStorage:", res.token);
          return getUserData(res.token);
        }
        throw new Error("Login failed");
      })
      .then((data) => {
        setCurrentUser(data);
        setIsLoggedIn(true);
        setIsLoginModalOpen(false);
      })
      .catch(console.error);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setIsLoggedIn(false);
  };

  const handleEditProfileClick = () => {
    setIsEditProfileModalOpen(true);
  };

  const handleEditProfile = async (updatedUserData) => {
    try {
      const updatedUser = await editUserProfile(updatedUserData);
      setCurrentUser(updatedUser);
      setIsEditProfileModalOpen(false);
    } catch (error) {
      console.error("Failed to update user profile", error);
    }
  };

  const handleLoginClick = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <Router>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <CurrentUserContext.Provider value={currentUser}>
          <div className="page" style={{ fontFamily: "CabinetGrotesk" }}>
            <div className="page__content">
              <Header
                handleAddClick={handleAddClick}
                weatherData={weatherData}
                isLoggedIn={isLoggedIn}
                user={currentUser}
                onLogout={handleLogout}
                onLoginClick={handleLoginClick}
                onSignUpClick={handleSignUpClick}
              />
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      weatherData={weatherData}
                      clothingItems={clothingItems}
                      handleCardClick={handleCardClick}
                      onCardLike={handleCardLike}
                    />
                  }
                />
                <Route
                  path="/profile"
                  element={
                    isLoggedIn ? (
                      <Profile
                        clothingItems={clothingItems}
                        onCardClick={handleCardClick}
                        handleAddClick={handleAddClick}
                        onEditProfileClick={handleEditProfileClick}
                      />
                    ) : (
                      <div>Please log in to view your profile.</div>
                    )
                  }
                />
              </Routes>
            </div>
            <AddItemModal
              isOpen={activeModal === "add-garment"}
              onAddItem={handleAddItemSubmit}
              onCloseModal={closeActiveModal}
            />
            <ItemModal
              isOpen={activeModal === "preview"}
              activeModal={activeModal}
              item={selectedCard}
              onClose={closeActiveModal}
              onDelete={handleCardDelete}
            />
            <EditProfileModal
              isOpen={isEditProfileModalOpen}
              onClose={() => setIsEditProfileModalOpen(false)}
              currentUser={currentUser}
              onEditProfile={handleEditProfile}
            />
            {isLoginModalOpen && (
              <LoginModal
                onLogin={handleLogin}
                onClose={() => setIsLoginModalOpen(false)}
                onRegister={() => {
                  setIsLoginModalOpen(false);
                  setIsSignUpModalOpen(true);
                }}
              />
            )}
            {isSignUpModalOpen && (
              <SignUpModal
                onSignUp={handleRegister}
                onClose={() => setIsSignUpModalOpen(false)}
              />
            )}
            <Footer />
          </div>
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </Router>
  );
}

export default App;
