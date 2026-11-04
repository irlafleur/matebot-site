function parseCSV(t){const rows=[];let r=[],f='',q=false;for(let i=0;i<t.length;i++){const c=t[i];
if(q){if(c=='"'&&t[i+1]=='"'){f+='"';i++}else if(c=='"')q=false;else f+=c}
else if(c=='"')q=true;else if(c==','){r.push(f);f=''}else if(c=='\n'){r.push(f);rows.push(r);r=[];f=''}else if(c!='\r')f+=c}
if(f||r.length){r.push(f);rows.push(r)}const h=rows.shift();return rows.filter(x=>x.join('')).map(x=>Object.fromEntries(h.map((k,i)=>[k,(x[i]||'').trim()])))}
const n=v=>parseFloat(v)||0, fmt=(v,d=1)=>v.toLocaleString('fr-CA',{maximumFractionDigits:d,minimumFractionDigits:d});
fetch('data/journal.csv?'+Date.now()).then(r=>r.text()).then(t=>{
const e=parseCSV(t).sort((a,b)=>a.date.localeCompare(b.date));
const s=k=>e.reduce((a,x)=>a+n(x[k]),0);
document.getElementById('t-print').textContent=fmt(s('heures_impression'));
document.getElementById('t-fil').textContent=fmt(s('filament_g')/1000,2);
document.getElementById('t-cost').textContent=fmt(s('cout_cad'),2)+' $';
document.getElementById('t-work').textContent=fmt(s('heures_travail'));
const tb=document.querySelector('#tbl tbody');
e.forEach(x=>{const tr=document.createElement('tr');['date','type','piece','heures_impression','filament_g','materiau','cout_cad','heures_travail','note'].forEach(k=>{const td=document.createElement('td');td.textContent=x[k];tr.appendChild(td)});tb.appendChild(tr)});
const dates=[...new Set(e.map(x=>x.date))];let cum=0;
const cumv=dates.map(d=>{cum+=e.filter(x=>x.date==d).reduce((a,x)=>a+n(x.cout_cad),0);return +cum.toFixed(2)});
const C={color:'#8b949e'};Chart.defaults.color='#8b949e';Chart.defaults.borderColor='#30363d';
new Chart('c-cost',{type:'line',data:{labels:dates,datasets:[{label:'CAD',data:cumv,borderColor:'#2fd4a7',backgroundColor:'#2fd4a733',fill:true}]}});
const types=['impression','achat','assemblage'];
new Chart('c-type',{type:'bar',data:{labels:['Dépenses $','Heures impr.','Heures travail'],datasets:types.map((ty,i)=>({label:ty,backgroundColor:['#2fd4a7','#4c8dff','#ffb347'][i],data:['cout_cad','heures_impression','heures_travail'].map(k=>e.filter(x=>x.type==ty).reduce((a,x)=>a+n(x[k]),0))}))},options:{scales:{x:{stacked:true},y:{stacked:true}}}});
const D=document.getElementById('days');const yt='https://www.youtube.com/@MyMateBot';
dates.forEach((d,i)=>{const it=e.filter(x=>x.date==d);const div=document.createElement('div');div.className='day';
div.innerHTML=`<h3>Jour ${i+1} — ${d}</h3><ul>${it.map(x=>`<li>${x.type} : ${x.piece.replace(/</g,'&lt;')}</li>`).join('')}</ul><a href="${yt}" target="_blank">▶ Vidéo sur @MyMateBot</a>`;D.appendChild(div)});
});
