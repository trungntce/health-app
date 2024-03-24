import classNames from 'classnames/bind';
import styles from './AbouHealth.module.scss';
import API from '~/config/APIConfig';
import React, { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

const MyRecord = () => {
    const [recommendedColumn, setRecommendedColumn] = useState([]);
    const [newsList, setNewsList] = useState([]);
    const products = async (e) => {
        try {
            const response = await API.getAboutProducts();
            setRecommendedColumn(response.data);
        } catch (error) {
            console.log('Error', error);
        }
    };

    const news = async (e) => {
        try {
            const response = await API.getAboutNewsAll();
            setNewsList(response.data);
        } catch (error) {
            console.log('Error', error);
        }
    };

    useEffect(() => {
        products();
        news();
    }, []);

    return (
        <>
            <div className={cx('content')}>
                <div className={cx('recommended-row')}>
                    {recommendedColumn.map((item) => (
                        <div key={item.id} className={cx(item['title'].toLowerCase().replace(/\s/g, '-'))}>
                            <p>{item.title}</p>
                            <span>{item.content}</span>
                        </div>
                    ))}
                </div>
                <div className={cx('content-video')}>
                    {newsList.map((item) => (
                        <div key={item.id} className={cx('video-info')}>
                            <div className={cx('video-banner')}>
                                <img src={item.urlImages} alt="Video thumbnail" />
                                <div className={cx('video-time')}>
                                    <span>{item.date}</span>
                                </div>
                            </div>
                            <div className={cx('title-video')}>
                                <p>{item.content}</p>
                            </div>
                            <div className={cx('author-video')}>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={cx('button-seemore')}>
                    <button>コラムをもっと見る</button>
                </div>
            </div>
        </>
    );
};

export default MyRecord;
