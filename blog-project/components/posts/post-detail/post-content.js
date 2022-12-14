import reactMarkdown from "react-markdown"
import PostHeader from "./post-header"
import classes from "./post-content.module.css"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

function PostContent(){
    const DUMMY_POSTS = [
        {
            slug: "test1",
            title: "test 123",
            image: "image.jpg",
            excerpt: "aaaaaaa",
            date: "2022-02-10"
        }
    ]

    const imagePath = `/images/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`

    return (
        <article className={classes.content} >
            <PostHeader title={DUMMY_POSTS.title} image={imagePath}/>
            content
            <ReactMarkdown>{DUMMY_POSTS.content}</ReactMarkdown>
        </article>
    )

}

export default PostContent