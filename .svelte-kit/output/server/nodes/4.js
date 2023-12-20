

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.83b9eb74.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.03c013b3.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/navigation.3608d559.js","_app/immutable/chunks/singletons.195289fe.js","_app/immutable/chunks/index.35a173b3.js","_app/immutable/chunks/cache.cb52253d.js","_app/immutable/chunks/DataService.0b00697f.js"];
export const stylesheets = ["_app/immutable/assets/4.6119743e.css"];
export const fonts = [];
