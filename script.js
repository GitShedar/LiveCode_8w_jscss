function pageLoad() {
  let myObjects = [
    {
      tag: "h1",
      content: "Angéla",
    },

    {
      tag: "p",
      content: "Lorem ipsum",
    },
  ];

  /*
for (let index = 0; index < myObjects.length; index++) {
  const element = myObjects[index]; 
 
}
*/

  let root = document.getElementById("root");
  for (o of myObjects) {
    
    root.insertAdjacentHTML(
      "beforeend",
      `
  <${o.tag}>${o.content}</${o.tag}>
  `
    );
  }


root.addEventListener('click', function() {
  root.classList.toggle("clicked");
});
  
}

window.addEventListener("load", pageLoad);
