// function changeDiplay(btnMenu,displayNavbar){
//   const observer = new MutationObserver(() => {
//     const button = document.getElementById(btnMenu);
//     const element = document.getElementById(displayNavbar);
//     if (button && element) {
//       const classes = button.className;
//       console.log(classes)
//       observer.disconnect();
//       // Para de observar quando o elemento for encontrado
//     }
//   });
//   // Configura o observer para monitorar alterações no DOM
//   observer.observe(document.body, { childList: true, subtree: true });
// }

// changeDiplay("btn-menu","navbarNav");

// // Adiciona o evento de clique
// button.addEventListener("click", () => {
//   if(element.style.display === "flex"){
//     element.style.display = "none";
//   }
  
// });