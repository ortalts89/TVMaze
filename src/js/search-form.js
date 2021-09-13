
const noop = () => undefined;

export function getSearchFormComponent(onSubmit = noop) {
	const element = document.createElement('form');
	element.classList.add('search-form');
	element.innerHTML = `<label>
		<input placeholder="Search Shows and Movies">
	</label>
	<button>
		<img src="http://simpleicon.com/wp-content/uploads/magnifier-2.png" class="submit-img" alt="search">
	</button>`;

	const input = element.querySelector('input');

	element.addEventListener('submit', (event) => {
		event.preventDefault();
		onSubmit(input.value);
	})

	return {
		element
	}
}
