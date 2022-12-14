import PostItem from './post-item'
import classes from './post-grid.modules.css'


function postsGrid(props){

    const {posts} = props;

    return (
        <ul className={classes.grid}>
            {posts.map(post => <PostItem key={post.slug} />)}
        </ul>
    )
}

export default postsGrid