self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{e.respondWith(fetch(e.request).catch(()=>new Response("Sem ligação à internet.",{status:503,headers:{"Content-Type":"text/plain;charset=utf-8"}})))});
