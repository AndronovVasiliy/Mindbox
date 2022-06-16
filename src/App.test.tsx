import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import setupStore from './store/store';
const store = setupStore()

it('render without crush', () => {
    
    render(
        <BrowserRouter>
            <Provider store = {store}>
                <App />
            </Provider>
        </BrowserRouter>)
})