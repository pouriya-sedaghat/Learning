import { useState } from "react";

export function useOnChangeHandel(initial) {
    const [value, setValue] = useState(initial);

    function onChange(e) {
        setValue(e.target.value);
    }

    return [value, setValue, onChange];
}