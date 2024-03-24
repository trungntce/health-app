const ChartModal = [
    {
        id: 1,
        x: 6,
        y1: 95,
        y2: 95,
    },
    {
        id: 2,
        x: 7,
        y1: 85,
        y2: 82,
    },
    {
        id: 3,
        x: 8,
        y1: 67,
        y2: 72,
    },
    {
        id: 4,
        x: 9,
        y1: 75,
        y2: 69,
    },
    {
        id: 5,
        x: 10,
        y1: 70,
        y2: 53,
    },
    {
        id: 6,
        x: 11,
        y1: 60,
        y2: 50,
    },
    {
        id: 7,
        x: 12,
        y1: 70,
        y2: 39,
    },
    {
        id: 8,
        x: 1,
        y1: 55,
        y2: 38,
    },
    {
        id: 9,
        x: 2,
        y1: 50,
        y2: 37,
    },
    {
        id: 10,
        x: 3,
        y1: 45,
        y2: 30,
    },
    {
        id: 11,
        x: 4,
        y1: 40,
        y2: 28,
    },
    {
        id: 12,
        x: 5,
        y1: 45,
        y2: 25,
    },
];

const ProductModal = [
    {
        id: 1,
        title: '05.21.Morning',
        urlImages: '/images/my-page/product-1-5.svg',
    },
    {
        id: 2,
        title: '05.21.Lunch',
        urlImages: '/images/my-page/product-2.svg',
    },
    {
        id: 3,
        title: '05.21.Dinner',
        urlImages: '/images/my-page/product-3.svg',
    },
    {
        id: 4,
        title: '05.21.Snack',
        urlImages: '/images/my-page/product-4.svg',
    },
    {
        id: 5,
        title: '05.21.Morning',
        urlImages: '/images/my-page/product-5.svg',
    },
    {
        id: 6,
        title: '05.20.Lunch',
        urlImages: '/images/my-page/product-6.svg',
    },
    {
        id: 7,
        title: '05.20.Dinner',
        urlImages: '/images/my-page/product-7.svg',
    },
    {
        id: 8,
        title: '05.20.Snack',
        urlImages: '/images/my-page/product-8.svg',
    },
];

// chart;
const getMyPageChart = () => ChartModal;

// Function to get the entire list of posts
const getAllMyPageProducts = () => ProductModal;

// Function to search posts by id
const findByMyPageProduct = (id) => ProductModal.find((product) => product.id === id);

module.exports = { getMyPageChart, getAllMyPageProducts, findByMyPageProduct };
