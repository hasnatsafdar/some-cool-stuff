// ==UserScript==
// @name         Video Speed Toggle (Compact)
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Toggle video playback speed with minimal code
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function(){
    'use strict';
    const speeds={
        ',':[1,1.5,2],
        '.':[3,5,7]
    };
    const idx={',':0,'.':0};

    document.addEventListener('keydown', e => {
        const key=e.key;
        const list=speeds[key];
        if(!list) return;
        const video=document.querySelector('video');
        if(!video) return;
        const i=idx[key] % list.length;
        const rate=list[i];
        video.playbackRate=rate;
        idx[key]++;
        showPopup(`Speed: ${rate}x`);
    });

    function showPopup(txt){
        const old=document.getElementById('speedPopup');
        if(old) old.remove();
        const p=document.createElement('div');
        p.id='speedPopup';
        Object.assign(p.style,{
            position:'fixed', bottom:'20px', right:'20px',
            padding:'6px 10px', background:'rgba(0,0,0,0.7)',
            color:'#fff', fontSize:'12px', borderRadius:'3px', zIndex:9999
        });
        p.textContent=txt;
        document.body.appendChild(p);
        setTimeout(()=>p.remove(),1000);
    }
})();
