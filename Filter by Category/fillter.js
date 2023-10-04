function filterproductcategory(product) {
    return function(category) {
        return products.filter(product => product.category === category);
    };
}

const products = [
    { id: 1, name: 'Product A', category: 'Mobiles'},
    { id: 2, name: 'Product B', category: 'Grocry'},
    { id: 3, name: 'Product C', category: 'Sleeper'},
    { id: 4, name: 'Product D', category: 'Bike'},
];

const filterProducts = filterproductcategory(products);

const mobielsProducts = filterProducts('Mobiles');
console.log(mobielsProducts);

const SleeperPrducts = filterProducts('Sleeper');
console.log(SleeperPrducts);