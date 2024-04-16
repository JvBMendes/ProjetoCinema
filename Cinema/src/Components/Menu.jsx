import style from "./Menu.module.css"


export default function Menu(){
    return(
        <>
            <header className={style.header}>         
                    <a className={style.logo} href="">POPFLIX</a>
                    
                <nav className={style.nav}>
                    <ul className={style.menu}>
                         <li> <a href="/">Home</a></li>
                         <li> <a href="/">Notícias</a></li>
                         <li> <a href="/">Cinemas</a></li>
                         <li> <a href="/">Contato</a></li>
                    </ul>
                </nav>
                <div style={{width:100}}></div>              
            </header>


                    
        </>
       
    )
}