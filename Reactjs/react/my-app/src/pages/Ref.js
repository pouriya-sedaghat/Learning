import { useEffect, useRef } from "react";

function Ref() {

    const fullnameInputRef = useRef();

    function blurHandle() {
        console.log(fullnameInputRef.current.value);
    }

    return (
        <>
            <h2>Ref Page</h2>
            <input type="text" placeholder="fullname" ref={fullnameInputRef} onBlur={blurHandle} />
        </>
    );
}

export default Ref;