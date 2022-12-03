export default function SubMenus(props) {
    const {subMenus, categoryName, isClicked} = props;

    return (
        <div className="sub-menu" id={categoryName}>
            {isClicked && subMenus.map((subCategory) => {
                return (
                    <div className='sub-category' key={subCategory.id}>
                        {subCategory.categoryName}
                    </div>
                )
            })}
        </div>
    )
}