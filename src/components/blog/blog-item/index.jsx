import React, {useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import BlogAuthor from "../blog-author";
import { Link } from "react-router-dom";
import "./styles.css";

function BlogItem(props) {
  const [blogDetails, setBlogDetails] = useState([]);

  // fetch blogs
  useEffect(() => {
    fetchBlogsData()
  }, []);

  const fetchBlogsData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_BE_PROD_URL}/blogs`)
      console.log(response);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setBlogDetails(data);
        console.log(blogDetails);
        console.log("Blog data: ", blogDetails);
      }
    } catch (error) {
      console.log(error)
    }
  }
  

    
  return (
    <Link to={`/blog/${props._id}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img variant="top" src={cover} className="blog-cover" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
        </Card.Body>
        <Card.Footer>
          <BlogAuthor {...props.author} />
        </Card.Footer>
      </Card>
    </Link>
  );
  

}

export default BlogItem