export async function iniciarBD(bd) {
  await bd.execAsync(`
    CREATE TABLE IF NOT EXISTS produtos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      quantidade INTEGER NOT NULL
    );
  `);
}