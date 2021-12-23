import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="navigation single-page-nav">
            <div className="container_12">
                <div className="grid_12">
                    <h1 className="logo">
                        <a href="/">N. Nikolaev</a>
                    </h1>
                    <nav>
                        <ul>
                            {/* className="current" */}
                            <li><a href="/home" >Home</a></li>
                            <li><Link to="/portfolio">Portfolio</Link></li>
                            <li><Link to="/skills">Skills</Link></li>
                            <li><Link to="/experience">Experience</Link></li>
                            <li><Link to="/testimonials">Testimonials</Link></li>
                            <li><Link to="/contacts">Contacts</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navigation;