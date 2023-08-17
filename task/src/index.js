import React,{ Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoadingPage from './components/loadingPage/loadingPage';

const Lazy = lazy(()=>import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<LoadingPage/>}>
    <Provider store={store}>
    <Lazy />
    </Provider>
    </Suspense>
  </React.StrictMode>
);

