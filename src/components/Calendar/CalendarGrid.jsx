import { Fragment } from "react";
import { isSameDay } from "date-fns";

import { WEEK_DAYS } from "./constants";
import CalendarCell from "./CalendarCell";

import clsx from "clsx";
import * as styles from "./styles.css";
import { text } from "@styles/style.css";

const CalendarGrid = ({ calendar, focus, onFocusChange }) => {
  return (
    <div>
      <div className={styles.calendarWeekdayGrid}>
        {WEEK_DAYS.map((day) => (
          <div
            key={day}
            title={day}
            aria-label={day}
            className={styles.calendarTile}
          >
            {day}
          </div>
        ))}
      </div>
      <div className={clsx(styles.calendarMonthGrid, text.base, text.primary)}>
        {calendar.map((week, i) => (
          <Fragment key={i}>
            {week.map((date, i) =>
              date ? (
                <CalendarCell
                  key={date}
                  date={date}
                  isSelected={isSameDay(focus, date)}
                  onClick={onFocusChange}
                />
              ) : (
                <div key={i} className={styles.calendarTile} />
              )
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
