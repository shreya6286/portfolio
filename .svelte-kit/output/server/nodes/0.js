

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.c79e1be4.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.03c013b3.js","_app/immutable/chunks/navigation.3608d559.js","_app/immutable/chunks/singletons.195289fe.js","_app/immutable/chunks/index.35a173b3.js"];
export const stylesheets = ["_app/immutable/assets/0.053da005.css"];
export const fonts = [];
