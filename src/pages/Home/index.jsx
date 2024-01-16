import { useState, useEffect } from "react";
import { format, isSameDay, isSameMonth } from "date-fns";

import { useViewTypeContext } from "@context/ViewTypeProvider";
import { useDiaryStateContext } from "@context/DiaryProvider";

import Header from "@components/Header";
import Button from "@components/Button";
import Calendar from "@components/Calendar";
import DiaryList from "@components/DiaryList";

import LeftChevronSVG from "@assets/left-chevron.svg?react";
import RightChevronSVG from "@assets/right-chevron.svg?react";

const Home = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date());
  const [focusedDate, setFocusedDate] = useState(new Date());

  const diaryList = useDiaryStateContext();
  const { viewType } = useViewTypeContext();

  const handleViewDate = (to) => {
    setFocusedDate(
      new Date(
        focusedDate.getFullYear(),
        focusedDate.getMonth() + to,
        focusedDate.getDate()
      )
    );
  };

  useEffect(() => {
    if (viewType === "calendar") {
      setData(
        diaryList.filter(({ date }) =>
          isSameDay(
            format(focusedDate, "yyyy-MM-dd"),
            format(new Date(date), "yyyy-MM-dd")
          )
        )
      );
    }

    if (viewType === "list") {
      setData(
        diaryList.filter(({ date }) => isSameMonth(focusedDate, new Date(date)))
      );
    }
  }, [viewType, focusedDate, diaryList]);

  if (viewType === "calendar") {
    return (
      <>
        <Calendar
          data={data}
          value={date}
          focus={focusedDate}
          onChange={setDate}
          onFocusChange={setFocusedDate}
        ></Calendar>
        {data ? <DiaryList data={data} /> : <div>로딩 중 ... </div>}
      </>
    );
  }

  return (
    <>
      <Header
        leftChild={
          <Button variant="icon" onClick={() => handleViewDate(-1)}>
            <LeftChevronSVG width="15" height="15" />
          </Button>
        }
        rightChild={
          <Button onClick={() => handleViewDate(+1)}>
            <RightChevronSVG width="15" height="15" />
          </Button>
        }
      >
        {`${focusedDate.getFullYear()}년 ${focusedDate.getMonth() + 1}월`}
      </Header>
      {data ? <DiaryList data={data} markdate /> : <div>로딩 중 ... </div>}
    </>
  );
};

export default Home;
