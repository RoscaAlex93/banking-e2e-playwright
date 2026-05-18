import mysql from 'mysql2/promise';

export async function createDBConnection() {
  return await mysql.createConnection({
    host: '127.0.0.1',
    port: 3307,          // 🔥 important
    user: 'firefly',     // 🔥 asta trebuie
    password: 'secret',  // 🔥 asta trebuie
    database: 'firefly',
  });
  
}