export function ContainerFluid({ children, classes, ...attrs }) {

    return (
        <>
            <div className={`container-fluid ${classes || ''}`} {...attrs}>
                {children}
            </div>
        </>
    );
}

export const Row = function ({ children, classes, ...attrs }) {

    return (
        <>
            <div className={`row ${classes || ''}`} {...attrs}>
                {children}
            </div>
        </>
    );
}

export const Col = ({ children, breakPoint, size, classes, ...attrs }) => {

    return (
        <>
            <div className={`col${breakPoint ? ('-' + breakPoint) : ''}${size ? ('-' + size) : ''} ${classes || ''}`} {...attrs}>
                {children}
            </div>
        </>
    );
}