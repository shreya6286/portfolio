<script>
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
    import { projectInfo } from "../stores/cache";
    export let data;
    export let proj = {};

    async function onViewProjBtnClick(proj){
        projectInfo.set(proj)
        goto('view-project')
    }

</script>

<style>
   
    p{
        font-size: 12px;
    }

    .flex1{
        position: absolute;
        right: 0;
        bottom: 0;
    }

    i{
        font-size: 16px;
    }

    @media only screen and (max-width: 576px) {
        .container{
            width: 85%;
            display: flex;
        }
        .card {
            /* display: flex; */
            height: 370px;
            /* width: 250px; */
            background-color: #17141d;
            border-radius: 10px;
            box-shadow: 0px 5px 15px #000;
            /* transition: 0.4s ease-out; */
            /* position: relative;
            left: 0px; */
            margin-left: 20px;
          
        }
        .card:not(:first-child) {
            margin-left: 20px;
        }
    }

    @media (max-width: 1200px) {
        .container{
            margin-top: 30px;
            margin-left: 30px;
        }
        .card {
            height: 370px;
            background-color: #17141d;
            border-radius: 10px;
            box-shadow: 0px 5px 15px #000;
            margin-left: 20px;
          
        }
        .card:not(:first-child) {
            margin-left: 20px;
        }
    }
    @media (min-width: 1200px) {
        .container{
            margin-top: 30px;
            margin-left: 30px;
        }
        .card {
            height: 370px;
            background-color: #17141d;
            border-radius: 10px;
            box-shadow: 0px 5px 15px #000;
            margin-left: 20px;
          
        }
        .card:not(:first-child) {
            margin-left: 20px;
        }
    }

    @media (min-width: 1400px) {
        .container{
            width: 85%;
            /* display: flex; */
            margin-left: 90px;
            margin-top: 30px;
        }
        .card {
            display: flex;
            height: 370px;
            background-color: #17141d;
            border-radius: 10px;
            box-shadow: 0px 5px 15px #000;
            transition: 0.4s ease-out;
            position: relative;
            left: 0px;
        }

        .card:not(:first-child) {
            margin-left: -150px;
        }

        .card:hover {
            transform: translateY(-20px);
            transition: 0.4s ease-out;
        }

        .card:hover ~ .card {
            position: relative;
            left: 100px;
            transition: 0.4s ease-out;
        }
    }
    

</style>

<div class="container-fluid">
    <div class="container">
        <div class="row mb-5">
            {#each data as dt}
                <div class="card mb-5 p-0" style="width: 18rem;">
                    <img src={dt.pic} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title text-white">{dt.name}</h5>
                        <p class="card-text text-white mt-3">{dt.desc}</p>
                        <div class="card-footer mb-3 mx-3 flex1">
                            <a href={"#"} class="btn btn-sm btn-info" on:click={() => onViewProjBtnClick(dt)}>View Project &nbsp; <i class="bi bi-code-slash"></i></a>
                        </div>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

