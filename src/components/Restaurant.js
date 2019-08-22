import React from "react";
import "./Restaurant.css";

const Restaurant = props => {
  return (
    <div className="card">
      <div className="card-body container">
        <div className="row">
          <div className="col-md-8">
            <h5 className="card-title">{props.restaurant.name}</h5>
            <h6 className="card-subtitle text-muted">
              {props.restaurant.location.address1},{" "}
              {props.restaurant.location.city}
            </h6>
          </div>
          <div className="col-md-4 text-right">
            <span className="badge badge-secondary">
              {props.restaurant.rating}
            </span>
          </div>
        </div>
        <hr className="mb-2"/>
        <div className="row">
        <div className="col"></div>
          <div className="col-md-11">
            <blockquote className="blockquote mb-0">
              <small className="card-text font-weight-light font-italic">
                {props.restaurant.review.text}
              </small>
              <footer className="blockquote-footer text-right">
                <small className="text-muted">
                  <cite title={props.restaurant.review.username}>
                    {props.restaurant.review.username}
                  </cite>
                </small>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
