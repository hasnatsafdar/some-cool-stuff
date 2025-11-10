// ==UserScript==
// @name         YT Speed Stepper (., ,)
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Use "." and "," to step YouTube playback speed with a minimalist popup (wraps). Mimics native style.
// @match        https://www.youtube.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(() => {
  const speeds = [1,1.25,1.5,1.75,2,2.5,3,4,5];
  let popupTimer = 0;

  const qVid = () => [...document.querySelectorAll('video')].find(v => v && v.readyState && v.offsetParent !== null);

  const show = (txt) => {
    let p = document.getElementById('tm-speed-popup');
    if(!p){
      p = document.createElement('div'); p.id='tm-speed-popup';
      Object.assign(p.style,{
        position:'absolute',zIndex:999999,transform:'translate(-50%,-50%)',
        left:'50%',top:'50%',padding:'6px 10px',fontSize:'14px',fontWeight:500,
        color:'#fff',background:'rgba(0,0,0,0.85)',borderRadius:'4px',
        pointerEvents:'none',opacity:0,transition:'opacity 120ms'
      });
      document.body.appendChild(p);
    }
    p.textContent = txt;
    const rect = (qVid()?.getBoundingClientRect?.() || {left:0,top:0,width:window.innerWidth,height:window.innerHeight});
    p.style.left = (rect.left + rect.width/2) + 'px';
    p.style.top  = (rect.top + rect.height*0.18) + 'px';
    p.style.opacity = 1;
    clearTimeout(popupTimer);
    popupTimer = setTimeout(()=> p.style.opacity = 0, 900);
  };

  const step = (dir) => {
    const v = qVid();
    if(!v) return;
    const cur = v.playbackRate;
    if(dir === 1){ // forward: first speed > cur, else wrap to speeds[0]
      const nxt = speeds.find(s=>s - cur > 0.015) ?? speeds[0];
      v.playbackRate = nxt;
      show(nxt + '×');
    } else { // backward: last speed < cur, else wrap to last
      const prev = [...speeds].reverse().find(s=> cur - s > 0.015) ?? speeds[speeds.length-1];
      v.playbackRate = prev;
      show(prev + '×');
    }
  };

  window.addEventListener('keydown', e => {
    if(e.repeat) return;
    const t = document.activeElement;
    if(t && (t.tagName==='INPUT' || t.tagName==='TEXTAREA' || t.isContentEditable)) return;
    if(e.key === '.' || e.key === '>'){ // "." (shift+.) can be ">"
      e.preventDefault(); e.stopPropagation();
      step(1);
    } else if(e.key === ',' || e.key === '<'){
      e.preventDefault(); e.stopPropagation();
      step(-1);
    }
  }, true);

  // Keep popup positioned on navigation / player resize
  new MutationObserver(()=> {
    const p = document.getElementById('tm-speed-popup');
    if(p && p.style.opacity>0) {
      const rect = (qVid()?.getBoundingClientRect?.() || {left:0,top:0,width:window.innerWidth,height:window.innerHeight});
      p.style.left = (rect.left + rect.width/2) + 'px';
      p.style.top  = (rect.top + rect.height*0.18) + 'px';
    }
  }).observe(document.documentElement, {childList: true, subtree: true});
})();
