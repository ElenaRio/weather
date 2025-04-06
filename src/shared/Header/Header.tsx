import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../redux/ThemeSlice'; 
import { RootState } from '../../redux/store';

import CreatableSelect from 'react-select/creatable';
import { AppDispatch } from '../../redux/store';
import { fetchWeather } from '../../redux/weatherThunks';
import { setCity } from '../../redux/WeatherSlice';
import styles from './Header.module.scss';
import logo from '../../assets/images/sun.svg';
import changeTheme from '../../assets/images/d-n.png';


function Header() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      dispatch(setTheme(savedTheme));
    }
  }, [dispatch]);

  
  const handleChangeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    dispatch(setTheme(newTheme));

    localStorage.setItem('theme', newTheme);
  };
  
  const cities = [
    { value: 'Київ', label: 'Київ' },
    { value: 'Львів', label: 'Львів' },
    { value: 'Одеса', label: 'Одеса' },
    { value: 'Харків', label: 'Харків' },
    { value: 'Дніпро', label: 'Дніпро' },
    { value: 'Запоріжжя', label: 'Запоріжжя' },
    { value: 'Донецьк', label: 'Донецьк' },
    { value: 'Херсон', label: 'Херсон' },
    { value: 'Миколаїв', label: 'Миколаїв' },
    { value: 'Черкаси', label: 'Черкаси' },
    { value: 'Чернігів', label: 'Чернігів' },
    { value: 'Полтава', label: 'Полтава' },
    { value: 'Суми', label: 'Суми' },
    { value: 'Рівне', label: 'Рівне' },
    { value: 'Вінниця', label: 'Вінниця' },
    { value: 'Івано-Франківськ', label: 'Івано-Франківськ' },
    { value: 'Тернопіль', label: 'Тернопіль' },
    { value: 'Ужгород', label: 'Ужгород' },
    { value: 'Кропивницький', label: 'Кропивницький' },
    { value: 'Чернівці', label: 'Чернівці' },
    { value: 'Луцьк', label: 'Луцьк' },
    { value: 'Жовті Води', label: 'Жовті Води' },
    { value: 'Краматорськ', label: 'Краматорськ' },
    { value: 'Біла Церква', label: 'Біла Церква' },
    { value: 'Хмельницький', label: 'Хмельницький' },
    { value: 'Маріуполь', label: 'Маріуполь' },
    { value: 'Трускавець', label: 'Трускавець' },
  ];
  const colorStyles = {
    control: (baseStyles: any) => ({
      ...baseStyles,
      backgroundColor: theme === 'light' ? '#c3e0ff' : '#fff',
      width: '220px',
      height: '38px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (baseStyles: any) => ({
      ...baseStyles,
      color: '#000',
    }),
    placeholder: (baseStyles: any) => ({
      ...baseStyles,
      color: '#000',
      fontStyle: 'italic',
      fontSize: '14px',
    }),
    dropdownIndicator: (baseStyles: any) => ({
      ...baseStyles,
      color: '#000',
    }),
    indicatorSeparator: (baseStyles: any) => ({
      ...baseStyles,
      backgroundColor: '#000',
    }),
  };

  useEffect(() => {
    const root = document.querySelector(':root') as HTMLElement;

    const components = [
      'container-background',
      'components-background',
      'card-background',
      'card-shadow',
      'text-color',
    ];
    components.forEach((comp) => {
      root.style.setProperty(`--${comp}-default`, `var(--${comp}-${theme})`);
    });
  }, [theme]);

  const handleCityChange = (selectedOption: { value: string; label: string } | null) => {
    if (selectedOption) {
      const city = selectedOption.value;
      dispatch(setCity(city));
      dispatch(fetchWeather(city));
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
        <img src={logo} alt="Header Logo" />
        </div>
        <div className={styles.title}>Weather</div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.change_theme} onClick={handleChangeTheme}>
        <img src={changeTheme} alt="change_theme"/>
        </div>
        <CreatableSelect
          options={cities}
          styles={colorStyles}
          onChange={handleCityChange}
          placeholder="Введіть місто..."
          isClearable
        />
      </div>
    </header>
  );
}

export default Header;
