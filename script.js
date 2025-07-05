// Register
function registerUser() {
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(user => {
      alert("Registered Successfully!");
    })
    .catch(error => {
      alert("Error: " + error.message);
    });
}

// Login
function loginUser() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(user => {
      document.getElementById('auth-section').style.display = 'none';
      document.getElementById('user-section').style.display = 'block';
      document.getElementById('user-email').innerText = email;
    })
    .catch(error => {
      alert("Login Failed: " + error.message);
    });
}

// Logout
function logoutUser() {
  auth.signOut().then(() => {
    document.getElementById('auth-section').style.display = 'block';
    document.getElementById('user-section').style.display = 'none';
  });
}

// Save Document Info
function saveDocInfo() {
  const docTitle = document.getElementById('doc-title').value;
  const docType = document.getElementById('doc-type').value;
  const aadhaar = document.getElementById('aadhaar').value;
  const shareEmail = document.getElementById('share-email').value;
  const user = auth.currentUser;

  if (!user) {
    alert("Please log in first.");
    return;
  }

  db.collection("documents").add({
    title: docTitle,
    type: docType,
    aadhaar: aadhaar,
    owner: user.email,
    sharedWith: shareEmail,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    alert("Document Info Saved Successfully!");
  })
  .catch((error) => {
    alert("Error saving document: " + error.message);
  });
}
