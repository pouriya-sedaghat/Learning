import { useOutletContext } from "react-router-dom";

export default function AccountPage() {
    
    const user = useOutletContext();

    return (
        <>
            <h2>Show Account Page</h2>
            <button className="btn btn-danger">Are {user.name} {user.family} sure for delete account?</button>
        </>
    );
}