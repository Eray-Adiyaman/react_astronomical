import { createContext, useState } from 'react';
export const AstronomicalContext = createContext();
const axios = require("axios").default


export const AstronomicalContextProvider = ({ children }) => {
  const [apod, setApod] = useState([]);
  const [neo,setNeo] = useState();
  const [isImage,setIsImage] = useState(false);// For some reason somedays Astronomy "Picture" of the day is a video, So conditional rendering it is.
  const [news,setNews] = useState();

  const currentDay = new Date().toJSON().slice(0,10).replace(/-/g,'-');
  
  const ApodUrl =`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_API_KEY}`
  const NeoUrl = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${currentDay}&end_date=${currentDay}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
  const spaceNewsOptions = {
    method: 'GET',
    url: 'https://space-news.p.rapidapi.com/news',
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP_SPACE_NEWS_API_KEY}`,
      'X-RapidAPI-Host': 'space-news.p.rapidapi.com'
    }
  };

  const GetSpaceNews = async () => {
    await axios.request(spaceNewsOptions)
                .then((res) => {
                  if(res.status === 200){
                    if(res.data.length > 20){
                      setNews(res.data.slice(0,19))
                    }else{
                      setNews(res.data)
                    }
                  }
                })
                .catch(err => console.log(err))
  }

  const GetApod = async () => {
    await axios.get(ApodUrl)
          .then((res)=> {
            if(res.status === 200){
              setApod(res.data)
              if(res.data.media_type === "image"){
                setIsImage(true)
              }
            }})
          .catch(err => console.log(err))
          
  };

  const GetNeo = async () => {
        await axios.get(NeoUrl)
                    .then((res) => {
                      if(res.status === 200){
                          setNeo(res.data.near_earth_objects[currentDay])
                      }
                    })
                    .catch(err=> console.log(err))
    
  }

  return (
    <AstronomicalContext.Provider value={{ apod, GetApod , neo ,GetNeo,isImage,news,GetSpaceNews}}>
      {children}
    </AstronomicalContext.Provider>
  );
};
