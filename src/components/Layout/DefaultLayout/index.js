import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <div className="content-container">{children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
