const englishToUkrainianMap: Record<string, string> = {
  q: 'й',
  w: 'ц',
  e: 'у',
  r: 'к',
  t: 'е',
  y: 'н',
  u: 'г',
  i: 'ш',
  o: 'щ',
  p: 'з',
  '[': 'х',
  ']': 'ї',
  a: 'ф',
  s: 'і',
  d: 'в',
  f: 'а',
  g: 'п',
  h: 'р',
  j: 'о',
  k: 'л',
  l: 'д',
  ';': 'ж',
  "'": 'є',
  z: 'я',
  x: 'ч',
  c: 'с',
  v: 'м',
  b: 'и',
  n: 'т',
  m: 'ь',
  ',': 'б',
  '.': 'ю',
  '/': '.',
  '@': '"',
  '#': '№',
  '$': ';',
  '^': ':',
  '&': '?',
  '?': ',',
};

const ukrainianToEnglishMap = Object.fromEntries(
  Object.entries(englishToUkrainianMap).map(([english, ukrainian]) => [ukrainian, english]),
) as Record<string, string>;

function mapLayout(text: string, map: Record<string, string>) {
  return [...text]
    .map((character) => {
      const lowerCharacter = character.toLowerCase();
      const mappedCharacter = map[lowerCharacter];

      if (!mappedCharacter) {
        return character;
      }

      return character === lowerCharacter ? mappedCharacter : mappedCharacter.toUpperCase();
    })
    .join('');
}

export function convertQwertyToYcuken(text: string) {
  return mapLayout(text, englishToUkrainianMap);
}

export function convertYcukenToQwerty(text: string) {
  return mapLayout(text, ukrainianToEnglishMap);
}

export function getTextStats(text: string) {
  return {
    characters: text.length,
    words: text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length,
  };
}

export const keyboardRows = [
  [
    ['Q', 'Й'],
    ['W', 'Ц'],
    ['E', 'У'],
    ['R', 'К'],
    ['T', 'Е'],
    ['Y', 'Н'],
    ['U', 'Г'],
    ['I', 'Ш'],
    ['O', 'Щ'],
    ['P', 'З'],
    ['[', 'Х'],
    [']', 'Ї'],
  ],
  [
    ['A', 'Ф'],
    ['S', 'І'],
    ['D', 'В'],
    ['F', 'А'],
    ['G', 'П'],
    ['H', 'Р'],
    ['J', 'О'],
    ['K', 'Л'],
    ['L', 'Д'],
    [';', 'Ж'],
    ["'", 'Є'],
  ],
  [
    ['Z', 'Я'],
    ['X', 'Ч'],
    ['C', 'С'],
    ['V', 'М'],
    ['B', 'И'],
    ['N', 'Т'],
    ['M', 'Ь'],
    [',', 'Б'],
    ['.', 'Ю'],
    ['/', '.'],
  ],
];
