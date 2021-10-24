import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import './about.css'
const About = () => {
    return (
        <div>                      
             <div className="row container-fluid">

             <h2 className="fw-bolder">Patient Resources</h2>
            <Bounce left>
                 <p> sollicitudin enim eget erat consectetur aliquam. Nam congue convallis eros, ultrices interdum tortor fermentum at. Nunc dictum vallis nulla nec scelerisque</p>
           </Bounce>
           <Bounce right>
                 <p>Sagittis diam. Fusce quis erat vel diam hendrerit fringilla ac eget purus. Aenean ac neque dolor. Aliquam erat volutpat. In efficitur mollis nisl quis imperdiet sagittis.</p>
           </Bounce>
           <Zoom left>
           <h1 className="text-success mt-5">About Us</h1>
           </Zoom>
                 <h1 className="fw-bolder mt-3">We Are Caring For Your Eye Health Hospital</h1>
                 <p className="fw-bolder fs-5">A new way to practice without the hassle <br /> of and expense of
                      office space. We help you launch your <br /> private practice with ease.
                       Modern Open Design. EHR & Billing Support. Insanely Fast Internet.</p>
                
                     <p>Vitaesaert viasead muheciegast aplsemo eniptaiadesa ertyatyde. volernatur aut oditaut onsequuntur magni dolores.</p>
                     <p>Vitaesaert viasead muheciegast aplsemo eniptaiadesa ertyatyde. volernatur aut oditaut onsequuntur magni dolores.</p>
                     <p>Vitaesaert viasead muheciegast aplsemo eniptaiadesa ertyatyde. volernatur aut oditaut onsequuntur magni dolores.</p>

                 <button className="mb-5 mt-5 w-25 m-auto fw-bolder btn">More About Us</button>
             </div> 
            </div> 
                        
    );
};

export default About;