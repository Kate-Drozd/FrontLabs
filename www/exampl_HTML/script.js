let startDate = document.querySelector("#startDate").value;
let endDate = document.querySelector("#endDate").value;

const apod = 'https://api.nasa.gov/planetary/apod?api_key=ISY4e5c2w0nsX85mfMHTPLelVio0dnq6jI5ufpkf';
const apodWithPeriod = `https://api.nasa.gov/planetary/apod?api_key=ISY4e5c2w0nsX85mfMHTPLelVio0dnq6jI5ufpkf&start_date=${startDate}&end_date=${endDate}`;

function updateDOM(data){
  let myNode = document.querySelector(".result");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    } 
  let type = data.media_type;
  let div = document.createElement("div");
  let name = document.createElement("label");
  let explanation  = document.createElement("label");
  let img = document.createElement("img");
  let br = document.createElement("span");
  let br2 = document.createElement("span");
  br.innerHTML = "<br/>";
  br2.innerHTML = "<br/>";
  var video = document.createElement("IFRAME");
  img.src = data.url;
  img.alt = `${data.title}`;
  name.innerHTML = `${data.title}`;
  video.style.display = "none";
  video.src = `${data.url}`;
  video.setAttribute("src", data.url);
  video.width = "400";
  video.height = "100";
  
  explanation.innerHTML = `${data.explanation}`;
  document
          .querySelector(".result")
          .appendChild(div)
          .appendChild(name)
          .appendChild(br)
          .appendChild(explanation)
          .appendChild(br2);
  if(type === 'image'){
    document
          .querySelector(".result")
          .appendChild(img);
  } else {
    document
          .querySelector(".result")
          .appendChild(video);
  }
}

function getAPOD(url){ 
  fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      "X-Content-Type-Options": "nosniff",
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/*+json',
    }, 
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
  startDate = document.querySelector("#startDate").value;
  endDate = document.querySelector("#endDate").value;
 getAPOD(apodWithPeriod);
}
