# 🔁 Video Speed toggler (Tampermonkey Script)

A lightweight Tampermonkey userscript to **step through YouTube playback speeds** with your keyboard. Perfect for lecture binge-watching at high speeds.

## ⚙️ Features

- Press `.` → step **forward** through speeds: `1x → 1.25x → 1.5x → 1.75x → 2x → 2.5x → 3x → 4x → 5x`
- Press `,` → step **backward** through the same list  
- **Wrap-around support** → if you’re at `5x` and go forward, it loops back to `1x` (and vice versa)  
- Minimal popup styled like YouTube’s native indicator, showing current speed for ~0.9s  

## 📦 Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) on Chrome/Firefox/Edge.
2. Create a new script with **"Add new script"**.
3. Paste the code from [`video-speed-toggler.js`](video-speed-toggler.js).
4. Save & reload YouTube ✅.

## 🧠 Why I Made This

I was tired of clicking menus or sticking to YouTube’s limited speed steps.  
This script lets me fly through lectures I already know and slow down only when needed without breaking flow.

## 🛠️ Tech

- **Vanilla JavaScript**  
- **Tampermonkey API** (no dependencies, minimal footprint)  
