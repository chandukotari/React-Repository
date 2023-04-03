import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Container,
  Col,
  Row,
} from "reactstrap";
import { DISHES } from "../shared/dishes";
const Dishdetailed = (props) => {
  if (props != null) {
    const { dish } = props;
    return (
      <div className="Container">
        <div className="Row">
          <div className="col-12 col-md-5 m-1">
            {RenderDish({ dish })}
            <p>Hai</p>
            <p>Hello</p>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {RenderComments(dish.comments)}
          </div>
        </div>
        <div className="container">
          <div className="col">
            <p>Hai</p>
            <p>Hello</p>
          </div>
        </div>
      </div>
    );
  } else return <div />;
};
const RenderDish = (props) => {
  if (props != null) {
    const { dish } = props;
    return (
      <div>
        <CardImg width="10%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle tag="h3">{dish.name}</CardTitle>
          <CardText className="col-6 col-5 m-1" key={dish.id}>
            {dish.description}
          </CardText>
        </CardBody>
      </div>
    );
  } else return <div />;
};
const RenderComments = (props) => {
  if (props != null) {
    return props.map((comment) => {
      return (
        <div key={comment.id}>
          <ul>
            <li>
              <p>{comment.comment}</p>
              <p>
                --{comment.author} ,
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </li>
          </ul>
        </div>
      );
    });
  } else {
    return <div />;
  }
};
export default Dishdetailed;
