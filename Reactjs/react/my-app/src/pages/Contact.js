import { Link, useParams } from "react-router-dom";
import { MyThemeContext } from "context/myThemeContext";
import { StateContext } from "context/stateContext";
import { useSelector, useDispatch } from "react-redux";
// import { CHANGE_THEME } from "./../redux/slices/theme";
import { translator } from "helpers/translator";

const Contact = function () {

    const Params = useParams();
    console.log(Params);

    // for redux

    // const { theme } = useSelector(state => state.themeReducer);
    // const disPatcher = useDispatch();

    // multi lang

    const { currentLanguage } = useSelector(state => state.languageReducer);

    const translate = translator(currentLanguage);

    return (
        // other method for use context
        <StateContext.Consumer>
            {
                ({ state, setState }) => {
                    return (
                        <MyThemeContext.Consumer>
                            {({ background, color }) => {
                                return (
                                    <>
                                        {/* redux */}

                                        {/* <div className={`bg-${background} text-${color} m-5 p-5`}>
                                            <h2>Contact Page</h2>
                                            <button className={`d-block my-2 btn btn-${theme === 'light' ? 'dark' : 'light'}`}><Link to='/' className="text-reset text-decoration-none">Home Page</Link></button>
                                            <button className={`d-block btn btn-${theme === 'light' ? 'dark' : 'light'}`} onClick={() => theme === 'light' ? disPatcher(CHANGE_THEME('dark')) : disPatcher(CHANGE_THEME('light'))}>{state}</button>
                                        </div> */}

                                        {/* context */}

                                        <div className={`bg-${background} text-${color} m-5 p-5`}>
                                            <h2>{translate('contactPage')}</h2>
                                            <button className={`d-block my-2 btn btn-${state === 'light' ? 'dark' : 'light'}`}><Link to='/' className="text-reset text-decoration-none">{translate('homePage')}</Link></button>
                                            <button className={`d-block btn btn-${state === 'light' ? 'dark' : 'light'}`} onClick={() => state === 'light' ? setState('dark') : setState('light')}>{state === 'light'?translate('light'):translate('dark')}</button>
                                        </div>
                                    </>
                                );
                            }}
                        </MyThemeContext.Consumer>
                    );
                }
            }
        </StateContext.Consumer>
    );
}

export default Contact;