import axios from 'axios';
import {createContext, useEffect, useState} from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({children}) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProfileData = async () => {
    const options = {
      method: 'GET',
      url: 'https://spotify23.p.rapidapi.com/user_profile/',
      params: {
        id: 'nocopyrightsounds',
        playlistLimit: '10',
        artistLimit: '10',
      },
      headers: {
        'x-rapidapi-key': 'c7ad3a1f0dmsh93d1a5f5f25a157p167b37jsn96949fa914e8',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com',
      },
    };

    try {
      const response = await axios.request(options);
      setProfileData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <ProfileContext.Provider value={{profileData, loading, error}}>
      {children}
    </ProfileContext.Provider>
  );
};
