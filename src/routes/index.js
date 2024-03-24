import MyPage from '~/pages/MyPage';
import MyRecord from '~/pages/MyRecord';
import AboutHealth from '~/pages/AboutHealth';
import Login from '~/pages/Login';
import NotFoundPage from '~/pages/404/NotFoundPage';

const webRoutes = [
    { path: '/about-health', component: AboutHealth, isProtected: false },
    { path: '/', component: MyPage, isProtected: true },
    { path: '/my-page', component: MyPage, isProtected: true },
    { path: '/login', component: Login, isProtected: false },
    { path: '/my-record', component: MyRecord, isProtected: true },
    { path: '/404', component: NotFoundPage, isProtected: false },
];

export { webRoutes };
