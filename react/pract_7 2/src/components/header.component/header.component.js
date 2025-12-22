import './header.component.css'
import { Authmenu } from './AuthMenu/auth-menu.js'
import { BunchCart } from './HeaderCart/BunchCart.js'
import { SearchBar } from './SearchBar/SearchBar.js'

export const HeaderComponent = () => {
    return(
    <header> 
        <div className ="leftheader"> 
            <div className='FurtinitureStore'>
                <div>Furniture</div>
                <div className='store'>Store</div>
            </div>
            <div>The biggest choice in the web</div>


        </div>
        <div className ="rightheader"> 
            < Authmenu/>
            <BunchCart/>
            < SearchBar />

        </div>


    </header>)
}


