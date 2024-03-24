import classNames from 'classnames/bind';
import styles from './Myrecord.module.scss';
import { Line } from 'react-chartjs-2';
import API from '~/config/APIConfig';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useCallback, useEffect, useState } from 'react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const cx = classNames.bind(styles);

const MyRecord = () => {
    const [dataChart, setDataChart] = useState([]);
    const [datasets, setDatasets] = useState([]);
    const [exercise, setExercise] = useState([]);
    const [arrExcerciseOne, setArrExerciseOne] = useState([]);
    const [arrExcerciseTwo, setArrExerciseTwo] = useState([]);
    const [diary, setDiary] = useState([]);
    const data = {
        labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
        datasets: datasets,
    };

    const options = useCallback(
        {
            responsive: false,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false,
                    },
                },
                x: {
                    type: 'category',
                    position: 'bottom',
                    ticks: {
                        color: 'white',
                    },
                    grid: {
                        display: true,
                        color: 'white',
                        drawBorder: false,
                        drawTicks: false,
                    },
                },
            },
        },
        [],
    );

    const chart = async (e) => {
        try {
            const response = await API.getMyPageChart();
            setDataChart(response.data);
        } catch (error) {
            console.log('Error', error);
        }
    };
    const getExercise = async (e) => {
        try {
            const response = await API.getMyRecordExercise();
            setExercise(response.data);
        } catch (error) {
            console.log('Error', error);
        }
    };
    const getDiary = async (e) => {
        try {
            const response = await API.getMyRecordDiary();
            setDiary(response.data);
        } catch (error) {
            console.log('Error', error);
        }
    };

    useEffect(() => {
        chart();
        getExercise();
        getDiary();
    }, []);

    useEffect(() => {
        if (dataChart.length > 0) {
            const length = dataChart.length;
            let lineOne = {
                label: 'Step One',
                data: [],
                backgroundColor: 'rgb(255, 204, 33)',
                borderColor: 'rgba(255, 204, 33)',
            };
            let lineTwo = {
                label: 'Step One',
                data: [],
                backgroundColor: 'rgb(143, 233, 208)',
                borderColor: 'rgba(143, 233, 208)',
            };
            let labelChart = [];
            for (let i = 0; i < length; i++) {
                labelChart.push(dataChart[i].x);
                lineOne.data.push(dataChart[i].y1);
                lineTwo.data.push(dataChart[i].y2);
            }
            setDatasets([lineOne, lineTwo]);
        }
    }, [dataChart]);

    useEffect(() => {
        if (exercise.length > 0) {
            const midIndex = Math.floor(exercise.length / 2);

            setArrExerciseOne(exercise.slice(0, midIndex));
            setArrExerciseTwo(exercise.slice(midIndex));
        }
    }, [exercise]);

    return (
        <>
            <div className={cx('content', 'relative')}>
                <div className={cx('content-record', 'relative')}>
                    <div className={cx('column-record', 'component-record', 'relative')}>
                        <div className={cx('image-record', 'absolute')}>
                            <img src="images/my-record/MyRecommend-1.jpg" className={cx('imgbw', 'absolute')} />
                            <div className={cx('mask', 'absolute')}></div>
                            <p className={cx('image-record-title', 'absolute', 'text-format')}>BODY RECORD</p>
                            <p className={cx('record-content', 'absolute', 'record-content-text')}>
                                自分のカラダの記録
                            </p>
                        </div>
                    </div>
                    <div className={cx('column-record', 'component-record', 'relative')}>
                        <div className={cx('image-record', 'absolute')}>
                            <img src="images/my-record/MyRecommend-2.jpg" className={cx('imgbw', 'absolute')} />
                            <div className={cx('mask', 'absolute')}></div>
                            <p className={cx('image-record-title', 'absolute', 'text-format')}>BODY RECORD</p>
                            <p className={cx('record-content', 'absolute', 'record-content-text')}>
                                自分のカラダの記録
                            </p>
                        </div>
                    </div>
                    <div className={cx('column-record', 'component-record', 'relative')}>
                        <div className={cx('image-record', 'absolute')}>
                            <img src="images/my-record/MyRecommend-3.jpg" className={cx('imgbw', 'absolute')} />
                            <div className={cx('mask', 'absolute')}></div>
                            <p className={cx('image-record-title', 'absolute', 'text-format')}>BODY RECORD</p>
                            <p className={cx('record-content', 'absolute', 'record-content-text')}>自分の日記</p>
                        </div>
                    </div>
                </div>
                <div className={cx('body-record', 'absolute')}>
                    <p className={cx('title-body-record', 'title-body-record-text', 'absolute')}>BODY RECORD</p>
                    <p className={cx('daterecord', 'daterecord-text', 'absolute')}>2021.05.21</p>

                    <div className={cx('chartline', 'absolute')}>
                        <Line data={data} options={options} width={866} height={211} />
                    </div>

                    <div className={cx('btbelowthechart', 'absolute', 'button-text')}>
                        <button>日</button>

                        <button>週</button>

                        <button>月</button>

                        <button>年</button>
                    </div>
                </div>
                <div className={cx('ex-record', 'absolute')}>
                    <p className={cx('title-body-record', 'title-body-record-text', 'absolute')}>MY EXERCISE</p>
                    <p className={cx('daterecord', 'daterecord-text', 'absolute')}>2021.05.21</p>
                    <div className={cx('ex-record-list-container', 'absolute')}>
                        <div className={cx('ex-record-list', 'absolute')}>
                            {arrExcerciseOne.map((item) => (
                                <div key={item.id} className={cx('ex-record-list-item')}>
                                    <span className={cx('ex-record-list-item-title', 'absolute', 'item-title')}>
                                        {item.title}
                                    </span>
                                    <span
                                        className={cx('ex-record-list-item-time', 'absolute', 'item-time', 'absolute')}
                                    >
                                        {item.time}
                                    </span>
                                    <span
                                        className={cx('ex-record-list-item-kcal', 'absolute', 'item-kcal', 'absolute')}
                                    >
                                        {item.description}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div className={cx('ex-record-list', 'absolute')}>
                            {arrExcerciseTwo.map((item) => (
                                <div key={item.id} className={cx('ex-record-list-item')}>
                                    <span className={cx('ex-record-list-item-title', 'absolute', 'item-title')}>
                                        {item.title}
                                    </span>
                                    <span
                                        className={cx('ex-record-list-item-time', 'absolute', 'item-time', 'absolute')}
                                    >
                                        {item.time}
                                    </span>
                                    <span
                                        className={cx('ex-record-list-item-kcal', 'absolute', 'item-kcal', 'absolute')}
                                    >
                                        {item.description}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={cx('my-diary', 'absolute')}>
                    <p className={cx('my-diary-title', 'absolute')}>MY DIARY</p>
                    <div className={cx('diary', 'absolute')}>
                        {diary.map((item) => (
                            <div key={item.id} className={cx('diary-item', 'relative')}>
                                <span className={cx('diary-item-time', 'absolute', 'diary-item-time-text')}>
                                    {item.title}
                                </span>
                                <div className={cx('diary-item-description', 'absolute')}>
                                    <p className={cx('diary-item-description-title', 'description-text')}>
                                        {item.description}
                                    </p>
                                    <p className={cx('diary-item-description-content', 'description-text')}>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className={cx('button-meal', 'absolute', 'button-format-text')}>自分の日記をもっと見る</button>
            </div>
        </>
    );
};

export default MyRecord;
