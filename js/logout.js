document.getElementById("btn-sair").addEventListener("click", function () {
    // Realizar logout com Firebase
    firebase.auth().signOut()
        .then(() => {
            // Redirecionar para a página principal após logout
            window.location.href = "../index.html"; // Substitua pelo caminho correto da sua tela principal
        })
        .catch((error) => {
            // Tratar erros
            console.error("Erro ao realizar logout:", error);
            alert("Erro ao realizar logout. Tente novamente.");
        });
});
