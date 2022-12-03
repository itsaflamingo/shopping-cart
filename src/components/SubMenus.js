export default function SubMenus(props) {
    const { subMenus, id, isHovered, category, setCategory, noCategory } = props;

    return (
        <div className="sub-menu" id={id}
        onMouseOver={() => setCategory(category)} 
        onMouseLeave={() => setCategory(noCategory)}>
            {isHovered && subMenus.map((subCategory) => {
                return (
                    <div className='sub-category' key={subCategory.id}>
                        <p className='cat-heading'>{subCategory.categoryName}</p>
                        {subCategory.subMenus.map((item) => {
                           return (
                            <div className="menu-item">
                                {item}
                            </div>
                           )
                        })}
                    </div>
                )
            })}
        </div>
    )
}