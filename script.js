const api=("https://anapioficeandfire.com/api/books")
console.log(api)
function getData() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      data.forEach((element) => {
        let obj = {
          name: element.name,
          authors:element.authors,
          country: element.country,
          mediaType: element.mediaType,
          url: element.url,
          numberOfPages:element.numberOfPages,
        };
        createObj(obj);
      });
    });
}

function createObj(element) {
  let newEle = document.createElement("div");
  newEle.innerHTML = `
    <div id="align">Name: ${element.name}</div>
    <div>Authors: ${element.authors}</div>
    <div>Country: ${element.country}</div>
    <div>Meadiatype: ${element.mediaType}</div>
    <div>Url:${element.url}</div>
    <div>NumberOfPages:${element.numberOfPages}</div>
  `;
  document.getElementById("inhtml").appendChild(newEle);
  newEle.style.textAlign="center"
  newEle.style.border="2px solid black"
  newEle.style.backgroundColor="grey"
  newEle.style.fontSize="larger"
  


}

getData();
