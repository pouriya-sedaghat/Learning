import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useState } from "react";
import { MyThemeContext } from "context/myThemeContext";
import { StateContext } from "context/stateContext";
// import { CHANGE_THEME } from "./../redux/slices/theme";
import { translator } from "helpers/translator";

export default function UserPage() {

    const [name, setName] = useState('pouriya');
    const [family, setfamily] = useState('sedaghat');
    const state = useSelector(state => state.counterReducer);

    const themeContext = useContext(MyThemeContext);

    // for redux

    // const { theme } = useSelector(state => state.themeReducer);
    // const disPatcher = useDispatch();

    // for context

    const { state: stateTheme, setState } = useContext(StateContext);

    // multi lang

    const { currentLanguage } = useSelector(state => state.languageReducer);

    const translate = translator(currentLanguage);

    return (
        <>
            {/* <Outlet /> */}
            <h2>User Page</h2>

            <p>Counter : {state.counter}</p>
            <p>sum : {state.sum}</p>

            {/* component */}
            {/* redux */}

            <h2>Context</h2>

            {/* <div className='p-5 m-5' style={{ background: themeContext.background, color: themeContext.color }}>
                <h2>Home Page</h2>
                <p>Hello To Reactjs</p>
                <button className={`btn btn-${theme === 'light' ?'dark':'light'}`} onClick={() => theme === 'light' ? disPatcher(CHANGE_THEME('dark')) : disPatcher(CHANGE_THEME('light'))}>{theme}</button>
            </div> */}

            {/* context */}

            <div className='p-5 m-5 ' style={{ background: themeContext.background, color: themeContext.color }}>
                <h2>{translate('userPage')}</h2>
                <p>{translate('helloToReactJs')}</p>
                <button className={`btn btn-${stateTheme === 'light' ? 'dark' : 'light'}`} onClick={() => stateTheme === 'light' ? setState('dark') : setState('light')}>{stateTheme === 'light' ? translate('light') : translate('dark')}</button>
            </div>

            {/* Outlet */}

            <div className="btn-group d-block text-center mx-auto"><button className="btn btn-dark"><Link to='/user/account' className="text-reset text-decoration-none">Account</Link></button><button className="btn btn-dark"><Link to='/user/profile' className="text-reset text-decoration-none">Profile</Link></button></div>
            <Outlet context={{ name, family }} />
        </>
    );
}