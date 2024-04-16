let card = document.getElementById("card");

// Movimento aleatório do botão 'nop'
document.querySelector("#no").addEventListener("click", function () {
  let width = window.innerWidth - 30;
  let height = window.innerHeight - 30;

  this.style.position = "absolute";
  this.style.top = Math.random() * width + "px";
  this.style.left = Math.random() * height + "px";
});


// imagem guardada aqui por precaução 
// <img id="imagem" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXLGGAM2r0rYLAZ8djBQFMcH0TfVUQt9aFSQ&usqp=CAU" alt="">
