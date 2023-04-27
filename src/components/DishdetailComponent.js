import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function RenderDish(dish) {
  if (dish != null)
    return (
      <div>
        <Card>
          <CardImg width="100%" top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  else return <div></div>;
}

function RenderComments(comment) {
  if (comment != null && comment.comments != null) {
    const commentlist = comment.comments.map((comment) => {
      const oldDate = new Date(comment.date);
      const options = { month: "long", day: "numeric", year: "numeric" };
      const formattedDate = oldDate.toLocaleDateString("en-US", options);
      return (
        <div>
          <ul className="list-unstyled" key={comment.id}>
            <li>{comment.comment}</li>
            <li>
              -- {comment.author}, {formattedDate}
            </li>
          </ul>
        </div>
      );
    });

    return (
      <div>
        <h4>Comments</h4>
        {commentlist}
      </div>
    );
  } else {
    return <div></div>;
  }
}

function DishDetail(props) {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    <div />;
  }
}

export default DishDetail;
