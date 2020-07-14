 /// authentication change listener 
 firebase.auth().onAuthStateChanged(user => {
     if (user) {
         console.log('User logged in : ', user);
         window.location.href = "speedreader.html";
     } else {
         console.log('User logged out ');

     }

 });





 const signupForm = document.querySelector('#signup-form');

 signupForm.addEventListener('submit', (e) => {
     e.preventDefault();

     /// const email = signupForm['signup-email'].value;
     /// const password = signupForm['signup-password'].value;

     const email = signupForm.email.value;
     const password = signupForm.password.value;

     firebase.auth().createUserWithEmailAndPassword(email, password)

         .then((user) => {
             signupForm.reset();
         })
         .catch((error) => {
             signupForm.querySelector('.error').textContent = error.message;
         });

     /// authentication change listener 
     firebase.auth().onAuthStateChanged(user => {
         if (user) {
             console.log('User logged in : ', user);
         } else {
             console.log('User logged out ');

         }

     });




 });

 //login
 const loginForm = document.querySelector('#login-form');

 loginForm.addEventListener('submit', (e) => {
     e.preventDefault();

     /// const email = signupForm['signup-email'].value;
     /// const password = signupForm['signup-password'].value;

     const email = loginForm.email.value;
     const password = loginForm.password.value;

     firebase.auth().signInWithEmailAndPassword(email, password)
         .then((user) => {
             loginForm.reset();
         })
         .catch((error) => {
             loginForm.querySelector('.error').textContent = error.message;
         });



 });

 /*const logout = document.querySelector('#logout');
 logout.addEventListener('click', (e) => {
     e.preventDefault();
     firebase.auth().signOut().then(() => {


     })

 })
 */
 /*
  document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.materialboxed');
      var instances = M.Materialbox.init(elems, options);
  });
  */