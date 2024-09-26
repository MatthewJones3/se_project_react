import "./WeatherCard.css";
import Sunny from "../../images/Sunny1.png";

function WeatherCard() {
  return (
    <section className="weather-card">
      <p className="weather-card__temp">{filterWeatherData.temp.F} &deg; F</p>
      <img src={Sunny} alt="Sunny" className="weather-card__image" />
    </section>
  );
}

export default WeatherCard;
