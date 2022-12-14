import classes from './all-posts.module.css';
import postsGrid from './post-grid';

function AllPosts(props){

    return (
        <section className={classes.posts}>
            <h1>All Posts</h1>
            <postsGrid posts={props.posts}/>
        </section>
    )
}

export default AllPosts;