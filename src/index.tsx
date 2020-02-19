import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './store';
import App from './components/App';

//Создаём экземпляр стора на основании редьюсеров (так как там прописано как на какие экшены реагировать, инит стор и тд)
const store = createStore(
	rootReducer,
	(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
		(window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	//Оборачиваем приложение в редакс (из всего дом дерева будет доступен сейчас стор с плюшками)
	<Provider store={store}>
		<div className='App'>
			<App />
		</div>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
