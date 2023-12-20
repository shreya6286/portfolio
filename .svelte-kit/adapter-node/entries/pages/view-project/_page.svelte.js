import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, d as each, v as validate_component } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index.js";
let projectInfo = writable({});
const ViewProject_svelte_svelte_type_style_lang = "";
const css = {
  code: ".social.svelte-1xapj9q:hover{background-color:black;color:white}p.svelte-1xapj9q{font-size:14px}.strip.svelte-1xapj9q{background-color:rgb(221, 237, 252);padding:5px;text-align:center;border-radius:50px}",
  map: null
};
const ViewProject = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $projectInfo, $$unsubscribe_projectInfo;
  $$unsubscribe_projectInfo = subscribe(projectInfo, (value) => $projectInfo = value);
  let techList = [];
  $$result.css.add(css);
  $$unsubscribe_projectInfo();
  return `<div class="container-fluid"><div class="row mt-5"><div class="col-md-7 px-3 mb-5"><img${add_attribute("src", $projectInfo.pic, 0)} alt="" width="100%"></div> <div class="col-md-4"><h4>${escape($projectInfo.name)}</h4> <div class="row mt-3"><p class="svelte-1xapj9q">${escape($projectInfo.desc)}</p> <p class="mb-4 svelte-1xapj9q">${escape($projectInfo.info)}</p> <h6 data-svelte-h="svelte-og0786">Technology stack:</h6> <div class="row mt-2">${each(techList, (tl) => {
    return `<div class="col-4"><p class="strip svelte-1xapj9q">${escape(tl)}</p> </div>`;
  })}</div></div> <div class="row mt-3 mb-5"><div class="col-12"> <a${add_attribute("href", $projectInfo.gitlink, 0)} class="social btn border border-dark btn-sm me-2 svelte-1xapj9q"><i class="bi bi-github"></i>  View project on Github</a></div></div></div> <div class="col-md-1"></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(ViewProject, "ViewProject").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
