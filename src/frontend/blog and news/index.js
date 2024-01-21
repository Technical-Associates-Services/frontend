import React from 'react'
import BlogCard from '../../components/common/BlogCard'
import { Container, Row, Col } from 'react-bootstrap'
import { blogs } from '../../data/data'
import { Link } from 'react-router-dom'
import CustomBreadcrumb from '../../components/common/CustomBreadcrumb'

const BlogAndNews = () => {
  return (
    <>
      <CustomBreadcrumb title="blogs" subtitle="blogs" />

      <Container>
        <div className="blogs">
          <Row>
            {blogs.map((blog, index) => (
              <Col lg={4}>
                <BlogCard data={blog} index={index} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  )
}

export default BlogAndNews
