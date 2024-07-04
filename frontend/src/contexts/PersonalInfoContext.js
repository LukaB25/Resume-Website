import React, { createContext, useContext, useState, useEffect } from 'react';
import { axiosReq } from "../api/axiosDefaults";

export const PersonalInfoContext = createContext();

export const usePersonalInfo = () => useContext(PersonalInfoContext);

export const PersonalInfoProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosReq.get('/personal-info/');
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <PersonalInfoContext.Provider value={{ data }}>
      {children}
    </PersonalInfoContext.Provider>
  );
};

export default PersonalInfoContext;