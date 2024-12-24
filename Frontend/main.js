let cardGrid = document.querySelector('.card-grid');

async function fetchSubjects() 
{
    let data  = await axios.get('http://127.0.0.1:8000/ApiView/Subject/');
    Display(data.data)
}
function Display(data){
    cardGrid.innerHTML = ""

    data.forEach(e => {
        cardGrid.innerHTML += `
           <div class="card">
                <div class="card-content">
                    <div class="card-header">
                        <div class="card-icon cs-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <h2 class="card-title">${e.Sname}</h2>
                    </div>
                    <p class="card-description">${e.Sdesc}</p>
                    <a href = "./topics/topics.html?id=${e.Sid}"><button dataid = "${e.Sid}" class="card-button cs-button">View Courses</button></a>
                </div>
            </div>
        `
    });

}

fetchSubjects()