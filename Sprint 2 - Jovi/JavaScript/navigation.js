window.navigateToTab = function(targetTab) {
  const content = document.getElementById('app-content');
  const rightSidebar = document.getElementById('right-sidebar');
  const mobileTitle = document.getElementById('mobile-header-title');

  if (targetTab === 'autolegenda') {
    content.innerHTML = window.renderAutoLegendaView();
    if (rightSidebar) {
      rightSidebar.classList.add('hidden');
      rightSidebar.classList.remove('lg:flex');
    }
    if (mobileTitle) mobileTitle.innerText = 'AUTOLEGENDA';
  } else {
    content.innerHTML = window.renderGalleryView();
    if (rightSidebar) {
      rightSidebar.classList.remove('hidden');
      rightSidebar.classList.add('lg:flex');
    }
    if (mobileTitle) mobileTitle.innerText = 'SMARTCAM';
  }

  document.querySelectorAll('[data-tab]').forEach(btn => {
    if (btn.getAttribute('data-tab') === targetTab) {
      btn.classList.add('active', 'bg-gold-500/15', 'border', 'border-gold-500/30', 'text-gold-400');
      btn.classList.remove('text-stone-400');
    } else {
      btn.classList.remove('active', 'bg-gold-500/15', 'border', 'border-gold-500/30', 'text-gold-400');
      btn.classList.add('text-stone-400');
    }
  });
};