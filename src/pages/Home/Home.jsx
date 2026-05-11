import Card from '../../components/Card/Card';
import styles from './Home.module.css';

const Home = () => {
  const cards = [
    { title: 'Pizza Margherita', description: 'Clássica com molho de tomate, queijo e manjericão.' },
    { title: 'Pizza Pepperoni', description: 'Deliciosa com pepperoni crocante e queijo derretido.' },
    { title: 'Pizza Quatro Queijos', description: 'Uma combinação perfeita de queijos variados.' }
  ];

  return (
    <div className={styles.container}>
      <h1>Bem-vindo à Pizzaria Delícia</h1>
      <p>As melhores pizzas da cidade, feitas com ingredientes frescos e amor.</p>
      <div className={styles.cards}>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default Home;