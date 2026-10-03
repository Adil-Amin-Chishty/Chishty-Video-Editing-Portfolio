import {readFile,writeFile} from 'node:fs/promises';
const dir=new URL('./',import.meta.url);
const [css,body,js]=await Promise.all(['portfolio.css','body.html','portfolio.js'].map(x=>readFile(new URL(x,dir),'utf8')));
const embed=`<style>${css}</style>${body}<script>${js}</script>`;
await writeFile(new URL('carrd-embed.html',dir),embed);
await writeFile(new URL('index.html',dir),`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Chishty Productions — Video Editing</title><meta name="description" content="Video editing with rhythm, clarity and a distinctive finish."><style>html{scroll-behavior:smooth}body{margin:0}</style></head><body>${embed}</body></html>`);
console.log('Portfolio built.');
