// function App() {
//   return (
//       <h2 className='harchi' style={{ color: 'blue' }}>Hello To Reactjs</h2>
//       <h2 className='harchi' style={{ color: 'green' }}>Very Good</h2>
//   );
// }

// export default App; //error

// function App() {
//   return (
//     <div>
//       <h2 className='harchi' style={{ color: 'blue' }}>Hello To Reactjs</h2>
//       <h2 className='harchi' style={{ color: 'green' }}>Very Good</h2>
//     </div>
//   );
// }

// export default App;

// import React from "react";

// function App() {
//   return (
//     <React.Fragment>
//       <h2 className='harchi' style={{ color: 'blue' }}>Hello To Reactjs</h2>
//       <h2 className='harchi' style={{ color: 'green' }}>Very Good</h2>
//     </React.Fragment>
//   );
// }

// export default App;

// function App(props) {

//   const { fullname, gender } = props;

//   return (
//     <>
//       <h2 className='harchi' style={{ color: 'blue' }}>Hello To Reactjs, {fullname.name} {fullname.family}</h2>
//       <h2 className='harchi' style={{ color: 'green' }}>Very Good, {gender}</h2>
//     </>
//   );
// }

// export default App;

// input to component

// defined other component

// const About = function () {
//   return (
//     <>
//       <h2>About Page</h2>
//     </>
//   );
// }
// const Contact = function () {
//   return (
//     <>
//       <h2>Contact Page</h2>
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <About />
//       <Contact />
//     </>
//   );
// }

// export default App;

// optimization

// import About from "./About";
// import Contact from "./Contact";

// function App() {
//   return (
//     <>
//       <About />
//       <Contact />
//     </>
//   );
// }

// export default App;

// digital colck
// value theme product by redux

// import { Routes, Route } from 'react-router-dom';
// import HomePage from 'pages/Home';
// import Clock from 'pages/Clock';
// import Counter from 'pages/Counter';
// import Lists from 'pages/Lists';
// import ButtonStatus from 'pages/ButtonStatus';
// import ToDo from 'pages/ToDo';
// import Axios from 'pages/Axios';
// import ProductsPage from 'pages/Products';
// import UserPage from 'pages/User';
// import AccountPage from 'pages/Account';
// import ProfilePage from 'pages/Profiles';
// import Contact from 'pages/Contact';
// import { MyThemeContext, themes } from 'context/myThemeContext';
// import { useSelector } from 'react-redux';

// function App() {

//   const { theme } = useSelector(state => state.themeReducer);

//   return (
//     <>
//       <MyThemeContext.Provider value={themes[theme]}> {/* value for change context */}
//         <Routes>
//           {/* <Route index element={<HomePage/>}/> */}
//           <Route path='/' element={<HomePage />} /> {/* static route */}
//           <Route path='/todo' element={<ToDo />} /> {/* static route */}
//           <Route path='/todo/lists' element={<Lists />} /> {/* nested static route */}

//           <Route path='/todo/:id' element={<Axios />} /> {/* dynamic route */}
//           <Route path='/todo/:id/:pid' element={<Contact />} /> {/* nested dynamic route */}

//           {/* slug */}

//           <Route path='/products' element={<ProductsPage />} >
//             {/* <Route path=':pid' element={<ProductsPage />} />  child : /products/harchi ,NOT nested 
//           <Route path=':pid/:slug' element={<ProductsPage />} />  child : /products/harchi ,NOT nested */}
//             <Route path=':slug' /> child : /products/harchi ,NOT nested
//           </Route>

//           {/* Outlet */}

//           <Route path='/user' element={<UserPage />} >
//             <Route path='account' element={<AccountPage />} />
//             <Route path='profile' element={<ProfilePage />} />
//           </Route>
//         </Routes>
//       </MyThemeContext.Provider>

//       {/* <Clock /> */}
//       {/* <Counter /> */}
//       {/* <Lists /> */}
//       {/* <ButtonStatus /> */}
//       {/* <ToDo /> */}
//       {/* <Axios /> */}
//     </>
//   );
// }

// export default App;

// value theme product by content

import { Routes, Route } from 'react-router-dom';
import HomePage from 'pages/Home';
import Clock from 'pages/Clock';
import Counter from 'pages/Counter';
import Lists from 'pages/Lists';
import ButtonStatus from 'pages/ButtonStatus';
import ToDo from 'pages/ToDo';
import Axios from 'pages/Axios';
import ProductsPage from 'pages/Products';
import UserPage from 'pages/User';
import AccountPage from 'pages/Account';
import ProfilePage from 'pages/Profiles';
import Contact from 'pages/Contact';
import { MyThemeContext, themes } from 'context/myThemeContext';
import { StateContext } from 'context/stateContext';
import { useState } from 'react';
import Template from 'template';
import ReducerPage from 'pages/Reducer';
import Ref from 'pages/Ref';
import MemoPage from 'pages/MemoPage';
import CallbackPage from 'pages/CallbackPage';

function App() {

  const [state, setState] = useState('light');

  return (
    <>
      <StateContext.Provider value={{ state, setState }}>
        <MyThemeContext.Provider value={themes[state]}> {/* value for change context */}
          <Template>
            <Routes>
              {/* <Route index element={<HomePage/>}/> */}
              <Route path='/' element={<HomePage />} /> {/* static route */}
              <Route path='/todo' element={<ToDo />} /> {/* static route */}
              <Route path='/todo/lists' element={<Lists />} /> {/* nested static route */}

              <Route path='/todo/:id' element={<Axios />} /> {/* dynamic route */}
              <Route path='/todo/:id/:pid' element={<Contact />} /> {/* nested dynamic route */}

              {/* slug */}

              <Route path='/products' element={<ProductsPage />} >
                {/* <Route path=':pid' element={<ProductsPage />} />  child : /products/harchi ,NOT nested 
          <Route path=':pid/:slug' element={<ProductsPage />} />  child : /products/harchi ,NOT nested */}
                <Route path=':slug' /> child : /products/harchi ,NOT nested
              </Route>

              {/* Outlet */}

              <Route path='/user' element={<UserPage />} >
                <Route path='account' element={<AccountPage />} />
                <Route path='profile' element={<ProfilePage />} />
              </Route>
            </Routes>
          </Template>
        </MyThemeContext.Provider>
      </StateContext.Provider>

      {/* <Clock /> */}
      {/* <Counter /> */}
      {/* <Lists /> */}
      {/* <ButtonStatus /> */}
      {/* <ToDo /> */}
      {/* <Axios /> */}
      {/* <ReducerPage /> */}
      {/* <Ref /> */}
      {/* <MemoPage /> */}
      {/* <CallbackPage /> */}
    </>
  );
}

export default App;

{/* send data of chiled to parent component */ }

// function App(props) {

//   console.log(props);

//   return (
//     <>
//       <HomePage func={App} />
//     </>
//   );
// }

// export default App;