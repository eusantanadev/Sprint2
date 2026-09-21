export function initUploader() {
  const input = document.getElementById('video-input');
  if (!input) return;

  input.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`Vídeo "${file.name}" selecionado com sucesso!`);
    }
  });
}