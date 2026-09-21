document.addEventListener('DOMContentLoaded', () => {
  // Carrega a galeria imediatamente
  window.navigateToTab('galeria');

  // Adiciona os eventos nos botões de navegação
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-tab]');
    if (btn) {
      e.preventDefault();
      const tab = btn.getAttribute('data-tab');
      window.navigateToTab(tab);
    }
  });
});