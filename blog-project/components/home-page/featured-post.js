import classes from './featured-posts.module.css'
import PostsGrid from '../posts/post-grid'

function featuredPosts(props){
    return (

        <section className={classes.latest}>
            <h2>Featured Post</h2>
            <PostsGrid posts={props.posts} />
        </section>

    )
}

export default featuredPosts