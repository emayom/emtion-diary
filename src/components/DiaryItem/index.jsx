import clsx from "clsx";
import * as styles from "./styles.css";
import { text } from "../../styles/style.css";

const DiaryItem = ({
  title = "Untitled",
  content,
  emotion,
  createdDate,
  id,
}) => {
  return (
    <li id={id} className={styles.diaryItem}>
      <div className={text.secondary}>
        <span>{emotion}</span>
        <h3 className={clsx(text.lg, text.primary)}>{title}</h3>
        <div className={text.sm}>{new Date(createdDate).toLocaleString()}</div>
        <div className={text.base}>{content}</div>
      </div>
    </li>
  );
};

export default DiaryItem;
