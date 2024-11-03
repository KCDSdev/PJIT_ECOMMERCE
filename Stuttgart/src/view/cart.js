/*function showPurchaseForm() {
    fetch('http://localhost:3000/api/veiculos')  // Modifique para o endpoint correto da sua API
        .then(response => response.json())
        .then(data => {
            const veiculoSelect = document.getElementById("veiculo");
            veiculoSelect.innerHTML = '<option value="">--Selecione um veículo--</option>'; // Limpa as opções atuais

            // Preenche as opções com os dados dos veículos
            data.forEach(veiculo => {
                const option = document.createElement("option");
                option.value = veiculo.id; // Use o ID ou outro identificador
                option.textContent = `${veiculo.modelo} - ${veiculo.placa}`; // Mostra o modelo e a placa
                veiculoSelect.appendChild(option);
            });
        })
        .catch(error => console.error('Erro ao buscar veículos:', error));
    
    document.getElementById("purchase-form").style.display = "block";
}

function hidePurchaseForm() {
    document.getElementById("purchase-form").style.display = "none";
}*/