import { Fragment } from "react"
import Hero from '../components/home-page/hero';
import featuredPosts from "../components/home-page/featured-post";

function HomePage(){
    
    const DUMMY_POSTS = [
        {
            slug: "test1",
            title: "test 123",
            image: "image.jpg",
            excerpt: "aaaaaaa",
            date: "2022-02-10"
        }
    ]

    return (

        <Fragment>
            <Hero />
            <featuredPosts posts={DUMMY_POSTS} />
        </Fragment>

    )

}

export default HomePage