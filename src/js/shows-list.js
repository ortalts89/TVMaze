import { getShowItemComponent } from './show-item.js'

const mockShows = []


export function getShowsListComponent(onShowClick) {
	const wrapper = document.createElement('div');
	wrapper.classList.add('shows-list');
	const component = {
		element: wrapper,
		search: function (query) {
			fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
				.then(function (response) {return response.json()})
				.then(function (items) {return items.map(item => item.show)})
				.then(renderItems)
		},
	}

	function renderItems(items) {
		wrapper.innerHTML = "";
		items
			.map(item => getShowItemComponent(item,onShowClick).element)
			.map(element => wrapper.appendChild(element));
	}

	renderItems(mockShows);
	return component
}


