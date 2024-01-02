import { useMemo } from "react";


function MemoPage() {

    const hatchi = useMemo(() => {
        const a = 10;
        return a;
    }, [])

    console.log(hatchi);

    return (
        <>
            <h2>Memo Page</h2>
        </>
    );
}

export default MemoPage;