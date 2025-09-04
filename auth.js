function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "painel.html";
    })
    .catch((error) => {
      alert("Erro ao fazer login: " + error.message);
    });
}

function logout() {
  firebase.auth().signOut().then(() => {
    window.location.href = "login.html";
  });
}
