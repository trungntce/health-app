import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { webRoutes } from '~/routes';
import { DefaultLayout } from './components/Layout';
import AuthWrapper from '~/routes/AuthWrapper';
import NotFoundPage from '~/pages/404/NotFoundPage';

function App() {
    return (
        <Router>
            <div className="container relative">
                <Routes>
                    {webRoutes.map((route, index) => {
                        const Layout = route.layout === null ? Fragment : DefaultLayout;
                        const Page = route.component;
                        const isProtected = route.isProtected || false;
                        const Component = isProtected ? (
                            <AuthWrapper>
                                <Page />
                            </AuthWrapper>
                        ) : (
                            <Page />
                        );

                        return <Route key={index} path={route.path} element={<Layout>{Component}</Layout>} />;
                    })}
                    <Route
                        path="*"
                        element={
                            <DefaultLayout>
                                <NotFoundPage />
                            </DefaultLayout>
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
