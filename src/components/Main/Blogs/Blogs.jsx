import React from 'react'
import './Blogs.scss'
import { blogs } from './blogInfo'
import Card from '../../Card/Card'
const Blogs = () => {
  return (
    <section className="section section-blog">
      <h2>Blogs</h2>
      <div className="blog-container">
        {blogs.map((blog) => (
          <Card key={blog.id} cardType="blog" cardDetails={blog} />
        ))}
      </div>
    </section>
  )
}

export default Blogs
