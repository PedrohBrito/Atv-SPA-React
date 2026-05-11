import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <div className={styles.container}>
      <h1>Sobre Nós</h1>
      <p>A Pizzaria Delícia é um lugar onde a tradição italiana encontra a inovação moderna. Desde 2010, servimos pizzas artesanais com ingredientes selecionados, preparados com paixão e dedicação para oferecer uma experiência culinária inesquecível.</p>
      <h2>Missão</h2>
      <p>Oferecer pizzas deliciosas e de alta qualidade para toda a família, utilizando ingredientes frescos e técnicas tradicionais para satisfazer nossos clientes.</p>
      <h2>Visão</h2>
      <p>Ser a pizzaria mais amada da cidade, reconhecida pela excelência em sabor e atendimento.</p>
      <h2>Valores</h2>
      <p>Qualidade, atendimento ao cliente, sustentabilidade e paixão pela gastronomia italiana.</p>
    </div>
  );
};

export default Sobre;