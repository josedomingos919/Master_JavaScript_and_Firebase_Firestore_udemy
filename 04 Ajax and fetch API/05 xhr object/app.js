document.getElementsByTagName("button")[0].addEventListener("click", loadData);

function loadData() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "data.txt", true);
  xhr.onload = (e) => {
    console.log(e);
    if (e.currentTarget.status == 200) {
      console.log(e.currentTarget.responseText);
    }
  };

  xhr.send();
}
