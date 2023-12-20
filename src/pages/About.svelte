<script>
    import { onMount } from "svelte";
    import Skills from "../components/Skills.svelte";
    import { callServerApi } from "../services/DataService";

    let skillsList = [];

    onMount(()=>{
        getSkills()
    })

    async function getSkills(){
        const result = await callServerApi("getSkills", {}, {});
        console.log(result);
        if(result.flag === "success"){
            skillsList = result.data;
        }
        console.log(result)
    }
</script>

<style>
    img{
        border-radius: 50%;
    }
    #line{
			position: absolute;
			left: 5;
			height: 5px;
			background: #00CBF6;
			animation: lineH 2s 1s infinite linear;
		}

    @keyframes lineH{
			0%{
				width: 0%;
			}
			100%{
                width: 15%;opacity: 0;
            }
    }

    .top{
        margin-top: -5px;
    }

</style>

<div class="container-fluid">
    <div class="row mt-5">
        <div class="col-1"></div>
        <div class="col-md-7">
            <h3>Readme.md</h3>
            <div id="line" class="top"></div>
            <p class="mt-5"> 
                👋 Hello there! I'm Shreya Bhavsar, a third-year Computer Science student with a keen 
                interest in both web development and 3D graphics. 
            </p>
            <p>
                My journey into the world of technology began with a fascination for creating 
                immersive digital experiences. 
                I have experience in a variety of front-end and back-end technologies, and I am
                dedicated to mastering the art of full-stack development.
            </p>
            <p>
                Beyond the realm of code, I am captivated by the world of 3D graphics. 
                I'm currently learning Blender to leverage my creativity to breathe life into 
                digital environments.
            </p>
            <p>
                I'm always open to collaboration, learning, and pushing the boundaries of what's possible. 
                Feel free to explore my portfolio and reach out for potential opportunities, discussions, 
                or projects. 
            </p>
            <span class="text-primary"><b><p>Let's build the future together!</p></b></span>
        </div>
        <div class="col-md-3 mt-5">
            <img src="shrey1.jpeg" width="100%" alt="">
        </div>
        <div class="col-1"></div>
    </div>

    <div class="row mt-5">
        <div class="col-1"></div>
        <div class="col-10">
            <h3>My Skills</h3>
            <div id="line"></div>
            <div class="mb-5 pb-5">
                {#each skillsList as sl}
                    <div class="row mt-5">
                        <h6>{sl.group_name}</h6>
                        <div class="row">
                            <Skills skill={sl.tech}/>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
        <div class="col-1"></div>
    </div>
</div>