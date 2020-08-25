import React, { Fragment } from "react";
import "../scss/collector";
import CollectorRegister from "./CollectorRegister";

const Collector: React.FC<{}> = () => {

 return (
        <>        
        <main id="collect" className="container-fluid">
                <section id="collect-2" className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-xl-5">
                         <CollectorRegister />   
                    </div>
                        
                        

                
                    <div className="col-md-7 col-xl-5">
                        <div className="p-5">
                            <h4 id="how-1" className="display-4 text-center">HOW CAN WE HELP?</h4>
                            <p id="info-text-2" className="text-center">
                                We know that these are trying times and millions of Americans are facing 
                                a widening food-security gap. By creating an account with FruitDivvy, you
                                can access our database of produce providers in your area by providing
                                only a name, email address, and password. On this sign up form, you can 
                                also specify what type of produce you would be interested in and filter 
                                the results that appear on your map page so that it suits your needs. We only
                                ask that you treat the Providers and their property with respect, and take
                                only what you need.
    		                </p>
                            <h4 id="how-1" className="display-4 text-center">HAPPY COLLECTING!</h4>
                         </div>
                        </div>
                    
                </section>
            </main>



            {/* <footer id="footer-collect"></footer> */}



        </>



 );
 };
 export default Collector;
