/**
 * Semanas académicas calculadas desde el lunes 3 de agosto de 2026.
 * Se clasifica por la semana en que el docente asignó la actividad, no por
 * el número de AA ni por la fecha de edición del archivo.
 *
 * AA3 fue asignada junto a AA2 el 14 de agosto, aunque vencía el 24.
 * La posición de AA4 (semana 3) es provisional: falta el correo de asignación.
 */
const evidencias = [
  {aa:'AA1',week:1,title:'Generación eléctrica renovable',description:'Análisis económico de la caída de la generación renovable y su relación con la escasez, la demanda y los recursos disponibles.',type:'PDF',id:'1jzXr9huf8v12Mk6odEnN6bTfVFKtAFFb',bg:'#cde7e2'},
  {aa:'AA2',week:2,title:'Bienestar: Costa Rica y Chile',description:'Comparación de indicadores de bienestar y condiciones de vida para interpretar el desarrollo económico de ambos países.',type:'PDF',id:'1UbsbNrJ4uKEndd9h80BkuBRv662z9Whb',bg:'#dbe6f3'},
  {aa:'AA3',week:2,title:'Aranceles y comercio',description:'Investigación sobre aranceles de EE. UU. a Costa Rica, efectos comerciales y ventaja comparativa. Asignada el 14 de agosto; entrega: 24 de agosto.',type:'PDF',id:'1teY6UNnCQCLUQjO8uw5d2d6VMyfLYkim',bg:'#e3e9ec'},
  {aa:'AA4',week:3,title:'Modelos económicos',description:'Presentación sobre modelos económicos, producción y comercio, ubicada provisionalmente en esta semana a falta del correo de asignación.',type:'PDF',id:'13ZQHXBg9Amv3EkRwcg2uSuPeXTSfJsXL',bg:'#e8e4f0'},
  {aa:'AA5',week:4,title:'Inflación y política monetaria',description:'Análisis de afirmaciones sobre inflación, con distinción entre economía positiva y normativa; actividad anunciada el 26 de agosto.',type:'PDF',id:'1tKq5qibqBMavAvq0K9vd6IaI-fql-KJ-',bg:'#dce8d8'},
  {aa:'AA6',week:6,title:'Oferta y demanda',description:'Actividad sobre las fuerzas del mercado, el comportamiento de consumidores y productores y la formación de precios.',type:'Word',id:'1L2tAi2Owpu6iHq9Ibq8Kx35PdUCWytkk',bg:'#e8efeb'},
  {aa:'AA7',week:7,title:'El mercado contraataca',description:'Ejercicios de precios y mercado relacionados con las diapositivas indicadas en el correo del 16 de septiembre.',type:'Word',id:'1WepKuFHiCQ1xprexP-UxkMWoQmgl61Iz',bg:'#e9e9f2'},
  {aa:'AA8',week:9,title:'Curvas de oferta y costos',description:'Ejercicio de curvas de oferta y costos solicitado en la clase asincrónica del 29 de septiembre.',type:'Word',id:'10NPQZoSJHHYdzpPv0Y1JGT9pzJW1AScI',bg:'#f0e7db'},
  {aa:'AA9 · P1',week:10,title:'Oferta, costos y macroeconomía',description:'Ejercicios de oferta, ingresos y costos correspondientes a la actividad del 7 de octubre.',type:'Word',id:'1tJNbyUnLV-F-mNAmFaB0ceETkMhxM7iu',bg:'#e0edf0'},
  {aa:'AA9 · P2',week:10,title:'PIB y satisfacción',description:'Presentación sobre el PIB y su relación con el bienestar y la satisfacción con la vida, asignada el 7 de octubre.',type:'PDF',id:'1VWsEME9ubIi3DTj3CMRYam7xRGILS3b9',bg:'#f2e5d1'},
  {aa:'Presentación',week:11,title:'Supercolón y competitividad',description:'Análisis de la apreciación del colón y sus efectos en la competitividad, las exportaciones y la economía costarricense.',type:'PDF',id:'1QMJ8sKNfBisw_H1Dnge3bgzuD1OeForj',bg:'#dce9e4'},
  {aa:'AA10 · P1',week:12,title:'Salarios en tecnologías de información',description:'Investigación sobre salario mínimo, IPC, deflactación y escenarios de remuneración en dólares, solicitada el 21 de octubre.',type:'Word',id:'1KngreeLIc-XMokLFXd5o72KYdDiShlZx',bg:'#e8e8ef'},
  {aa:'AA10 · P2',week:12,title:'Demanda laboral tecnológica (ENADEL)',description:'Presentación basada en resultados de ENADEL del INEC sobre telecomunicaciones y servicios informáticos, solicitada el 21 de octubre.',type:'PDF',id:'1wLDjasWdbmowSHuRUhXxFW3tcopPe42j',bg:'#e6e9f2'},
  {aa:'AA10 · P3',week:13,title:'BCCR y Vietnam',description:'Presentación sobre política monetaria nacional y su comparación con Vietnam, realizada para la semana del 26 de octubre.',type:'PDF',id:'1M5oUXGx1wpXVnPKPhSIHMkjUhotchh0l',bg:'#f6e8d8'},
  {aa:'AA11',week:15,title:'Tipo de cambio y economía internacional',description:'Informe de una página sobre balanza de pagos del BCCR, apreciación del colón y reservas monetarias, asignado el 10 de noviembre.',type:'Word',id:'1JgRpalzc77obKZQhby460_t3en6auQQv',bg:'#dce8ed'}
];

const weekDates=['03–09 ago','10–16 ago','17–23 ago','24–30 ago','31 ago–06 sep','07–13 sep','14–20 sep','21–27 sep','28 sep–04 oct','05–11 oct','12–18 oct','19–25 oct','26 oct–01 nov','02–08 nov','09–15 nov'];
// AUTOEVALUACIÓN PERSONAL — COMPLETAR ANTES DE ENTREGAR.
// Reemplaza cada null por una calificación TUYA entre 0 y 100 (por ejemplo, 92).
// Estos valores se publican para todas las personas cuando subas app.js a GitHub.
// Los valores null se muestran como "Por completar", para no inventar una nota personal.
const calificacionesPorSemana = {
  1: 100, // Semana 01
  2: 100, // Semana 02
  3: 100, // Semana 03
  4: 100, // Semana 04
  5: 100, // Semana 05
  6: 100, // Semana 06
  7: 100, // Semana 07
  8: 100, // Semana 08
  9: 95, // Semana 09
  10: 100, // Semana 10
  11: 100, // Semana 11
  12: 100, // Semana 12
  13: 100, // Semana 13
  14: 100, // Semana 14
  15: 100, // Semana 15
};

const valoracionesPorSemana = [
  {week:1,activity:'AA1: generación eléctrica renovable',learning:'Relacioné las limitaciones de recursos con decisiones de producción energética y sus consecuencias. Fue un muy buen trabajo para empezar el curso, me ayudó a comprender muchas cosas que fueron útiles en lo que siguió del curso.'},
  {week:2,activity:'AA2: bienestar Costa Rica–Chile; AA3: aranceles',learning:'Comparé indicadores de bienestar y analicé cómo las barreras comerciales pueden afectar a un país.'},
  {week:3,activity:'AA4: modelos económicos',learning:'Revisé diferentes modelos económicos para interpretar decisiones de producción y comercio. Me gustó mucho hacer esta investigación, es curioso saber cómo funcionan las cosas ante nuetros ojos.'},
  {week:4,activity:'AA5: inflación, política monetaria y análisis de afirmaciones',learning:'Practiqué la distinción entre economía positiva y normativa al analizar la inflación.'},
  {week:5,activity:'Sin evidencia incorporada en el portafolio',learning:'No hubo un trabajo en sí asignado para esta semana. Pero me di a la tarea de repasar.'},
  {week:6,activity:'AA6: oferta y demanda',learning:'Fortalecí mi comprensión de los cambios de oferta y demanda y su efecto en los precios.'},
  {week:7,activity:'AA7: ejercicios sobre el mercado',learning:'Practiqué la justificación de resultados y el análisis de situaciones relacionadas con el mercado.'},
  {week:8,activity:'Primer examen parcial',learning:'Semana dedicada a evaluar los temas del primer bloque. Fue un examen diferente a lo normal, muy creativo, intuitivo, divertido y con un camino de aprendizaje muy guiado profe. Gracias.'},
  {week:9,activity:'AA8: curvas de oferta y costos',learning:'Relacioné las curvas y los costos con las decisiones económicas de producción. Fue una actividad que me costó, pero por el hecho de identificar todos los puntos, las diagramas, las curvas y demás. Aún así, fue muy beneficiosa al nivel de aprendizaje.'},
  {week:10,activity:'AA9 P1: ejercicios de oferta, ingresos y costos; AA9 P2: PIB y satisfacción',learning:'Apliqué conceptos de costos y contrasté el crecimiento económico con el bienestar.'},
  {week:11,activity:'Presentación: supercolón y competitividad',learning:'Reflexioné sobre cómo la apreciación del colón influye en las exportaciones y la competitividad.'},
  {week:12,activity:'AA10 P1: salarios e IPC; AA10 P2: ENADEL y empleo tecnológico',learning:'Interpreté indicadores salariales y de demanda laboral útiles para el sector tecnológico.'},
  {week:13,activity:'AA10 P3: BCCR y Vietnam',learning:'Comparé decisiones de política monetaria y sus posibles consecuencias económicas.'},
  {week:14,activity:'Sin evidencia incorporada en el portafolio',learning:'No hubo un trabajo en sí asignado para esta semana. Pero me di a la tarea de repasar'},
  {week:15,activity:'AA11: balanza de pagos y tipo de cambio',learning:'Relacioné el tipo de cambio, la balanza de pagos y las reservas con la economía internacional.'},
];

const weekNotes={8:'Primer examen parcial'};

const groups=[
  {number:1,id:'bloque-1',weeks:[1,2,3,4,5],kicker:'CAPÍTULO 01 / LOS FUNDAMENTOS',title:'Semanas 01—05',description:'Los conceptos iniciales permiten entender por qué las personas y los países deben tomar decisiones.'},
  {number:2,id:'bloque-2',weeks:[6,7,8,9,10],kicker:'CAPÍTULO 02 / MERCADOS Y DECISIONES',title:'Semanas 06—10',description:'Oferta, demanda, costos, producción y PIB; el primer examen parcial ocurrió en la semana 8.'},
  {number:3,id:'bloque-3',weeks:[11,12,13,14,15],kicker:'CAPÍTULO 03 / EL CONTEXTO GLOBAL',title:'Semanas 11—15',description:'Competitividad, empleo tecnológico, política monetaria y economía internacional.'}
];

const archiveGroups=document.querySelector('#archiveGroups');
const searchInput=document.querySelector('#searchInput');
const resultLine=document.querySelector('#archiveResults');
const filterButtons=[...document.querySelectorAll('[data-filter]')];
let activeFilter='all';
let activeWeek=null;

function escapeHtml(value){return String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;')}
function fileUrl(id){return `https://drive.google.com/file/d/${encodeURIComponent(id)}/view`}
function thumbUrl(id){return `https://drive.google.com/thumbnail?id=${encodeURIComponent(id)}&sz=w600`}

function cardHtml(item){
  const url=fileUrl(item.id);
  return `<article class="evidence-card">
    <div class="card-thumb" style="--card-bg:${item.bg}">
      <span class="card-format">${item.type==='PDF'?'PDF':'DOCX'}</span>
      <img src="${thumbUrl(item.id)}" loading="lazy" alt="Portada del trabajo ${escapeHtml(item.title)}" data-doc-image="${escapeHtml(item.id)}">
      <span class="card-fallback" aria-hidden="true">${item.type==='PDF'?'∑':'↗'}</span>
    </div>
    <div class="card-content">
      <div class="card-meta"><span>${escapeHtml(item.aa)}</span><span title="${weekDates[item.week-1]} de 2026">Semana ${String(item.week).padStart(2,'0')}</span></div>
      <h4>${escapeHtml(item.title)}</h4><p>${escapeHtml(item.description)}</p>
      <div class="card-actions"><a class="card-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${escapeHtml(item.title)} en Google Drive">Ver archivo <span aria-hidden="true">→</span></a>
      <button class="card-preview" type="button" data-preview="${escapeHtml(item.id)}" aria-label="Vista previa de ${escapeHtml(item.title)}">Vista rápida</button></div>
    </div>
  </article>`;
}

function renderArchive(){
  const query=searchInput.value.toLocaleLowerCase('es').trim();
  let shown=0;
  const sections=[];
  for(const group of groups){
    if(activeFilter!=='all'&&Number(activeFilter)!==group.number)continue;
    const weekSections=[];
    let groupCount=0;
    for(const week of group.weeks){
      const allItems=evidencias.filter(item=>item.week===week);
      const items=allItems.filter(item=>!query||`${item.title} ${item.description} ${item.aa} ${item.type}`.toLocaleLowerCase('es').includes(query));
      if(query&&!items.length)continue;
      shown+=items.length;
      groupCount+=items.length;
      const note=weekNotes[week]||(!allItems.length?'Sin evidencia adjunta':'');
      weekSections.push(`<section class="week-section" id="semana-${String(week).padStart(2,'0')}" aria-label="Semana ${week}">
        <header class="week-section-heading"><div><span class="week-section-number">SEMANA ${String(week).padStart(2,'0')}</span><h4>${escapeHtml(weekDates[week-1])} <span>· 2026</span></h4></div><span class="week-section-count">${allItems.length ? allItems.length+' '+(allItems.length===1?'archivo':'archivos') : 'Sin documento'}</span></header>
        ${note?`<p class="week-section-note">${escapeHtml(note)}</p>`:''}
        ${items.length?`<div class="evidence-grid">${items.map(cardHtml).join('')}</div>`:'<p class="week-empty">Aún no se ha incorporado una evidencia documental de esta semana.</p>'}
      </section>`);
    }
    if(!weekSections.length)continue;
    sections.push(`<section class="archive-group" id="${group.id}" aria-label="${group.title}">
      <div class="group-heading"><div><div class="group-kicker">${group.kicker}</div><h3>${group.title}</h3><p>${group.description}</p></div><span class="group-count">${groupCount} ${groupCount===1?'evidencia':'evidencias'}</span></div>
      ${weekSections.join('')}
    </section>`);
  }
  archiveGroups.innerHTML=sections.join('')||'<div class="empty-state"><strong>No se encontraron evidencias.</strong><p>Prueba con otra palabra o selecciona una etapa distinta.</p></div>';
  resultLine.textContent=`Mostrando ${shown} ${shown===1?'evidencia':'evidencias'}${query?' para «'+searchInput.value+'»':''}`;
  document.querySelectorAll('[data-doc-image]').forEach(img=>{
    img.addEventListener('error',()=>img.closest('.card-thumb').classList.add('is-fallback'),{once:true});
  });
}

// Índice al comienzo: un enlace directo para cada semana, incluso si no hay archivo.
const weeklyIndexGrid=document.querySelector('#weeklyIndexGrid');
weeklyIndexGrid.innerHTML=valoracionesPorSemana.map(row=>{
  const count=evidencias.filter(item=>item.week===row.week).length;
  const noted=weekNotes[row.week];
  const label=noted||evidencias.filter(item=>item.week===row.week).map(x=>x.aa).join(' · ')||'Sin evidencia incorporada';
  return `<a class="weekly-index-card ${count?'has-files':'no-files'}" data-week-link href="#semana-${String(row.week).padStart(2,'0')}" aria-label="Ir a la semana ${row.week}: ${escapeHtml(label)}">
    <div class="weekly-index-number">${String(row.week).padStart(2,'0')}<span aria-hidden="true">↗</span></div>
    <span class="weekly-index-dates">${escapeHtml(weekDates[row.week-1])} · 2026</span>
    <strong>${escapeHtml(label)}</strong>
    <span class="weekly-index-count">${count?count+' '+(count===1?'evidencia':'evidencias'):'Sin archivo adjunto'}</span>
  </a>`;
}).join('');

// Autoevaluación: 15 filas, una por semana. Notas originales, sin inventar números.
document.querySelector('#selfTableBody').innerHTML=valoracionesPorSemana.map(row=>{
  const score=calificacionesPorSemana[row.week];
  const valid=Number.isInteger(score)&&score>=0&&score<=100;
  return `<tr><th scope="row"><a data-week-link href="#semana-${String(row.week).padStart(2,'0')}">Semana ${String(row.week).padStart(2,'0')} <span>↗</span></a><small>${escapeHtml(weekDates[row.week-1])}</small></th>
    <td>${escapeHtml(row.activity)}</td>
    <td class="self-score-cell">${valid?`<strong>${score}<small>/100</small></strong>`:'<span class="score-pending">Por completar</span>'}</td>
    <td>${escapeHtml(row.learning)}</td></tr>`;
}).join('');

// Si el usuario ha filtrado o buscado, restablecer para navegar sin enlaces rotos.
document.addEventListener('click',event=>{
  const link=event.target.closest('a[data-week-link]');
  if(!link)return;
  const targetId=link.getAttribute('href').slice(1);
  event.preventDefault();
  searchInput.value='';
  activeFilter='all';
  filterButtons.forEach(btn=>{const selected=btn.dataset.filter==='all';btn.classList.toggle('active',selected);btn.setAttribute('aria-pressed',String(selected))});
  renderArchive();
  history.replaceState(null,'',`#${targetId}`);
  const destination=document.getElementById(targetId);
  if(destination)destination.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
});

filterButtons.forEach(btn=>btn.addEventListener('click',()=>{
  activeFilter=btn.dataset.filter;
  activeWeek=null;
  filterButtons.forEach(other=>{let selected=other===btn;other.classList.toggle('active',selected);other.setAttribute('aria-pressed',String(selected))});
  renderArchive();
  document.querySelector('#archiveResults').scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
}));
searchInput.addEventListener('input',renderArchive);

const previewDialog=document.querySelector('#previewDialog');
const previewFrame=document.querySelector('#previewFrame');
const previewTitle=document.querySelector('#previewTitle');
const previewExternal=document.querySelector('#previewExternal');

archiveGroups.addEventListener('click',event=>{
  const btn=event.target.closest('[data-preview]');
  if(!btn)return;
  const item=evidencias.find(item=>item.id===btn.dataset.preview);
  if(!item)return;
  previewTitle.textContent=`${item.aa} — ${item.title}`;
  previewExternal.href=fileUrl(item.id);
  previewFrame.src=`https://drive.google.com/file/d/${encodeURIComponent(item.id)}/preview`;
  if(typeof previewDialog.showModal==='function')previewDialog.showModal();else window.open(fileUrl(item.id),'_blank','noopener,noreferrer');
});
function closePreview(){previewDialog.close();previewFrame.removeAttribute('src')}
document.querySelector('#closePreview').addEventListener('click',closePreview);
previewDialog.addEventListener('click',event=>{if(event.target===previewDialog)closePreview()});
previewDialog.addEventListener('close',()=>previewFrame.removeAttribute('src'));

const menuToggle=document.querySelector('#menuToggle');
const mobileNav=document.querySelector('#mobileNav');
menuToggle.addEventListener('click',()=>{
  const expanded=menuToggle.getAttribute('aria-expanded')==='true';
  menuToggle.setAttribute('aria-expanded',String(!expanded));
  mobileNav.hidden=expanded;
});
mobileNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{mobileNav.hidden=true;menuToggle.setAttribute('aria-expanded','false')}));

renderArchive();
