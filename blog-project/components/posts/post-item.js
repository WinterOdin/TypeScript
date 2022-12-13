import Link from 'next/link';
import classes from './post-item.module.css'

function postItem(){

    const { title, image, excerpt, date, slug } = props.post;

    return <li className={classes.post}>
        <Link>
            <div className={classes.image}>
                <Image />
            </div>
            <div className={classes.content}>
                <h3>Title</h3>
                <time>date</time>
                <p>description</p>
            </div>
        </Link>
    </li>

}

export default postItem