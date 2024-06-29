import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TechnicalSkillsContext = createContext();
export const GeneralSkillsContext = createContext();

export const useTechnicalSkills = () => useContext(TechnicalSkillsContext);
export const useGeneralSkills = () => useContext(GeneralSkillsContext);

export const SkillsProvider = ({ children }) => {
  const [technicalSkills, setTechnicalSkills] = useState(null);
  const [generalSkills, setGeneralSkills] = useState(null);

  useEffect(() => {
    const fetchTechnicalSkillsData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/technical-skill/');
        setTechnicalSkills(data);
      } catch (error) {
        console.log(error)
      };
    }
    const fetchGeneralSkillsData = async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/api/general-skill/');
        setGeneralSkills(data);
      } catch (error) {
        console.log(error)
      }
    };
    fetchTechnicalSkillsData();
    fetchGeneralSkillsData();
  }, []);

  return (
    <TechnicalSkillsContext.Provider value={{ technicalSkills }}>
      <GeneralSkillsContext.Provider value={{ generalSkills }}>
        {children}
      </GeneralSkillsContext.Provider>
    </TechnicalSkillsContext.Provider>
  );
}