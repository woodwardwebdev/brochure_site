import React from 'react';
import Prismic from "prismic-javascript";
import { Client } from '../prismic-configuration'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'
import styles from '../styles/Blog.module.css'


export default function Blog({ props }) {
    console.log(props.results)
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.blogsContainer}>
                <div className={styles.leftCol}>
                    {props.results.map((blog) => (
                        // <div className={styles.blogCard}>
                        //     <h3>{blog.data.title[0].text}</h3>
                        //     <img src={blog.data.blog_image.url} height='400px' />
                        //     <p>{blog.data.blog_content[0].text}</p>
                        // </div>
                        <BlogCard
                            img={blog.data.blog_image.url}
                            title={blog.data.title[0].text}
                            text={blog.data.blog_content[0].text} />

                    ))}
                </div>
                <div className={styles.rightCol}>

                </div>
            </div>
            <Footer />
        </div>
    )
}

Blog.getInitialProps = async (ctx) => {
    const req = ctx.req
    const page = await Client(req).query(
        Prismic.Predicates.at('document.type', 'blog'),
        { orderings: '[my.blog_post.date desc]' }

    )
    return { props: page }
}