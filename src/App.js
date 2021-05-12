import Header from "./Header"

import Footer from "./Footer";
import {useState} from "react";
function App(){
    let [counter,setCounter]=useState(0)
    function plus(){
        setCounter(counter+1)
    }
    function minus(){
        if(counter>0) {
            setCounter(counter - 1)
        }
    }
    function reset(){
        setCounter(counter=0)
    }

    return <div className="clasApp">
        <Header>Header</Header>
        <div>
            <div className="number">
                {counter}
            </div>
            <div className="menu_button">
                <a href="#"><div onClick={plus} className="button but_1">Увеличить</div></a>
                <a href="#"><div onClick={minus} className="button but_2">Уменьшить</div></a>
                <a href="#"><div onClick={reset} className="button but_3">Сбросить</div></a>
            </div>
        </div>
        <Footer>footer</Footer>
    </div>

}
export default App