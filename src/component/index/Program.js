import React from 'react';
import { Link } from 'react-router-dom';

const ProgramSection = () => {
  return (
    <div
      className="container-fluid programe position-relative px-5 mt-5"
      style={{ marginBottom: '135px' }}
    >
      <div className="row g-5">
        {/* Card 1 */}
        <div className="col-lg-4 col-md-6">
          <div className="bg-light rounded text-center p-5 h-100 d-flex flex-column">
            <div>
              <i className="flaticon-six-pack display-1 text-primary"></i>
              <h3 className="text-uppercase my-4">Body Building</h3>
              <p>
                Unleash your potential and sculpt your ideal physique.
                Our bodybuilding programs focus on developing impressive muscle mass, symmetry, and sharp definition
                through targeted training and expert nutritional guidance.
              </p>
            </div>
            <Link className="text-uppercase mt-auto" to={"/blog"}> 
              Read More <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4 col-md-6">
          <div className="bg-light rounded text-center p-5 h-100 d-flex flex-column">
            <div>
              <i className="flaticon-barbell display-1 text-primary"></i>
              <h3 className="text-uppercase my-4">Weight Lifting</h3>
              <p>
                Master the art and science of weight lifting to build foundational strength, power, and confidence.
                We emphasize correct form and progressive overload for safe, impactful results,
                whether you're a beginner or an experienced lifter.
              </p>
            </div>
            <Link className="text-uppercase mt-auto" to={"/blog"}> 
              Read More <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-6">
          <div className="bg-light rounded text-center p-5 h-100 d-flex flex-column"> 
            <div>
              <i className="flaticon-bodybuilding display-1 text-primary"></i>
              <h3 className="text-uppercase my-4">Muscle Building</h3>
              <p>
                Dedicated to increasing muscle size and volume? Our muscle building strategies
                combine proven hypertrophy techniques, optimal workout splits,
                and smart recovery protocols to help you pack on lean mass effectively and sustainably.
              </p>
            </div>
            <Link className="text-uppercase mt-auto" to={"/blog"}>
              Read More <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>

  
        <div className="col-lg-12 col-md-6 text-center">
          <h1 className="text-uppercase text-light mb-4">30% Discount For This Summer</h1>
          <Link to={"/subscription"} className="btn btn-primary py-3 px-5">
            Become A Member
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;