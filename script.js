// ==============================
// DADOS FÁCEIS DE EDITAR
// ==============================
const SITE = {
  whatsapp: "5519989335142",          // só números, com DDI 55
  phoneLabel: "(19) 98933-5142",
  instagram: "https://www.instagram.com/recantodavovo2014/",
  mapsLink: "https://maps.app.goo.gl/c39RRnNXTgZQPgQ67",   // abre o Google Maps do restaurante
  faixaPreco: "R$ 40–60 por pessoa (valor aproximado)",
  destaques: ["Bar, restaurante e pesqueiro", "Buffet à vontade", "Mesas externas", "Música ao vivo", "Espaço para eventos", "Área de pesca", "Ambiente familiar"],
  rating: "4,7",
  reviewCount: "687",
};

// Horários. Fuso fixo: America/Sao_Paulo. Ordem fixa: começa no domingo.
// Dia fechado: troque abre/fecha por  fechado: true.  Fechar "00:00" = meia-noite.
const HORARIOS = [
  { dia: "Domingo",       abre: "08:00", fecha: "18:00" },
  { dia: "Segunda-feira", abre: "08:00", fecha: "18:00" },
  { dia: "Terça-feira",   abre: "08:00", fecha: "18:00" },
  { dia: "Quarta-feira",  abre: "08:00", fecha: "18:00" },
  { dia: "Quinta-feira",  abre: "08:00", fecha: "00:00" },
  { dia: "Sexta-feira",   abre: "08:00", fecha: "00:00" },
  { dia: "Sábado",        abre: "08:00", fecha: "18:00" },
];

// Exceções (feriados, eventos, fechamentos). Chave = data AAAA-MM-DD. Têm prioridade sobre HORARIOS.
// Descomente e edite os exemplos quando precisar:
const EXCECOES = {
  // "2026-12-25": { fechado: true, motivo: "Fechado neste feriado" },
  // "2026-12-31": { abre: "08:00", fecha: "16:00", motivo: "Horário especial" },
};

// Etapas da experiência. Imagem é opcional: se faltar, aparece um fundo verde.
const EXPERIENCIA = [
  ["Chegue", "Natureza, espaço e tranquilidade.",           "assets/experiencia-01.jpg"],
  ["Sente",  "Um ambiente para ficar sem pressa.",          "assets/experiencia-02.jpg"],
  ["Coma",   "Comida caseira e sabores do interior.",       "assets/experiencia-03.jpg"],
  ["Fique",  "Música, conversa, natureza e bons momentos.", "assets/experiencia-04.jpg"],
];

// Cardápio. DADOS DE EXEMPLO: troque nomes, descrições e preços pelos reais.
// "img" é opcional (apague a linha para o item ficar sem foto).
const CARDAPIO = {
  "Pratos": [
    { nome: "Prato de exemplo 1", desc: "Descrição do prato. Edite em script.js.", preco: "R$ 00,00", img: "assets/prato-01.jpg" },
    { nome: "Prato de exemplo 2", desc: "Descrição do prato. Edite em script.js.", preco: "R$ 00,00", img: "assets/prato-02.jpg" },
    { nome: "Prato de exemplo 3", desc: "Descrição do prato. Edite em script.js.", preco: "R$ 00,00", img: "assets/prato-03.jpg" },
  ],
  "Porções": [
    { nome: "Porção de exemplo", desc: "Descrição da porção.", preco: "R$ 00,00" },
  ],
  "Bebidas": [
    { nome: "Bebida de exemplo", desc: "Descrição da bebida.", preco: "R$ 00,00" },
  ],
  "Sobremesas": [
    { nome: "Sobremesa de exemplo", desc: "Descrição da sobremesa.", preco: "R$ 00,00" },
  ],
};

// Eventos. DADOS DE EXEMPLO: nenhuma data é real.
const EVENTOS = [
  { quando: "Data a definir", titulo: "Música ao vivo", detalhe: "Dias e artistas serão informados aqui." },
  { quando: "Data a definir", titulo: "Evento especial", detalhe: "Espaço para datas comemorativas." },
];

// Avaliações. Use só comentários reais do Google, sem alterar o sentido, e inclua também
// avaliações equilibradas, não apenas elogios. Substitua pelos comentários reais quando o restaurante enviar.
const AVALIACOES = [
  { texto: "Local agradável, música boa, destaque para o atendimento, nota 10. As crianças podem dar uma volta de pedalinho ou pônei.", autor: "Marcia Franzon · Google" },
  { texto: "Conhecemos o local na noite do jantar do dia dos namorados (11/06/22) . Nós amamos o local, foi tudo bem organizado, a comida estava maravilhosa, os funcionários são educados e simpáticos. Pretendemos voltar em breve.", autor: "Vanessa Sunamita · Google" },
  { texto: "Comida feita no capricho tanto no almoço do dia, como as porções deliciosas da noite. Ótimo atendimento. Ambiente familiar adequado para crianças. Música ao vivo. Se estiver passeando em SJRPardo o Recanto da Vovó é um lugar que vc não pode deixar de visitar!", autor: "Willian Oliveira · Google" },
];

// Fotos da galeria (alt descreve a imagem)
const GALERIA = [1, 2, 3, 4].map(n => ({ src: `assets/galeria-0${n}.jpg`, alt: `Foto ${n} do Recanto da Vovó` }));

// ==============================
// CÓDIGO (normalmente não precisa mexer)
// ==============================
document.documentElement.classList.add("js");
const $ = id => document.getElementById(id);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
// Imagem que some sozinha se o arquivo não existir (o fundo verde permanece)
const photo = (src, alt, cls = "") =>
  `<div class="ph ${cls}"><img src="${src}" alt="${esc(alt)}" loading="lazy" decoding="async" onerror="this.remove()"></div>`;

// Links de contato
const LINKS = {
  map: SITE.mapsLink,
  wa: `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Olá! Vim pelo site do Recanto da Vovó.")}`,
  tel: `tel:+${SITE.whatsapp}`,
  ig: SITE.instagram,
};
document.querySelectorAll("[data-link]").forEach(a => {
  a.href = LINKS[a.dataset.link];
  if (a.dataset.link === "tel") a.textContent = SITE.phoneLabel;
});
$("rate").textContent = SITE.rating + " ★";
$("rate-n").textContent = SITE.reviewCount + " avaliações no Google";
$("price").textContent = SITE.faixaPreco;
$("facts").innerHTML = SITE.destaques.map(d => `<li>${esc(d)}</li>`).join("");

// Horário dinâmico (sempre no fuso de São Paulo, não no do visitante)
const TZ = "America/Sao_Paulo";
const toMin = t => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
const falar = t => (t === "00:00" ? "meia-noite" : t);

function agoraSP() {
  const p = Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit",
    day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date()).map(x => [x.type, x.value]));
  return { base: new Date(Date.UTC(+p.year, +p.month - 1, +p.day)), min: +p.hour * 60 + +p.minute };
}

// Dados efetivos de um dia (hoje + offset), já aplicando as exceções
function diaInfo(base, offset) {
  const d = new Date(base.getTime() + offset * 864e5);
  const ex = EXCECOES[d.toISOString().slice(0, 10)], h = HORARIOS[d.getUTCDay()];
  return { idx: d.getUTCDay(), nome: h.dia, motivo: ex && ex.motivo,
    fechado: ex ? !!ex.fechado : !!h.fechado, abre: (ex && ex.abre) || h.abre, fecha: (ex && ex.fecha) || h.fecha };
}

function calcularStatus() {
  const { base, min } = agoraSP(), hoje = diaInfo(base, 0);
  const motivo = hoje.motivo ? ` · ${hoje.motivo}` : "";
  if (!hoje.fechado) {
    if (min >= toMin(hoje.abre) && min < (toMin(hoje.fecha) || 1440))
      return { open: true, titulo: "Aberto agora", sub: `Fecha às ${falar(hoje.fecha)}${motivo}` };
    if (min < toMin(hoje.abre))
      return { open: false, titulo: "Fechado agora", sub: `Abre hoje às ${hoje.abre}` };
  }
  for (let i = 1; i <= 7; i++) {
    const d = diaInfo(base, i);
    if (!d.fechado) return { open: false, titulo: hoje.fechado ? "Fechado hoje" : "Fechado agora",
      sub: `Abre ${i === 1 ? "amanhã" : d.nome.toLowerCase()} às ${d.abre}${hoje.fechado ? motivo : ""}` };
  }
  return { open: false, titulo: "Fechado agora", sub: "" };
}

function renderHorarios() {
  const s = calcularStatus(), { base } = agoraSP(), hojeIdx = diaInfo(base, 0).idx, key = s.titulo + s.sub;
  document.querySelectorAll("[data-status]").forEach(n => {
    if (n.dataset.k === key) return;
    n.dataset.k = key;
    n.className = "status " + (s.open ? "open" : "closed");
    n.innerHTML = `<b>${s.titulo}</b>${s.sub ? `<small>${esc(s.sub)}</small>` : ""}`;
  });
  $("hours").innerHTML = HORARIOS.map((h, i) => {
    const d = diaInfo(base, (i - hojeIdx + 7) % 7), hoje = i === hojeIdx;
    return `<tr class="${hoje ? "today" : ""}"><td>${h.dia}${hoje ? " — Hoje" : ""}</td><td>${d.fechado ? "Fechado" : `${d.abre} – ${d.fecha}`}</td></tr>`;
  }).join("");
}
renderHorarios();
setInterval(renderHorarios, 60000);

// Experiência
$("steps").innerHTML = EXPERIENCIA.map(([t, d, img]) =>
  `<li class="step reveal">${photo(img, t)}<div><h3>${t}</h3><p>${d}</p></div></li>`).join("");

// Cardápio com abas
const tabs = $("tabs"), menu = $("menu");
function showCat(cat) {
  tabs.querySelectorAll("button").forEach(b => b.setAttribute("aria-selected", b.textContent === cat));
  menu.innerHTML = CARDAPIO[cat].map(i =>
    `<article class="item ${i.img ? "" : "noimg"}">${i.img ? photo(i.img, i.nome) : ""}
     <div><h3>${esc(i.nome)}</h3><p>${esc(i.desc)}</p><p class="price">${esc(i.preco)}</p></div></article>`).join("");
}
Object.keys(CARDAPIO).forEach(cat => {
  const b = el("button", "", esc(cat));
  b.setAttribute("role", "tab");
  b.onclick = () => showCat(cat);
  tabs.append(b);
});
showCat(Object.keys(CARDAPIO)[0]);

// Galeria, eventos, avaliações
$("gallery").innerHTML = GALERIA.map(g => photo(g.src, g.alt)).join("");
$("events").innerHTML = EVENTOS.map(e =>
  `<li class="reveal"><b>${esc(e.quando)}</b><div>${esc(e.titulo)}<span>${esc(e.detalhe)}</span></div></li>`).join("");
$("reviews").innerHTML = AVALIACOES.map(r =>
  `<blockquote class="review reveal" style="font:inherit">${esc(r.texto)}<small>${esc(r.autor)}</small></blockquote>`).join("");

// Menu hamburger
const burger = document.querySelector(".burger"), nav = $("nav");
burger.onclick = () => {
  const open = burger.getAttribute("aria-expanded") !== "true";
  burger.setAttribute("aria-expanded", open);
  nav.classList.toggle("open", open);
};
nav.onclick = e => { if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } };

// Revelar ao rolar
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(n => io.observe(n));

// Parallax leve no hero (apenas enquanto ele está visível)
const heroBg = document.querySelector(".hero-bg");
if (!reduce) {
  let tick = false;
  addEventListener("scroll", () => {
    if (tick || scrollY > innerHeight) return;
    tick = true;
    requestAnimationFrame(() => { heroBg.style.transform = `translateY(${scrollY * (innerWidth < 900 ? .08 : .2)}px)`; tick = false; });
  }, { passive: true });
}