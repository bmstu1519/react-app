import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton() {
	return (
		<CardButton className="journal-add">
			<img className="journal-add" src="/plus_button.svg" alt="+" />
			Новое воспоминание
		</CardButton>
	);
}
export default JournalAddButton;
