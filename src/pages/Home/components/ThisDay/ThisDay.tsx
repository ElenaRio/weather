import { WeatherData } from '../../../../redux/WeatherSlice';
import styles from './ThisDay.module.scss';

interface Props {
  weather: WeatherData;
}

function ThisDay({ weather }: Props) {
  const temperature = Math.round(weather.main.temp);
  const description = weather.weather[0].description;
  const updateTime = new Date(weather.dt * 1000).toLocaleTimeString('uk-UA', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const iconCode = weather.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className={styles.thisDay}>
      <div className={styles.topBlock}>
        <div className={styles.wrapper}>
          <div className={styles.temp}>{temperature}°</div>
          <div className={styles.day}>Сьогодні</div>
        </div>
        <div className={styles.wrapper2}>
          <img src={iconUrl} alt={description} width={50} height={50} />
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.bottonBlock}>
        <div className={styles.time}>
          Оновлення: <span>{updateTime}</span>
        </div>
        <div className={styles.city}>
          Місто: <span>{weather.name}</span>
        </div>
      </div>
    </div>
  );
}

export default ThisDay;
