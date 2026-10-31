import type { CharacterTableData } from '../data/characters.ts';

export function createRows(data: CharacterTableData) {
  const rowKeys = new Set(data.rows.flat().map((row) => row.key));
  const colKeys = new Set(data.cols.map((col) => col.key));
  for (const character of data.characters) {
    if (!rowKeys.has(character.element) || !colKeys.has(character.specialty)) {
      throw new Error(`角色「${character.name}」的属性或特性未定义`);
    }
  }
  return data.rows.map((row) => ({
    elements: row,
    cells: data.cols.map((col) =>
      data.characters.filter(
        (character) =>
          new Set(row.map((element) => element.key)).has(character.element) &&
          character.specialty === col.key,
      ),
    ),
  }));
}

export function imageUrl(path: string, base: string) {
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
