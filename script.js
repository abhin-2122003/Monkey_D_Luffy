const name = document.getElementById("name");

name.addEventListener("click", cl_Div);

function cl_Div() {
  name.innerHTML = "King Of The Pirates";

  window.setTimeout(() => {
    name.innerHTML = "One Piece";
  }, 2000);

  window.setTimeout(() => {
    name.innerHTML = "Monkey D Luffy";
  }, 4000);
}
