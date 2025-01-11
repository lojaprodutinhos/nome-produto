function duplicateDiv(duplicateTag) {
  const observer = new MutationObserver(() => {
      const originalDiv = document.getElementById(duplicateTag);
      if (originalDiv) {
          observer.disconnect(); // Para de observar quando o elemento for encontrado

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
  });

  // Configura o observer para monitorar alterações no DOM
  observer.observe(document.body, { childList: true, subtree: true });
}
duplicateDiv("cartaoCurso");
