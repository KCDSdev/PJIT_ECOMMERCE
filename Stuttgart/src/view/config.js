// Chama a função para buscar os veículos quando a página carregar
window.onload = buscarVeiculos;

async function buscarVeiculos() {
    try {
        const response = await fetch('http://localhost:3000/api/veiculos'); // Ajuste a URL conforme necessário
        if (!response.ok) throw new Error('Erro ao buscar veículos');
        const veiculos = await response.json();
        exibirVeiculos(veiculos);
    } catch (error) {
        console.error(error);
        document.getElementById('veiculos-container').innerText = 'Erro ao carregar veículos.';
    }
}



function exibirVeiculos(veiculos) {
    const container = document.getElementById('veiculos-container');
    container.innerHTML = ''; // Limpa o conteúdo anterior

    veiculos.forEach(veiculo => {
        console.log(veiculo.imagem)
        const div = document.createElement('div');
        div.className = 'veiculo';
        div.innerHTML = `
            <h2>${veiculo.modelo}</h2>
            <p><strong>Fabricante:</strong> ${veiculo.fabricante}</p>
            <p><strong>Ano de Fabricação:</strong> ${veiculo.ano_fabricacao}</p>
            <p><strong>Ano do Modelo:</strong> ${veiculo.ano_modelo}</p>
            <p><strong>Placa:</strong> ${veiculo.placa}</p>
            <p><strong>Valor:</strong> R$ ${parseFloat(veiculo.valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
            <p><strong>Cor:</strong> ${veiculo.cor}</p>
            <p><strong>Potência:</strong> ${veiculo.potencia} CV</p>
            <p><strong>Tamanho do Aro:</strong> ${veiculo.tamanho_do_aro} polegadas</p>
            <p><strong>Estado de Registro:</strong> ${veiculo.estado_registro}</p>
            <p><strong>Quilometragem:</strong> ${veiculo.quilometragem} km</p>
            <div class="veiculo-imagem" style="background-image: url('${veiculo.imagem}');"></div>
        `;
        container.appendChild(div);
    });
}

