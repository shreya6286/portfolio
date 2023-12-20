

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.54519b0e.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.03c013b3.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/DataService.0b00697f.js"];
export const stylesheets = ["_app/immutable/assets/3.153085f4.css"];
export const fonts = [];
