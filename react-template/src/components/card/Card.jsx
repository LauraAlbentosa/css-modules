import Button from "../button/Button";
import Title from "../title/title";
import Text from "../text/Text";
import styles from '../card/card.module.css';

const Card = ({title, text, button_text}) =>
{
    return <div className={styles.card}>
        <Title text={title} />
        <Text text={text} />
        <Button text={button_text} />
    </div>;
};

export default Card;