window.renderAutoLegendaView = function() {
  return `
    <section class="space-y-8 max-w-2xl mx-auto w-full py-4 px-2 sm:px-4">
      <div class="text-center space-y-2">
        <h2 class="text-2xl sm:text-3xl font-serif text-stone-100 font-normal">
          Legende seu vídeo <br><span class="italic text-gold-400">automaticamente</span>
        </h2>
        <p class="text-xs sm:text-sm text-stone-400 max-w-md mx-auto font-light">
          Nossa IA transcreve o áudio do seu vídeo e adiciona legendas com alta precisão.
        </p>
      </div>

      <div class="border border-gold-500/30 bg-stone-900/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-center space-y-4">
        <div class="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-2xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
          <i class="fa-solid fa-play text-lg sm:text-xl"></i>
        </div>
        <div class="space-y-1">
          <h3 class="text-lg font-serif text-stone-100">Enviei seu vídeo</h3>
          <p class="text-[11px] text-stone-400">Formatos suportados: MP4, MOV, AVI, MKV</p>
        </div>
        <label class="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 text-stone-950 font-semibold text-xs cursor-pointer">
          Escolher vídeo
          <input type="file" class="hidden" accept="video/*">
        </label>
      </div>

      <div class="space-y-4 pt-2">
        <h4 class="text-xs font-semibold text-stone-400 uppercase tracking-wider text-left">Como funciona</h4>
        <div class="grid grid-cols-3 gap-2 text-center">
          <div class="flex flex-col items-center space-y-2">
            <div class="w-5 h-5 rounded-full bg-stone-800 text-[10px] text-gold-400 flex items-center justify-center">1</div>
            <p class="text-[11px] font-serif text-stone-200">Envie seu vídeo</p>
          </div>
          <div class="flex flex-col items-center space-y-2">
            <div class="w-5 h-5 rounded-full bg-stone-800 text-[10px] text-gold-400 flex items-center justify-center">2</div>
            <p class="text-[11px] font-serif text-stone-200">IA gera legendas</p>
          </div>
          <div class="flex flex-col items-center space-y-2">
            <div class="w-5 h-5 rounded-full bg-stone-800 text-[10px] text-gold-400 flex items-center justify-center">3</div>
            <p class="text-[11px] font-serif text-stone-200">Baixe seu vídeo</p>
          </div>
        </div>
      </div>
    </section>
  `;
};