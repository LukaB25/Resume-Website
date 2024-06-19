import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const EducationInfoContext = createContext();

export const useEducationInfo = () => useContext(EducationInfoContext);

export const EducationInfoProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/education/');
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <EducationInfoContext.Provider value={{ data }}>
      {children}
    </EducationInfoContext.Provider>
  );
};