
getShowInfo();

function getShowInfo(){
    const urlStr = window.location.href;
    const url = new URL(urlStr);
    const itemId = url.searchParams.get("id");

    fetch(`https://api.tvmaze.com/shows/${itemId}`)
    .then((response) => {return response.json()})
    .then(renderShowInfo);
}

function renderShowInfo(showDetails){
    let wrapper = document.createElement('div');
    document.querySelector('body').appendChild(wrapper);
    let imgElement = document.createElement("img");
    imgElement.src = showDetails.image.medium;
    wrapper.appendChild(imgElement);

    const showInfo = [];
    showInfo.push(showDetails.name)
    showInfo.push(showDetails.premiered)
    showInfo.push(showDetails.summary)
    
    showInfo.map((item) => {
        const element = document.createElement('div');
        element.innerHTML = item;
        wrapper.appendChild(element);
    })
}