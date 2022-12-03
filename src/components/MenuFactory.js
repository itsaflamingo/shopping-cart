
function MenuFactory(categoryName, subMenus, id) {

    return {
        categoryName,
        subMenus,
        id  
    }
}

const children = () => MenuFactory('Children', [
    MenuFactory(
        'Tops', ['Clothing 1', 'Clothing 2', 'Clothing 3', 'Clothing 4', 'Clothing 5', 'Clothing 6'], 1), 
    MenuFactory(
        'Pants', ['Clothing 1', 'Clothing 2', 'Clothing 3', 'Clothing 4', 'Clothing 5', 'Clothing 6'], 2),
    MenuFactory(
        'Outerwear', ['Clothing 1', 'Clothing 2', 'Clothing 3', 'Clothing 4'], 3),
    MenuFactory(
        'Pyjamas', ['Clothing 1', 'Clothing 2', 'Clothing 3', 'Clothing 4'], 4),
], 
'children');

const men = () => MenuFactory('Men', [
    MenuFactory(
        'Tops', ['Clothing 1', 'Clothing 2', 'Clothing 3', 'Clothing 4', 'Clothing 5', 'Clothing 6'], 5), 
    MenuFactory(
        'Pants', ['Clothing 1', 'Clothing 2', 'Clothing 3', 'Clothing 4', 'Clothing 5', 'Clothing 6'], 6),
    MenuFactory(
        'Dress Shirts', ['Clothing 1', 'Clothing 2', 'Clothing 3', 'Clothing 4'], 7),
    MenuFactory(
        'Hats', ['Clothing 1', 'Clothing 2', 'Clothing 3', 'Clothing 4'], 8),
],
'men');

const women = () => MenuFactory('Women', [
    MenuFactory(
        'Tops', ['Clothing 1', 'Clothing 2', 'Clothing 3', 'Clothing 4', 'Clothing 5', 'Clothing 6'], 9), 
    MenuFactory(
        'Pants', ['Clothing 1', 'Clothing 2', 'Clothing 3', 'Clothing 4', 'Clothing 5', 'Clothing 6'], 10),
    MenuFactory(
        'Skirts', ['Clothing 1', 'Clothing 2', 'Clothing 3', 'Clothing 4'], 11),
    MenuFactory(
        'Dresses', ['Clothing 1', 'Clothing 2', 'Clothing 3', 'Clothing 4'], 12),
],
'women');
const handbags = () => MenuFactory('Handbags', [
    MenuFactory(
        'Leather', ['Handbag 1', 'Handbag 2', 'Handbag 3', 'Handbag 4', 'Handbag 5', 'Handbag 6'], 15), 
    MenuFactory(
        'Everyday Wear', ['Handbag 1', 'Handbag 2', 'Handbag 3', 'Handbag 4', 'Handbag 5', 'Handbag 6'], 14),
    MenuFactory(
        'Fashion', ['Handbag 1', 'Handbag 2', 'Handbag 3', 'Handbag 4'], 13)
],
'handbags');
const jewelery = () => MenuFactory('Jewelery & Watches', [
    MenuFactory(
        'For Women', ['Watch 1', 'Watch 2', 'Watch 3', 'Watch 4', 'Watch 5', 'Watch 6'], 16),
    MenuFactory(
        'Fine Watches', ['Watch 1', 'Watch 2', 'Watch 3', 'Watch 4', 'Watch 5', 'Watch 6'], 17), 
    MenuFactory(
        'Everyday Wear', ['Watch 1', 'Watch 2', 'Watch 3', 'Watch 4', 'Watch 5', 'Watch 6'], 18),
    MenuFactory(
        'Fashion Jewelery', ['Watch 1', 'Watch 2', 'Watch 3', 'Watch 4', 'Watch 5', 'Watch 6'], 19)
],
'jewelery');

const categories = [jewelery(), handbags(), children(), men(), women()];

export default categories;