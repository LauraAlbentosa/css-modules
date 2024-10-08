import Card from "../card/Card";
import styles from '../container/container.module.css';
import styles from '../card/card.modules.css';


const Container = () =>
{
    return <div className={styles.container}>
        <Card
        title = 'SEDANS'
        text = 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.'
        button_text = 'Learn More'
        className = {styles.card_1}/>
        <Card
        title = 'SUVS'
        text = 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.'
        button_text = 'Learn More'
        />
        <Card
        title = 'LUXURY'
        text = 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.'
        button_text= 'Learn More'
        />
    </div>;
};

export default Container;