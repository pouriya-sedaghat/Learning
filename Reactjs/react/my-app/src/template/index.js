import Footer from "components/Footer";
import Header from "components/Header";


export default function Template({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}