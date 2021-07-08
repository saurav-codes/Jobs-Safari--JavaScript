import './main'

let inpField_el= document.getElementById('filter-jobs') 

let find_btn= document.querySelector('.btn-container')
find_btn.addEventListener('click',()=>{ 
  if (inpField_el.value){
    let jobs= searchDB(inpField_el.value,fetchData)
    showJobs(jobs)
  }
});

function searchDB(searchTxt, Jobs){
  let jobs= Jobs.forEach(function(Job){
    return Job
  });
  return jobs;
}