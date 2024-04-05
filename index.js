function showLoginForm() {
    title.innerHTML = "Login Form";
    document.getElementById("signupForm").innerHTML = `
        <form id="signupForm">
        
            <input type="text" placeholder="Email" required  id="signInPass">
            <input type="password" placeholder="Password" required id="signInPass">
            <button type="submit" onclick="checkLogin()" class="main-btn">Login</button>
        </form>
    `;

    document.getElementById('firstPara').style.display = 'none';
    document.getElementById('secondPara').style.display = 'block';
}

function showSignupForm() {
    title.innerHTML = "SignUp Form";

     document.getElementById("signupForm").innerHTML = `
         <form id="loginForm">
              <input/ type="text" placeholder="Name" required>
              <input type="email" placeholder="Email" required>
              <input type="password" placeholder="Password" required>
              <input type="password" placeholder="Confirm Password" required>
              <button type="submit" class="main-btn">Signup</button>
          </form>
    `;

    document.getElementById('firstPara').style.display = 'block';
    document.getElementById('secondPara').style.display = 'none';
}