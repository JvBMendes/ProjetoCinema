import style from "./Menu.module.css"
import {User} from "lucide-react"

export default function Menu(){
    return(
        <>

            <header className={style.header}>         
                    <a className={style.logo} href="">POPFLIX</a>
                    
                <nav className={style.nav}>
                    <ul className={style.menu}>
                         <li> <a href="/">Home</a></li>
                         <li> <a href="/Noticias">Notícias</a></li>
                         <li> <a href="/">Cinemas</a></li>
                         <li> <a href="/">Contato</a></li>
                    </ul>
                </nav>
                <div className={style.wrapButtons}>
                         <button className={style.Button2}><User className={style.userIcon}/> ENTRAR</button>
                         <button className={style.Button1}>CADASTRAR</button>
                    </div>              
            </header>


                    
        </>
       
    )
}