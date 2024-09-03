export const normalizarCidade = (cidade) => {
    return cidade
    .normalize('NFD')// Descompor caracteres acentuados em seus componentes
    .replace(/[\u0300-\u036f]/g, '')// Remover os acentos
    .toLowerCase()// Converter para minúsculas
    .replace(/[^\w\s]/gi, '')// Remover caracteres especiais
    .trim(); // Remover espaços em branco extras
}