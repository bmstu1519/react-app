import './JournalForm.css';
import { useState } from 'react';
import Button from '../Button/Button';

function JournalForm() {
	const [inputData, setInputData] = useState();

	const inputChange = (event) => {
		setInputData(event.target.value);
		console.log(event.target.value);
	};

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};
	return (
		<form className="journal-form" onSubmit={addJournalItem}>
			<input type="title" name="title " />
			<input type="date" name="date" />
			<input type="text" name="tag" value={inputData} onChange={inputChange} />
			<textarea name="post" id=""></textarea>
			<Button text="Сохранить" onClick={() => {}} />
		</form>
	);
}
export default JournalForm;
