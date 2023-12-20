<script>
    import { onMount } from "svelte";
    import { projectInfo } from "../stores/cache";

    onMount(()=>{
        console.log($projectInfo);
        getTechList();
    })

    let techList = [];

    async function getTechList(){
        const result = await $projectInfo;
        techList = result.tech;
        console.log(result)
    }

</script>

<style>
    .social:hover {
        background-color: black;
        color: white;
    }
    p{
        font-size: 14px;
    }
    .strip{
        background-color: rgb(221, 237, 252);
        padding: 5px;
        text-align: center;
        border-radius: 50px;
    }
</style>

<div class="container-fluid">
    <div class="row mt-5">
        <div class="col-md-7 px-3 mb-5">
            <img src={$projectInfo.pic} alt="" width="100%">
        </div>
        <div class="col-md-4">
            <h4>{$projectInfo.name}</h4>
            <div class="row mt-3">
                <p>{$projectInfo.desc}</p>
                <p class="mb-4">{$projectInfo.info}</p>
                <h6>Technology stack: </h6>
                <div class="row mt-2">
                    {#each techList as tl}
                        <div class="col-4">
                            <p class="strip">{tl}</p>
                        </div>
                    {/each}
                </div>
            </div>
            <div class="row mt-3 mb-5">
                <div class="col-12">
                    <!-- <a href="#" class="social btn border border-dark btn-sm me-2"><i class="bi bi-eye"></i>&nbsp; View project on Server</a> -->
                    <a href={$projectInfo.gitlink} class="social btn border border-dark btn-sm me-2"><i class="bi bi-github"></i>&nbsp; View project on Github</a>
                </div>
            </div>
        </div>
        <div class="col-md-1"></div>
    </div>
</div>