import { createContext, useState } from 'react';

export const AstronomicalContext = createContext();

export const AstronomicalContextProvider = ({ children }) => {
  const [apod, setApod] = useState([]);

  const GetApod = async () => {
    const respose = await fetch(
      'https://api.nasa.gov/planetary/apod?api_key=N148PrPpMtg6JIQHO94k942Lpb3YbN9BNl9uwV7g'
    );
    const json = await respose.json();
    if (respose.ok) {
      setApod(json);
    }
  };

  return (
    <AstronomicalContext.Provider value={{ apod, GetApod }}>
      {children}
    </AstronomicalContext.Provider>
  );
};
