const AboutProductModal = [
    {
        id: 1,
        title: 'RECOMMENDED COLUMN',
        urlImages: '',
        description: 'オススメ',
        content: 'オススメ',
    },
    {
        id: 2,
        title: 'RECOMMENDED DIET',
        urlImages: '',
        description: 'ダイエット',
        content: 'ダイエット',
    },
    {
        id: 3,
        title: 'RECOMMENDED BEAUTY',
        urlImages: '',
        description: '美容',
        content: '美容',
    },
    {
        id: 4,
        title: 'RECOMMENDED HEALTH',
        urlImages: '',
        description: '健康',
        content: '健康',
    },
];

const AboutNewsModal = [
    {
        id: 1,
        title: 'RECOMMENDED COLUMN',
        date: '2021.05.17   23:25',
        urlImages: '/images/about-healthy/healthy-1.svg',
        description: '#魚料理  #和食  #DHA',
        content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    },
    {
        id: 2,
        title: 'RECOMMENDED DIET',
        date: '2021.05.17   23:25',
        urlImages: '/images/about-healthy/healthy-2.svg',
        description: '#魚料理  #和食  #DHA',
        content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    },
    {
        id: 3,
        title: 'RECOMMENDED DIET',
        date: '2021.05.17   23:25',
        urlImages: '/images/about-healthy/healthy-3.svg',
        description: '#魚料理  #和食  #DHA',
        content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    },
    {
        id: 4,
        title: 'RECOMMENDED DIET',
        date: '2021.05.17   23:25',
        urlImages: '/images/about-healthy/healthy-4.svg',
        description: '#魚料理  #和食  #DHA',
        content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    },
    {
        id: 5,
        title: 'RECOMMENDED DIET',
        date: '2021.05.17   23:25',
        urlImages: '/images/about-healthy/healthy-5.svg',
        description: '#魚料理  #和食  #DHA',
        content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    },
    {
        id: 6,
        title: 'RECOMMENDED DIET',
        date: '2021.05.17   23:25',
        urlImages: '/images/about-healthy/healthy-6.svg',
        description: '#魚料理  #和食  #DHA',
        content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    },
    {
        id: 7,
        title: 'RECOMMENDED DIET',
        date: '2021.05.17   23:25',
        urlImages: '/images/about-healthy/healthy-7.svg',
        description: '#魚料理  #和食  #DHA',
        content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    },
    {
        id: 8,
        title: 'RECOMMENDED DIET',
        date: '2021.05.17   23:25',
        urlImages: '/images/about-healthy/healthy-8.svg',
        description: '#魚料理  #和食  #DHA',
        content: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    },
];

// Function to search posts by id
const getAllProducts = () => AboutProductModal;

// Function to search posts by id
const findByIdProduct = (id) => AboutProductModal.find((product) => product.id === id);

// Function to search posts by id
const getAllAboutNews = () => AboutNewsModal;

// Function to search posts by id
const findByIdAboutNews = (id) => AboutNewsModal.find((news) => news.id === id);

module.exports = { getAllProducts, findByIdProduct, getAllAboutNews, findByIdAboutNews };
