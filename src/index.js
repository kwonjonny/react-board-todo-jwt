import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './routers/root';
import { Provider } from 'react-redux';
import Store from './store/store';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(

  // redux 툴킷 
  // 스토어를 쓰기위해 Provider 임포트 후 Store를 정의 
  <Provider store={Store}>

    <RouterProvider router={router}>
      <App />
    </RouterProvider>

  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
