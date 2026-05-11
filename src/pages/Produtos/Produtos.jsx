import styles from './Produtos.module.css';

const Produtos = () => {
  const produtos = [
    { title: 'Pizza Margherita', description: 'Clássica com molho de tomate, queijo mozzarella e manjericão fresco.' },
    { title: 'Pizza Pepperoni', description: 'Coberta com pepperoni crocante e queijo derretido.' },
    { title: 'Pizza Quatro Queijos', description: 'Mozzarella, gorgonzola, parmesão e provolone.' },
    { title: 'Pizza Calabresa', description: 'Calabresa defumada, cebola e azeitonas.' }
  ];

  return (
    <div className={styles.container}>
      <h1>Nossos Produtos</h1>
      <div className={styles.produtos}>
        {produtos.map((produto, index) => (
          <div key={index} className={styles.produto}>
            <h3>{produto.title}</h3>
            <p>{produto.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produtos;