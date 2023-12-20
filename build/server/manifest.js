const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","art.png","bg.mp4","bg.png","blend.png","bootstrap.png","bot.png","bot1.png","calc.png","cars.png","code.gif","cook.png","css.png","d4.png","favicon.png","fig.png","git.png","html.png","icon.png","js.png","lighthouse.png","loader.gif","mongo.png","mysql.png","node.png","port.png","py.png","quotes.png","react.png","shop.png","show.png","shrey1.jpeg","svelte.png","todo.png","vs.png","watch.png","weather.png","xsite.png"]),
	mimeTypes: {".png":"image/png",".mp4":"video/mp4",".gif":"image/gif",".jpeg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.9b449d46.js","app":"_app/immutable/entry/app.f892c3df.js","imports":["_app/immutable/entry/start.9b449d46.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.195289fe.js","_app/immutable/chunks/index.35a173b3.js","_app/immutable/entry/app.f892c3df.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.03c013b3.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-6KtcZ7Mn.js')),
			__memo(() => import('./chunks/1-phIqO-Zp.js')),
			__memo(() => import('./chunks/2-_XRt4AEm.js')),
			__memo(() => import('./chunks/3-xmXQrKqa.js')),
			__memo(() => import('./chunks/4-7j3l1lS0.js')),
			__memo(() => import('./chunks/5-d94lYynr.js')),
			__memo(() => import('./chunks/6-s6IOJhuY.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/view-project",
				pattern: /^\/view-project\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
