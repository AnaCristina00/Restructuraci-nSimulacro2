import { IMGS } from './data/assets.js'
import { QB } from './data/subjects.js'
import { NIVEL_INFO, getNivel } from './data/niveles.js'

function showCuyWrong(){
  const el=document.getElementById('cuyAvatarLeft');
  const img=document.getElementById('cuyImgLeft');
  if(!el||!img) return;
  img.src=IMGS['cuy_incorrecto']||'';
  el.classList.remove('show');
  el.style.display='block';
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    el.classList.add('show');
  }));
  clearTimeout(window._cuyWrongTimer);
  window._cuyWrongTimer=setTimeout(()=>{
    el.classList.remove('show');
    setTimeout(()=>{ el.style.display='none'; }, 700);
  }, 3500);
}

function showCuy(){
  const el=document.getElementById('cuyAvatar');
  const img=document.getElementById('cuyImg');
  if(!el||!img) return;
  img.src=IMGS['cuy_correcto']||'';
  // Resetear posición antes de mostrar
  el.classList.remove('show');
  el.style.display='block';
  // Doble rAF para que el navegador procese display:block antes de aplicar la transición
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    el.classList.add('show');
  }));
  clearTimeout(window._cuyTimer);
  window._cuyTimer=setTimeout(()=>{
    el.classList.remove('show');
    setTimeout(()=>{el.style.display='none';},600);
  },3200);
}

let state={subject:null,questions:[],current:0,answers:[],hintsUsed:0,immediateFeedback:true};
const CORRECT=q=>q.correct;

function shuffleOpts(q){
  const opts=q.opts.map((o,i)=>({o,i}));
  for(let i=opts.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[opts[i],opts[j]]=[opts[j],opts[i]];}
  const newOpts=opts.map(x=>x.o);
  const origCorrect=q.correct;
  const order=opts.map(x=>x.i);
  const newCorrect=order.indexOf(origCorrect);
  return{...q,opts:newOpts,correct:newCorrect,_origCorrect:origCorrect};
}

function selectSubject(key){
  state.subject=key;
  document.querySelectorAll('.subj-card').forEach(c=>c.classList.remove('active-subj'));
  document.querySelector('.s-'+key).classList.add('active-subj');
  document.getElementById('btnStart').disabled=false;
}

function startQuiz(){beginSubject()}
function beginSubject(){
  const s=QB[state.subject];
  state.questions=s.questions.map(q=>shuffleOpts(q));
  state.current=0;
  state.answers=new Array(s.questions.length).fill(null);
  state.hintsUsed=0;
  showIntro();
}

function showIntro(){
  const s=QB[state.subject];
  document.getElementById('introContent').innerHTML=`
    <span class="big-icon">${s.icon}</span>
    <h2>Prueba de ${s.name}</h2>
    <p>${s.desc}</p>
    <div class="info-chips">
      <span class="chip">📝 ${s.questions.length} preguntas</span>
    </div>
    <div style="margin-bottom:16px;text-align:left;background:#f7f9fc;border-radius:10px;padding:14px 18px">
      <div style="font-size:11px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:8px">Competencias evaluadas</div>
      ${s.competencias.map(c=>`<div style="font-size:13px;color:var(--text);padding:3px 0;padding-left:16px;position:relative"><span style="position:absolute;left:0;color:var(--accent)">•</span>${c}</div>`).join('')}
    </div>
    <div class="actions" style="justify-content:center">
      <button class="btn btn-outline" onclick="goScreen('s-home')">← Regresar</button>
      <button class="btn btn-primary" onclick="showQuestion()">Iniciar prueba ➜</button>
    </div>`;
  goScreen('s-intro');setProgress(0);
}

function toggleFeedbackMode(){
  const toggle=document.getElementById('feedbackToggle');
  state.immediateFeedback=toggle.checked;
}

function showQuestion(){
  const q=state.questions[state.current];
  const s=QB[state.subject];
  const total=state.questions.length;
  let dots='';
  for(let i=0;i<total;i++) dots+=`<div class="step-dot ${i<state.current?'done':i===state.current?'current':''}"></div>`;
  document.getElementById('stepperDots').innerHTML=dots;
  document.getElementById('qTag').className='q-subject-tag ' + s.tag;
  document.getElementById('qTag').textContent=s.name;
  document.getElementById('qNum').textContent=`Pregunta ${state.current+1} / ${total}`;
  let ctxHtml='';
  if(q.context){
    ctxHtml=`<div class="q-context">${q.context}</div>`;
  }
  document.getElementById('qContextBlock').innerHTML=ctxHtml;
  document.getElementById('qText').innerHTML=q.text;
  let optsHtml='';
  q.opts.forEach((o,i)=>{
    const letter=['A','B','C','D'][i];
    optsHtml+=`<button class="opt" id="opt${i}" onclick="selectOpt(${i})">
      <span class="opt-letter">${letter}</span>
      <span>${o.replace(/^[A-D]\.\s*/,'')}</span>
    </button>`;
  });
  document.getElementById('qOpts').innerHTML=optsHtml;
  document.getElementById('feedbackBox').className='feedback';
  document.getElementById('fbMeta').style.display='none';
  document.getElementById('qActions').style.display='none';
  goScreen('s-question');
  setProgress(((state.current)/total)*80);
  window.scrollTo({top:0,behavior:'smooth'});
}

function selectOpt(idx){
  if(state.answers[state.current]!==null && state.immediateFeedback) return;
  const prevAnswer=state.answers[state.current];
  state.answers[state.current]=idx;
  const q=state.questions[state.current];
  const correct=idx===q.correct;
  document.querySelectorAll('.opt').forEach((el,i)=>{
    el.disabled=true;
    if(state.immediateFeedback){
      if(i===q.correct) el.classList.add('correct');
      else if(i===idx&&!correct) el.classList.add('wrong');
    } else {
      el.classList.remove('selected');
      if(i===idx) el.classList.add('selected');
    }
  });
  if(state.immediateFeedback){
    const fb=document.getElementById('feedbackBox');
    fb.className='feedback show '+(correct?'fb-correct':'fb-wrong');
    document.getElementById('fbIcon').textContent=correct?'🎉':'🤔';
    document.getElementById('fbTitle').textContent=correct?'¡Correcto!':'Respuesta incorrecta';
    document.getElementById('fbText').textContent=q.explain||'';
    const metaDiv=document.getElementById('fbMeta');
    if(metaDiv&&q.comp){
      const parts=q.comp.split(' · ');
      const nivel=q.nivel||'';
      const nivelCls=['','meta-nivel-1','meta-nivel-2','meta-nivel-3','meta-nivel-4'][nivel]||'meta-nivel-1';
      metaDiv.innerHTML=`<table class="meta-table"><tr><td>Competencia</td><td>${parts[0]||''}</td></tr><tr><td>Nivel</td><td><span class="meta-pill meta-nivel ${nivelCls}">${nivel}</span></td></tr></table>`;
      metaDiv.style.display='block';
    }
    if(correct) { launchConfetti(4); showCuy(); } else { showCuyWrong(); }
  }
  document.getElementById('qActions').style.display='flex';
  const isLast=state.current===state.questions.length-1;
  document.getElementById('btnNext').textContent=isLast?'Ver resultados 📊':'Siguiente pregunta ➜';
}

function nextQuestion(){
  if(state.current<state.questions.length-1){state.current++;showQuestion();}
  else{showResults();}
}

function showNivelInfo(nivel, subject) {
  const data=NIVEL_INFO[subject]?.[nivel];
  if(!data) return;
  const nivelSheet=document.getElementById('nivelSheet');
  const itemsHtml=data.items.length?`<ul class="nivel-desc-items">${data.items.map(i=>`<li>${i}</li>`).join('')}</ul>`:'';
  nivelSheet.innerHTML=`
    <div class="nivel-sheet-header">
      <span class="nivel-sheet-badge" style="background:#e8eef5;color:#1a3a5c">Nivel ${nivel}</span>
      <h3>${data.name}</h3>
      <button class="nivel-sheet-close" onclick="closeNivelModal()">×</button>
    </div>
    <div class="nivel-range">${data.range}</div>
    <div class="nivel-desc-summary">${data.summary}</div>
    ${itemsHtml}`;
  document.getElementById('nivelModal').classList.add('show');
}

function closeNivelModal(){document.getElementById('nivelModal').classList.remove('show');}

function showResults(){
  setProgress(100);
  const subjects=[{key:state.subject,answers:state.answers,questions:state.questions}];
  let totalCorrect=0,totalQ=0;
  const sc=subjects.map(({key,answers,questions})=>{
    let correct=answers.filter((a,i)=>a===questions[i].correct).length;
    totalCorrect+=correct;totalQ+=questions.length;
    const pct=Math.round((correct/questions.length)*100);
    const nivel=getNivel(pct,key);
    return{key,correct,total:questions.length,pct,nivel,answers};
  });
  const globalPct=Math.round((totalCorrect/totalQ)*100);
  const lvText={4:{label:'Nivel 4',cls:'lv4',desc:'Nivel alto'},3:{label:'Nivel 3',cls:'lv3',desc:'Nivel medio-alto'},2:{label:'Nivel 2',cls:'lv2',desc:'Nivel medio'},1:{label:'Nivel 1',cls:'lv1',desc:'Nivel bajo'}};
  let html=`<div class="result-header">
    <div style="font-size:11px;font-weight:800;letter-spacing:1px;text-transform:uppercase;opacity:.7;margin-bottom:8px">Reporte de Resultados · SABER 11° 2020</div>
    <h2>¡Simulacro completado!</h2><p>Matemáticas · Secretaría de Educación Nariño</p>
    <div class="global-score">
      <span class="pts">${globalPct}</span>
      <span class="pts-label">Puntaje</span>
    </div></div>
  <div class="card">
    <div style="font-size:12px;font-weight:800;color:var(--muted);letter-spacing:1px;text-transform:uppercase;margin-bottom:16px">Tu resultado</div>
    <table class="score-table"><thead><tr><th>Prueba</th><th>Puntaje</th><th>Progreso</th><th>Nivel</th></tr></thead><tbody>
    ${sc.map(s=>`<tr>
      <td><strong style="font-size:13px">📐 ${QB[s.key].name}</strong><br><span style="font-size:11px;color:var(--muted)">${s.correct}/${s.total} correctas</span></td>
      <td><span style="font-family:'Space Mono';font-size:18px;font-weight:700;color:#1a3a5c">${s.pct}</span></td>
      <td style="width:100px"><div class="score-bar-wrap"><div class="score-bar" style="width:${s.pct}%;background:#1a3a5c"></div></div></td>
      <td><span class="level-pill ${lvText[s.nivel].cls}">${lvText[s.nivel].label}</span></td>
    </tr>`).join('')}
    </tbody></table></div>`;

  html+=`<div class="review-section">
    <div class="review-header">
      <h3>Revisión de respuestas</h3>
      <p>Analiza cada pregunta para aprender de tus errores</p>
    </div>`;
    sc.forEach(({key,nivel,pct})=>{
      const subj=QB[key];
      const lv=lvText[nivel];
      const subjData=subjects.find(s=>s.key===key);
      html+=`<div class="review-subject">
        <div class="review-subj-header">
          <span class="review-subj-icon">${subj.icon}</span>
          <span class="review-subj-title">${subj.name}</span>
          <span class="review-subj-nivel ${lv.cls}">${lv.label}</span>
        </div>
        ${(()=>{const nd=NIVEL_INFO[key]?.[nivel];if(!nd)return'';const items=nd.items.length?`<ul class="nivel-items-list">${nd.items.map(i=>`<li>${i}</li>`).join('')}</ul>`:'';return`<div class="review-nivel-detail ${lv.cls}">
          <div class="nivel-detail-header">
            <span class="nivel-detail-badge ${lv.cls}">${lv.label}</span>
            <span class="nivel-detail-range">${nd.range}</span>
          </div>
          <p class="nivel-detail-summary">${nd.summary}</p>
          ${items}
        </div>`;})()}
        ${subjData.questions.map((q,i)=>{
          const userAns=state.answers[i];
          const correct=userAns===q.correct;
          return `<div class="review-card ${correct?'review-correct':'review-wrong'}">
            <div class="review-card-header">
              <span class="review-q-num">${i+1}</span>
              <span class="review-status ${correct?'status-correct':'status-wrong'}">${correct?'Correcto':'Incorrecto'}</span>
            </div>
            ${q.context?'<div class="review-context">'+q.context+'</div>':''}
            ${q.contextImg&&IMGS[q.contextImg]?'<div class="review-img"><img src="'+IMGS[q.contextImg]+'" alt="Imagen de contexto" loading="lazy"></div>':''}
            <div class="review-question">${q.text||''}</div>
            ${q.img&&IMGS[q.img]?'<div class="review-img"><img src="'+IMGS[q.img]+'" alt="Imagen de la pregunta" loading="lazy"></div>':''}
            <div class="review-answers">
              ${correct?`
              <div class="review-answer answer-correct">
                <span class="answer-label">Respuesta correcta</span>
                <span class="answer-text">${q.opts[q.correct]?.replace(/^[A-D]\.\s*/,'') || ''}</span>
              </div>`:`
              <div class="review-answer answer-wrong">
                <span class="answer-label">Tu respuesta</span>
                <span class="answer-text">${q.opts[userAns]?.replace(/^[A-D]\.\s*/,'') || '<em>Sin responder</em>'}</span>
              </div>
              <div class="review-answer answer-correct">
                <span class="answer-label">Respuesta correcta</span>
                <span class="answer-text">${q.opts[q.correct]?.replace(/^[A-D]\.\s*/,'') || ''}</span>
              </div>`}
            </div>
            ${q.explain?'<div class="review-explain"><span class="explain-icon">💡</span><span>'+q.explain+'</span></div>':''}
          </div>`;
        }).join('')}
      </div>`;
    });
    html+=`</div>`;

  html+=`<div class="card" style="text-align:center">
    <div style="font-size:14px;font-weight:700;margin-bottom:16px">¿Quieres seguir practicando?</div>
    <div class="actions" style="justify-content:center">
      <button class="btn btn-primary" onclick="restartSame()">🔄 Repetir prueba</button>
      <a class="btn btn-outline" href="../index.html">🏠 Volver al portal</a>
    </div></div>`;
  document.getElementById('resultsContent').innerHTML=html;
  goScreen('s-results');
  window.scrollTo({top:0,behavior:'smooth'});
  if(globalPct>=60) launchConfetti(20);
}

function goScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}
function setProgress(pct){document.getElementById('progFill').style.width=pct+'%';}
function restartSame(){state.immediateFeedback=true;beginSubject();}
function launchConfetti(n){
  const colors=['#e8a020','#1a3a5c','#2a9d5c','#6c4bc0','#d94040'];
  for(let i=0;i<n;i++){
    const el=document.createElement('div');el.className='confetti-piece';
    el.style.cssText=`left:${20+Math.random()*60}vw;top:20vh;width:${6+Math.random()*6}px;height:${6+Math.random()*6}px;background:${colors[Math.floor(Math.random()*colors.length)]};border-radius:${Math.random()>.5?'50%':'2px'};animation-duration:${1.5+Math.random()*2}s;animation-delay:${Math.random()*.4}s;`;
    document.body.appendChild(el);setTimeout(()=>el.remove(),3000);
  }
}
function confirmBack(){
  document.getElementById('modalBack').classList.add('show');
}
function closeModal(){
  document.getElementById('modalBack').classList.remove('show');
}
document.addEventListener('DOMContentLoaded',()=>{
  const matCount=document.getElementById('matCount');
  const lcCount=document.getElementById('lcCount');
  if(matCount) matCount.textContent=QB.mat.questions.length+' preguntas';
  if(lcCount) lcCount.textContent=QB.lc.questions.length+' preguntas';
  selectSubject('mat');
});
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));

const handlers = {
  beginSubject,
  closeModal,
  closeNivelModal,
  confirmBack,
  goScreen,
  nextQuestion,
  restartSame,
  selectOpt,
  selectSubject,
  showIntro,
  showNivelInfo,
  showQuestion,
  startQuiz,
  toggleFeedbackMode
}

Object.assign(window, handlers)
