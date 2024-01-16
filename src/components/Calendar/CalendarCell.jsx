import clsx from "clsx";
import { format } from "date-fns";

import * as styles from "./styles.css";
import { reset } from "@styles/style.css";

const CalendarCell = ({ date, isSelected, onClick }) => {
  return (
    <button
      className={clsx(reset, styles.calendarTile)}
      data-value={format(date, "yyyy-MM-dd")}
      onClick={() => onClick(date)}
    >
      <abbr
        className={clsx(styles.calendarDate, isSelected && "selected")}
        aria-label={date.toDateString()}
      >
        {date && date.getDate()}
      </abbr>
    </button>
  );
};

export default CalendarCell;
