/* ============================================================
   aniversario.js — pantalla especial del 25 de octubre
   Se activa solo el 25 de octubre (según la fecha del dispositivo
   de quien abre la página). Para previsualizarla tú:
       https://gserrano13.github.io/Aislinn-s-garden/?aniversario=test
   ============================================================ */
(function () {
  /* ---------- CONFIGURACIÓN: edita solo este bloque ---------- */
  const CONFIG = {
    month: 9,                    // octubre (enero = 0)
    day: 25,
    reconnectDate: '2025-10-25', // el día que te volvió a ver
    testParam: 'aniversario',    // ?aniversario=test

    eyebrow: 'hoy hace un año',
    script: 'Volví a verte',
    subtitle: 'Después de años, la vida me dio otra oportunidad contigo.',

    // Dedicatoria (BORRADOR: cámbiala por tus palabras)
    dedication:
`Hace un año te volví a ver después de tantos años, y no tenía idea de que ese día lo iba a cambiar todo.

Gracias por dejarme volver a tu vida, por quedarte, y por dejarme quedarme.

Cada día desde entonces ha sido mi favorito. Te amo, Aislinn.`,

    // Clip / canción. Llena UNO de los dos (o déjalos vacíos para ocultar la sección):
    //  youtubeId: lo que va después de "v=" en el link de YouTube (ej. 'dQw4w9WgXcQ')
    //  file: ruta a un video/audio que subas al repo (ej. 'media/clip.mp4')
    clip: { title: 'Cada vez me enamoro más de ti', youtubeId: 'M4Gi1G7QXVg', start: 0, end: 0, file: '' },

    // Línea del tiempo: SOLO las veces que se han visto (en orden de fecha).
    // Cada una: { date: 'AAAA-MM-DD', title: 'título corto', text: 'opcional',
    //              image: 'images/aniversario/foto.jpg',   (opcional)
    //              video: 'media/video.mp4' }              (opcional)
    // Recuerda la coma entre una entrada y otra.
    // Si dejas la lista vacía, la sección no aparece.
    timeline: [
      { date: '2025-10-25', title: 'Te volví a ver', text: '' }
      // { date: 'AAAA-MM-DD', title: '...', text: '', image: 'images/aniversario/foto.jpg' },
    ],

    buttonText: 'Entrar al jardín',
    signature: '— Gabriel'
  };
  /* ---------- FIN CONFIGURACIÓN ---------- */

  const q = new URLSearchParams(location.search);
  const forced = q.get(CONFIG.testParam) === 'test';
  const now0 = new Date();
  const isTheDay = now0.getMonth() === CONFIG.month &&
                   now0.getDate() === CONFIG.day &&
                   now0.getFullYear() > Number(CONFIG.reconnectDate.slice(0, 4));
  if (!forced && !isTheDay) return;

  const MONTHS = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const fmt = iso => {
    const d = new Date(iso + 'T00:00:00');
    return `${d.getDate()} de ${MONTHS[d.getMonth()]}, ${d.getFullYear()}`;
  };
  const esc = s => String(s || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

  const years = Math.max(1, now0.getFullYear() - Number(CONFIG.reconnectDate.slice(0, 4)));
  const bigText = years === 1 ? 'Un año' : `${years} años`;

  /* ---------- estilos ---------- */
  const css = `
  #anivOverlay{position:fixed;inset:0;z-index:300;overflow-y:auto;background:
    radial-gradient(ellipse at 50% 15%,rgba(244,197,189,.45),transparent 60%),
    radial-gradient(ellipse at 20% 80%,rgba(168,184,159,.28),transparent 55%),
    radial-gradient(ellipse at 80% 75%,rgba(244,229,188,.35),transparent 60%),
    var(--cream,#FAF4EC);
    color:var(--ink,#4A3F38);font-family:var(--body,'Manrope',system-ui,sans-serif);
    animation:anivIn .9s ease both;-webkit-overflow-scrolling:touch}
  #anivOverlay.closing{animation:anivOut .6s ease both}
  @keyframes anivIn{from{opacity:0}to{opacity:1}}
  @keyframes anivOut{from{opacity:1}to{opacity:0}}
  #anivOverlay .av-petals{position:fixed;inset:0;pointer-events:none;overflow:hidden}
  #anivOverlay .av-petal{position:absolute;top:-50px;opacity:0;animation:anivFall linear infinite}
  @keyframes anivFall{0%{transform:translateY(-50px) translateX(0) rotate(0);opacity:0}
    10%{opacity:.6}90%{opacity:.45}
    100%{transform:translateY(105vh) translateX(var(--drift,80px)) rotate(540deg);opacity:0}}
  #anivOverlay .av-wrap{position:relative;z-index:2;max-width:640px;margin:0 auto;padding:5rem 1.5rem 4rem;text-align:center}
  #anivOverlay .av-eyebrow{font-size:.72rem;letter-spacing:.5em;text-transform:uppercase;color:var(--sage-deep,#7A8A6F);
    margin-bottom:1.8rem;font-weight:500;display:flex;align-items:center;justify-content:center;gap:1rem}
  #anivOverlay .av-eyebrow::before,#anivOverlay .av-eyebrow::after{content:'';width:34px;height:1px;background:var(--sage-soft,#C8D2BD)}
  #anivOverlay .av-script{font-family:var(--script,'Ms Madi',cursive);font-size:clamp(3.4rem,13vw,6.4rem);
    color:var(--rose,#C97A75);line-height:.9;transform:rotate(-2deg);margin-bottom:.8rem}
  #anivOverlay .av-sub{font-family:var(--display,'Fraunces',Georgia,serif);font-style:italic;font-weight:300;
    font-size:1.1rem;color:var(--ink-soft,#6B5C50);max-width:420px;margin:0 auto 2.6rem}
  #anivOverlay .av-big{font-family:var(--display,'Fraunces',Georgia,serif);font-weight:300;font-style:italic;
    font-size:clamp(3rem,12vw,5rem);color:var(--ink,#4A3F38);line-height:1;margin-bottom:1.4rem}
  #anivOverlay .av-counter{display:inline-flex;gap:1.1rem;flex-wrap:wrap;justify-content:center;
    background:rgba(255,250,242,.6);padding:1.3rem 1.8rem;border:1px solid rgba(168,184,159,.3);border-radius:2px;
    box-shadow:0 20px 40px -25px rgba(74,63,56,.2)}
  #anivOverlay .av-unit{min-width:56px}
  #anivOverlay .av-num{display:block;font-family:var(--display,'Fraunces',serif);font-weight:300;font-size:2rem;
    color:var(--rose-deep,#A8615C);line-height:1;font-variant-numeric:lining-nums}
  #anivOverlay .av-lbl{font-size:.62rem;letter-spacing:.25em;text-transform:uppercase;color:var(--sage-deep,#7A8A6F);margin-top:.55rem;font-weight:500}
  #anivOverlay .av-cap{font-family:var(--script,'Ms Madi',cursive);font-size:1.5rem;color:var(--sage-deep,#7A8A6F);margin-top:1rem}
  #anivOverlay .av-sec{margin-top:4.2rem}
  #anivOverlay .av-h{font-family:var(--display,'Fraunces',serif);font-style:italic;font-weight:300;font-size:1.9rem;margin-bottom:1.8rem}
  #anivOverlay .av-h em{font-family:var(--script,'Ms Madi',cursive);font-style:normal;color:var(--rose,#C97A75);font-size:1.15em}
  #anivOverlay .av-tl{position:relative;text-align:left;margin:0 auto;max-width:460px;padding-left:1.8rem}
  #anivOverlay .av-tl::before{content:'';position:absolute;left:5px;top:6px;bottom:6px;width:1px;background:var(--sage-soft,#C8D2BD)}
  #anivOverlay .av-item{position:relative;margin-bottom:1.7rem}
  #anivOverlay .av-item::before{content:'';position:absolute;left:-1.8rem;top:.4rem;width:11px;height:11px;border-radius:50%;
    background:var(--blush,#F4C5BD);border:1px solid var(--rose,#C97A75)}
  #anivOverlay .av-item:last-child::before{background:var(--rose,#C97A75)}
  #anivOverlay .av-d{font-size:.64rem;letter-spacing:.28em;text-transform:uppercase;color:var(--sage-deep,#7A8A6F);font-weight:500}
  #anivOverlay .av-t{font-family:var(--display,'Fraunces',serif);font-style:italic;font-size:1.2rem;margin:.15rem 0}
  #anivOverlay .av-x{font-size:.92rem;color:var(--ink-soft,#6B5C50)}
  #anivOverlay .av-photo,#anivOverlay .av-vid{display:block;width:100%;max-height:70vh;object-fit:cover;margin-top:.9rem;
    border-radius:3px;border:1px solid rgba(168,184,159,.3);background:var(--blush-soft,#F8DCD5);
    box-shadow:0 14px 34px -22px rgba(74,63,56,.4)}
  #anivOverlay .av-vid{background:#000;object-fit:contain}
  #anivOverlay .av-clipbtn,#anivOverlay .av-enter{border:none;cursor:pointer;font-family:var(--body,'Manrope',sans-serif);
    font-size:.78rem;letter-spacing:.2em;text-transform:uppercase;font-weight:500;border-radius:2px;padding:.95rem 1.8rem;transition:background .2s}
  #anivOverlay .av-clipbtn{background:transparent;color:var(--sage-deep,#7A8A6F);border:1px solid var(--sage-soft,#C8D2BD)}
  #anivOverlay .av-clipbtn:hover{background:var(--sage-soft,#C8D2BD);color:var(--ivory,#FFFAF2)}
  #anivOverlay .av-enter{background:var(--rose,#C97A75);color:var(--ivory,#FFFAF2)}
  #anivOverlay .av-enter:hover{background:var(--rose-deep,#A8615C)}
  #anivOverlay .av-media{position:relative;width:100%;aspect-ratio:16/9;background:#000;border-radius:3px;overflow:hidden;
    box-shadow:0 20px 50px -25px rgba(74,63,56,.45)}
  #anivOverlay .av-media iframe,#anivOverlay .av-media video{position:absolute;inset:0;width:100%;height:100%;border:0}
  #anivOverlay .av-ded{font-family:var(--display,'Fraunces',serif);font-size:1.12rem;line-height:1.8;color:var(--ink-soft,#6B5C50);
    white-space:pre-line;text-align:left;background:var(--ivory,#FFFAF2);border:1px solid rgba(168,184,159,.28);
    padding:2.2rem 1.8rem;border-radius:3px;box-shadow:0 8px 20px -18px rgba(74,63,56,.25);position:relative}
  #anivOverlay .av-ded::before{content:'';position:absolute;inset:.6rem;border:1px solid rgba(168,184,159,.18);pointer-events:none}
  #anivOverlay .av-sig{font-family:var(--script,'Ms Madi',cursive);color:var(--rose,#C97A75);font-size:1.8rem;text-align:right;margin-top:1.2rem}
  #anivOverlay .av-end{margin-top:3.6rem}
  #anivReopen{position:fixed;left:1.2rem;bottom:1.5rem;z-index:90;background:var(--rose,#C97A75);color:var(--ivory,#FFFAF2);border:none;
    border-radius:999px;padding:.7rem 1.1rem;font-family:var(--script,'Ms Madi',cursive);font-size:1.25rem;cursor:pointer;
    box-shadow:0 10px 25px -10px rgba(201,122,117,.6)}
  @media(max-width:600px){#anivOverlay .av-counter{padding:1rem 1.1rem;gap:.7rem}#anivOverlay .av-num{font-size:1.65rem}
    #anivOverlay .av-wrap{padding-top:4rem}}
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  /* ---------- estructura ---------- */
  const c = CONFIG.clip || {};
  const hasClip = !!(c.youtubeId || c.file);

  const tl = CONFIG.timeline.map(i => `
    <div class="av-item">
      <div class="av-d">${esc(fmt(i.date))}</div>
      <div class="av-t">${esc(i.title)}</div>
      ${i.text ? `<div class="av-x">${esc(i.text)}</div>` : ''}
      ${i.image ? `<img class="av-photo" src="${esc(i.image)}" alt="${esc(i.title)}" loading="lazy">` : ''}
      ${i.video ? `<video class="av-vid" controls playsinline preload="metadata" src="${esc(i.video)}"></video>` : ''}
    </div>`).join('');

  const root = document.createElement('div');
  root.id = 'anivOverlay';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-label', 'Un año desde que te volví a ver');
  root.innerHTML = `
    <div class="av-petals" aria-hidden="true"></div>
    <div class="av-wrap">
      <div class="av-eyebrow">${esc(CONFIG.eyebrow)}</div>
      <div class="av-script">${esc(CONFIG.script)}</div>
      <p class="av-sub">${esc(CONFIG.subtitle)}</p>

      <div class="av-big">${esc(bigText)}</div>
      <div class="av-counter" aria-label="Tiempo desde que nos reencontramos">
        <div class="av-unit"><span class="av-num" data-u="d">—</span><div class="av-lbl">días</div></div>
        <div class="av-unit"><span class="av-num" data-u="h">—</span><div class="av-lbl">horas</div></div>
        <div class="av-unit"><span class="av-num" data-u="m">—</span><div class="av-lbl">min</div></div>
        <div class="av-unit"><span class="av-num" data-u="s">—</span><div class="av-lbl">seg</div></div>
      </div>
      <div class="av-cap">desde que volví a verte</div>

      ${CONFIG.timeline.length ? `
      <div class="av-sec">
        <h2 class="av-h">Las veces que <em>nos vimos</em></h2>
        <div class="av-tl">${tl}</div>
      </div>` : ''}

      ${hasClip ? `
      <div class="av-sec" id="avClipSec">
        <h2 class="av-h">${esc(c.title || 'Para ti')}</h2>
        <button class="av-clipbtn" id="avClipBtn">▶ &nbsp;Reproducir</button>
      </div>` : ''}

      <div class="av-sec">
        <h2 class="av-h">Para <em>ti</em></h2>
        <div class="av-ded">${esc(CONFIG.dedication)}</div>
        <div class="av-sig">${esc(CONFIG.signature)}</div>
      </div>

      <div class="av-end"><button class="av-enter" id="avEnter">${esc(CONFIG.buttonText)}</button></div>
    </div>`;
  document.body.appendChild(root);
  const prevOverflow = document.body.style.overflow;
  document.body.style.overflow = 'hidden';

  /* pétalos */
  const field = root.querySelector('.av-petals');
  const palette = ['#F4C5BD', '#F2D4BE', '#F4E5BC', '#F8DCD5'];
  for (let i = 0; i < 16; i++) {
    const p = document.createElement('div');
    p.className = 'av-petal';
    const size = 12 + Math.random() * 12;
    p.innerHTML = `<svg width="${size}" height="${size * 1.4}" viewBox="0 0 20 28"><path d="M10,0 Q18,12 10,28 Q2,12 10,0 Z" fill="${palette[i % 4]}" opacity=".75"/></svg>`;
    p.style.left = (Math.random() * 100) + '%';
    p.style.animationDuration = (11 + Math.random() * 14) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.setProperty('--drift', (Math.random() * 160 - 80) + 'px');
    field.appendChild(p);
  }

  /* contador desde el reencuentro */
  const start = new Date(CONFIG.reconnectDate + 'T00:00:00');
  const el = u => root.querySelector(`[data-u="${u}"]`);
  const pad = n => String(n).padStart(2, '0');
  function tick() {
    let diff = Math.max(0, new Date() - start);
    const d = Math.floor(diff / 86400000); diff -= d * 86400000;
    const h = Math.floor(diff / 3600000);  diff -= h * 3600000;
    const m = Math.floor(diff / 60000);    diff -= m * 60000;
    const s = Math.floor(diff / 1000);
    el('d').textContent = d; el('h').textContent = pad(h); el('m').textContent = pad(m); el('s').textContent = pad(s);
  }
  tick();
  const timer = setInterval(tick, 1000);

  /* clip (se carga solo al tocar, para que el navegador permita el sonido) */
  const clipBtn = document.getElementById('avClipBtn');
  if (clipBtn) {
    clipBtn.addEventListener('click', () => {
      const box = document.createElement('div');
      box.className = 'av-media';
      if (c.youtubeId) {
        const params = new URLSearchParams({ autoplay: '1', rel: '0', playsinline: '1' });
        if (c.start) params.set('start', c.start);
        if (c.end) params.set('end', c.end);
        box.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(c.youtubeId)}?${params}"
          allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="${esc(c.title || 'Video')}"></iframe>`;
      } else {
        box.innerHTML = `<video controls autoplay playsinline src="${esc(c.file)}"></video>`;
      }
      clipBtn.replaceWith(box);
    });
  }

  /* cerrar / reabrir */
  function closeOverlay() {
    root.classList.add('closing');
    clearInterval(timer);
    setTimeout(() => {
      root.remove();
      document.body.style.overflow = prevOverflow;
      if (!document.getElementById('anivReopen')) {
        const b = document.createElement('button');
        b.id = 'anivReopen';
        b.textContent = '✿ 25 de octubre';
        b.addEventListener('click', () => { b.remove(); location.reload(); });
        document.body.appendChild(b);
      }
    }, 600);
  }
  document.getElementById('avEnter').addEventListener('click', closeOverlay);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && document.getElementById('anivOverlay')) closeOverlay(); });
})();
