import useCalendar from "./useCalendar";

import Header from "@components/layout/Header";
import Button from "@components/Button";

import LeftChevronSVG from "@/assets/leftChevron.svg?react";
import RightChevronSVG from "@/assets/rightChevron.svg?react";

import * as styles from "./styles.css";
import CalendarGrid from "./CalendarGrid";

const Calendar = ({ value, focus, data, onChange, onFocusChange }) => {
  const calendar = useCalendar(value);

  const handleViewDate = (to) => {
    onChange(
      new Date(value.getFullYear(), value.getMonth() + to, value.getDate())
    );
  };

  return (
    <div className={styles.calendar}>
      <Header
        leftChild={
          <Button onClick={() => handleViewDate(-1)}>
            <LeftChevronSVG width="15" height="15" />
          </Button>
        }
        rightChild={
          <Button onClick={() => handleViewDate(+1)}>
            <RightChevronSVG width="15" height="15" />
          </Button>
        }
      >
        {`${value.getFullYear()}년 ${value.getMonth() + 1}월`}
      </Header>
      <CalendarGrid
        calendar={calendar}
        data={data}
        focus={focus}
        onFocusChange={onFocusChange}
      />
    </div>
  );
};

export default Calendar;
