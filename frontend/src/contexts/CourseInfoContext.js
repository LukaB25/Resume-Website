import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CourseInfoContext = createContext();

export const useCourseInfo = () => useContext(CourseInfoContext);

export const CourseInfoProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/courses/');
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  return (
    <CourseInfoContext.Provider value={{ data }}>
      {children}
    </CourseInfoContext.Provider>
  )
}