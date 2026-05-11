import styles from './Extra.module.css';

const Extra = () => {
  const equipe = [
    { nome: 'João Silva', cargo: 'Chef' },
    { nome: 'Maria Oliveira', cargo: 'Gerente' },
    { nome: 'Pedro Santos', cargo: 'Atendente' }
  ];

  return (
    <div className={styles.container}>
      <h1>Nossa Equipe</h1>
      <div className={styles.equipe}>
        {equipe.map((membro, index) => (
          <div key={index} className={styles.membro}>
            <h3>{membro.nome}</h3>
            <p>{membro.cargo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Extra;