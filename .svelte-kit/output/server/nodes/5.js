

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.2162941c.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.03c013b3.js"];
export const stylesheets = ["_app/immutable/assets/5.23f9c6f2.css"];
export const fonts = [];
