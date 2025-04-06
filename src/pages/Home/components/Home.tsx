import styles from './Home.module.scss';
import ThisDay from './ThisDay/ThisDay';
import ThisDayInfo from './ThisDayInfo/ThisDayInfo';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../../redux/store';
import { fetchWeather } from '../../../redux/weatherThunks';

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    data: weather,
    city,
    status,
    error,
  } = useSelector((state: RootState) => state.weather);
  
  useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city));
    }
  }, [dispatch, city]);

  if (status === 'loading') {
    return <div>Завантаження...</div>;
  }

  if (status === 'failed') {
    return <div style={{ color: 'red' }}>{error}</div>;
  }
  if (!weather) return <div>Немає даних про погоду...</div>;

  return (
    <div className={styles.home}>
      <ThisDay weather={weather} />
      <ThisDayInfo weather={weather} />
    </div>
  );
}

export default Home;
