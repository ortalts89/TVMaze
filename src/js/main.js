import { getShowsListComponent } from './shows-list.js'
import { getSearchFormComponent } from './search-form.js'

const contentElement = document.querySelector('.content');
const topHeaderElement = document.querySelector('.top-header');

const showsListComponent = getShowsListComponent(function (itemId){
	window.open(`html/show.html?id=${itemId}`);
});

const searchFormComponent = getSearchFormComponent(function (searchQuery) {
	showsListComponent.search(searchQuery);
});

contentElement.prepend(showsListComponent.element);

topHeaderElement.insertBefore(
	searchFormComponent.element,
	topHeaderElement.querySelector('.auth-links')
);
