import React from "react";
import { useAuth } from "../store/auth";

const Service = () => {
  const { services } = useAuth();
  return (
    <>
      <div className="container mt-4 p-4" style={{boxShadow:"0 0 1px grey", backgroundColor:""}}>
        <h3>Services</h3>
        <p>
          We provide a wide range of services to help you with your business
          needs. Please see below for more information on each service.
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo maiores praesentium nobis repellendus labore libero facilis. Ipsum doloribus odio dignissimos tenetur unde quisquam officiis quas quis optio quae laboriosam enim, magnam at blanditiis eaque. Alias quia veritatis omnis, saepe eius cupiditate eaque distinctio. Ad dolor sit perferendis veritatis hic, modi natus minus, distinctio, itaque animi et! Quae magnam nam eos dicta alias possimus? Ducimus dolor quae exercitationem sit! Fuga repellendus tempora est animi alias facilis vero reiciendis officiis, nostrum maiores eos adipisci accusamus aliquid aut voluptatem eius ratione, laborum architecto. Voluptatem at assumenda delectus! Sed vero ratione laborum suscipit in.</p>
        <br />

        <div className="cards">
          {services.map((currentElement, index) => {
            const { price, description, service } = currentElement;

            return (
              <div className="card-details" key={index}>
                <div>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>

                
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
