import { useEffect, useState } from "react"
import categories from "./MenuFactory"
import SubMenus from "./SubMenus"

export default function Menu() {

    const noCategory = { 
        subMenus: [],
        categoryName: []
    };
    
    const [isCategoryClicked, setIsCategoryClicked] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(noCategory);

    useEffect(() => {
        setIsCategoryClicked(true);
    }, [selectedCategory]);

    return (
        <div id='menu'>
            {categories.map((category) => {
                return (
                    <div className="category" key={category.id}>
                        <button className='open-category' onMouseOver={() => setSelectedCategory(category)} onMouseLeave={() => setSelectedCategory(noCategory)}>
                            <h3>{category.categoryName}</h3>
                        </button>
                    </div>
                )
            })}
            {isCategoryClicked && <SubMenus subMenus={selectedCategory.subMenus} categoryName={selectedCategory.categoryName} isClicked={isCategoryClicked} />}
        </div>
    )
}