import style from "./Landing.module.css"

const Landing = () => {
    return(
        <section className={style.landing}>
            <div className={style.container}>
                <h1 className={style.text}>Welcome to my Food App!</h1>
                <a className={style.link} href="/home">Let's go</a>
            </div>
        </section>
    )
};

export default Landing;