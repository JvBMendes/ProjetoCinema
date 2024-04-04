import style from "./Menu.module.css"


export default function Menu(){
    return(
        <>
            <div className={style.WrapMenu}>
                <div className={style.tittle}>
                    <h2 >POPFLIX</h2>
                </div>
                <div className={style.WrapA}>
                    <a href="/">Home</a>
                    <a href="/">Cinemas</a>
                    <a href="/">Notícias</a>
                </div>
            </div>
        </>
        

    )
}