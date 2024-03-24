const MyRecordProductModel = [
    {
        id: 1,
        title: 'BODY RECORD',
        urlImages: '/images/my-record/MyRecommend-1.svg',
        description: '自分のカラダの記録',
        content: '自分のカラダの記録',
    },
    {
        id: 2,
        title: 'MY EXERCISE',
        urlImages: '/images/my-record/MyRecommend-2.svg',
        description: '自分の運動の記録',
        content: '自分の運動の記録',
    },
    {
        id: 3,
        title: 'MY DIARY',
        urlImages: '/images/my-record/MyRecommend-3.svg',
        description: '自分の日記',
        content: '自分の日記',
    },
];
const MyRecordChartModel = [
    {
        id: 1,
        x: 6,
        y1: 90,
        y2: 90,
    },
    {
        id: 2,
        x: 7,
        y1: 85,
        y2: 84,
    },
    {
        id: 3,
        x: 8,
        y1: 50,
        y2: 68,
    },
    {
        id: 4,
        x: 9,
        y1: 70,
        y2: 65,
    },
    {
        id: 5,
        x: 10,
        y1: 60,
        y2: 50,
    },
    {
        id: 6,
        x: 11,
        y1: 55,
        y2: 48,
    },
    {
        id: 7,
        x: 12,
        y1: 65,
        y2: 35,
    },
    {
        id: 8,
        x: 1,
        y1: 50,
        y2: 35,
    },
    {
        id: 9,
        x: 2,
        y1: 40,
        y2: 28,
    },
    {
        id: 10,
        x: 3,
        y1: 30,
        y2: 25,
    },
    {
        id: 11,
        x: 4,
        y1: 25,
        y2: 20,
    },
    {
        id: 12,
        x: 5,
        y1: 22,
        y2: 18,
    },
];

const MyRecordExerciseModel = [
    {
        id: 1,
        title: '家事全般（立位・軽い）',
        time: '10 min',
        description: '26kcal',
    },
    {
        id: 2,
        title: '家事全般（立位・軽い）',
        time: '10 min',
        description: '26kcal',
    },
    {
        id: 3,
        title: '家事全般（立位・軽い）',
        time: '10 min',
        description: '26kcal',
    },
    {
        id: 4,
        title: '家事全般（立位・軽い）',
        time: '10 min',
        description: '26kcal',
    },
    {
        id: 5,
        title: '家事全般（立位・軽い）',
        time: '10 min',
        description: '26kcal',
    },
    {
        id: 6,
        title: '家事全般（立位・軽い）',
        time: '10 min',
        description: '26kcal',
    },
    {
        id: 7,
        title: '家事全般（立位・軽い）',
        time: '10 min',
        description: '26kcal',
    },
    {
        id: 8,
        title: '家事全般（立位・軽い）',
        time: '10 min',
        description: '26kcal',
    },
];
const MyRecordDiaryModel = [
    {
        id: 1,
        title: '2021.05.21   23:25',
        description: '私の日記の記録が一部表示されます',
        content:
            'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
        id: 2,
        title: '2021.05.21   23:25',
        description: '私の日記の記録が一部表示されます',
        content:
            'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
        id: 3,
        title: '2021.05.21   23:25',
        description: '私の日記の記録が一部表示されます',
        content:
            'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
        id: 4,
        title: '2021.05.21   23:25',
        description: '私の日記の記録が一部表示されます',
        content:
            'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
        id: 5,
        title: '2021.05.21   23:25',
        description: '私の日記の記録が一部表示されます',
        content:
            'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
        id: 6,
        title: '2021.05.21   23:25',
        description: '私の日記の記録が一部表示されます',
        content:
            'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
        id: 7,
        title: '2021.05.21   23:25',
        description: '私の日記の記録が一部表示されます',
        content:
            'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
    {
        id: 8,
        title: '2021.05.21   23:25',
        description: '私の日記の記録が一部表示されます',
        content:
            'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
    },
];

// function get All Record Products
const getAllMyRecordProducts = () => MyRecordProductModel;

// function to get chart
const getMyRecordChart = () => MyRecordChartModel;

// function get My Record Exercise
const getMyRecordExercise = () => MyRecordExerciseModel;

// function get My Record Diary
const getMyRecordDiary = () => MyRecordDiaryModel;

module.exports = { getAllMyRecordProducts, getMyRecordChart, getMyRecordExercise, getMyRecordDiary };
