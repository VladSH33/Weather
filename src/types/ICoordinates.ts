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
    export interface City {
    id: string;
    type: 'city';
    code: string;
    name: string;
    country_code: string;
    country_name: string;
    state_code: string | null;
    coordinates: Coordinates;
    index_strings: string[];
    weight: number;
    cases: CityCases;
    country_cases: CountryCases;
    main_airport_name: string | null;
  }

  export type CoordinatesResponse = City[];