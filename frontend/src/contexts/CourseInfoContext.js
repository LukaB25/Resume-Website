import React, { createContext, useContext, useState, useEffect } from 'react';
import { axiosReq } from "../api/axiosDefaults";

export const CourseInfoContext = createContext();

export const useCourseInfo = () => useContext(CourseInfoContext);

export const CourseInfoProvider = ({ children }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosReq.get('/courses/');
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