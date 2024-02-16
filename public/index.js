document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/data')
    .then(response => response.json())
    .then(data => {
        console.log('Data from backend' + data);
    }).catch(error => {
        console.error('Error getting data:', error);
    });
});