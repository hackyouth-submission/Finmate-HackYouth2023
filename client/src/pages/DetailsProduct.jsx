import '../components/css/Style.css'
import Header from "../components/layout/Header"
import tree from "../assets/tree.png"
import tree2 from "../assets/tree2.png"
function DetailsProduct( props ) {
    
    return (
        <>
            <Header />
            <div className='detail'>
                <div className="headerr">
                    <h2>Green School Initiative</h2>
                </div>

                <div className="row">
                    <div className="leftcolumn">
                        <div className="card">
                            <h2>Over view</h2>
                            <h5>Hanoi, Dec 7, 2022</h5>
                            <img src={tree} alt="" />
                            Plant tree in School
                            <p>The Green School Initiative aims to transform Vietnam's education sector by building environmentally sustainable schools. The project will use eco-friendly materials, solar panels, rainwater harvesting systems, and other green technologies to reduce the carbon footprint of schools.</p>
                        </div>
                        <div className="card">
                            <h2>Campaign</h2>
                            <img src={tree2} alt="" />
                            <p>The project will launch a nationwide campaign to raise awareness about the importance of sustainable education and the benefits of green schools.</p>
                        </div>
                        <div className="card">
                            <h2>Risk</h2>
                            <p>The project faces risks such as changes in government policies, fluctuations in the price of materials, and the challenge of changing mindsets among school administrators and teachers.</p>
                        </div>
                        <div className="card">
                            <h2>Plans</h2>                       
                            <p>The project will work with local communities and stakeholders to identify suitable locations for green schools, and will collaborate with architects, engineers, and contractors to design and build the schools.</p>
                        </div>
                        <div className="card">
                            <h2>Beta product</h2>
                            
                            <p>The project will launch a nationwide campaign to raise awareness about the importance of sustainable education and the benefits of green schools.</p>
                        </div>
                        <div className="card">
                            <h2>Business report</h2>
                            
                            <p>The project will build and test the first green school prototype, and will use the lessons learned to refine the design and construction process.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailsProduct;