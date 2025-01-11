async function duplicateDiv(duplicateTag) {
  await new Promise(resolve => setTimeout(resolve, 50)); // 100ms de atraso
  const originalDiv =  document.getElementById(duplicateTag);

  if (!originalDiv) {
    
    console.error(`Div com o ID "${duplicateTag}" não encontrada.`);
      return;
  }

  const parent = originalDiv.parentNode;

  for (let i = 1; i <= 3; i++) {
      // Cria uma nova div
      const newDiv = document.createElement('div');

      //Copia a classe
      newDiv.className = originalDiv.className;

      // Copia os estilos da original
      newDiv.style.cssText = originalDiv.style.cssText;

      // Copia o conteúdo textual da original
      newDiv.innerHTML = originalDiv.innerHTML;

      // Define um novo ID para a nova div
      newDiv.id = `${duplicateTag}-clone-${i}`;

      // Adiciona a nova div ao pai da original
      parent.appendChild(newDiv);
  }
}

duplicateDiv("cartaoCurso");
