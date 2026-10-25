/* ============================================================
   aniversario.js — pantalla especial del aniversario
   Se activa del 25 al 28 de octubre (según la fecha del dispositivo
   de quien abre la página). Para previsualizarla tú:
       https://gserrano13.github.io/Aislinn-s-garden/?aniversario=test
   ============================================================ */
(function () {
  /* ---------- CONFIGURACIÓN: edita solo este bloque ---------- */
  const CONFIG = {
    month: 9,                    // octubre (enero = 0)
    day: 25,                     // primer día en que aparece
    lastDay: 28,                 // último día en que aparece (miércoles 28)
    reconnectDate: '2025-10-25', // el día que te volvió a ver
    testParam: 'aniversario',    // ?aniversario=test

    eyebrow: 'hoy hace un año',        // se muestra el 25
    eyebrowLater: 'hace un año',       // se muestra del 26 al último día
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
    // Cada una: { date: 'AAAA-MM-DD', text: '...',
    //              image: 'images/foto.jpeg',                  (una foto, opcional)
    //              images: ['images/a.jpeg', 'images/b.jpeg'], (varias fotos, opcional)
    //              video: 'media/video.mp4' }                  (opcional)
    // 'title' también existe pero es opcional; aquí no se usa.
    // Recuerda la coma entre una entrada y otra (la última no lleva).
    // Si dejas la lista vacía, la sección no aparece.
    timeline: [
      {
        date: '2025-10-25',
        video: 'images/WhatsApp Video 2026-10-25 at 1.52.14 AM.mp4',
        text: 'no sabia que tanto iba a cambiar mi vida desde el momento en el que nos volvimos a ver, si me dieran la oportunidad de volver al pasado, haria exactamente lo mismo sabiendo que estaria contigo y sabiendo lo feliz que me haces.'
      },
      {
        date: '2025-10-26',
        image: 'images/26oct25.jpeg',
        text: 'tu sabes lo que este momento fue para mi, contigo sabia que iba a ser feliz y me sigo sintiendo el hombre mas afortunado sabiendo que estamos juntos, haces que todo en esta vida sea mas bonito, quisiera poder poner en palabras lo que este momento significa para mi, no mides lo feliz que me sentia y la paz que has traido a mi vida, lo realmente feliz que es todo momento a tu lado. quiero que toda la vida se sienta como ese momento, y eso solo es y sera contigo'
      },
      {
        date: '2025-12-20',
        image: 'images/20dic25.jpeg',
        text: 'me senti muy feliz de verte despues de meses, se que odias lo mucho que te tome fotos asi, pero me encanta jsjsjs. a decir verdad me sentia nervioso pero a la vez muy emocionado de volver a verte, recuerdo lo mucho que venia pensando en ti en el camino y ten por seguro que para mi cada segundo del camino vale la pena, no hay distancia para mi que me detenga de ir a verte. tu vales la pena. todos esos dias que fui a verte valian la pena siempre, tu ya me hacias muy feliz, en el segundo que fuimos novios, sabia que esto iba a ser para siempre, jamas me hubiera imaginado en una relacion a distancia pero contigo la decision fue mas facil de lo que hubiera pensado, sabia que todo cuando se acabara  (la distancia) valdra la pena. quiero que seamos felices toda la vida'
      },
      {
        date: '2026-03-22',
        image: 'images/22marzo26.jpeg',
        text: 'desafortunadamente no tengo foto del dia de tu cumple pero espero que haya sido un buen dia, yo me la pase increible esos dias, siempre se siente bien estar a tu lado, gracias por dejarme ser parte de tu vida, gracias por dejarme hacerte feliz, gracias por cada risa, cada enojo, cada caricia, cada palabra, cada momento compartido, gracias por tu existencia, Aislinn.'
      },
      {
        date: '2026-03-22',
        image: 'images/22marzo26_2.jpeg',
        text: 'como la pasada, se que no te gusta que te tome estas fotos, pero lo hago para siempre recordar tu sonrisa y esos ojos preciosos, me encanta voltearte a ver y hacerme sentir tan afortunado de poder verlos, por que no hay nada en este mundo mejor que eso. ver tu sonrisa me hace sentir el hombre mas feliz, recordar tu risa me hace sonreir de oreja a oreja, reirnos juntos de alguna tonteria y hacer chistes que solo tu y yo entendemos. ver tus ojos siento que regreso al momento en el que esperamos el camion, no te estaba viendo a los ojos pero me hace recordar la sensacion de tenerte entre mis brazos y el calor que sentia viniendo de ti, agarrandote la mano en el camion y teniendo tu cabeza recostada mientras ibamos de regreso. quiero tener esa sensacion siempre cuando te vea a los ojos al despertar.'
      },
      {
        date: '2026-05-09',
        images: ['images/9mayo.jpeg', 'images/rayo9demayo.jpeg'],
        text: 'hacer actividades contigo es lo mejor del mundo, una de las cosas que mas me gusta de nosotros es que siento que siempre nos impulsamos a cumplir nuestras metas, a ser mejores cada dia, me hace sentir que siempre tengo alguien que me escuche y quiero que tu te sientas igual, siempre te voy a desear lo mejor y voy a estar ahi para ti siempre, se que vas a lograr grandes cosas y juntos, vamos a hacer cosas increiblemente grandes pero sobretodo, una gran familia'
      },
      {
        date: '2026-09-01',
        image: 'images/1spt26.jpeg',
        text: 'las palabras sobran de esta ultima vez, se sintio como quiero que sea toda mi vida, que tu seas mi vida, quiero lavar refris contigo siempre, quiero manejar y que tu estes a mi lado siempre, quiero que todo lo que hablamos se haga realidad, quiero que toda nuestra vida sea asi siempre, quiero poder agarrar tu mano toda la vida. gracias por permitirme ser parte de tu vida y amarte, gracias por ser tan increible. amo cada detalle de ti, amo tu forma de ser y te adoro con todo mi ser, gracias por dejarme ser parte de tu vida un año. espero que sea el primero de toda una vida juntos donde seamos felices, donde te sientas amada cada dia, te sientas feliz todos los dias. Prometo amarte por el resto de mi vida y hacer todo lo posible para que te sientas feliz y amada todos los dias, quiero dedicar mi vida a ti y a nuestra familia. TE AMO AISLINN'
      }
    ],

    buttonText: 'Entrar al jardín',
    signature: '— Gabriel'
  };
  /* ---------- FIN CONFIGURACIÓN ---------- */

  const q = new URLSearchParams(location.search);
  const forced = q.get(CONFIG.testParam) === 'test';
  const now0 = new Date();
  const isTheDay = now0.getMonth() === CONFIG.month &&
                   now0.getDate() >= CONFIG.day && now0.getDate() <= CONFIG.lastDay &&
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
  #anivOverlay .av-tl{position:relative;text-align:left;margin:0 auto;max-width:520px;padding-left:1.8rem}
  #anivOverlay .av-tl::before{content:'';position:absolute;left:5px;top:6px;bottom:6px;width:1px;background:var(--sage-soft,#C8D2BD)}
  #anivOverlay .av-item{position:relative;margin-bottom:1.7rem}
  #anivOverlay .av-item::before{content:'';position:absolute;left:-1.8rem;top:.4rem;width:11px;height:11px;border-radius:50%;
    background:var(--blush,#F4C5BD);border:1px solid var(--rose,#C97A75)}
  #anivOverlay .av-item:last-child::before{background:var(--rose,#C97A75)}
  #anivOverlay .av-d{font-size:.64rem;letter-spacing:.28em;text-transform:uppercase;color:var(--sage-deep,#7A8A6F);font-weight:500}
  #anivOverlay .av-t{font-family:var(--display,'Fraunces',serif);font-style:italic;font-size:1.2rem;margin:.15rem 0}
  #anivOverlay .av-x{font-family:var(--display,'Fraunces',Georgia,serif);font-size:1.02rem;line-height:1.75;
    color:var(--ink-soft,#6B5C50);margin-top:1rem}
  #anivOverlay .av-photo,#anivOverlay .av-vid{display:block;width:100%;max-height:70vh;object-fit:contain;margin-top:.9rem;
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

  const tl = CONFIG.timeline.map(i => {
    const pics = [].concat(i.images || [], i.image ? [i.image] : []);
    return `
    <div class="av-item">
      <div class="av-d">${esc(fmt(i.date))}</div>
      ${i.title ? `<div class="av-t">${esc(i.title)}</div>` : ''}
      ${pics.map(p => `<img class="av-photo" src="${esc(encodeURI(p))}" alt="${esc(fmt(i.date))}" loading="lazy">`).join('')}
      ${i.video ? `<video class="av-vid" controls playsinline preload="metadata" src="${esc(encodeURI(i.video))}"></video>` : ''}
      ${i.text ? `<div class="av-x">${esc(i.text)}</div>` : ''}
    </div>`;
  }).join('');

  const root = document.createElement('div');
  root.id = 'anivOverlay';
  root.setAttribute('role', 'dialog');
  root.setAttribute('aria-label', 'Un año desde que te volví a ver');
  root.innerHTML = `
    <div class="av-petals" aria-hidden="true"></div>
    <div class="av-wrap">
      <div class="av-eyebrow">${esc((forced || now0.getDate() === CONFIG.day) ? CONFIG.eyebrow : CONFIG.eyebrowLater)}</div>
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
        box.innerHTML = `<video controls autoplay playsinline src="${esc(encodeURI(c.file))}"></video>`;
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
