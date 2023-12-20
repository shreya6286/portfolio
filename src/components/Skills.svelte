<script>
    export let skill;
</script>

<style>
    .out{
        background-color: white;
    }

    @media only screen and (max-width: 576px) {
        img{
            width: 100%;
        }
    }

    @media (max-width: 992px) {
        img{
            width: 100%;
        }
    }
    @media (max-width: 1200px) {
        img{
            width: 100%;
        }
    }
    @media (min-width: 1200px) {
        img{
            width: 100%;
        }
    }

    @media (min-width: 1400px) {
        img{
            width: 100%;
        }
    }
</style>

<div class="container mt-3">
    <div class="row g-2">
        {#each skill as kill}
            <div class="col-md-3">
                <div class="p-3 bg-light border border-info rounded-2">
                    <div class="row">
                        <div class="col-md-1"></div>
                        <div class="col-2">
                            <img src={kill.icon} width="100%" alt="">
                        </div>
                        <div class="col-8">
                            {kill.name}
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>