const dniValidator = dni => {
  if (!dni) return false;

  if (typeof dni !== 'string') return false;

  if (dni.length !== 9) return false;

  const number = Number(dni.slice(0, 8));

  if (Number.isNaN(number)) return false;

  const rest = number % 23;
  const letter = dni.slice(8, 9).toUpperCase();
  const validLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

  if (validLetters[rest] === letter) return true;

  return false;
};

module.exports = dniValidator;
