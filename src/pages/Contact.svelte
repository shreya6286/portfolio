<script>
    import { onMount } from "svelte";
    import { UserContactSchema } from "../schema/UserContactSchema";
    import { callServerApi } from "../services/DataService";

    let user = {};
    let errorObj = {};
    let showStatus = false;
    let stat = '';
    let alreadyShown = false;

    // onMount(()=>{
    //   onSendBtn();
    // })

    async function onCancelBtn(){
      user = {}
    }

    async function onSendBtn(){
      try{
          const parse_res = UserContactSchema.parse(user);
          console.log(parse_res);
          const user_res = await callServerApi("saveContacts", user, {});
          console.log(user_res);
          stat = 'Your message has been sent!';
          showStatus = true;
          user = {}
          setTimeout(()=>{
              stat = '';
              showStatus = false;
          }, 3000)
      }
      catch (err) {
            console.log(err)
            errorObj = err.flatten().fieldErrors;
            let key = Object.keys(errorObj)[0];
            stat = key + ' - ' + errorObj[key][0];
            alreadyShown = true;
            setTimeout(()=> {
                stat = '';
                alreadyShown = false;
            }, 5000)
            console.log(errorObj[key][0]);
        }
    }
</script>

<style>
    *, *:before, *:after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button, input, textarea {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
}

.background {
  display: flex;
}

.container {
  flex: 0 1 1000px;
  margin: auto;
  padding: 10px;
}

.screen {
  position: relative;
  border-radius: 15px;
}

.screen:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
  z-index: -1;
}

.screen-header {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background: #4d4d4f;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

.screen-header-left {
  margin-right: auto;
}

.screen-header-button {
  display: inline-block;
  width: 8px;
  height: 8px;
  margin-right: 3px;
  border-radius: 8px;
  background: white;
}

.screen-header-right {
  display: flex;
}

.screen-header-ellipsis {
  width: 3px;
  height: 3px;
  margin-left: 2px;
  border-radius: 8px;
  background: #999;
}

.screen-body {
  display: flex;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #00CBF6;
  font-size: 26px;
}

.app-title:after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 180px;
  height: 3px;
  background: #00CBF6;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: #ddd;
  font-size: 14px;
  text-transform: uppercase;
  outline: none;
  transition: border-color .2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}

.app-form-button {
  background: none;
  border: none;
  color: #00CBF6;
  font-size: 14px;
  cursor: pointer;
  outline: none;
}

.app-form-button:hover {
  color: #00CBF6;
}

@media screen and (max-width: 600px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (min-width: 600px) {
  /* .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
  .panel {
        width: 1150px;
    } */
}
</style>

<div class="container-fluid">
    <div class="row panel">
      {#if showStatus }
          <p class="text-danger text-center mt-3 mb-0 font1">
              { stat }
          </p>
      {/if}
      {#if  alreadyShown }
          <p class="text-danger text-center mt-3 mb-0 font1">
              {#if Object.keys(errorObj).length > 0}
                  { stat }
              {/if}
          </p>
        {/if}
        <div class="background">
            <div class="container">
                <div class="screen bg-dark">
                    <div class="screen-header">
                        <div class="screen-header-left">
                            <div class="screen-header-button bg-danger"></div>
                            <div class="screen-header-button bg-warning"></div>
                            <div class="screen-header-button bg-success"></div>
                        </div>
                        <div class="screen-header-right">
                            <div class="screen-header-ellipsis"></div>
                            <div class="screen-header-ellipsis"></div>
                            <div class="screen-header-ellipsis"></div>
                        </div>
                    </div>
                    <div class="screen-body">
                        <div class="screen-body-item left">
                            <div class="app-title">
                                <span>CONTACT ME</span>
                            </div>
                        </div>
                        <div class="screen-body-item">
                            <div class="app-form">
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="NAME" bind:value={user.name}>
                                </div>
                                <div class="app-form-group">
                                    <input class="app-form-control" placeholder="EMAIL" bind:value={user.email_id}>
                                </div>
                                <div class="app-form-group message">
                                    <textarea class="app-form-control" rows="5" placeholder="MESSAGE" bind:value={user.msg}></textarea>
                                </div>
                                <div class="app-form-group buttons mt-3">
                                    <button class="app-form-button" on:click={onCancelBtn}>CANCEL</button>
                                    <button class="app-form-button" on:click={onSendBtn}>SEND</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>