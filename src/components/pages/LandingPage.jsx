import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { SectionLp1 } from '../exports/SectionLp1';
import { SectionLp2 } from '../exports/SectionLp2';
import { SectionLp3 } from '../exports/SectionLp3';

const LandingPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                const offsetTop = element.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    }, [location]);

    return (
        <main>
            <SectionLp1 />

            <section id="beneficios">
                <SectionLp2 />
            </section>

            <section id="simulador">
                <SectionLp3 />
            </section>
        </main>
    );
};

export default LandingPage;
