const http=require('node:http'),fs=require('node:fs'),path=require('node:path');
http.createServer((req,res)=>{
 const name=req.url==='/'?'index.html':req.url.slice(1).split('?')[0];
 const file=path.resolve(__dirname,name);
 if(!file.startsWith(__dirname+path.sep)){res.writeHead(403);res.end();return;}
 fs.readFile(file,(error,data)=>{if(error){res.writeHead(404);res.end('Not found');return;}res.setHeader('Content-Type',name.endsWith('.html')?'text/html; charset=utf-8':name.endsWith('.css')?'text/css':name.endsWith('.js')?'text/javascript':'application/octet-stream');res.end(data);});
}).listen(4173,'127.0.0.1',()=>console.log('Portfolio preview: http://127.0.0.1:4173'));
