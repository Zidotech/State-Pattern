document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".navigation").classList.toggle("change");
});

const PageState = function() {
     let currentState = new homeState(this);

     this.init = function() {
    this.change(new homeState);
  }

    this.change = function(state) {
    currentState = state;
  }
}

// Home State
const homeState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
     <div class="home">
        <h2>ZidoTech Nigeria</h2>
        <p>Website Development, Mobile App Solution, SEO & Digital Marketing Company. We Develop Business Website, ECommerce Website, and IOS App at an Affordable Price.</p>

        <button>Get Started</button>
        <button>Learn More</button>
    </div>
  `;
};


// About State
const aboutState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="about">
        <img src="./pexels-pixabay-356147.jpg" alt="">

        <div class="abt-txt">
            <h2>About Us</h2>

            <h4>Developer <span>& Designer</span></h4>

            <p>I am a Front-end Web Developer. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations. I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations. A responsive design makes your website accessible to all users, regardless of their device.</p>

            <button>Let's Talk</button>
        </div>
    </div>
`;
};


// Contact State
const contactState = function(page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <div class="box-container">

        <div class="box">
            <i class="fa fa-home"></i>
            <h4>Visit Us</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p class="p">2, Elizabeth, London, UK.</p>
        </div>

        <div class="box">
            <i class="fa fa-phone"></i>
            <h4>Call Us</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p class="p">+44 (0) 203 116 7711</p>
        </div>

        <div class="box">
            <i class="fa fa-envelope"></i>
            <h4>Contact Us</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <p class="p">adekunmbi18@gmail.com</p>
        </div>
    </div>
`;
};

const serviceState = function(page){
   document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
  <div class="service">

        <div class="box">
            <i class="fa fa-camera"></i>
            <h4>Photography</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nulla id labore sapiente.</p>

            <button>Read More --</button>
        </div>

        <div class="box">
            <i class="fa fa-video-camera"></i>
            <h4>Video Making</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nulla id labore sapiente.</p>

            <button>Read More --</button>
        </div>

        <div class="box">
            <i class="fa fa-television"></i>
            <h4>Web Design</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos nulla id labore sapiente.</p>

            <button>Read More --</button>
        </div>
    </div>
`;
}


// Instantiate pageState
const page = new PageState();

// Init the first state
page.init();



// UI Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact'),
      service = document.getElementById('service')

// Home
home.addEventListener('click', (e) => {
  page.change(new homeState);

  e.preventDefault();
});

// About
about.addEventListener('click', (e) => {
  page.change(new aboutState);

  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e) => {
  page.change(new contactState);

  e.preventDefault();
});
 service.addEventListener('click', (e) => {
  page.change(new serviceState);

  e.preventDefault();
 })