import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MessengerCustomerChat from "react-messenger-customer-chat";
import 'react-loading-skeleton/dist/skeleton.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MessengerCustomerChat pageId="416585898785435" appId="<APP_ID>" />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
