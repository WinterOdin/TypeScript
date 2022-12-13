import classes from './hero.module.css';
import Image from 'next/image';


function Hero(){

    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/man.jpg" alt="Img" width={300} height={300} />
            </div>
            <h1>Hi I'm Test</h1>
            <p>
                Test blog 
            </p>
        </section>
    )
}

export default Hero