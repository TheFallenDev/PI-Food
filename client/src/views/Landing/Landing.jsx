import style from "./Landing.module.css"

const Landing = () => {
    return(
        <section className={style.landing}>
            <div className={style.container}>
                <h1 className={style.text}>Bienvenidos a mi Food App!</h1>
                <a className={style.link} href="/home">Ingresar</a>
            </div>
        </section>
    )
};

export default Landing;