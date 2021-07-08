console.log('working');
document.onload = dataFlow()

async function fetchData(){
    let response= await fetch('./assets/json/data.json')
    let data= await response.json()
    return data;
}

function showJobs(data){
    let jobContainer= document.querySelector('.job-tile-container')
    let jobHTML= ""
    data.forEach(function (job){
        jobHTML += `
        <div class="job-tile">
                <div class="job-tile-head">
                    <div class="logo"><img src="${job.logo}"/></div>
                    <div class="dots"><i class="fas fa-ellipsis-h"></i></div>
                </div>
                <div class="job-tile-title">${job.roleName}</div>
                <div class="job-tile-desc">${job.requirements.content}</div>
                <div class="btns">
                    <div class="apply">Apply</div>
                    <div class="message">Message</div>
                </div>
            </div>
        `
    });
    jobContainer.innerHTML = jobHTML
}

async function dataFlow(){
    const data= await fetchData();
    showJobs(data);
}
 