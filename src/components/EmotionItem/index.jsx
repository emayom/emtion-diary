import clsx from "clsx";
import * as styles from "./styles.css";

const EmotionItem = ({
  id,
  description,
  imgSrc,
  onClick,
  isSelected,
}) => {
  const className = clsx(styles.emotionItem, isSelected ? "selected" : "");

  return (
    <div 
      className={className} 
      name="emotion" 
      value={id}
      onClick={()=> onClick(id)} 
      >
      <img
        src={imgSrc}
        srcSet={imgSrc}
        alt={description}
        width="38"
        height="38"
      />
    </div>
  );
};

export default EmotionItem;
