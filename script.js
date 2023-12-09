'use strict'


const mainTag = document.querySelector('.hero-section')
const homeButton = document.querySelector('.homeBtn')
const aboutButton = document.querySelector('.aboutBtn')
const skillButton = document.querySelector('.skillBtn')
const projectsButton = document.querySelector('.projectsBtn')
const allBtns = document.querySelectorAll('.btn')



function applystyle(button) {
    allBtns.forEach(function(btn) {

        btn.classList.remove('border-b-2')
    })

    button.classList.add('border-b-2')
}

allBtns.forEach(function(button) {
    button.addEventListener('click', function() {
        applystyle(button)
    })
})







homeButton.addEventListener('click', function() {
    mainTag.innerHTML = `
 <section class="hero-section   ">
            <div>
                <div class="image-container bg-[url('../img/chuks1.webp')] w-[250px] h-[250px] bg-cover bg-no-repeat rounded-full"></div>

                <div class="">
                    <div class="summary-container  mt-10">
                        <p class="  text-center leading-7 font-medium">I am Chukwudi David Okoro <br> A web developer.</p>
                    </div>
                </div>

                <footer>
                    <div class="footer-container flex flex-row  justify-center  gap-3 mt-3">
                        <a href="http://">
                            <img src="./img/icons8-twitter.svg" alt="" class="bg-light-gray rounded-md">
                        </a>
                        <a href="http://">
                            <img src="./img/icons8-gmail.svg" alt="" class="w-[30px] h-[30px]  bg-light-gray rounded-md">
                        </a>
                        <a href="http://">
                            <img src="./img/icons8-github.svg" alt="" class="bg-light-gray  rounded-md">
                        </a>
                    </div>
                </footer>

            </div>

        </section>

    `


})



aboutButton.addEventListener('click', function() {
    mainTag.innerHTML = `
    <section class="hero-section flex px-4 max-sm:flex justify-between content-center ">
            <article class="">
                <p class="text-left  w-60 font-medium">
                    Hello! 👋 <br> I'm
                    <span> Chukwudi David Okoro</span> , a passionate developer with a blend of creativity and technical prowess. I am dedicated to transforming ideas into digital realities and eager to explore new technologies. I enjoys building robust
                    backend systems, designing intuitive front-end experiences, and tackling diverse challenges. I value collaborative development and open communication to a larger and impactful narrative. Let's connect and build something extraordinary
                    together! 🚀
                </p>
            </article>
    </section>
`

})


skillButton.addEventListener('click', function() {

    mainTag.innerHTML = `
     <section class=" flex  max-sm:flex justify-between content-center mt-20 ">

            <article>
                <p class="font-bold">Proficient with :</p>

                <ul class="list-disc font-medium">
                    <li class="flex  items-center gap-5 mt-4"><img src="./img/icons8-html.svg" alt="html 5 logo"> HTML 5</li>
                    <li class="flex  items-center gap-5 mt-3"><img src="./img/icons8-css.svg" alt="css 3 logo">CSS 3</li>
                    <li class="flex  items-center gap-5 mt-3"><img src="./img/icons8-tailwind-css.svg" alt="tailwind css logo">TAILWIND CSS</li>
                    <li class="flex  items-center gap-5 mt-3"><img src="./img/icons8-javascript.svg" alt="javascript logo">JAVASCRIPT</li>
                    <li class="flex  items-center gap-5 mt-3"><img src="./img/icons8-github (2).svg" alt="github logo">GIT and GITHUB</li>
                </ul>
            </article>



        </section>`




})


projectsButton.addEventListener('click', function() {
    mainTag.innerHTML = `

     <section class=" ml-3 w-[250px] content-center ">
            <div class=" w-fit">
                <img src="./img/BWJ challenge.webp" alt="bwj challenge home-page picture" loading="
                lazy" srcset="" class="w-[100%] rounded-md">
                <p class="font-normal text-light-sandcastle "> e-commerce website </p>
                <div class="mt-4 flex flex-col leading-8">

                    <a href="https://bwj.netlify.app/" class="rounded-lg bg-light-sandcastle font-normal text-black p-1 w-fit text-sm">See project &rightarrow;</a>
                    <a href="https://github.com/Donchuks02/BWJchallenge2/blob/master/README.md" class="rounded-lg bg-sandcastle text-black font-normal  p-1 w-fit mt-2 text-sm">Project Details &rightarrow;</a>

                </div>
            </div>


            <div class="mt-9">
                <img src="./img/interactive card project.webp" alt="interactive challenge home-page picture" loading="
                lazy" srcset="" class="w-[100%] rounded-md">
                <p class="font-normal text-light-sandcastle">interactive card website </p>
                <div class="mt-4 flex flex-col leading-8">
                    <a href="https://chuksinteractivecard.netlify.app/" class="rounded-lg text-black font-normal bg-light-sandcastle p-1 w-fit text-sm ">See project &rightarrow;</a>
                    <a href="https://github.com/Donchuks02/interactive-card-project/blob/master/README.md" class="rounded-lg text-black font-normal bg-sandcastle p-1 w-fit mt-2 text-sm ">Project Details &rightarrow;</a>
                </div>
            </div>


        </section>
    `




})