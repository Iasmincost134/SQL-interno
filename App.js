import { SQLiteProvider } from 'expo-sqlite';
import { iniciarBD } from './database/iniciarBD';
import { Index } from './index';

export default function App() {
  return (
    <SQLiteProvider databaseName="meusDados.db" onInit={iniciarBD}>
      <Index />
    </SQLiteProvider>
  );
};