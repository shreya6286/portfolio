

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.8e0a6a42.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.03c013b3.js","_app/immutable/chunks/DataService.0b00697f.js"];
export const stylesheets = ["_app/immutable/assets/2.a3454339.css"];
export const fonts = [];
