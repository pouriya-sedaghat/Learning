import { useCallback } from "react";


function CallbackPage() {

    const harchi = useCallback(() => {

        const a = 10;
        return a

    }, [])

    console.log(harchi, harchi()); // return function

    return (
        <>
            <h2>Callback Page</h2>
        </>
    );
}

export default CallbackPage;