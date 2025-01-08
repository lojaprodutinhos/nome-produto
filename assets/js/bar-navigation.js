function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId); // Encontra o elemento pelo ID
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth', // Rolagem suave
        block: 'center',    // Centraliza o elemento na visualização
        inline: 'nearest'   // Ajusta horizontalmente se necessário
      });
    } else {
      console.error('Elemento com ID', sectionId, 'não encontrado.');
    }
  }