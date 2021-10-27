import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
// import posts from "../../../data/posts.json";
export default class BlogList extends Component {
  state = {
    blogData: [],
  };

  async fetchBlogData() {
    let response = await fetch(`${process.env.REACT_APP_BE_PROD_URL}/blogs`);
    if (response.ok) {
      let blogData = await response.json();
      this.setState({
        blogData
      })
    }
  }

  componentDidMount() {
    this.fetchBlogData();
  }

  render() {
    return (
      <Row>
        {this.state.blogData.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
