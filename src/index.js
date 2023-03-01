import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import "./index.css"


import UserCV from "./UserCVComponents/index"
import Contacts from "./ContactsComponents/index"
import Experience from "./ExperienceComponents/index"
import PersonalIngo from "./PersonalInfocomponents/index"






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div className='container'>
      <UserCV></UserCV>
      <Contacts></Contacts>
      <Experience></Experience>
      <PersonalIngo></PersonalIngo>

    </div>
  </React.StrictMode>
);
reportWebVitals();
