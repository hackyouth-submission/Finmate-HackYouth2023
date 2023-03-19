import '../components/css/Style.css'
import Header from "../components/layout/header";

function Portfolio() {
    return (
        <div className='Portfolio'>
            <Header />
            <div className="courses-container">    
                    <div className="course">
                        <div className="course-preview">
                            <h6>Project</h6>
                            <h2>Green Energy for All</h2>
                        </div>
                        <div className="course-info">
                            <div className="progress-container">
                                <div className="progress"></div>
                                <span className="progress-text">
                                    20% share of total Funded
                                </span>
                            </div>
                            <h6>Green Energy Vietnam</h6>
                            <h2>Millions of people around the world lack access to clean drinking ...</h2>
                            <button className="btn">Invest</button>
                        </div>
                    </div>
                
            </div>      
            <div className="courses-container">    
                    <div className="course">
                        <div className="course-preview">
                            <h6>Project</h6>
                            <h2>Clean Water for All</h2>
                        </div>
                        <div className="course-info">
                            <div className="progress-container">
                                <div className="progress"></div>
                                <span className="progress-text">
                                    20% share of total Funded
                                </span>
                            </div>
                            <h6>Water for Life Vietnam</h6>
                            <h2>A project to provide clean and safe drinking water to rural communities in Vietnam, using low-cost water ...</h2>
                            <button className="btn">Invest</button>
                        </div>
                    </div>
                
            </div>    
            <div className="courses-container">    
                    <div className="course">
                        <div className="course-preview">
                            <h6>Project</h6>
                            <h2>Green School Initiative</h2>
                        </div>
                        <div className="course-info">
                            <div className="progress-container">
                                <div className="progress"></div>
                                <span className="progress-text">
                                    20% share of total Funded
                                </span>
                            </div>
                            <h6>Vietnam Green Education Foundation</h6>
                            <h2>The Green School Initiative aims to transform Vietnam's education sector by building environmentally sustainable...</h2>
                            <button className="btn">Invest</button>
                        </div>
                    </div>
                
            </div>            
        </div>
    );
}

export default Portfolio;