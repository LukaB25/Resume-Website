import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ExperienceInfoContext = createContext();

export const useExperienceInfo = () => useContext(ExperienceInfoContext);

export const ExperienceInfoProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/experience/');
        setData(data);
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, []);

  return (
    <ExperienceInfoContext.Provider value={{ data }}>
      {children}
    </ExperienceInfoContext.Provider>
  );
};