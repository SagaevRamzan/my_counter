import image from "./logo.svg";

function  Footer(){
    return <div className="footer">
        <FooterLogo/>
        <FooterMenu/>
        <Copyright/>
    </div>
}
function FooterLogo(){
    return <div className="foot_logo">
        <img className="sublogo" src={image}/>
    </div>
}
function FooterMenu(){
    return <div className="foot_menu">
        <div><a href="#">Партнерам</a></div>
        <div><a href="#">Разработчикам</a></div>
        <div><a href="#">Вакансии</a></div>
    </div>
}
function Copyright(){
    return <div className="copyright">
        ООО "интукод", 2020 г.
    </div>
}
export default Footer