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
    const items=evidencias.filter(item=>group.weeks.includes(item.week)&&(!activeWeek||item.week===activeWeek)&&(!query||`${item.title} ${item.description} ${item.aa} ${item.type}`.toLocaleLowerCase('es').includes(query)));
    if(!items.length)continue;
    shown+=items.length;
    const weekChipList=group.weeks.map(week=>{
      const count=evidencias.filter(x=>x.week===week).length;
      const detail=weekNotes[week]||`${count} ${count===1?'evidencia':'evidencias'}`;
      return `<span class="week-marker" title="Semana ${week} (${weekDates[week-1]} de 2026): ${detail}">${String(week).padStart(2,'0')}${count?'<i></i>':''}</span>`;
    }).join('');
    sections.push(`<section class="archive-group" id="${group.id}" aria-label="${group.title}">
      <div class="group-heading"><div><div class="group-kicker">${group.kicker}</div><h3>${group.title}</h3><p>${group.description}</p></div><span class="group-count">${items.length} ${items.length===1?'evidencia':'evidencias'}</span></div>
      <div class="week-track" aria-label="Semanas de esta etapa"><span class="week-track-caption">RECORRIDO</span>${weekChipList}<small>· punto = evidencia cargada</small></div>
      <div class="evidence-grid">${items.map(cardHtml).join('')}</div>
    </section>`);
  }
  archiveGroups.innerHTML=sections.join('')||'<div class="empty-state"><strong>No se encontraron evidencias.</strong><p>Prueba con otra palabra o selecciona una etapa distinta.</p></div>';
  resultLine.textContent=`Mostrando ${shown} ${shown===1?'evidencia':'evidencias'}${query?' para «'+searchInput.value+'»':''}`;
  document.querySelectorAll('[data-doc-image]').forEach(img=>{
    img.addEventListener('error',()=>img.closest('.card-thumb').classList.add('is-fallback'),{once:true});
  });
}

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
