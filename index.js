const generateElem = () => {
  let tag = document.getElementById("element").value;
  let text = document.getElementById("textNode").value;
  let item = document.createElement(tag);
  let tagText = document.createTextNode(text);
  item.appendChild(tagText);
  document.body.appendChild(item);
};

let btnCreate = document.getElementById("btn-create");
btnCreate.addEventListener("click", generateElem);
