import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <button onClick={() => window.history.back()}>Voltar</button>
    </div>
  );
};

export default NotFound;