import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersonalInfoProvider } from './contexts/PersonalInfoContext';
import { EducationInfoProvider } from './contexts/EducationInfoContext';
import { CourseInfoProvider } from './contexts/CourseInfoContext';
import { ExperienceInfoProvider } from './contexts/ExperienceInfoContext';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PersonalInfoProvider>
        <EducationInfoProvider>
          <CourseInfoProvider>
            <ExperienceInfoProvider>
              <App />
            </ExperienceInfoProvider>
          </CourseInfoProvider>
        </EducationInfoProvider>
      </PersonalInfoProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
