import { createAsyncThunk } from '@reduxjs/toolkit';
import { getWeather } from '../services/weaterService';
import { WeatherData } from './WeatherSlice';

interface WeatherError {
  message: string;
}

export const fetchWeather = createAsyncThunk<WeatherData, string, { rejectValue: WeatherError }>(
  'weather/fetchWeather',
  async (city: string, { rejectWithValue }) => {
    try {
      const data = await getWeather(city);
      return data;
    } catch (error: any) { 
      if (error.response?.status === 404) {
        return rejectWithValue({ message: 'Такого міста не знайдено' });
      }
      if (error instanceof Error) {
        return rejectWithValue({ message: error.message || 'Сталася помилка' });
      }
      return rejectWithValue({ message: 'Неизвестная помилка' });
    }
  }
);