import uniqid from 'uniqid'

function ItemFactory(image, name, price) {
    let quantity;
    const addOne = () => quantity+1;

    return {
        image,
        name,
        price,
        quantity: 0,
        id: uniqid(),
        addOne
    }
}

const items = [
    ItemFactory('url1', 'name1', 'price1'),
    ItemFactory('url2', 'name2', 'price2'),
    ItemFactory('url3', 'name3', 'price3'),
    ItemFactory('url4', 'name4', 'price4'),
    ItemFactory('url5', 'name5', 'price5'),
    ItemFactory('url6', 'name6', 'price6'),
]




export default items;

