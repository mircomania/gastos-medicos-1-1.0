import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { NavBar } from './components/common/Navbar';
import { Cargando } from './components/utils/Cargando';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './hooks/ScrollTop';

const LandingPage = lazy(() => import('./components/pages/LandingPage'));

function App() {
    return (
        <BrowserRouter basename="/gastos-medicos-1-1.0">
            <ScrollToTop />

            <NavBar />

            <Suspense
                fallback={
                    <main className="cargando">
                        <Cargando />
                    </main>
                }
            >
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                </Routes>
            </Suspense>

            <Footer />
        </BrowserRouter>
    );
}

export default App;
