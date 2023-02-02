import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />
            </div>

            <nav className="containerItemList">
                <ItemListContainer 
                    itemUno = "Cactus"
                    itemDos = "Suculentas"
                    itemTres = "Plantas Interior"
                    itemCuatro = "Plantas Exterior"
                />
            </nav>

            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;