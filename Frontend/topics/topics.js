const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const cardContainer = document.querySelector('#card-container')

async function fetchTopics() 
{
    let data  = await axios.get(`http://127.0.0.1:8000/ApiView/Topic/${id}`);
    console.log(data.data)
    Display(data.data)
}


function Display(data)
{
    cardContainer.innerHTML = ''

    data.forEach(e => {
        cardContainer.innerHTML += `
                <div class="card-content">
                    <h2 class="card-title">${e.Tname}</h2>
                    <p class="card-description">${e.Tdesc}</p>
                    <a href="./vexy-detail.html?id=${e.Tid}">
                        <button dataid="${e.Tid}" class="card-button cs-button">Learn More</button>
                    </a>
                </div>`
    });


}
fetchTopics()