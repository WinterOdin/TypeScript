import PostItem from './post-item'
import classes from './post-grid.module.css'


function PostsGrid(props){

    const {posts} = props;
    console.log(props)
    return (
        <ul className={classes.grid}>
            
        </ul>
    )
}

export default PostsGrid