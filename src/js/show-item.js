export function getShowItemComponent(item, onShowClick) {
	const element = document.createElement('div');
	element.classList.add('show-item');
	const img = item.image ? `<img src="${item.image.medium}">` : ""
	element.innerHTML = `<h3>${item.name}</h3>${img}`;
	element.addEventListener('click',() => {onShowClick(item.id)});

	return {
		element,
	};
}
