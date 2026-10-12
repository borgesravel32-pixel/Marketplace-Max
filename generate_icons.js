const fs = require('fs');
const path = require('path');

function createSvg(size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
    <rect width="${size}" height="${size}" rx="${Math.round(size * 0.2)}" fill="#030712"/>
    <path d="M${size * 0.25} ${size * 0.75} L${size * 0.4} ${size * 0.3} L${size * 0.5} ${size * 0.55} L${size * 0.6} ${size * 0.3} L${size * 0.75} ${size * 0.75} Z" fill="#2563eb"/>
    <text x="50%" y="85%" font-family="sans-serif" font-weight="bold" font-size="${Math.round(size * 0.12)}" fill="#ffffff" text-anchor="middle">MAX</text>
  </svg>`;
}

fs.writeFileSync('icon-192.svg', createSvg(192));
fs.writeFileSync('icon-512.svg', createSvg(512));
console.log('Ícones SVG criados com sucesso!');
