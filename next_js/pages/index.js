import Link from 'next/link';

function HomePage(){
    return (
        <div>
            <div><h1>Main page</h1></div>
            <div>
                <Link href="/portfolio">portfolio</Link>
            </div>
            <div>
                <Link href="/clients">clients</Link>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}

export default HomePage;