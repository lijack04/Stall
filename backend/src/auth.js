import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// ... (Firebase initialization as above) ...

// Sign-up function
const signUp = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("User signed up:", user);
      // Redirect to a protected page or display a success message
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-up error:", errorCode, errorMessage);
      // Display an error message to the user
    });
};

// Sign-in function
const signIn = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("User signed in:", user);
      // Redirect to a protected page or display a success message
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Sign-in error:", errorCode, errorMessage);
      // Display an error message to the user
    });
};


// Observe authentication state changes (e.g., for redirecting based on login status)
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/auth/web/manage-users
    const uid = user.uid;
    console.log("User is signed in:", uid);
    // Redirect to a protected page
  } else {
    // User is signed out
    console.log("User is signed out");
    // Redirect to the login page
  }
});



