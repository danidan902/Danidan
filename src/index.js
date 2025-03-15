import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// import { reportWebVitals } from 'web-vitals';  

const reportWebVitals = (onPerfEntry) => {  
  if (onPerfEntry && onPerfEntry instanceof Function) {  
    import('web-vitals').then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {  
      getCLS(onPerfEntry);  
      getFID(onPerfEntry);  
      getLCP(onPerfEntry);  
      getFCP(onPerfEntry);  
      getTTFB(onPerfEntry);  
    });  
  }  
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
