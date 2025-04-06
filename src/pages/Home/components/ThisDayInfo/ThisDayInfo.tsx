import styles from './ThisDayInfo.module.scss';
import temp from '../../../../assets/iconBlock/temp.svg';
import pressure from '../../../../assets/iconBlock/pressure.svg';
import precipitation from '../../../../assets/iconBlock/osadki.svg';
import wind from '../../../../assets/iconBlock/witer.svg';
import { WeatherData } from '../../../../redux/WeatherSlice';

interface Props {
  weather: WeatherData;
}
function ThisDayInfo({ weather }: Props) {
  return (
    <div className={styles.thisDayInfo}>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={temp} alt="temp" />
        </div>
        <h4>
          Температура: {Math.round(weather.main.temp)} °C, відчуття як{' '}
          {Math.round(weather.main.feels_like)} °C
        </h4>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={pressure} alt="pressure" />
        </div>

        <h4>Тиск: {weather.main.pressure} мм.рт.ст</h4>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={precipitation} alt="precipitation" />
        </div>
        <h4>Опади: {weather.weather[0].description}</h4>
      </div>
      <div className={styles.item}>
        <div className={styles.img}>
          <img src={wind} alt="wind" />
        </div>
        <h4>Вітер: {weather.wind.speed} м/с </h4>
      </div>
    </div>
  );
}

export default ThisDayInfo;
