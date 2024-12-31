export interface Coordinates {
    lon: number;  // Долгота
    lat: number;  // Широта
  }
  
  // Склонения для города
  export interface CityCases {
    vi: string;   // в [город]
    tv: string;   // [город]ом
    su: string;   // [город]
    ro: string;   // [города]
    pr: string;   // в [городе]
    da: string;   // [городу]
  }
  
  // Склонения для страны
  export interface CountryCases {
    vi: string;   // в [страну]
    tv: string;   // [страной]
    su: string;   // [страна]
    ro: string;   // [страны]
    pr: string;   // в [стране]
    da: string;   // [стране]
  }
  
  // Основная информация о городе
  export interface City {
    id: string;             // Уникальный идентификатор
    type: 'city';           // Тип (в данном случае всегда 'city')
    code: string;           // Код города
    name: string;           // Название города
    country_code: string;  // Код страны
    country_name: string;  // Название страны
    state_code: string | null; // Код штата (если есть)
    coordinates: Coordinates; // Координаты города
    index_strings: string[]; // Индексы для поиска
    weight: number;         // Вес города
    cases: CityCases;       // Склонения для города
    country_cases: CountryCases; // Склонения для страны
    main_airport_name: string | null; // Основное название аэропорта (может быть null)
  }
  
  // Ответ от API с данными о городах
  export type CoordinatesResponse = City[];