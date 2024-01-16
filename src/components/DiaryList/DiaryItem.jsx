import { format } from "date-fns";
import { ko } from "date-fns/locale";

import { emojis } from "@/data.json";

import * as styles from "./styles.css";
import { text, flexContainer } from "@styles/style.css";

const DiaryItem = ({
  id,
  date,
  title = "Untitled",
  content,
  emotion,
  markdate,
  onClick,
}) => {
  const emoji = emojis[emotion - 1];

  return (
    <li id={id} className={styles.diaryItem} onClick={onClick}>
      {markdate && (
        <span className={text.secondary}>
          {format(new Date(date), "dd일 EEE요일", { locale: ko })}
        </span>
      )}
      <div className={flexContainer.row}>
        <div>
          <img
            src={emoji.imgSrc}
            srcSet={emoji.imgSrc}
            alt={emoji.description}
            width={48}
            height={48}
          />
        </div>
        <div>
          <h3>{title}</h3>
          <span>{content}</span>
        </div>
      </div>
    </li>
  );
};

export default DiaryItem;
