import { c as create_ssr_component, d as each, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
const Skills_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "@media only screen and (max-width: 576px){img.svelte-15zd71t{width:100%}}@media(max-width: 992px){img.svelte-15zd71t{width:100%}}@media(max-width: 1200px){img.svelte-15zd71t{width:100%}}@media(min-width: 1200px){img.svelte-15zd71t{width:100%}}@media(min-width: 1400px){img.svelte-15zd71t{width:100%}}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { skill } = $$props;
  if ($$props.skill === void 0 && $$bindings.skill && skill !== void 0)
    $$bindings.skill(skill);
  $$result.css.add(css$1);
  return `<div class="container mt-3"><div class="row g-2">${each(skill, (kill) => {
    return `<div class="col-md-3"><div class="p-3 bg-light border border-info rounded-2"><div class="row"><div class="col-md-1"></div> <div class="col-2"><img${add_attribute("src", kill.icon, 0)} width="100%" alt="" class="svelte-15zd71t"></div> <div class="col-8">${escape(kill.name)}</div> </div></div> </div>`;
  })}</div></div>`;
});
const About_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1a52mk4{border-radius:50%}#line.svelte-1a52mk4{position:absolute;left:5;height:5px;background:#00CBF6;animation:svelte-1a52mk4-lineH 2s 1s infinite linear}@keyframes svelte-1a52mk4-lineH{0%{width:0%}100%{width:15%;opacity:0}}.top.svelte-1a52mk4{margin-top:-5px}",
  map: null
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let skillsList = [];
  $$result.css.add(css);
  return `<div class="container-fluid"><div class="row mt-5" data-svelte-h="svelte-1xbm9j5"><div class="col-1"></div> <div class="col-md-7"><h3>Readme.md</h3> <div id="line" class="top svelte-1a52mk4"></div> <p class="mt-5">👋 Hello there! I&#39;m Shreya Bhavsar, a third-year Computer Science student with a keen 
                interest in both web development and 3D graphics.</p> <p>My journey into the world of technology began with a fascination for creating 
                immersive digital experiences. 
                I have experience in a variety of front-end and back-end technologies, and I am
                dedicated to mastering the art of full-stack development.</p> <p>Beyond the realm of code, I am captivated by the world of 3D graphics. 
                I&#39;m currently learning Blender to leverage my creativity to breathe life into 
                digital environments.</p> <p>I&#39;m always open to collaboration, learning, and pushing the boundaries of what&#39;s possible. 
                Feel free to explore my portfolio and reach out for potential opportunities, discussions, 
                or projects.</p> <span class="text-primary"><b><p>Let&#39;s build the future together!</p></b></span></div> <div class="col-md-3 mt-5"><img src="shrey1.jpeg" width="100%" alt="" class="svelte-1a52mk4"></div> <div class="col-1"></div></div> <div class="row mt-5"><div class="col-1"></div> <div class="col-10"><h3 data-svelte-h="svelte-xftpdq">My Skills</h3> <div id="line" class="svelte-1a52mk4"></div> <div class="mb-5 pb-5">${each(skillsList, (sl) => {
    return `<div class="row mt-5"><h6>${escape(sl.group_name)}</h6> <div class="row">${validate_component(Skills, "Skills").$$render($$result, { skill: sl.tech }, {}, {})}</div> </div>`;
  })}</div></div> <div class="col-1"></div></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(About, "About").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
