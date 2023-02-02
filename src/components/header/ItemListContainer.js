import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
    return (
        <ul>
            <li>
                <a href="category/cactus">
                    {props.itemUno}
                </a>
            </li>

            <li>
                <a href="category/suculentas">
                    {props.itemDos}
                </a>
            </li>

            <li>
                <a href="category/plantint">
                    {props.itemTres}
                </a>
            </li>

            <li>
                <a href="category/plantExt">
                    {props.itemCuatro}
                </a>
            </li>
        </ul>
    );
}

export default ItemListContainer

