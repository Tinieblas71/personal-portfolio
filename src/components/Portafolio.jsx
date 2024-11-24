import '../styles/portfolio.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import profile from '../assets/img.jpeg'; 
import testimonial_1 from '../assets/cstm.jpg';
import Cv from '../assets/Cvx.pdf';
import Contact from './contact';
import Diploma from '../assets/cartaPasante.pdf';

const Portafolio = () => {
   
    const [ text ] = useTypewriter({
        words: ['Jr. Software Developer.','Machine Learning Trainee.', 'Self-taught Student.', 'Freelancer.', 'Front-End Dev.'],
        loop: {},
    });
   
    return (
        <>
            <header className="header">
                <a href="#home" className="logo"> Santi <span>Moreno</span>. </a>

                <i className='bx bx-menu-alt-right' id='menu-icon'
                onClick={
                    () => {
                        let menuIcon = document.querySelector('#menu-icon');
                        let navbar = document.querySelector('.navbar');
                        let sections = document.querySelectorAll('section');
                        let navLinks = document.querySelectorAll('header nav a');

                        window.onscroll = () => {
                            sections.forEach(sec => {
                                let top = window.screenY;
                                let offset = sec.offsetTop - 150;
                                let height = sec.offsetHeight;
                                let id = sec.getAttribute('id');

                                if(top >= offset && top < offset + height){
                                    navLinks.forEach(links => {
                                        links.classList.remove('active');
                                        document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active');
                                    })
                                }
                            });
                        }
                        menuIcon.classList.toggle('bx-x');
                        navbar.classList.toggle('active');
                    }
                }

                >
            </i>

                <nav className="navbar">
                    <a href="#home" className='active'>Home</a>
                    <a href="#education">Education</a>
                    <a href="#services">Services</a>
                    <a href="#testimonials">Testimonials</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <section className="home" id="home">
                <div className="home-content">
                    <h1>Hi, It's <span>Santi</span></h1>
                    <div>
                    <h3>I'm a <span className="dynamic-text">{ text }</span><Cursor/> </h3>
                    </div>
                    <p>Junior Software Developer with experience in software development and design, specialized in front-end development. I have skills in technical support, hardware maintenance and IT troubleshooting, along with knowledge in emerging technologies such as artificial intelligence and machine learning. Proactive, oriented towards continuous learning and with ease to work in a team. I seek to contribute to the development of innovative technological solutions.</p>

                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/santiago-moreno-estrada-885b92339" target="_blank"><i className='bx bxl-linkedin'></i></a>
                        <a href="https://www.instagram.com/santii.lifts?igsh=bWoxdWsycnA1d2ho"target="_blank"><i className='bx bxl-instagram'></i></a>
                        <a href="https://github.com/Tinieblas71?tab=repositories" target="_blank" ><i className='bx bxl-github' ></i></a>
                        <a href="mailto:morenoestradasantiago@gmail.com" target="_blank"><i className='bx bxl-gmail' ></i></a>
                    </div>

                    <div className="btn-group">
                        <a href={ Cv } className="btn" download>Download CV</a>
                        <a href="#contact" className='btn'>Contact</a>
                    </div>


                </div>

                
                <div className="home-img">
                        <img src={ profile } alt="profile-picture" />
                    </div>

            </section>

            <section className="education" id="education">
                <h2 className="heading">Education</h2>

                <div className="timeline-items">

                <div className="timeline-item">
                        <div className="timeline-dot"></div>
                            <div className="timeline-date">March 28, 2022
                            </div>
                        <div className="timeline-content">
                            <h3><i className='bx bxs-award bx-flip-horizontal' ></i>  Responsive Web Desing Certification</h3>
                            <p>Gained expertise in core web technologies, particularly HTML5 and CSS, to create responsive and visually appealing static websites adaptable to all devices.</p>
                            <a href="https://www.freecodecamp.org/certification/Santiago_Moreno_Estrada/responsive-web-design" className='btn' target="_blank" > View Certification <i className='bx bx-right-top-arrow-circle' ></i> </a>
                        </div>
                    </div>

                <div className="timeline-item">
                        <div className="timeline-dot"></div>
                            <div className="timeline-date">April 11, 2022
                            </div>
                        <div className="timeline-content">
                            <h3> <i className='bx bxs-award bx-flip-horizontal' ></i>  JavaScript Algorithms and Data Structures Certification</h3>
                            <p>Enhanced proficiency in JavaScript, covering advanced topics like algorithms, data structures, DOM manipulation, functional programming, asynchronous programming, and recursion.</p>
                            <a href="https://www.freecodecamp.org/certification/Santiago_Moreno_Estrada/javascript-algorithms-and-data-structures" target="_blank" className='btn'> View Certification <i className='bx bx-right-top-arrow-circle' ></i> </a>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                            <div className="timeline-date">July 18, 2024
                            </div>
                        <div className="timeline-content">
                            <h3><i className='bx bxs-graduation bx-flip-horizontal' ></i> Professional Technical High School</h3>
                            <p>Strengthened knowledge in computer science, focusing on systems programming, databases, and languages like Java and C#. Delivered database-driven solutions.</p>
                            <a href={ Diploma } target="_blank" download className='btn'> Download Diploma <i className='bx bx-right-top-arrow-circle' ></i> </a>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                            <div className="timeline-date">Nov 1, 2024
                            </div>
                        <div className="timeline-content">
                            <h3><i className='bx bxs-award bx-flip-horizontal' ></i> IBM AI Engineering Certifications</h3>
                            <p>Acquired skills in Python, machine learning, neural networks, deep learning, and the Keras library, applying these to solve complex problems with modern technologies.</p>
                            <a href="https://coursera.org/share/1204d717a0ef030f67f0d6e626cd3c12" target="_blank" className='btn'> View Certification <i className='bx bx-right-top-arrow-circle' ></i> </a>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                            <div className="timeline-date">Nov 5, 2024
                            </div>
                        <div className="timeline-content">
                            <h3><i className='bx bxs-award bx-flip-horizontal' ></i>  IBM Full Stack Software Developer Certification</h3>
                            <p>Developed a professional approach to software design, planning, development, and deployment, gaining experience with cloud computing, scientific application development, and modern software techniques.</p>
                            <a href="https://coursera.org/share/ba2fb23db2542517f72ebef4a6efb698" target="_blank" className='btn'> View Certification <i className='bx bx-right-top-arrow-circle' ></i> </a>
                        </div>
                    </div>

                </div>

            </section>

            <section className='services' id='services'>
                <h2 className="heading">Services</h2>

                <div className="services-container">

                    <div className="service-box">
                        <div className="service-info">
                            <h4>Front-End Development</h4>
                            <p>I offer custom website design and development services, using technologies such as HTML, CSS, JavaScript, React, Node, and ExpressJs. I focus on creating responsive and optimized pages, including custom functionality, ensuring a smooth experience on all devices. I provide technical maintenance to update content, fix bugs, and improve the performance of existing sites.</p>
                        </div>
                    </div>

                    <div className="service-box">
                        <div className="service-info">
                            <h4>Applications Development</h4>
                            <p>Development of desktop and mobile systems and applications for Android using Java. I have worked on projects of this type for business management, implementing practical interfaces and functionalities connected to databases. This service is ideal for students and small businesses that need customized and accessible technological solutions. I also offer collaboration in school projects.</p>
                        </div>
                    </div>

                    <div className="service-box">
                        <div className="service-info">
                            <h4>Technical support</h4>
                            <p>I offer technical support to resolve hardware and software issues, network configuration, and operating system advice. I also provide customized training to learn programming fundamentals, office tools, and web technologies, adapting to the client's level of knowledge. This service is focused on providing practical and accessible solutions for students, small businesses, and individual users.</p>
                        </div>
                    </div>

                    <div className="service-box">
                        <div className="service-info">
                            <h4>Data Management and Technical Documentation</h4>
                            <p>I provide local database creation and maintenance services, ensuring their organization, accessibility, and efficiency. I also create technical reports and documentation in English and Spanish, such as user manuals, executive summaries, and reports tailored to each client's needs.</p>
                        </div>
                    </div>

                </div>

            </section>

            <section className="testimonials" id="testimonials">
                <div className="testimonials-box">
                    <h2 className="heading">Testimonials</h2>

                    <div className="wrapper">
                        <div className="testimonials-item">
                            <img src={ testimonial_1 } alt="1st Customer" />
                            <h2>Carmen Ortiz Castillo</h2>
                            <div className="rating">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                            </div>
                            <p>
                                "Working with Santiago was an incredible experience. He designed a modern and functional website for my work as a real estate consultant, achieving a visually spectacular design that highlights my properties for sale. The website is not only easy to navigate, but reflects professionalism and attention to detail in every element. I am delighted with the result and highly recommend him for his commitment and creativity."
                            </p>
                            <a href="https://tinieblas71.github.io/Carmen-Ortiz-/" target="_blank" className="btn">View Site <i className="bx bx-link-external"></i> </a>
                        </div>

                    </div>
                </div>
            </section>

            <section className="contact" id="contact">
                <h2 className="heading">Contact <span>Me</span></h2>

                <Contact/>

            </section>

            <footer className="footer">
                <div className="social">
                    <a href="https://www.linkedin.com/in/santiago-moreno-estrada-885b92339" target="_blank"><i className='bx bxl-linkedin'></i></a>
                        <a href="https://www.instagram.com/santii.lifts?igsh=bWoxdWsycnA1d2ho" target="_blank"><i className='bx bxl-instagram'></i></a>
                        <a href="https://github.com/Tinieblas71?tab=repositories" target="_blank"><i className='bx bxl-github' ></i></a>
                        <a href="mailto:morenoestradasantiago@gmail.com" target="_blank"><i className='bx bxl-gmail' ></i></a>
                </div>

                <ul className="list">

                    <li>
                        <a href="#services">Home</a>
                    </li>

                    <li>
                        <a href="#home">About Me</a>
                    </li>

                    <li>
                        <a href="#services">Services</a>
                    </li>

                    <li>
                        <a href="#testimonials">Testimonials</a>
                    </li>

                    <p className="copyright">
                        &copy; <span className=""> Santi Moreno </span> | All Rights Reserved
                    </p>
                </ul>
            </footer>
        </>
    );
}

export default Portafolio;