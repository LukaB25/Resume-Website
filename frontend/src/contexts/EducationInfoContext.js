import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const EducationInfoContext = createContext();

export const useEducationInfo = () => useContext(EducationInfoContext);

export const EducationInfoProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('https://8000-lukab25-resumewebsite-qp04gn2ibi2.ws.codeinstitute-ide.net/api/education/');
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