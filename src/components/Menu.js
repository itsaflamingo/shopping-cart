import { useEffect, useState } from "react"
import categories from "./MenuFactory"
import SubMenus from "./SubMenus"

export default function Menu() {

    const noCategory = { 
        subMenus: [],
        categoryName: []
    };

    const [isCategoryHovered, setIsCategoryHovered] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(noCategory);

    useEffect(() => {
        setIsCategoryHovered(true);
    }, [selectedCategory]);

    return (
        <div id='menu'>
            {categories.map((category) => {
                return (
                    <div className="category" key={category.id}>
                        <button className='open-category' 
                        onMouseOver={() => setSelectedCategory(category)}>
                            <h3>{category.categoryName}</h3>
                        </button>
                    </div>
                )
            })}
            {isCategoryHovered && <SubMenus subMenus={selectedCategory.subMenus} id={selectedCategory.id} isHovered={isCategoryHovered} category={selectedCategory} setCategory={setSelectedCategory} noCategory={noCategory} />}
        </div>
    )
}