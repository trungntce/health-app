import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Hàm xử lý click để bật/tắt dropdown menu
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <>
            <div className={cx('header', 'relative')}>
                <Link to="/my-page">
                    <div className={cx('header-logo', 'absolute')}>
                        <img src="/images/logo.svg" className={cx('header-logo-image', 'absolute')} />
                    </div>
                </Link>
                <Link to="/my-record">
                    <div className={cx('header-logo-item', 'header-item-one', 'absolute')}>
                        <img
                            src="/images/record.svg"
                            className={cx('header-item-one-image', 'header-item-icon', 'absolute')}
                        />

                        <p className={cx('header-item-one-text', 'header-text-item-format', 'text-format', 'absolute')}>
                            自分の記録
                        </p>
                    </div>
                </Link>
                <div className={cx('header-logo-item', 'header-item-two', 'absolute')}>
                    <img
                        src="images/icon_challenge.svg"
                        className={cx('header-item-two-image', 'header-item-icon', 'absolute')}
                    />
                    <p className={cx('header-item-two-text', 'header-text-item-format', 'text-format', 'absolute')}>
                        チャレンジ
                    </p>
                </div>
                <div className={cx('header-logo-item', 'header-item-three', 'absolute')}>
                    <img
                        src="images/icon_info.svg"
                        className={cx('header-item-three-image', 'header-item-icon', 'absolute')}
                    />
                    <p className={cx('header-item-three-text', 'header-text-item-format', 'text-format', 'absolute')}>
                        お知らせ
                    </p>
                    <span className={cx('header-item-info-count', 'absolute')}>
                        <span className={cx('absolute', 'header-item-info-count-text')}>1</span>
                    </span>
                </div>
                <div className={cx('relative', 'header-icon-menu-container')}>
                    <img
                        src="images/icon_menu.svg"
                        className={cx('absolute', 'header-icon-menu')}
                        onClick={toggleDropdown}
                    />
                    <div
                        className={cx('absolute', 'dropdown-menu')}
                        style={{ display: isDropdownOpen ? 'block' : 'none' }}
                    >
                        <div className={cx('icon-close-container', 'absolute')} onClick={toggleDropdown}>
                            <img src="images/icon_close.svg" className={cx('icon-close')} />
                        </div>
                        <div className={cx('absolute', 'dropdown-menu-list')}>
                            <Link to="/my-record">
                                <div className={cx('dropdown-menu-list-item', 'relative')}>
                                    <p className={cx('dropdown-menu-list-item-text', 'absolute')}>自分の記録</p>
                                </div>
                            </Link>
                            <div className={cx('dropdown-menu-list-item', 'relative')}>
                                <p className={cx('dropdown-menu-list-item-text', 'absolute')}>体重グラフ</p>
                            </div>
                            <div className={cx('dropdown-menu-list-item', 'relative')}>
                                <p className={cx('dropdown-menu-list-item-text', 'absolute')}>目標</p>
                            </div>
                            <div className={cx('dropdown-menu-list-item', 'relative')}>
                                <p className={cx('dropdown-menu-list-item-text', 'absolute')}>選択中のコース</p>
                            </div>
                            <Link to="/about-health">
                                <div className={cx('dropdown-menu-list-item', 'relative')}>
                                    <p className={cx('dropdown-menu-list-item-text', 'absolute')}>コラム一覧</p>
                                </div>
                            </Link>
                            <div className={cx('dropdown-menu-list-item', 'relative')}>
                                <p className={cx('dropdown-menu-list-item-text', 'absolute')}>設定</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
