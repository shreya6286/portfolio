import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute } from './ssr-pFtfi_2X.js';
import { z } from 'zod';

z.object({
  _id: z.string({
    invalid_type_error: "_id must be of type string"
  }).optional(),
  name: z.string({
    required_error: "Enter name",
    invalid_type_error: "name must be of type string"
  }).max(30, { message: "name field can have maximum 30 characters" }),
  email_id: z.string({
    required_error: "Enter email_id",
    invalid_type_error: "email_id must be of type string"
  }).max(30, { message: "email_id field can have maximum 30 characters" }).email("Please enter valid email id"),
  msg: z.string({
    required_error: "Enter message",
    invalid_type_error: "message must be of type string"
  })
});
const css$1 = {
  code: ".svelte-p3tn7l.svelte-p3tn7l,.svelte-p3tn7l.svelte-p3tn7l:before,.svelte-p3tn7l.svelte-p3tn7l:after{box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}button.svelte-p3tn7l.svelte-p3tn7l,input.svelte-p3tn7l.svelte-p3tn7l,textarea.svelte-p3tn7l.svelte-p3tn7l{font-family:'Montserrat', sans-serif;font-weight:700;letter-spacing:1.4px}.background.svelte-p3tn7l.svelte-p3tn7l{display:flex}.container.svelte-p3tn7l.svelte-p3tn7l{flex:0 1 1000px;margin:auto;padding:10px}.screen.svelte-p3tn7l.svelte-p3tn7l{position:relative;border-radius:15px}.screen.svelte-p3tn7l.svelte-p3tn7l:after{content:'';display:block;position:absolute;top:0;left:20px;right:20px;bottom:0;border-radius:15px;box-shadow:0 20px 40px rgba(0, 0, 0, .4);z-index:-1}.screen-header.svelte-p3tn7l.svelte-p3tn7l{display:flex;align-items:center;padding:10px 20px;background:#4d4d4f;border-top-left-radius:15px;border-top-right-radius:15px}.screen-header-left.svelte-p3tn7l.svelte-p3tn7l{margin-right:auto}.screen-header-button.svelte-p3tn7l.svelte-p3tn7l{display:inline-block;width:8px;height:8px;margin-right:3px;border-radius:8px;background:white}.screen-header-right.svelte-p3tn7l.svelte-p3tn7l{display:flex}.screen-header-ellipsis.svelte-p3tn7l.svelte-p3tn7l{width:3px;height:3px;margin-left:2px;border-radius:8px;background:#999}.screen-body.svelte-p3tn7l.svelte-p3tn7l{display:flex}.screen-body-item.svelte-p3tn7l.svelte-p3tn7l{flex:1;padding:50px}.screen-body-item.left.svelte-p3tn7l.svelte-p3tn7l{display:flex;flex-direction:column}.app-title.svelte-p3tn7l.svelte-p3tn7l{display:flex;flex-direction:column;position:relative;color:#00CBF6;font-size:26px}.app-title.svelte-p3tn7l.svelte-p3tn7l:after{content:'';display:block;position:absolute;left:0;bottom:-10px;width:180px;height:3px;background:#00CBF6}.app-form-group.svelte-p3tn7l.svelte-p3tn7l{margin-bottom:15px}.app-form-group.buttons.svelte-p3tn7l.svelte-p3tn7l{margin-bottom:0;text-align:right}.app-form-control.svelte-p3tn7l.svelte-p3tn7l{width:100%;padding:10px 0;background:none;border:none;border-bottom:1px solid #666;color:#ddd;font-size:14px;text-transform:uppercase;outline:none;transition:border-color .2s}.app-form-control.svelte-p3tn7l.svelte-p3tn7l::placeholder{color:#666}.app-form-control.svelte-p3tn7l.svelte-p3tn7l:focus{border-bottom-color:#ddd}.app-form-button.svelte-p3tn7l.svelte-p3tn7l{background:none;border:none;color:#00CBF6;font-size:14px;cursor:pointer;outline:none}.app-form-button.svelte-p3tn7l.svelte-p3tn7l:hover{color:#00CBF6}@media screen and (max-width: 600px){.screen-body.svelte-p3tn7l.svelte-p3tn7l{flex-direction:column}.screen-body-item.left.svelte-p3tn7l.svelte-p3tn7l{margin-bottom:30px}.app-title.svelte-p3tn7l.svelte-p3tn7l{flex-direction:row}.app-title.svelte-p3tn7l span.svelte-p3tn7l{margin-right:12px}.app-title.svelte-p3tn7l.svelte-p3tn7l:after{display:none}}@media screen and (min-width: 600px){}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let user = {};
  $$result.css.add(css$1);
  return `<div class="container-fluid svelte-p3tn7l"><div class="row panel svelte-p3tn7l">${``} ${``} <div class="background svelte-p3tn7l"><div class="container svelte-p3tn7l"><div class="screen bg-dark svelte-p3tn7l"><div class="screen-header svelte-p3tn7l" data-svelte-h="svelte-1ba8rbn"><div class="screen-header-left svelte-p3tn7l"><div class="screen-header-button bg-danger svelte-p3tn7l"></div> <div class="screen-header-button bg-warning svelte-p3tn7l"></div> <div class="screen-header-button bg-success svelte-p3tn7l"></div></div> <div class="screen-header-right svelte-p3tn7l"><div class="screen-header-ellipsis svelte-p3tn7l"></div> <div class="screen-header-ellipsis svelte-p3tn7l"></div> <div class="screen-header-ellipsis svelte-p3tn7l"></div></div></div> <div class="screen-body svelte-p3tn7l"><div class="screen-body-item left svelte-p3tn7l" data-svelte-h="svelte-33p8sa"><div class="app-title svelte-p3tn7l"><span class="svelte-p3tn7l">CONTACT ME</span></div></div> <div class="screen-body-item svelte-p3tn7l"><div class="app-form svelte-p3tn7l"><div class="app-form-group svelte-p3tn7l"><input class="app-form-control svelte-p3tn7l" placeholder="NAME"${add_attribute("value", user.name, 0)}></div> <div class="app-form-group svelte-p3tn7l"><input class="app-form-control svelte-p3tn7l" placeholder="EMAIL"${add_attribute("value", user.email_id, 0)}></div> <div class="app-form-group message svelte-p3tn7l"><textarea class="app-form-control svelte-p3tn7l" rows="5" placeholder="MESSAGE">${escape(user.msg || "")}</textarea></div> <div class="app-form-group buttons mt-3 svelte-p3tn7l"><button class="app-form-button svelte-p3tn7l" data-svelte-h="svelte-1s0jfqj">CANCEL</button> <button class="app-form-button svelte-p3tn7l" data-svelte-h="svelte-1nfzjcf">SEND</button></div></div></div></div></div></div></div></div></div>`;
});
const css = {
  code: ".margin.svelte-1l9ckrv{margin:0px;padding:0px;overflow-x:hidden}#background-video.svelte-1l9ckrv{width:100vw;height:100vh;object-fit:cover;position:fixed;left:0;right:0;top:0;bottom:0;z-index:-1}@media only screen and (max-width: 576px){.content.svelte-1l9ckrv{padding-top:50px;padding-left:50px}.text.svelte-1l9ckrv{font-weight:600;font-size:40px}.panel.svelte-1l9ckrv{margin-top:50px}}@media(max-width: 992px){.content.svelte-1l9ckrv{padding-top:50px;padding-left:30px}.text.svelte-1l9ckrv{font-weight:600;font-size:100px}.panel.svelte-1l9ckrv{margin-top:80px}}@media(max-width: 1200px){.content.svelte-1l9ckrv{padding-top:50px;padding-left:50px}.text.svelte-1l9ckrv{font-weight:600;font-size:80px}.panel.svelte-1l9ckrv{margin-top:80px}}@media(min-width: 1200px){.content.svelte-1l9ckrv{padding-top:50px;padding-left:150px}.text.svelte-1l9ckrv{font-weight:600;font-size:80px}.panel.svelte-1l9ckrv{margin-top:80px}}@media(min-width: 1400px){.content.svelte-1l9ckrv{padding-top:100px;padding-left:200px}.text.svelte-1l9ckrv{font-weight:600;font-size:100px}.panel.svelte-1l9ckrv{margin-top:200px}}i.svelte-1l9ckrv{font-size:15px;padding-right:15px}.button1.svelte-1l9ckrv{font-size:11px;text-transform:uppercase;letter-spacing:1.3px;font-weight:700;border:none;border-radius:1000px;transition:all 0.3s ease-in-out 0s;cursor:pointer;padding:12px}.button1.svelte-1l9ckrv::before{content:'';border-radius:1000px;min-width:calc(100px + 75px);min-height:calc(30px + 12px);border:6px solid #00CBF6;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);opacity:0;transition:all .3s ease-in-out 0s}.button1.svelte-1l9ckrv:hover,.button1.svelte-1l9ckrv:focus{transform:translateY(-6px)}.button1.svelte-1l9ckrv:hover::before,.button1.svelte-1l9ckrv:focus::before{opacity:1}.social.svelte-1l9ckrv:hover{background-color:black;color:white}",
  map: null
};
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let msg = "";
  let animData = ["I am a Student. ", "I am a Fullstack Developer. ", "I make 3D models. "];
  let tick = 1;
  let msgCount = 0;
  console.log(animData[msgCount].length);
  setInterval(
    () => {
      msg += animData[msgCount][tick++];
      if (animData[msgCount].length < tick) {
        tick = 1;
        msg = "";
        if (msgCount === animData.length - 1) {
          msgCount = 0;
        } else {
          msgCount++;
        }
      }
    },
    100
  );
  $$result.css.add(css);
  return `<div class="container-fluid margin svelte-1l9ckrv"><div class="row"><div class="col-12"><video width="100%" autoplay muted loop id="background-video" class="svelte-1l9ckrv" data-svelte-h="svelte-1xru4jo"><source src="bg.mp4" type="video/mp4"></video> <div class="row"><div class="content svelte-1l9ckrv"><h4 class="fw-light" data-svelte-h="svelte-1a7fhk8">Hello, World!</h4> <h1 class="text svelte-1l9ckrv" data-svelte-h="svelte-9iuylb">Shreya Bhavsar</h1> <h1 class="fw-light">I${escape(msg)}</h1> <div class="row mt-5" data-svelte-h="svelte-uze8c4"><div class="col-12 strip"><a href="mailto:shreyabhavsar93@gmail.com" class="social btn border border-dark btn-sm me-2 svelte-1l9ckrv"><i class="bi bi-envelope-at-fill svelte-1l9ckrv"></i>Email</a> <a href="https://github.com/shreya6286" class="social btn border border-dark btn-sm me-2 svelte-1l9ckrv"><i class="bi bi-github svelte-1l9ckrv"></i>Github</a> <a href="https://www.linkedin.com/in/shreya-bhavsar-4427b3147/" class="social btn border border-dark btn-sm svelte-1l9ckrv"><i class="bi bi-linkedin svelte-1l9ckrv"></i>LinkedIn</a></div></div> <div class="row mt-3" data-svelte-h="svelte-5htqja"><div class="col-12"><a class="btn button1 btn-info svelte-1l9ckrv" href="#b1">Send me a message</a></div></div></div> <div data-bs-spy="scroll" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0"><div class="row panel svelte-1l9ckrv" id="b1"><div class="col-12">${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}</div></div></div></div></div></div> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Home, "Home").$$render($$result, {}, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-2c1lCdkW.js.map
