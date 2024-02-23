import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AppFooter from "../appFooter/AppFooter";
import Spinner from "../../layouts/Spinner/Spinner";
import "./App.scss";


const HomePage = lazy(() => import('../pages/HomePage'));
const OurPage = lazy(() => import('../pages/OurPage'));
const SinglePage = lazy(() => import('../pages/SinglePage'));
const PleasurePage = lazy(() => import('../pages/PleasurePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function App() {
    return (
        <Router>
            <div className="App">
                <div className="wrapper">
                    <main className="main">
                        <Suspense fallback={<Spinner/>}>
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/coffee" element={<OurPage />} />
                                <Route path="/coffee/:id" element={<SinglePage />}/>
                                <Route path="/pleasure" element={<PleasurePage />}/>
                                <Route path="*" element={<NotFoundPage/>}/>
                            </Routes>
                        </Suspense>
                    </main>
                    <AppFooter />
                </div>
            </div>
        </Router>
    );
}

export default App;
