const components = {};




components.footer = `


`

components.nav = `
<div class="nav">
  <ul>
    
    <li id="home" class="nav home">
      <a href="#">Home Page</a>
      </li>

      <li id="contact" class="nav home">
        <a href="#">Hot</a>
      </li>
      
      <li id="about" class="nav home">
        <a href="#">About us</a>
      </li>
      
      <li id="screen" class="nav home">
    <a href="#">Login</a>
    </li>

    </ul>
    
  </div>
  `

components.registerScreen = `
<div class="nav">
  <ul>
    
    <li id="home" class="nav home">
      <a href="#">Home Page</a>
      </li>

      <li id="contact" class="nav home">
        <a href="#">Hot</a>
      </li>
      
      <li id="about" class="nav home">
        <a href="#">About us</a>
      </li>
      
      <li id="screen" class="nav home">
    <a href="#">Login</a>
    </li>

    </ul>
    
  </div>

<div class="register-container">
    <div class="aside-right">
      <div class="header">
        <h3>Join Manga</h3>
      </div>

      <form id="register-form">
        <div class="input-name-wrapper">
          <div class="input-wrapper">
            <input type="text" name="firstName" placeholder="Enter Firstname">
            <div class="error" id="first-name-error"></div>
          </div>

          <div class="input-wrapper">
            <input type="text" name="lastName" placeholder="Enter Lastname">
            <div class="error" id="last-name-error"></div>
          </div>

        </div>

        <div class="input-wrapper">
          <input type="email" name="email" placeholder="Enter Email">
          <div class="error" id="email-error"></div>
        </div>

        <div class="input-wrapper">
          <input type="password" name="password" placeholder="Enter Password">
          <div class="error" id="password-error"></div>
        </div>

        <div class="input-wrapper">
          <input type="password" name="confirmPassword" placeholder="Enter Confirm Password">
          <div class="error" id="confirm-password-error"></div>
        </div>

        <div class="form-action">
          <span class="cursor" id="redirect-to-login">
            Already have an account? Login
          </span>

          <button class="btn" type="submit">
            Register
          </button>
        </div>

      </form>
    </div>
  </div>


`;


components.loginScreen = `
<div class="nav">
  <ul>
    
    <li id="home" class="nav home">
      <a href="#">Home Page</a>
      </li>

      <li id="contact" class="nav home">
        <a href="#">Hot</a>
      </li>
      
      <li id="about" class="nav home">
        <a href="#">About us</a>
      </li>
      
      <li id="screen" class="nav home">
    <a href="#">Login</a>
    </li>

    </ul>
    
  </div>

<div class="login-container">
    <div class="aside-right">
      <div class="header">
        <h3>Join Manga</h3>
      </div>

      <form id="login-form">
        <div class="input-wrapper">
          <input type="email" name="email" placeholder="Enter Email">
          <div class="error" id="email-error"></div>
        </div>

        <div class="input-wrapper">
          <input type="password" name="password" placeholder="Enter Password">
          <div class="error" id="password-error"></div>
        </div>

        <div class="form-action">
          <span class="cursor" id="redirect-to-register">
            Don't have an account? Register
          </span>

          <button class="btn" type="submit">
            Login
          </button>
        </div>

      </form>
    </div>
  </div>

  <div class="footer-basic">
  <footer>
      <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
      <ul class="list-inline">
          <li class="list-inline-item"><a href="#">Home</a></li>
          <li class="list-inline-item"><a href="#">Services</a></li>
          <li class="list-inline-item"><a href="#">About</a></li>
          <li class="list-inline-item"><a href="#">Terms</a></li>
          <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
      </ul>
      
  </footer>
  </div>
`;


components.homeScreen = `
<div class="nav">
  <ul>
    
    <li id="home" class="nav home">
      <a href="#">Home Page</a>
      </li>

      <li id="contact" class="nav home">
        <a href="#">Hot</a>
      </li>
      
      <li id="about" class="nav home">
        <a href="#">About us</a>
      </li>
      
      <li id="screen" class="nav home">
    <a href="#">Login</a>
    </li>

    </ul>
    
  </div>



`;


components.contactScreen = `
<div class="nav">
  <ul>
    
    <li id="home" class="nav home">
      <a  href="#">Home Page</a>
      </li>

      <li id="contact" class="nav home">
        <a href="#">Hot</a>
      </li>
      
      <li id="about" class="nav home">
        <a href="#">About us</a>
      </li>
      
      <li id="screen" class="nav home">
    <a href="#">Login</a>
    </li>

    </ul>
  </div>



`

components.aboutScreen =`

<div class="nav">
  <ul>
    
    <li id="home" class="nav home">
      <a  href="#">Home Page</a>
      </li>

      <li id="contact" class="nav home">
        <a href="#">Hot</a>
      </li>
      
      <li id="about" class="nav home">
        <a href="#">About us</a>
      </li>
      
      <li id="screen" class="nav home">
    <a href="#">Login</a>
    </li>

    </ul>

`



