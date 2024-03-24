import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0, // Quay về đầu trang
            behavior: 'smooth', // Chuyển động mượt mà
        });
    };
    return (
        <>
            <div className={cx('footer', 'absolute')}>
                <a href="#" className={cx('footer-text-format', 'footer-item-one', 'absolute', 'footer-item-top')}>
                    会員登録
                </a>
                <a href="#" className={cx('footer-text-format', 'footer-item-two', 'absolute', 'footer-item-top')}>
                    運営会社
                </a>
                <a href="#" className={cx('footer-text-format', 'footer-item-three', 'absolute', 'footer-item-top')}>
                    利用規約
                </a>
                <a href="#" className={cx('footer-text-format', 'footer-item-four', 'absolute', 'footer-item-top')}>
                    個人情報の取扱について
                </a>
                <a href="#" className={cx('footer-text-format', 'footer-item-five', 'absolute', 'footer-item-top')}>
                    特定商取引法に基づく表記
                </a>
                <a href="#" className={cx('footer-text-format', 'footer-item-six', 'absolute', 'footer-item-top')}>
                    お問い合わせ
                </a>
            </div>
            <div onClick={scrollToTop} className={cx('return-head')}>
                <img src="images/component_scroll.svg" />
            </div>
        </>
    );
}

export default Footer;
