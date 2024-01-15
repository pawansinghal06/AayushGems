document.getElementById('getLocation').addEventListener('click', () => {
    let myMapContainer = document.querySelector('.map-container');
    if (myMapContainer.style.height === '0px' || myMapContainer.style.height === '') {
        myMapContainer.style.height = '350px';
    } else {
        myMapContainer.style.height = '0px';
    }
});
