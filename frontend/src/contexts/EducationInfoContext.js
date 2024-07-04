import React, { createContext, useContext, useState, useEffect } from 'react';
import { axiosReq } from "../api/axiosDefaults";

export const EducationInfoContext = createContext();

export const useEducationInfo = () => useContext(EducationInfoContext);

export const EducationInfoProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosReq.get('/education/');
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