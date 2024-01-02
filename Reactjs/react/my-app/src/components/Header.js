import { useDispatch } from "react-redux";
import { CHANGE_LANGUAGE } from "./../redux/slices/language";

export default function Header() {

    const disPatcher = useDispatch();

    return (
        <>
            <ul className="d-flex justify-content-center text-decoration-none mb-5 py-3 bg-dark text-white" style={{ listStyleType: 'none' }}>
                <li className="mx-2 px-4 lh-lg">Home</li>
                <li className="mx-2 px-4 lh-lg">Products</li>
                <li className="mx-2 px-4 lh-lg">Service</li>
                <li className="mx-2 px-4 lh-lg">Contact us</li>
                <li className="mx-2 px-4 lh-lg">About</li>
                <li className="mx-2 px-4 lh-lg btn-group">
                    <button onClick={() => disPatcher(CHANGE_LANGUAGE('EN'))} className="btn btn-outline-primary">EN</button>
                    <button onClick={() => disPatcher(CHANGE_LANGUAGE('FA'))} className="btn btn-outline-success">FA</button>
                </li>
            </ul>
        </>
    );
}