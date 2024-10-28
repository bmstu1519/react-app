import './App.css';
import { useState, useEffect } from 'react';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';

function App() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(
				data.map((item) => ({
					...item,
					date: new Date(item.date)
				}))
			);
		}
	}, []);

	useEffect(() => {
		if (items.length) {
			console.log('Запись!');
			localStorage.setItem('data', JSON.stringify(items));
		}
	}, [items]);

	const addItem = (item) => {
		setItems((oldItems) => [
			...oldItems,
			{
				id:
					oldItems.length > 0 ? Math.max(...oldItems.map((i) => i.id)) + 1 : 1,
				title: item.title,
				date: new Date(item.date),
				post: item.post
			}
		]);
	};

	return (
		<div className="app">
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList items={items} />
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem} />
			</Body>
		</div>
	);
}

export default App;
