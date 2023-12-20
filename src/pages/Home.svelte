<script>
    import Contact from "./Contact.svelte";

    let msg = "";
    let animData = ["I am a Student. ", "I am a Fullstack Developer. ", "I make 3D models. "];

    let tick = 1;
    let msgCount = 0;
    console.log(animData[msgCount].length)

    setInterval(()=>{
        msg += animData[msgCount][tick++]
        if (animData[msgCount].length < tick){
            tick = 1;
            msg = '';
            if (msgCount === animData.length -1){
                msgCount = 0
            }
            else {
                msgCount++
            } 
        }
    }, 100)
</script>

<style>

    .margin {
        margin: 0px;
        padding: 0px;
        overflow-x: hidden;
    }

    #background-video {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
    }

    @media only screen and (max-width: 576px) {
        .content {
            padding-top: 50px;
            padding-left: 50px;
        }
        .text {
            font-weight: 600;
            font-size: 40px;
        }
        .panel{
            margin-top: 50px;
        }
    }

    @media (max-width: 992px) {
        .content {
            padding-top: 50px;
            padding-left: 30px;
        }
        .text {
            font-weight: 600;
            font-size: 100px;
        }
        .panel{
            margin-top: 80px;
        }
    }
    @media (max-width: 1200px) {
        .content {
            padding-top: 50px;
            padding-left: 50px;
        }
        .text {
            font-weight: 600;
            font-size: 80px;
        }
        .panel{
            margin-top: 80px;
        }
    }
    @media (min-width: 1200px) {
        .content {
            padding-top: 50px;
            padding-left: 150px;
        }
        .text {
            font-weight: 600;
            font-size: 80px;
        }
        .panel{
            margin-top: 80px;
        }
    }

    @media (min-width: 1400px) {
        .content {
            padding-top: 100px;
            padding-left: 200px;
        }
        .text {
            font-weight: 600;
            font-size: 100px;
        }
        .panel{
            margin-top: 200px;
        }
    }

    i{
        font-size: 15px;
        padding-right: 15px;
    }

    .button1 {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 1.3px;
        font-weight: 700;
        border: none;
        border-radius: 1000px;
        transition: all 0.3s ease-in-out 0s;
        cursor: pointer;
        padding: 12px;
    }

    .button1::before {
        content: '';
        border-radius: 1000px;
        min-width: calc(100px + 75px);
        min-height: calc(30px + 12px);
        border: 6px solid #00CBF6;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all .3s ease-in-out 0s;
    }

    .button1:hover, .button1:focus {
        transform: translateY(-6px);
    }

    .button1:hover::before, .button1:focus::before {
        opacity: 1;
    }

    .social:hover {
        background-color: black;
        color: white;
    }
</style>

<div class="container-fluid margin">
    <div class="row">
        <div class="col-12">
            <video width="100%" autoplay muted loop id="background-video">
                <source src="bg.mp4" type="video/mp4"/>
            </video>
            <div class="row">
                <div class="content">
                    <h4 class="fw-light">Hello, World!</h4>
                    <h1 class="text">Shreya Bhavsar</h1>
                    <h1 class="fw-light">I{msg}</h1>
                    <div class="row mt-5">
                        <div class="col-12 strip">
                            <a href="mailto:shreyabhavsar93@gmail.com" class="social btn border border-dark btn-sm me-2"><i class="bi bi-envelope-at-fill"></i>Email</a>
                            <a href="https://github.com/shreya6286" class="social btn border border-dark btn-sm me-2"><i class="bi bi-github"></i>Github</a>
                            <a href="https://www.linkedin.com/in/shreya-bhavsar-4427b3147/" class="social btn border border-dark btn-sm"><i class="bi bi-linkedin"></i>LinkedIn</a>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12">
                            <a class="btn button1 btn-info" href="#b1">Send me a message</a>
                        </div>
                    </div>
                </div>
                <div data-bs-spy="scroll" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                    <div class="row panel" id="b1">
                        <div class="col-12">
                            <Contact/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- <div class="content">
        <h4 class="fw-light">Hello, World!</h4>
        <h1 class="text">Shreya Bhavsar</h1>
        <h1 class="fw-light">I{msg}</h1>
        <div class="row mt-5">
            <div class="col-12 strip">
                <a href="mailto:shreyabhavsar93@gmail.com" class="social btn border border-dark btn-sm me-2"><i class="bi bi-envelope-at-fill"></i>Email</a>
                <a href="https://github.com/shreya6286" class="social btn border border-dark btn-sm me-2"><i class="bi bi-github"></i>Github</a>
                <a href="https://www.linkedin.com/in/shreya-bhavsar-4427b3147/" class="social btn border border-dark btn-sm"><i class="bi bi-linkedin"></i>LinkedIn</a>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-12">
                <a class="btn button1 btn-info" href="#b1">Send me a message</a>
            </div>
        </div>
        <div data-bs-spy="scroll" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
            <div class="row panel float-end" id="b1">
                <div class="col-12">
                    <Contact/>
                </div>
            </div>
        </div>
    </div> -->
</div>


