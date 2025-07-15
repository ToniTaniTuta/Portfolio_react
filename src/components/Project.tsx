import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects I Worked On</h1>
            <div className="projects-grid">
                <div className="project">
                    <img src={mock01} className="zoom" alt="Gozo Channel" width="100%" />
                    <h2>Gozo Channel App</h2>
                    <p>Cross-platform mobile app for ferry schedules, ticketing, and real-time updates for Gozo Channel.</p>
                </div>

                <div className="project">
                    <img src={mock02} className="zoom" alt="Bookora Booking App" width="100%" />
                    <h2>Bookora – Activity Booking App</h2>
                    <p>Mobile-first experience booking system supporting venues, instructors, and packages with Supabase backend.</p>
                </div>

                <div className="project">
                    <img src={mock03} className="zoom" alt="Hagar Qim Museum" width="100%" />
                    <h2>Joseph Vella App – Ħaġar Museum</h2>
                    <p>Interactive mobile experience for the Ħaġar Museum, built for the Joseph Vella exhibition.</p>
                </div>

                <div className="project">
                    <img src={mock04} className="zoom" alt="Orderista App" width="100%" />
                    <h2>Orderista</h2>
                    <p>Custom-built app for restaurants to manage online orders with real-time kitchen and delivery tracking.</p>
                </div>

                <div className="project">
                    <img src={mock05} className="zoom" alt="Bookora Table Booking" width="100%" />
                    <h2>Bookora Table – Restaurant Booking</h2>
                    <p>A tailored restaurant reservation system with smart slot management and real-time availability.</p>
                </div>

                <div className="project">
                    <img src={mock06} className="zoom" alt="Wakame Website" width="100%" />
                    <h2>Wakame Website</h2>
                    <p>Modern and responsive website for Wakame Japanese Restaurant featuring menu, booking, and visual branding.</p>
                </div>

                <div className="project">
                    <img src={mock07} className="zoom" alt="The Bern Hersey's Gym" width="100%" />
                    <h2>The Bern Hersey’s Gym Platform</h2>
                    <p>Built class scheduling, member tokens, and instructor payment tracking in a Supabase + React ecosystem.</p>
                </div>

                <div className="project">
                    <img src={mock08} className="zoom" alt="Billynx" width="100%" />
                    <h2>Billynx</h2>
                    <p>Custom website for a sports analytics startup, focused on performance data and responsive design.</p>
                </div>

                <div className="project">
                    <img src={mock09} className="zoom" alt="Various Websites" width="100%" />
                    <h2>And Many More Websites</h2>
                    <p>Worked on dozens of websites for clients across Malta and Europe – including e-commerce, landing pages, and CMS builds.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;
