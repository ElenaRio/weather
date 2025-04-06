import axios from 'axios';
import { WeatherData } from '../redux/WeatherSlice';

const API_KEY = '3a0b6ab227de80e34f4466392b5205a0';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city: string): Promise<WeatherData> => {
  try {
    const response = await axios.get<WeatherData>(BASE_URL, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        lang: 'uk',
      },
    });

    console.log('Ответ от API:', response.data);
    return response.data; 
  } catch (error: any) {
    if (error.isAxiosError) {
      if (error.response) {
    
        if (error.response.status === 404) {
          throw new Error('Такого міста не знайдено');
        }
        throw new Error(`Ошибка API: ${error.response.status} - ${error.message}`);
      } else if (error.request) {
        throw new Error('Ошибка сети: сервер не отвечает');
      }
      throw new Error(`Ошибка при запросе: ${error.message}`);
    } else {
      throw new Error('Неизвестная ошибка');
    }
  }
};