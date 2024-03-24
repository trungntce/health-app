import React from 'react';
import { createRoot } from 'react-dom/client'; // Thay đổi ở đây
import reportWebVitals from './reportWebVitals';
import GlobalStyles from '~/components/GlobalStyles';
import App from '~/App';

createRoot(document.getElementById('root')).render(
    // Thay đổi ở đây
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>,
);

reportWebVitals();
