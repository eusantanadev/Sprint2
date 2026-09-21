window.renderGalleryView = function() {
  return `
    <section class="space-y-6">
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="relative w-full sm:max-w-md">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 text-xs"></i>
          <input type="text" placeholder="Pesquisar fotos..." class="w-full bg-stone-900/90 border border-stone-800 rounded-xl pl-10 pr-10 py-2.5 text-sm text-stone-200 placeholder-stone-400 focus:outline-none focus:border-gold-500/60 transition">
        </div>
        <div class="hidden md:flex items-center space-x-2 bg-stone-900/80 p-1 rounded-lg border border-stone-800 text-xs font-medium">
          <button class="px-3 py-1.5 rounded-md bg-gold-500/20 text-gold-400 border border-gold-500/30">Simples</button>
          <button class="px-3 py-1.5 rounded-md text-stone-400 hover:text-stone-200">Profissional</button>
        </div>
      </div>

      <div class="flex items-center space-x-3 overflow-x-auto pb-2 pt-1 scrollbar-none">
        <button class="cat-btn active flex-shrink-0 flex items-center space-x-2 bg-gold-500/20 border border-gold-500/50 text-gold-400 px-4 py-2 rounded-xl text-xs font-medium transition">
          <i class="fa-solid fa-layer-group"></i>
          <div class="text-left"><div class="leading-none">Todas</div><div class="text-[10px] opacity-70">1.234</div></div>
        </button>
        <button class="cat-btn flex-shrink-0 flex items-center space-x-2 bg-stone-900 border border-stone-800 text-stone-400 px-4 py-2 rounded-xl text-xs font-medium transition">
          <i class="fa-solid fa-utensils"></i>
          <div class="text-left"><div class="leading-none">Comidas</div><div class="text-[10px] opacity-70">245</div></div>
        </button>
        <button class="cat-btn flex-shrink-0 flex items-center space-x-2 bg-stone-900 border border-stone-800 text-stone-400 px-4 py-2 rounded-xl text-xs font-medium transition">
          <i class="fa-solid fa-mountain"></i>
          <div class="text-left"><div class="leading-none">Lugares</div><div class="text-[10px] opacity-70">320</div></div>
        </button>
      </div>

      <div class="bg-stone-900/90 border border-stone-800 rounded-2xl p-4 flex items-center justify-between shadow-lg">
        <div class="flex items-center space-x-3">
          <div class="w-8 h-8 rounded-lg bg-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
            <i class="fa-solid fa-wand-magic-sparkles text-sm"></i>
          </div>
          <div>
            <p class="text-xs sm:text-sm font-semibold text-stone-200">IA organizou 12 novas fotos para você</p>
            <p class="text-[11px] text-stone-400">Analisadas e categorizadas automaticamente.</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
        <div class="aspect-square rounded-xl overflow-hidden bg-stone-800 border border-stone-800">
          <img src="https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80" class="w-full h-full object-cover hover:scale-105 transition duration-300">
        </div>
        <div class="aspect-square rounded-xl overflow-hidden bg-stone-800 border border-stone-800">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=80" class="w-full h-full object-cover hover:scale-105 transition duration-300">
        </div>
        <div class="aspect-square rounded-xl overflow-hidden bg-stone-800 border border-stone-800">
          <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=80" class="w-full h-full object-cover hover:scale-105 transition duration-300">
        </div>
        <div class="aspect-square rounded-xl overflow-hidden bg-stone-800 border border-stone-800">
          <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=80" class="w-full h-full object-cover hover:scale-105 transition duration-300">
        </div>
      </div>
    </section>
  `;
};