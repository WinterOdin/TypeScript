import {useRouter} from 'next/router'

function BlogIDPage(){
    const router = useRouter();

    console.log(router.query)

    return (
        <div><h1>blog</h1></div>
    );
}

export default BlogIDPage;