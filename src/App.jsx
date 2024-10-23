import './App.css';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';
import LeftPanel from './layout/LeftPanel/LeftPanel';
import Body from './layout/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';

function App() {
	const title = 'asda';
	const date = new Date();
	const text = 'asdawdasdsadasdasdasdasdasdasdasdasdas';
	const data = [
		{
			title: title,
			date: date,
			text: text
		},
		{
			title: title,
			date: date,
			text: text
		}
	];
	return (
		<div className="app">
			<LeftPanel>
				<Header />
				<JournalAddButton />
				<JournalList>
					<CardButton>
						<JournalItem
							title={data[0].title}
							date={data[0].date}
							text={data[0].text}
						/>
					</CardButton>
					<CardButton>
						<JournalItem
							title={data[1].title}
							date={data[1].date}
							text={data[1].text}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm />
			</Body>
		</div>
	);
}

export default App;
