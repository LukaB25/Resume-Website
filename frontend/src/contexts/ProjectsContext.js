import React, { createContext, useContext, useState, useEffect } from 'react';
import { axiosReq } from '../api/axiosDefaults'

export const ProjectsContext = createContext();

export const useProjects = () => useContext(ProjectsContext);

export const ProjectsProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const { data } = await axiosReq.get('/projects/');
        setData(data);
      } catch (error) {
        console.log(error)
      }
    }

    fetchProjectsData();
  }, [])

  const fetchProjectData = async (id) => {
    try {
      const { data } = await axiosReq.get(`/projects/${id}/`);
      setProject(data);
    } catch (error) {
      console.log(error)
    }
  
  }

  return (
    <ProjectsContext.Provider value={{ data, project, fetchProjectData }}>
      {children}
    </ProjectsContext.Provider>
  )
};