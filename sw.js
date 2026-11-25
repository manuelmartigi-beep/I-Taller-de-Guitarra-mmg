// Service worker de Taller de Guitarra: mmg. Sube el número de VERSION cuando publiques cambios.
var VERSION='v50',CACHE='taller-guitarra-'+VERSION;
var FILES=['./','index.html','Afinador.html','Partituras.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','apple-touch-icon.png','favicon.svg'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES);}).then(function(){return self.skipWaiting();}));});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k.indexOf('taller-guitarra-')===0&&k!==CACHE;}).map(function(k){return caches.delete(k);}));}).then(function(){return self.clients.claim();}));});
self.addEventListener('fetch',function(e){
 var r=e.request;if(r.method!=='GET')return;
 var u=new URL(r.url),same=u.origin===self.location.origin,fonts=/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname);
 if(!same&&!fonts)return;
 e.respondWith(caches.open(CACHE).then(function(c){
  return c.match(r,{ignoreSearch:true}).then(function(hit){
   var net=fetch(r).then(function(res){if(res&&(res.ok||res.type==='opaque'))c.put(r,res.clone());return res;}).catch(function(){return hit;});
   if(hit)return hit;
   return net.then(function(res){return res||(r.mode==='navigate'?c.match('index.html'):res);});
  });
 }));
});
