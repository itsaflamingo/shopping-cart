import { useState } from "react"
import categories from "./MenuFactory"
import SubMenus from "./SubMenus"

export default function Menu() {
    const [isCategoryClicked, setIsCategoryClicked] = useState(false);
    
    return (
        <div id='menu'>
            {categories.map((category) => {
                return (
                    <div className="category" key={category.id}>
                        <button className='open-category' onMouseOver={() => setIsCategoryClicked(!isCategoryClicked)}>
                            <h3>{category.categoryName}</h3>
                        </button>
                        {isCategoryClicked && <SubMenus subMenus={category.subMenus} />}
                    </div>
                )
            })}
        </div>
    )
}