import { useOutletContext } from "react-router-dom";

export default function ProfilePage() {

    const user = useOutletContext();

    return (
        <>
            <h2>Show Profile Page</h2>
            <p className="h4">{user.name} {user.family}</p>
        </>
    );
}