import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MINUS, PLUSE, SUM } from './../redux/slices/counter';
import { useContext } from "react";
import { MyThemeContext } from "context/myThemeContext";
import { StateContext } from "context/stateContext";
// import { CHANGE_THEME } from "./../redux/slices/theme";
// import { languages } from "languages/languages";
// better method :
import { translator } from "helpers/translator";

export default function HomePage() {

    const state = useSelector(state => state.counterReducer);
    // console.log(state);

    const disPatcher = useDispatch();
    console.log(disPatcher);

    const themeContext = useContext(MyThemeContext);

    // for redux

    // const { theme } = useSelector(state => state.themeReducer);

    // for context

    const { state: stateTheme, setState } = useContext(StateContext);

    // multi lang

    const { currentLanguage } = useSelector(state => state.languageReducer);

    const translate = translator(currentLanguage);

    // console.log(currentLanguage);

    return (
        <>
            <h2>Home Page</h2>

            <h2>Redux</h2>

            <p>counter : {state.counter}</p>
            <p>sum : {state.sum}</p>

            {/* component */}
            {/* theme product by redux */}

            <h2>Context</h2>

            {/* <div className='p-5 m-5 ' style={{ background: themeContext.background, color: themeContext.color }}>
                <h2>Home Page</h2>
                <p>Hello To Reactjs</p>
                <button className={`btn btn-${theme === 'light' ? 'dark' : 'light'}`} onClick={() => theme === 'light' ? disPatcher(CHANGE_THEME('dark')) : disPatcher(CHANGE_THEME('light'))}>{theme}</button>
            </div> */}

            {/* context */}

            <div className='p-5 m-5 ' style={{ background: themeContext.background, color: themeContext.color }}>
                {/* <h2>{languages['homePage'][currentLanguage]}</h2> */}
                <h2>{translate('homePage')}</h2>
                <p>{translate('helloToReactJs')}</p>
                <button className={`btn btn-${stateTheme === 'light' ? 'dark' : 'light'}`} onClick={() => stateTheme === 'light' ? setState('dark') : setState('light')}>{stateTheme === 'light' ? translate('light') : translate('dark')}</button>
            </div>

            {/* counter by redux */}

            <div className="btn-group d-block text-center"><button onClick={() => disPatcher(MINUS())} className="btn btn-danger">-</button><button onClick={() => disPatcher(PLUSE())} className="btn btn-success">+</button></div>

            <button className="btn btn-primary d-block mx-auto" onClick={() => disPatcher(SUM(state.counter))}>SUM</button>

            <Link to="/todo" className="d-block">ToDo Page</Link>
            <Link to="/user" className="d-block">User Page</Link>
            <Link to="/todo/5/2" className="d-block">Contact Page</Link>
        </>
    );
}

// send data of chiled to parent component

// expect default function HomePage({ func }) {
//     func('send data of chiled to parrent');
//     return (
//         <>

//         </>
//     );
// }