import classNames from 'classnames/bind';
import styles from './Mypage.module.scss';
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

function AboutHealth() {
    const [dataChart, setDataChart] = useState([]);
    const [datasets, setDatasets] = useState([]);
    const [productList, setProductList] = useState([]);
    const data = {
        labels: ['6月', '7月', '8月', '9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月'],
        datasets: datasets,
    };
    const options = useCallback(
        {
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

    const products = async (e) => {
        try {
            const response = await API.getAllMyPageProduct();
            setProductList(response.data);
        } catch (error) {
            console.log('Error', error);
        }
    };

    useEffect(() => {
        chart();
        products();
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

    return (
        <>
            <div className={cx('content-page-plan-meal')}>
                <div className={cx('content-banner-plan-meal-page', 'relative')}>
                    <div className={cx('content-banner-plan-meal-page-image', 'relative')}>
                        <img
                            src="images/banner-plan-meal.jpg"
                            className={cx('content-banner-plan-meal-page-img', 'absolute')}
                        />
                        <div className={cx('content-banner-plan-meal-page-image-mask', 'absolute')}></div>
                        <div className={cx('content-banner-plan-meal-main-text', 'absolute')}>
                            <img
                                src="images/photo-text.svg"
                                className={cx('content-banner-plan-meal-page-photo-text', 'absolute')}
                            />
                            <span className={cx('content-banner-plan-meal-main-text-context')}>
                                <span className={cx('time', 'absolute')}>05/21</span>
                                <span className={cx('percent', 'absolute')}>75%</span>
                            </span>
                        </div>
                    </div>
                    <div className={cx('content-banner-plan-meal-page-chart', 'absolute')}>
                        <Line data={data} options={options} />
                    </div>
                </div>
                <div className={cx('content-page-plan-meal-tool', 'relative')}>
                    <div
                        className={cx(
                            'content-page-plan-meal-tool-list',
                            'content-page-plan-meal-tool-list-first',
                            'absolute',
                        )}
                    >
                        <img src="images/tool.svg" className={cx('tool-img-background', 'absolute')} />
                        <img src="images/icon_knife.svg" className={cx('tool-img-item', 'absolute')} />
                        <p className={cx('toolist-title', 'absolute')}>Morning</p>
                    </div>
                    <div
                        className={cx(
                            'content-page-plan-meal-tool-list',
                            'content-page-plan-meal-tool-list-second',
                            'absolute',
                        )}
                    >
                        <img src="images/tool.svg" className={cx('tool-img-background', 'absolute')} />
                        <img src="images/icon_knife.svg" className={cx('tool-img-item', 'absolute')} />
                        <p className={cx('toolist-title', 'absolute')}>Lunch</p>
                    </div>
                    <div
                        className={cx(
                            'content-page-plan-meal-tool-list',
                            'content-page-plan-meal-tool-list-third',
                            'absolute',
                        )}
                    >
                        <img src="images/tool.svg" className={cx('tool-img-background', 'absolute')} />
                        <img src="images/icon_knife.svg" className={cx('tool-img-item', 'absolute')} />
                        <p className={cx('toolist-title', 'absolute')}>Dinner</p>
                    </div>
                    <div
                        className={cx(
                            'content-page-plan-meal-tool-list',
                            'content-page-plan-meal-tool-list-fourth',
                            'absolute',
                        )}
                    >
                        <img src="images/tool.svg" className={cx('tool-img-background', 'absolute')} />
                        <img src="images/icondinner.svg" className={cx('tool-img-item', 'absolute')} />
                        <p className={cx('toolist-title', 'absolute')}>Snack</p>
                    </div>
                </div>
                <div className={cx('content-page-meal-list', 'absolute')}>
                    {productList.map((item) => (
                        <div key={item.id} className={cx('meal-list-item', 'relative')}>
                            <img src={item.urlImages} />
                            <div className={cx('meal-list-item-title', 'absolute')}>
                                <span
                                    className={cx(
                                        'meal-list-item-title-text',
                                        'absolute',
                                        'meal-list-item-title-text-format',
                                    )}
                                >
                                    {item.title}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={cx('button-meal', 'absolute', 'button-format-text')}>記録をもっと見る</button>
            </div>
        </>
    );
}

export default AboutHealth;
