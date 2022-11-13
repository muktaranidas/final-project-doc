import { transparent } from "daisyui/src/colors";
import React from "react";
import treatment from "../../../../assets/images/treatment.png";

const About = () => {
  return (
    <div className="card  card-side bg-base-100 my-24">
      <figure>
        <img className="w-6/12" src={treatment} alt="Movie" />
      </figure>
      <div className="card-body w-1/2">
        <h2 className="card-title text-5xl font-bold py-8">
          Exceptional Dental <br /> Care, on Your Terms
        </h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn btn-primary w-3/12	">GET STARTED</button>
      </div>
    </div>
  );
};

export default About;
