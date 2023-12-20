import { c as create_ssr_component, v as validate_component } from './ssr-pFtfi_2X.js';

const css = {
  code: ".flex1.svelte-1qdogmc{display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 100px);overflow-y:hidden}",
  map: null
};
const Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container-fluid flex1 svelte-1qdogmc" data-svelte-h="svelte-1fr5b4h"><h3>Resume will be uploaded soon</h3></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Resume, "Resume").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-qTbf5rhH.js.map
