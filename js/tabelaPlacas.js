const firebaseConfig = {
    apiKey: "AIzaSyCB_7o5RPNTzVVBi-EV3miuDAPy_Tssk4Q",
    authDomain: "estacionamento-1ce5f.firebaseapp.com",
    projectId: "estacionamento-1ce5f",
    storageBucket: "estacionamento-1ce5f.firebasestorage.app",
    messagingSenderId: "591387024509",
    appId: "1:591387024509:web:76030e9341aa46698f2514",
    measurementId: "G-WWBBEX5C0X"
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const formulario = db.collection('Estacionamento');

function capitalizeFirstLetterName() {
    var input = document.getElementById('swal-input-nome');
    var words = input.value.split(' '); 
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase(); 
    }
    input.value = words.join(' '); 
}
function capitalizeFirstLetterSetor() {
    var input = document.getElementById('swal-input-setor');
    var words = input.value.split(' '); 
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase(); 
    }
    input.value = words.join(' '); 
}

function capitalizeFirstLetterCarro() {
    var input = document.getElementById('swal-input-carro');
    var words = input.value.split(' '); 
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase(); 
    }
    input.value = words.join(' '); 
}

function capitalizeFirstLetterCor() {
    var input = document.getElementById('swal-input-cor');
    var words = input.value.split(' '); 
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase(); 
    }
    input.value = words.join(' '); 
}

function validateRamal() {
    var ramalInput = document.getElementById('swal-input-ramal');
    var value = ramalInput.value;
    ramalInput.value = value.replace(/\D/g, '');
}

function transformToUpperCasePlaca() {
    var input = document.getElementById('swal-input-placa');
    input.value = input.value.toUpperCase();
}


// Selecionar o corpo da tabela
const tableBody = document.getElementById('table-Car');

// Carrega os dados ao abrir a página
window.onload = loadTableData;

// Função para carregar os dados
function loadTableData() {
    tableBody.innerHTML = ''; 

    formulario.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${data.nome || ''}</td>
                    <td>${data.setor || ''}</td>
                    <td>${data.ramal || ''}</td>
                    <td>${data.carro || ''}</td>
                    <td>${data.cor || ''}</td>
                    <td>${data.placa || ''}</td>
                `;

                tableBody.appendChild(row);
            });
        })
        .catch((error) => {
            console.error("Erro ao carregar os dados: ", error);
            alert('Erro ao carregar os dados, confira sua conexão ou permissões.');
        });
}

// Função para abrir uma janela de cadastro com SweetAlert2
document.getElementById('btn-novo-cadastro').addEventListener('click', () => {
    Swal.fire({
        title: 'Cadastrar Novo Carro',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Cadastrar',
        cancelButtonText: 'Cancelar',
        width: 400,
        customClass: {
            title: 'custom-swal-title-cadastro',
            confirmButton: 'custom-confirm-btn-cadastro', 
            cancelButton: 'custom-cancel-btn-cadastro' 
        },
        html: `
            <div style="font-size: 14px; display: flex; flex-direction: column; gap: 10px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                    <label for="swal-input-nome" style="margin-bottom: 0; width: 20%; text-align: right;  color: black; font-size: 12px; font-weight: bold;">Nome:</label>
                    <input id="swal-input-nome" class="swal2-input" placeholder="Digite o nome" style="width: 80%; margin: 0; height: 25px; margin-right: 10px" oninput="capitalizeFirstLetterName()">
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <label for="swal-input-setor" style="margin-bottom: 0; width: 20%; text-align: right;  color: black; font-size: 12px; font-weight: bold;">Setor:</label>
                    <input id="swal-input-setor" class="swal2-input" placeholder="Digite o setor" style="width: 80%;  margin: 0; height: 25px; margin-right: 10px" oninput="capitalizeFirstLetterSetor()">
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <label for="swal-input-ramal" style="margin-bottom: 0; width: 20%; text-align: right;  color: black; font-size: 12px; font-weight: bold;">Ramal:</label>
                    <input id="swal-input-ramal" class="swal2-input" placeholder="Digite o ramal" type="tel" inputmode="numeric" style="width: 80%;  margin: 0; height: 25px; margin-right: 10px" oninput="validateRamal()">
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <label for="swal-input-carro" style="margin-bottom: 0; width: 20%; text-align: right;  color: black; font-size: 12px; font-weight: bold;">Carro:</label>
                    <input id="swal-input-carro" class="swal2-input" placeholder="Digite o carro" style="width: 80%;  margin: 0; height: 25px; margin-right: 10px" oninput="capitalizeFirstLetterCarro()">
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <label for="swal-input-cor" style="margin-bottom: 0; width: 20%; text-align: right;  color: black; font-size: 12px; font-weight: bold;">Cor:</label>
                    <input id="swal-input-cor" class="swal2-input" placeholder="Digite a cor" style="width: 80%;  margin: 0; height: 25px; margin-right: 10px" oninput="capitalizeFirstLetterCor()">
                </div>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <label for="swal-input-placa" style="margin-bottom: 0; width: 20%; text-align: right;  color: black; font-size: 12px; font-weight: bold;">Placa:</label>
                    <input id="swal-input-placa" class="swal2-input" placeholder="Digite a placa" style="width: 80%;  margin: 0; height: 25px; margin-right: 10px" oninput="transformToUpperCasePlaca()">
                </div>
            </div>
        `,

        


        didOpen: () => {
            document.querySelector('.swal2-popup').style.height = '400px'; // Altere a altura aqui
            document.querySelector('.swal2-html-container').style.padding = '10px'; 
            const placaInput = document.getElementById('swal-input-placa');
            
            // Impede mais de 7 caracteres
            placaInput.addEventListener('input', () => {
                if (placaInput.value.length > 7) {
                    placaInput.value = placaInput.value.slice(0, 7);
                }
            });
        },
        preConfirm: () => {
            const nome = document.getElementById('swal-input-nome').value.trim();
            const setor = document.getElementById('swal-input-setor').value.trim();
            const ramal = document.getElementById('swal-input-ramal').value.trim();
            const carro = document.getElementById('swal-input-carro').value.trim();
            const cor = document.getElementById('swal-input-cor').value.trim();
            const placa = document.getElementById('swal-input-placa').value.trim();

            if (!nome || !setor || !ramal || !carro || !cor || !placa) {
                Swal.showValidationMessage('Por favor, preencha todos os campos!');
                return false;
            }

            return { nome, setor, ramal, carro, cor, placa };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const { nome, setor, ramal, carro, cor, placa } = result.value;

            // Verifica se a placa já existe antes de cadastrar
            formulario.where("placa", "==", placa).get()
                .then((querySnapshot) => {
                    if (!querySnapshot.empty) {
                        Swal.fire({
                            title: 'Erro!',
                            text: 'Essa placa já está cadastrada.',
                            icon: 'error',
                            confirmButtonText: 'Entendido'
                        });
                        return;
                    }

                    // Adiciona o novo cadastro
                    formulario.add({
                        nome,
                        setor,
                        ramal,
                        carro,
                        cor,
                        placa
                    })
                        .then(() => {
                            Swal.fire({
                                title: 'Sucesso!',
                                text: 'Cadastro realizado com sucesso.',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            });
                            loadTableData(); // Atualiza a tabela após o cadastro
                        })
                        .catch((error) => {
                            Swal.fire({
                                title: 'Erro!',
                                text: `Erro ao cadastrar: ${error.message}`,
                                icon: 'error',
                                confirmButtonText: 'Entendido'
                            });
                        });
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'Erro!',
                        text: `Erro ao verificar a placa: ${error.message}`,
                        icon: 'error',
                        confirmButtonText: 'Entendido'
                    });
                });
        }
    });
});

// Botão "ALTERAR CADASTRO" para alterar dados de um registro
document.getElementById('btn-alterar-cadastro').addEventListener('click', () => {
    Swal.fire({
        title: 'Digite a placa que deseja alterar:',
        input: 'text',
        width: 350,
        inputPlaceholder: 'Ex: ABC-1234',
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        cancelButtonText: 'Cancelar',

        customClass: {
            title: 'custom-swal-title-alterar',
            confirmButton: 'custom-confirm-btn-alterar', // Personaliza o botão de confirmação
            cancelButton: 'custom-cancel-btn-alterar',  // Aplica a classe ao título
        },
        
        inputValidator: (value) => {
            if (!value) {
                return 'Por favor, insira uma placa válida!';
            }
        }

    }).then((result) => {
        if (result.isConfirmed) {
            // 
            let placa = result.value.trim().toUpperCase();

            // Busca no Firestore pela placa
            formulario.where("placa", "==", placa).get()
                .then((querySnapshot) => {
                    if (querySnapshot.empty) {
                        Swal.fire({
                            title: 'Não encontrado!',
                            text: `Nenhum cadastro foi encontrado com a placa "${placa}".`,
                            icon: 'warning',
                            confirmButtonText: 'Entendido'
                        });
                        return;
                    }

                    // Captura os dados existentes
                    let docId, data;
                    querySnapshot.forEach((doc) => {
                        docId = doc.id; // ID do documento
                        data = doc.data(); // Dados do documento
                    });

                    // Exibe os dados em um formulário editável
                    Swal.fire({
                        title: 'Alterar Cadastro',
                        html: `
                        <div style="font-size: 14px; display: flex; flex-direction: column; gap: 10px;">
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <label for="swal-input-nome"  style="margin-bottom: 0; width: 20%; text-align: right;  color: black; font-size: 12px; font-weight: bold;">Nome:</label>
                                <input id="swal-input-nome" class="swal2-input" style="width: 80%; margin: 0; height: 25px; margin-right: 10px;" oninput="capitalizeFirstLetterName()" value="${data.nome || ''}">
                            </div>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <label for="swal-input-setor" style="margin-bottom: 0; width: 20%; text-align: right;  color: black; font-size: 12px; font-weight: bold;">Setor:</label>
                                <input id="swal-input-setor" class="swal2-input" style="width: 80%; margin: 0; height: 25px; margin-right: 10px;" oninput="capitalizeFirstLetterSetor()" value="${data.setor || ''}">
                            </div>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <label for="swal-input-ramal" style="margin-bottom: 0; width: 20%; text-align: right;  color: black; font-size: 12px; font-weight: bold;">Ramal:</label>
                                <input id="swal-input-ramal" class="swal2-input" style="width: 80%; margin: 0; height: 25px; margin-right: 10px;" oninput="validateRamal()" value="${data.ramal || ''}">
                            </div>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <label for="swal-input-carro" style="margin-bottom: 0; width: 20%; text-align: right;  color: black; font-size: 12px; font-weight: bold;">Carro:</label>
                                <input id="swal-input-carro" class="swal2-input" style="width: 80%; margin: 0; height: 25px; margin-right: 10px;" oninput="capitalizeFirstLetterCarro()" value="${data.carro || ''}">
                            </div>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <label for="swal-input-cor" style="margin-bottom: 0; width: 20%; text-align: right;  color: black; font-size: 12px; font-weight: bold;">Cor:</label>
                                <input id="swal-input-cor" class="swal2-input" style="width: 80%; margin: 0; height: 25px; margin-right: 10px;" oninput="capitalizeFirstLetterCor()" value="${data.cor || ''}">
                            </div>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <label for="swal-input-placa" style="margin-bottom: 0; width: 20%; text-align: right; color: black; font-size: 12px; font-weight: bold;">Placa:</label>
                                <input id="swal-input-placa" class="swal2-input" style="width: 80%; margin: 0; height: 25px; margin-right: 10px; color: red;" oninput="transformToUpperCasePlaca()" readonly value="${data.placa || ''}">
                            </div>
                        </div>
                        `,
                        margin: 0,
                        focusConfirm: false,
                        showCancelButton: true,
                        confirmButtonText: 'Salvar Alterações',
                        cancelButtonText: 'Cancelar',

                        customClass: {
                            title: 'custom-swal-title-alterar',
                        },

                        didOpen: () => {
                            document.querySelector('.swal2-popup').style.height = '400px'; // Altere a altura aqui
                            document.querySelector('.swal2-html-container').style.padding = '10px'; 
                        },



                        preConfirm: () => {
                            const nome = document.getElementById('swal-input-nome').value.trim();
                            const setor = document.getElementById('swal-input-setor').value.trim();
                            const ramal = document.getElementById('swal-input-ramal').value.trim();
                            const carro = document.getElementById('swal-input-carro').value.trim();
                            const cor = document.getElementById('swal-input-cor').value.trim();

                            if (!nome || !setor || !ramal || !carro || !cor) {
                                Swal.showValidationMessage('Por favor, preencha todos os campos!');
                                return false;
                            }

                            return { nome, setor, ramal, carro, cor };
                        }
                    }).then((editResult) => {
                        if (editResult.isConfirmed) {
                            const { nome, setor, ramal, carro, cor } = editResult.value;

                            // Atualiza os dados no Firestore
                            formulario.doc(docId).update({
                                nome,
                                setor,
                                ramal,
                                carro,
                                cor
                            })
                                .then(() => {
                                    Swal.fire({
                                        title: 'Sucesso!',
                                        text: 'Os dados foram atualizados com sucesso.',
                                        icon: 'success',
                                        confirmButtonText: 'OK'
                                    });
                                    loadTableData(); // Atualiza a tabela após a alteração
                                })
                                .catch((error) => {
                                    Swal.fire({
                                        title: 'Erro!',
                                        text: `Erro ao atualizar os dados: ${error.message}`,
                                        icon: 'error',
                                        confirmButtonText: 'Entendido'
                                    });
                                });
                        }
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'Erro!',
                        text: `Erro ao buscar a placa: ${error.message}`,
                        icon: 'error',
                        confirmButtonText: 'Entendido'
                    });
                });
        }
    });
});



// Botão "PESQUISAR PLACA" para pesquisar uma placa específica
document.getElementById('btn-pesquisar').addEventListener('click', () => {
    Swal.fire({
        title: 'Digite a placa:',
        input: 'text',
        inputPlaceholder: 'Ex: ABC-1234',
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        cancelButtonText: 'Cancelar',
        width: 350,

        customClass: {
            title: 'custom-swal-title-pesquisar',
            confirmButton: 'custom-confirm-btn-pesquisar', // Personaliza o botão de confirmação
            cancelButton: 'custom-cancel-btn-pesquisar'  // Aplica a classe ao título
        },
        

        inputValidator: (value) => {
            if (!value) {
                return 'Por favor, insira uma placa válida!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // const placa = result.value.trim();
            let placa = result.value.trim().toUpperCase();

            formulario.where("placa", "==", placa).get()
                .then((querySnapshot) => {
                    if (querySnapshot.empty) {
                        Swal.fire({
                            title: 'Não encontrado!',
                            text: `Nenhum cadastro foi encontrado com a placa "${placa}".`,
                            icon: 'warning',
                            confirmButtonText: 'Entendido'
                        });
                        return;
                    }

                    // Mostra os resultados em uma tabela SweetAlert
                    let tableHtml = `
                        <table border="1" style="width:100%; text-align:left; border-collapse: collapse; padding: 0 0 0 0; ">
                            <thead>
                                <tr>
                                    <th class="custom-table-infor-pesquisa">Nome</th>
                                    <th class="custom-table-infor-pesquisa">Setor</th>
                                    <th class="custom-table-infor-pesquisa">Ramal</th>
                                    <th class="custom-table-infor-pesquisa">Carro</th>
                                    <th class="custom-table-infor-pesquisa">Cor</th>
                                    <th class="custom-table-infor-pesquisa">Placa</th>
                                </tr>
                            </thead>
                            <tbody>
                    `;

                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        tableHtml += `
                            <tr>
                                <td class="custom-table-resul-pesquisa">${data.nome || ''}</td>
                                <td class="custom-table-resul-pesquisa">${data.setor || ''}</td>
                                <td class="custom-table-resul-pesquisa">${data.ramal || ''}</td>
                                <td class="custom-table-resul-pesquisa">${data.carro || ''}</td>
                                <td class="custom-table-resul-pesquisa">${data.cor || ''}</td>
                                <td class="custom-table-resul-pesquisa">${data.placa || ''}</td>
                            </tr>
                        `;
                    });

                    tableHtml += '</tbody></table>';

                    Swal.fire({
                        title: 'Resultado da Pesquisa',
                        html: tableHtml,
                        confirmButtonText: 'Fechar',
                        width: 600,
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'Erro!',
                        text: `Erro ao buscar o cadastro: ${error.message}`,
                        icon: 'error',
                        confirmButtonText: 'Entendido'
                    });
                });
        }
    });
});


// Botão "EXCLUIR CADASTRO" para excluir um registro específico

document.getElementById('btn-excluir').addEventListener('click', () => {
    Swal.fire({
        title: 'Digite a placa que deseja excluir:',
        input: 'text',
        inputPlaceholder: 'Ex: ABC-1234',
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        cancelButtonText: 'Cancelar',
        width: 350,

        customClass: {
            title: 'custom-swal-title-excluir',
            confirmButton: 'custom-confirm-btn-excluir', // Personaliza o botão de confirmação
            cancelButton: 'custom-cancel-btn-excluir'  // Aplica a classe ao título
        },

        inputValidator: (value) => {
            if (!value) {
                return 'Por favor, insira uma placa válida!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            // const placa = result.value.trim();
            let placa = result.value.trim().toUpperCase();

            formulario.where("placa", "==", placa).get()
                .then((querySnapshot) => {
                    if (querySnapshot.empty) {
                        Swal.fire({
                            title: 'Erro!',
                            text: `Nenhum cadastro encontrado com a placa "${placa}".`,
                            icon: 'error',
                            confirmButtonText: 'Entendido'
                        });
                        return;
                    }

                    // Confirmação final antes da exclusão
                    Swal.fire({
                        title: `Deseja excluir o cadastro com a placa "${placa}"?`,
                        text: "Essa ação não poderá ser desfeita!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Sim, excluir',
                        cancelButtonText: 'Não, cancelar',

                        customClass: {
                            title: 'custom-swal-title-excluir-ok',
                            confirmButtonText: 'custom-swal-title-excluir-bnt'
                        },

                    }).then((confirmResult) => {
                        if (confirmResult.isConfirmed) {
                            querySnapshot.forEach((doc) => {
                                doc.ref.delete()
                                    .then(() => {
                                        Swal.fire({
                                            title: 'Excluído!',
                                            text: `O cadastro com a placa "${placa}" foi excluído com sucesso.`,
                                            icon: 'success',
                                            confirmButtonText: 'OK'
                                        });
                                        loadTableData(); // Atualiza a tabela após exclusão
                                    })
                                    .catch((error) => {
                                        Swal.fire({
                                            title: 'Erro!',
                                            text: `Erro ao excluir o cadastro: ${error.message}`,
                                            icon: 'error',
                                            confirmButtonText: 'Entendido'
                                        });
                                    });
                            });
                        } else {
                            Swal.fire({
                                title: 'Cancelado',
                                text: 'A exclusão foi cancelada.',
                                icon: 'info',
                                confirmButtonText: 'Entendido'
                            });
                        }
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'Erro!',
                        text: `Erro ao buscar o cadastro: ${error.message}`,
                        icon: 'error',
                        confirmButtonText: 'Entendido'
                    });
                });
        }
    });
});




// ---------------------------------





document.getElementById('btn-pesquisarCarro').addEventListener('click', () => {
    Swal.fire({
        title: 'Digite o modelo do carro:',
        input: 'text',
        inputPlaceholder: 'Ex: Fusion',
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        cancelButtonText: 'Cancelar',
        width: 350,

        customClass: {
            title: 'custom-swal-title-pesquisar',
            confirmButton: 'custom-confirm-btn-pesquisar', 
            cancelButton: 'custom-cancel-btn-pesquisar'  
        },
        

        inputValidator: (value) => {
            if (!value) {
                return 'Por favor, insira uma placa válida!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            //funcition para pesquisar a placa com a letra maiuscula na primeira letra de cada nome
            const capitalize = (str) => {
                return str
                    .toLowerCase()
                    .split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
            };
            const carro = capitalize(result.value.trim());

            formulario.where("carro", "==", carro).get()
                .then((querySnapshot) => {
                    if (querySnapshot.empty) {
                        Swal.fire({
                            title: 'Não encontrado!',
                            text: `Nenhum cadastro foi encontrado com a placa "${carro}".`,
                            icon: 'warning',
                            confirmButtonText: 'Entendido'
                        });
                        return;
                    }

                    // Mostra os resultados em uma tabela SweetAlert
                    let tableHtml = `
                        <table border="1" style="width:100%; text-align:left; border-collapse: collapse; padding: 1em .1em .3em; ">
                            <thead>
                                <tr>
                                    <th class="custom-table-infor-pesquisa">Nome</th>
                                    <th class="custom-table-infor-pesquisa">Setor</th>
                                    <th class="custom-table-infor-pesquisa">Ramal</th>
                                    <th class="custom-table-infor-pesquisa">Carro</th>
                                    <th class="custom-table-infor-pesquisa">Cor</th>
                                    <th class="custom-table-infor-pesquisa">Placa</th>
                                </tr>
                            </thead>
                            <tbody>
                    `;

                    querySnapshot.forEach((doc) => {
                        const data = doc.data();
                        tableHtml += `
                            <tr>
                                <td class="custom-table-resul-pesquisa">${data.nome || ''}</td>
                                <td class="custom-table-resul-pesquisa">${data.setor || ''}</td>
                                <td class="custom-table-resul-pesquisa">${data.ramal || ''}</td>
                                <td class="custom-table-resul-pesquisa">${data.carro || ''}</td>
                                <td class="custom-table-resul-pesquisa">${data.cor || ''}</td>
                                <td class="custom-table-resul-pesquisa">${data.placa || ''}</td>
                            </tr>
                        `;
                    });

                    tableHtml += '</tbody></table>';

                    Swal.fire({
                        title: 'Resultado da Pesquisa',
                        html: tableHtml,
                        confirmButtonText: 'Fechar',
                        width: 600,
                    });
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'Erro!',
                        text: `Erro ao buscar o cadastro: ${error.message}`,
                        icon: 'error',
                        confirmButtonText: 'Entendido'
                    });
                });
        }
    });
});