<script>
    import { goto } from "$app/navigation";

    function goToHome(){
        goto("/")
    }
    function goToAbout(){
        goto("/about")
    }
    function goToProjects(){
        goto("/projects")
    }
    function goToResume(){
        goto("/resume")
    }
</script>

<style>
    .margin {
        margin: 0px;
        padding: 0px;
        overflow-x: hidden;
    }

@media (max-width: 576px) {
    .mtt{
            margin-top: 20px;
        }
    img {
            width: 100%;
        }
    .blinker::after {
        content: "";
        width: 13px;
        height: 15px;
        background: #00CBF6;
        display: inline-block;
        animation: cursor-blink 1.5s steps(2) infinite;
        margin-left: 10px;
        padding-top: 15px;
        margin-top: 20px;
    }
}

@media (max-width: 992px) {
    img {
            width: 80%;
        }
}

    @media only screen and (max-width: 1200px) {
        img {
            width: 30%;
        }
        .mtt{
            margin-top: 10px;
        }
        .rt1{
            margin-right: 20px;
        }
        .line{
        border-left: 1px solid black;
        }
    }

    @media only screen and (min-width: 1200px) {
        img {
            width: 30%;
        }
        /* .mtt{
            margin-top: 20px;
        } */
        .rt1{
            margin-right: 20px;
        }
        .line{
        border-left: 1px solid black;
        }
    }

    @media only screen and (min-width: 1400px) {
        img {
            width: 20%;
        }
        .rt1{
            margin-right: 20px;
        }
        .line{
        border-left: 1px solid black;
        }
    }

    @keyframes cursor-blink {
        0% {
            opacity: 0;
        }
    }

    .blinker::after {
        content: "";
        width: 10px;
        height: 15px;
        background: #00CBF6;
        display: inline-block;
        animation: cursor-blink 1.5s steps(2) infinite;
        margin-left: 5px;
    }
    
    i {
        font-size: 20px;
    }
    
</style>

<div class="margin">

    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid row">
            <div class="col-1"></div>
            <div class="col-2 text-center">
                <a class="navbar-brand" href="/">
                    <img src="icon.png" alt=""/>
                </a>
            </div>
            <div class="col-9 text-end">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"/>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                            <a class="nav-link active mtt" aria-current="page" href="/" on:click={goToHome}>
                                > $ cd &nbsp; /&nbsp;home&nbsp;/
                                <span class="blinker"></span>
                            </a>
                        </li>
                    </ul>
                    <div class="text-end">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                <a class="nav-link active rt1" aria-current="page" href="/about" on:click={goToAbout}>About</a>
                            </li>
                            <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                <a class="nav-link active rt1" aria-current="page" href="/projects" on:click={goToProjects}>Projects</a>
                            </li>
                            <li class="nav-item" data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                                <a class="nav-link active rt1" aria-current="page" href="#" on:click={goToResume}>Resume</a>
                            </li>
                            <!-- <li class="nav-item line">
                                <button class="btn rt"><i class="bi bi-circle-half"></i></button>
                            </li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</div>

<slot/>