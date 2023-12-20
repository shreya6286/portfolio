import { c as create_ssr_component, d as each, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
const Cards_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "p.svelte-4z0h9p.svelte-4z0h9p{font-size:12px}.flex1.svelte-4z0h9p.svelte-4z0h9p{position:absolute;right:0;bottom:0}i.svelte-4z0h9p.svelte-4z0h9p{font-size:16px}@media only screen and (max-width: 576px){.container.svelte-4z0h9p.svelte-4z0h9p{width:85%;display:flex}.card.svelte-4z0h9p.svelte-4z0h9p{height:370px;background-color:#17141d;border-radius:10px;box-shadow:0px 5px 15px #000;margin-left:20px}.card.svelte-4z0h9p.svelte-4z0h9p:not(:first-child){margin-left:20px}}@media(max-width: 1200px){.container.svelte-4z0h9p.svelte-4z0h9p{margin-top:30px;margin-left:30px}.card.svelte-4z0h9p.svelte-4z0h9p{height:370px;background-color:#17141d;border-radius:10px;box-shadow:0px 5px 15px #000;margin-left:20px}.card.svelte-4z0h9p.svelte-4z0h9p:not(:first-child){margin-left:20px}}@media(min-width: 1200px){.container.svelte-4z0h9p.svelte-4z0h9p{margin-top:30px;margin-left:30px}.card.svelte-4z0h9p.svelte-4z0h9p{height:370px;background-color:#17141d;border-radius:10px;box-shadow:0px 5px 15px #000;margin-left:20px}.card.svelte-4z0h9p.svelte-4z0h9p:not(:first-child){margin-left:20px}}@media(min-width: 1400px){.container.svelte-4z0h9p.svelte-4z0h9p{width:85%;margin-left:90px;margin-top:30px}.card.svelte-4z0h9p.svelte-4z0h9p{display:flex;height:370px;background-color:#17141d;border-radius:10px;box-shadow:0px 5px 15px #000;transition:0.4s ease-out;position:relative;left:0px}.card.svelte-4z0h9p.svelte-4z0h9p:not(:first-child){margin-left:-150px}.card.svelte-4z0h9p.svelte-4z0h9p:hover{transform:translateY(-20px);transition:0.4s ease-out}.card.svelte-4z0h9p:hover~.card.svelte-4z0h9p{position:relative;left:100px;transition:0.4s ease-out}}",
  map: null
};
const Cards = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { proj = {} } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.proj === void 0 && $$bindings.proj && proj !== void 0)
    $$bindings.proj(proj);
  $$result.css.add(css$1);
  return `<div class="container-fluid"><div class="container svelte-4z0h9p"><div class="row mb-5">${each(data, (dt) => {
    return `<div class="card mb-5 p-0 svelte-4z0h9p" style="width: 18rem;"><img${add_attribute("src", dt.pic, 0)} class="card-img-top" alt="..."> <div class="card-body"><h5 class="card-title text-white">${escape(dt.name)}</h5> <p class="card-text text-white mt-3 svelte-4z0h9p">${escape(dt.desc)}</p> <div class="card-footer mb-3 mx-3 flex1 svelte-4z0h9p"><a${add_attribute("href", "#", 0)} class="btn btn-sm btn-info" data-svelte-h="svelte-12nlwvi">View Project   <i class="bi bi-code-slash svelte-4z0h9p"></i></a> </div></div> </div>`;
  })}</div></div></div>`;
});
const Projects_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media only screen and (max-width: 576px){.content.svelte-3itpqw{margin-top:30px}#line.svelte-3itpqw{height:5px;background:#00CBF6;animation:svelte-3itpqw-lineH 2s 1s infinite linear}@keyframes svelte-3itpqw-lineH{0%{width:0%}100%{width:70%;opacity:0}}}@media(max-width: 1200px){.content.svelte-3itpqw{margin-top:30px;margin-left:40px}.tech.svelte-3itpqw{margin-left:40px}#line.svelte-3itpqw{height:5px;background:#00CBF6;animation:svelte-3itpqw-lineH 2s 1s infinite linear}@keyframes svelte-3itpqw-lineH{0%{width:0%}100%{width:50%;opacity:0}}}@media(min-width: 1200px){.content.svelte-3itpqw{margin-top:50px;margin-left:50px}.tech.svelte-3itpqw{margin-left:50px}#line.svelte-3itpqw{height:5px;background:#00CBF6;animation:svelte-3itpqw-lineH 2s 1s infinite linear}@keyframes svelte-3itpqw-lineH{0%{width:0%}100%{width:30%;opacity:0}}}@media(min-width: 1400px){.content.svelte-3itpqw{margin-top:50px;margin-left:100px}.tech.svelte-3itpqw{margin-left:100px}#line.svelte-3itpqw{height:5px;background:#00CBF6;animation:svelte-3itpqw-lineH 2s 1s infinite linear}@keyframes svelte-3itpqw-lineH{0%{width:0%}100%{width:25%;opacity:0}}}.cat.svelte-3itpqw{border:1px solid black;margin-right:10px;border-radius:20px}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let projectsList = [];
  $$result.css.add(css);
  return `<div class="container-fluid"><div class="row"><div class="content svelte-3itpqw" data-svelte-h="svelte-16tik4s"><h3>Featured Projects</h3> <div id="line" class="svelte-3itpqw"></div> <div class="row mt-4"><div class="col-12"><h6 class="mb-3">Categories:      </h6> <a href="#p1" class="btn btn-sm cat bg-dark text-white px-3 svelte-3itpqw">Svelte</a> <a href="#p2" class="btn btn-sm cat px-3 svelte-3itpqw">Javascript</a> <a href="#p3" class="btn btn-sm cat px-3 svelte-3itpqw">Blender</a></div></div></div> <div class="row mt-4 pt-3">${each(projectsList, (pl) => {
    return `<div class="col-12"><h4 id="p2" class="tech svelte-3itpqw">${escape(pl.tech)} Projects:</h4> <div class="row">${validate_component(Cards, "Cards").$$render($$result, { data: pl.details }, {}, {})}</div> </div>`;
  })}</div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
