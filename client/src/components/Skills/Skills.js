import Navigation from "../Navigation/Navigation";

const Skills = () => {

    return (
        <>
        <Navigation />
        <section id="skills" className="page">
            <div className="container_12">
                <div className="grid_12">
                    <h2>Skills</h2>
                </div>
                <div className="grid_3">
                    <div style="clear:both"></div>
                    <div className="circle">
                        <input className="knob" data-angleOffset="0" value="93" data-fgColor="#2a797b" data-bgColor="#3a556e" data-width="226" data-height="226" data-thickness={.2} />
                    </div>
                    <div className="text-3"><a href="/">Photoshop</a></div>
                </div>
                <div className="grid_3">
                    <div className="circle">
                        <input className="knob" data-angleOffset="0" value="82" data-fgColor="#2a797b" data-bgColor="#3a556e" data-width="226" data-height="226" data-thickness={.2} />
                    </div>
                    <div className="text-3"><a href="/">HTML5/CSS3</a></div>
                </div>
                <div className="grid_3">
                    <div className="circle">
                        <input className="knob" data-angleOffset="0" value="90" data-fgColor="#2a797b" data-bgColor="#3a556e" data-width="226" data-height="226" data-thickness={.2} />
                    </div>
                    <div className="text-3"><a href="/">Photography</a></div>
                </div>
                <div className="grid_3">
                    <div className="circle">
                        <input className="knob" data-angleOffset="0" value="89" data-fgColor="#2a797b" data-bgColor="#3a556e" data-width="226" data-height="226" data-thickness={.2} />
                    </div>
                    <div className="text-3"><a href="/">PHP/MYSQL</a></div>
                </div>
                <div className="clear"></div>
            </div>
        </section>
        </>
    );
};

export default Skills;