if(window.wgLoaded){alert("Já rodando");return;}
window.wgLoaded=true;

(function(){

if(document.getElementById("wg-panel")) return;

let selectedText="";
let generatedResponse="";

// ===== PAINEL =====
const panel=document.createElement("div");
panel.id="wg-panel";

panel.style.cssText="position:fixed;top:100px;right:20px;width:260px;background:#000;color:#0f0;padding:12px;border-radius:12px;z-index:999999;font-family:Arial;box-shadow:0 0 20px rgba(0,255,0,0.5);cursor:move;";

panel.innerHTML=`
<b>⚡ Painel</b><br><br>
<button id="wg-select">Ler</button>
<button id="wg-generate">Responder</button>
<button id="wg-copy">Copiar</button>
<p id="wg-status" style="font-size:12px;margin-top:8px;"></p>
`;

document.body.appendChild(panel);

// botões
panel.querySelectorAll("button").forEach(btn=>{
btn.style.cssText="width:100%;padding:7px;margin-top:6px;border:none;border-radius:7px;background:#111;color:#0f0;cursor:pointer;";
});

const status=document.getElementById("wg-status");

// mover
let drag=false,ox,oy;

panel.onmousedown=(e)=>{
drag=true;
ox=e.clientX-panel.offsetLeft;
oy=e.clientY-panel.offsetTop;
};

document.onmousemove=(e)=>{
if(drag){
panel.style.left=(e.clientX-ox)+"px";
panel.style.top=(e.clientY-oy)+"px";
panel.style.right="auto";
}
};

document.onmouseup=()=>drag=false;

// ler
document.getElementById("wg-select").onclick=()=>{
selectedText=window.getSelection().toString();
status.innerText=selectedText?"OK":"Nada";
};

// responder
document.getElementById("wg-generate").onclick=()=>{
generatedResponse="Resposta: "+selectedText.slice(0,150);
status.innerText="Feito";
alert(generatedResponse);
};

// copiar
document.getElementById("wg-copy").onclick=()=>{
navigator.clipboard.writeText(generatedResponse);
status.innerText="Copiado";
};

})();
