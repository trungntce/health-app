import React from 'react';
import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';

const cx = classNames.bind(styles);
const NotFoundPage = () => {
    return (
        <div className={cx('container-form')}>
            <div class={cx('text-404')}>404</div>
            <div class={cx('description')}>Oops! We can't seem to find the page you're looking for.</div>
        </div>
    );
};

export default NotFoundPage;
