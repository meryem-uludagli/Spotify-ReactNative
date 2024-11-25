import axios from 'axios';
import {createContext, useState, useEffect} from 'react';

export const AlbumContext = createContext();

export const AlbumProvider = ({children}) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/search/',
      params: {
        q: 'turkey',
        type: 'multi',
        offset: '0',
        limit: '10',
        numberOfTopResults: '5',
      },
      headers: {
        'x-rapidapi-key': 'c7ad3a1f0dmsh93d1a5f5f25a157p167b37jsn96949fa914e8',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      },
    };
    try {
      const response = await axios.request(options);
      const albumItems = response.data?.albums?.items?.map(item => ({
        uri: item.data.uri,
        name: item.data.name,
        artist: item.data.artists.items[0].profile.name,
        coverArt: item.data.coverArt.sources[0].url,
        year: item.data.date.year,
      }));
      setAlbums(albumItems);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <AlbumContext.Provider value={{albums, loading, error}}>
      {children}
    </AlbumContext.Provider>
  );
};
