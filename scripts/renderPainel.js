firebase.auth().onAuthStateChanged(user => {
  if (user) {
    const email = user.email;

    // Simulação de perfis por e-mail (substitua por consulta real ao Firebase)
    let perfil = "";
    if (email === "ramonclfreitas@gmail.com") perfil = "Titular";
    if (email === "haillekalilcosta@gmail.com") perfil = "Secretaria";

    const container = document.getElementById("painel-container");

    if (perfil === "Titular") {
      container.innerHTML = `
        <h3>Escopo Congelado</h3>
        <p>Visualização dos campos protegidos por convênio e disputa.</p>
        <h3>Contestação Técnica</h3>
        <p>Área para registrar dúvidas ou ajustes técnicos.</p>
      `;
    }

    if (perfil === "Secretaria") {
      container.innerHTML = `
        <h3>Fluidez por Perfil</h3>
        <p>Tempo médio de preenchimento por competência.</p>
        <h3>Sugestões Assistidas</h3>
        <p>Campos com lógica de preenchimento inteligente.</p>
      `;
    }

    // Você pode expandir para Administrador e Auditor externo
  } else {
    window.location.href = "login.html";
  }
});
