import React, { Component, useState } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import { useParams } from "react-router";
// import posts from "../../../data/posts.json";
const BlogList = (props) => {
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
  };

  componentDidMount() {
    this.fetchBlogData();
  };

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
};
