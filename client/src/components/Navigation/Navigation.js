

const Navigation = () => {

    return (
        <div className="navigation single-page-nav">
            <div className="container_12">
                <div className="grid_12">
                    <h1 className="logo">
                        <a href="index.html">N. Nikolaev</a>
                    </h1>
                    <nav>
                        <ul>
                            <li><a href="/" className="current">Home</a></li>
                            <li><a href="/portfolio">Portfolio</a></li>
                            <li><a href="/skills">Skills</a></li>
                            <li><a href="/experience">Experience</a></li>
                            <li><a href="/testimonials">Testimonials</a></li>
                            <li><a href="/contacts">Contacts</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navigation;