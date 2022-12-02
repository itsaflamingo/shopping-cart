import uniqid from 'uniqid';

function MenuFactory(categoryName, subMenus) {
    const createId = () => uniqid();

    return {
        categoryName,
        subMenus,
        id: createId()  
    }
}

const children = () => MenuFactory('Children', [
    MenuFactory(
        'Tops', ['Clothing 1, Clothing 2, Clothing 3, Clothing 4, Clothing 5, Clothing 6']), 
    MenuFactory(
        'Pants', ['Clothing 1, Clothing 2, Clothing 3, Clothing 4, Clothing 5, Clothing 6']),
    MenuFactory(
        'Outerwear', ['Clothing 1, Clothing 2, Clothing 3, Clothing 4']),
    MenuFactory(
        'Pyjamas', ['Clothing 1, Clothing 2, Clothing 3, Clothing 4']),
]);

const men = () => MenuFactory('Men', [
    MenuFactory(
        'Tops', ['Clothing 1, Clothing 2, Clothing 3, Clothing 4, Clothing 5, Clothing 6']), 
    MenuFactory(
        'Pants', ['Clothing 1, Clothing 2, Clothing 3, Clothing 4, Clothing 5, Clothing 6']),
    MenuFactory(
        'Dress Shirts', ['Clothing 1, Clothing 2, Clothing 3, Clothing 4']),
    MenuFactory(
        'Hats', ['Clothing 1, Clothing 2, Clothing 3, Clothing 4']),
]);

const women = () => MenuFactory('Women', [
    MenuFactory(
        'Tops', ['Clothing 1, Clothing 2, Clothing 3, Clothing 4, Clothing 5, Clothing 6']), 
    MenuFactory(
        'Pants', ['Clothing 1, Clothing 2, Clothing 3, Clothing 4, Clothing 5, Clothing 6']),
    MenuFactory(
        'Skirts', ['Clothing 1, Clothing 2, Clothing 3, Clothing 4']),
    MenuFactory(
        'Dresses', ['Clothing 1, Clothing 2, Clothing 3, Clothing 4']),
]);
const handbags = () => MenuFactory('Handbags', [
    MenuFactory(
        'Leather', ['Handbag 1, Handbag 2, Handbag 3, Handbag 4, Handbag 5, Handbag 6']), 
    MenuFactory(
        'Everyday Wear', ['Handbag 1, Handbag 2, Handbag 3, Handbag 4, Handbag 5, Handbag 6']),
    MenuFactory(
        'Fashion', ['Handbag 1, Handbag 2, Handbag 3, Handbag 4'])
]);
const jewelery = () => MenuFactory('Jewelery & Watches', [
    MenuFactory(
        'For Women', ['Watch 1, Watch 2, Watch 3, Watch 4, Watch 5, Watch 6']),
    MenuFactory(
        'Fine Watches', ['Watch 1, Watch 2, Watch 3, Watch 4, Watch 5, Watch 6']), 
    MenuFactory(
        'Everyday Wear', ['Watch 1, Watch 2, Watch 3, Watch 4, Watch 5, Watch 6']),
    MenuFactory(
        'Fashion Jewelery', ['Watch 1, Watch 2, Watch 3, Watch 4, Watch 5, Watch 6'])
]);

const categories = [jewelery(), handbags(), children(), men(), women()];

export default categories;