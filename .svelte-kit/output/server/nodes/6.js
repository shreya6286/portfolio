

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/view-project/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.beb19b61.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.03c013b3.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/cache.cb52253d.js","_app/immutable/chunks/index.35a173b3.js"];
export const stylesheets = ["_app/immutable/assets/6.390100aa.css"];
export const fonts = [];
