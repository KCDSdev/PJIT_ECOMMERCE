// Define a classe Veiculo
class Veiculo {
  constructor(modelo, fabricante, ano_fabricacao, ano_modelo, placa, valor, cor, potencia, tamanho_do_aro, estado_registro, quilometragem) {
      this.modelo = modelo; // Modelo do veículo
      this.fabricante = fabricante; // Fabricante do veículo
      this.ano_fabricacao = ano_fabricacao; // Ano de fabricação
      this.ano_modelo = ano_modelo; // Ano do modelo
      this.placa = placa; // Placa do veículo
      this.valor = valor; // Valor do veículo
      this.cor = cor; // Cor do veículo
      this.potencia = potencia; // Potência do veículo em cv (cavalos-vapor)
      this.tamanho_do_aro = tamanho_do_aro; // Tamanho do aro em polegadas
      this.estado_registro = estado_registro; // Estado de registro do veículo
      this.quilometragem = quilometragem; // Quilometragem rodada do veículo
  }

  // Método para converter o veículo em um objeto que pode ser armazenado no banco de dados
  toObject() {
      return {
          modelo: this.modelo,
          fabricante: this.fabricante,
          ano_fabricacao: this.ano_fabricacao,
          ano_modelo: this.ano_modelo,
          placa: this.placa,
          valor: this.valor,
          cor: this.cor,
          potencia: this.potencia,
          tamanho_do_aro: this.tamanho_do_aro,
          estado_registro: this.estado_registro,
          quilometragem: this.quilometragem,
      };
  }
}

// Exporta a classe Veiculo para ser utilizada em outros módulos
module.exports = Veiculo;
