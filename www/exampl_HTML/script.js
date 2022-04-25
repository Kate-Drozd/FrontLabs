let startDate = document.querySelector("#startDate").value;
let endDate = document.querySelector("#endDate").value;

const apod = 'https://api.nasa.gov/planetary/apod?api_key=ISY4e5c2w0nsX85mfMHTPLelVio0dnq6jI5ufpkf';
const apodWithPeriod = `https://api.nasa.gov/planetary/apod?api_key=ISY4e5c2w0nsX85mfMHTPLelVio0dnq6jI5ufpkf&start_date=${startDate}&end_date=${endDate}`;

function updateDOM(data){
  let myNode = document.querySelector(".result");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    } 
  let div = document.createElement("div");
  let name = document.createElement("label");
  let img = document.createElement("img");
  let br = document.createElement("span");
  br.innerHTML = "<br/>";
  img.src = data.url;
  img.alt = `${data.title}`;
  name.innerHTML = `${data.title}`;
  document
          .querySelector(".result")
          .appendChild(div)
          .appendChild(name)
          .appendChild(br)
          .appendChild(img);
}

function getAPOD(url){ 
  fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
    'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }, // body data type must match "Content-Type" header
  })
  .then((response) => {
    if (response.ok){
    return response.json();
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
  })
  .then((data) => {
    if (Array.isArray(data) == false){
      updateDOM(data);
    } else{
      data.forEach((item) => {
      updateDOM(item);
      });
    }
    
  });
}
getAPOD(apod);
function getPeriodInfo(){
 getAPOD(apodWithPeriod);
}
