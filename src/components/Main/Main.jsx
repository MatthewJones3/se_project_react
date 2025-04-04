import React, { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";

function Main({ weatherData, clothingItems, handleCardClick, onCardLike }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <main>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[currentTemperatureUnit]} &deg;
          {currentTemperatureUnit}
        </p>
        <ul className="cards__list">
          {clothingItems.length === 0 ? (
            <p>No items available.</p>
          ) : (
            clothingItems
              .filter(
                (item) =>
                  item.weather.toLowerCase() === weatherData.type.toLowerCase()
              )
              .map((item) => (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                  onCardLikes={onCardLike}
                />
              ))
          )}
        </ul>
      </section>
    </main>
  );
}

export default Main;


