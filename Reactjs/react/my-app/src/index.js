import ReactDOM from 'react-dom/client';
import React from 'react';
// import App from './App.js'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'assets/styles/globals.scss';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <h2>Hello To Reactjs</h2>
// );

// const say = <h2 className='harchi' style={{ color: 'red' }}>Hello To Reactjs</h2>;

// root.render(
//   say
// );

// const say = React.createElement('h2', { className: 'harchi', style: { color: 'red' } }, 'Hello To Reactjs');

// root.render(
//   say
// );

// const Hello = <h2 className='harchi' style={{ color: 'red' }}>Hello To Reactjs</h2>;

// root.render(
//   Hello
// );

// components

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// input to app

// root.render(
//   <React.StrictMode>
//     <App fullname={{ name: 'pouriya', family: 'sedaghat' }} gender='man' />
//   </React.StrictMode>
// );

// not good

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
// }, 1000);

// in BrowserRouter in url if /#/... not server

// root.render(
//   <HashRouter>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </HashRouter>
// );

// in BrowserRouter in url if /... server

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);