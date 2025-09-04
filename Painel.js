<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <title>Surgery Auditor — Painel</title>
</head>
<body>
  <h2>Bem-vindo ao Surgery Auditor</h2>
  <p id="user-info">Carregando dados do usuário...</p>
  <button onclick="logout()">Sair</button>

  <!-- Firebase SDK compatível -->
  <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-auth-compat.js"></script>

  <!-- Configuração do Firebase -->
  <script>
    const firebaseConfig = {
      apiKey: "AIzaSyC9U8jDIr_TAP0CLDAidKyThhOyf0DLR7E",
      authDomain: "surgery-auditor.firebaseapp.com",
      projectId: "surgery-auditor",
      storageBucket: "surgery-auditor.firebasestorage.app",
      messagingSenderId: "534090644906",
      appId: "1:534090644906:web:875670b0a7fbfa685a7fd3"
    };
    firebase.initializeApp(firebaseConfig);
  </script>

  <!-- Mostrar dados do usuário -->
  <script>
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        document.getElementById("user-info").innerText =
          `Usuário logado: ${user.email}`;
      } else {
        window.location.href = "login.html"; // redireciona se não estiver logado
      }
    });

    function logout() {
      firebase.auth().signOut().then(() => {
        window.location.href = "login.html";
      });
    }
  </script>
</body>
</html>
