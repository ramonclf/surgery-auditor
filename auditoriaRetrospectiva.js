function auditarProcedimentos() {
  const db = firebase.firestore();

  db.collection("procedimentos").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      const dados = doc.data();
      const id = doc.id;

      // Verificações básicas
      if (dados.porte < 1 || dados.porte > 7) {
        registrarAlerta(id, "Porte", "Valor fora da faixa permitida", dados.usuario_id);
      }

      if (dados.urgencia === "sim" && dados.valor < 1000) {
        registrarAlerta(id, "Urgência", "Valor incompatível com urgência declarada", dados.usuario_id);
      }

      if (dados.correcao_manual === "ignorada" && dados.valor > 5000) {
        registrarAlerta(id, "Correção Manual", "Correção ignorada em valor elevado", dados.usuario_id);
      }

      // Verificação contra escopo congelado
      db.collection("escopo_congelado").doc("Unimed Divinópolis").get().then((escopoDoc) => {
        if (escopoDoc.exists) {
          const camposCongelados = escopoDoc.data().campos;

          ["porte", "urgencia", "valor"].forEach((campo) => {
            if (!camposCongelados.includes(capitalize(campo))) {
              registrarAlerta(id, campo, "Campo fora do escopo congelado", dados.usuario_id);
            }
          });
        }
      });
    });
  });
}

function registrarAlerta(procedimento_id, campo, descricao, usuario_id) {
  const db = firebase.firestore();
  db.collection("alertas_tecnicos").add({
    procedimento_id,
    campo,
    descricao,
    usuario_id,
    timestamp: new Date()
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function auditarProcedimentos() {
  const db = firebase.firestore();

  db.collection("procedimentos").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      const dados = doc.data();
      const id = doc.id;

      // Verificações básicas
      if (dados.porte < 1 || dados.porte > 7) {
        registrarAlerta(id, "Porte", "Valor fora da faixa permitida", dados.usuario_id);
      }

      if (dados.urgencia === "sim" && dados.valor < 1000) {
        registrarAlerta(id, "Urgência", "Valor incompatível com urgência declarada", dados.usuario_id);
      }

      if (dados.correcao_manual === "ignorada" && dados.valor > 5000) {
        registrarAlerta(id, "Correção Manual", "Correção ignorada em valor elevado", dados.usuario_id);
      }

      // Verificação contra escopo congelado
      db.collection("escopo_congelado").doc("Unimed Divinópolis").get().then((escopoDoc) => {
        if (escopoDoc.exists) {
          const camposCongelados = escopoDoc.data().campos;

          ["porte", "urgencia", "valor"].forEach((campo) => {
            if (!camposCongelados.includes(capitalize(campo))) {
              registrarAlerta(id, campo, "Campo fora do escopo congelado", dados.usuario_id);
            }
          });
        }
      });
    });
  });
}

function registrarAlerta(procedimento_id, campo, descricao, usuario_id) {
  const db = firebase.firestore();
  db.collection("alertas_tecnicos").add({
    procedimento_id,
    campo,
    descricao,
    usuario_id,
    timestamp: new Date()
  });
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
