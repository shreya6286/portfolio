<script>    
    import { onMount } from "svelte";
    import Cards from "../components/Cards.svelte";
    import { callServerApi } from "../services/DataService";
    
    let projectsList = [];

    onMount(()=>{
        getProjects();
    })

    async function getProjects() {
        const result = await callServerApi('getProjects',{},{});
        if (result.flag === "success"){
            projectsList = result.data;
        }
        console.log(result)
    }

</script>

<style>
    .margin {
        margin: 0px;
        padding: 0px;
        overflow-x: hidden;
    }

    @media only screen and (max-width: 576px) {
        .content{
            margin-top: 30px;
        }
        .text {
            font-weight: 600;
            font-size: 40px;
        }
        #line{
			height: 5px;
			background: #00CBF6;
			animation: lineH 2s 1s infinite linear;
		}
        @keyframes lineH{
			0%{
				width: 0%;
			}
			100%{
                width: 70%;opacity: 0;
            }
    }
    }

    @media (max-width: 1200px) {
        .content{
            margin-top: 30px;
            margin-left: 40px;
        }
        .tech{
            margin-left: 40px;
        }
        #line{
			height: 5px;
			background: #00CBF6;
			animation: lineH 2s 1s infinite linear;
		}
        @keyframes lineH{
			0%{
				width: 0%;
			}
			100%{
                width: 50%;opacity: 0;
            }
        }
        
    }
    @media (min-width: 1200px) {
        .content{
            margin-top: 50px;
            margin-left: 50px;
        }
        .tech{
            margin-left: 50px;
        }
        #line{
			height: 5px;
			background: #00CBF6;
			animation: lineH 2s 1s infinite linear;
		}
        @keyframes lineH{
			0%{
				width: 0%;
			}
			100%{
                width: 30%;opacity: 0;
            }
        }
        
    }

    @media (min-width: 1400px) {
        .content{
            margin-top: 50px;
            margin-left: 100px;
        }
        .text {
            font-weight: 600;
            font-size: 100px;
        }
        .tech{
            margin-left: 100px;
        }
        #line{
			height: 5px;
			background: #00CBF6;
			animation: lineH 2s 1s infinite linear;
		}
        @keyframes lineH{
			0%{
				width: 0%;
			}
			100%{
                width: 25%;opacity: 0;
            }
        }
    }
    
    .cat{
        border: 1px solid black;
        margin-right: 10px;
        border-radius: 20px;
    }
</style>

<div class="container-fluid">
    <div class="row">
        <div class="content">
            <h3>Featured Projects</h3>
            <div id="line"></div>
            <div class="row mt-4">
                <div class="col-12">
                    <h6 class="mb-3">Categories: &nbsp; &nbsp; &nbsp;</h6>
                    <a href="#p1" class="btn btn-sm cat bg-dark text-white px-3">Svelte</a>
                    <a href="#p2" class="btn btn-sm cat px-3">Javascript</a>
                    <a href="#p3" class="btn btn-sm cat px-3">Blender</a>
                </div>
            </div>
        </div>
        <div class="row mt-4 pt-3">
            {#each projectsList as pl}
                <div class="col-12">
                    <h4 id="p2" class="tech"> {pl.tech} Projects:</h4>
                    <div class="row">
                        <Cards data={pl.details}/>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

