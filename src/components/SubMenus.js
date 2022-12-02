export default function SubMenus(props) {
    const {subMenus} = props;

    return (
        <div className="sub-menu">
            {subMenus.map((subCategory) => {
                return (
                    <div className='sub-category' key={subCategory.id}>
                        {subCategory.categoryName}
                    </div>
                )
            })}
        </div>
    )
}