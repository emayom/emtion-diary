import { useState, useEffect } from "react";
import { useDiaryStateContext } from "../../../context/DiaryProvider";

import Header from "@components/layout/Header";
import Button from "@components/Button";
import DiaryList from "@components/DiaryList";

import LeftChevronSVG from "@/assets/leftChevron.svg?react";
import RightChevronSVG from "@/assets/rightChevron.svg?react";

const Home = () => {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const diaryList = useDiaryStateContext();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const FIRST_DATE = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        1
      ).getTime();

      const LAST_DATE = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0,
        23,
        59,
        59
      ).getTime();

      setData(
        diaryList.filter((el) => FIRST_DATE <= el.date && el.date <= LAST_DATE)
      );
    }
  }, [diaryList, currentDate]);

  const handleViewDate = (value) => {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + value,
        currentDate.getDate()
      )
    );
  };

  return (
    <>
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
        {`${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`}
      </Header>
      {data ? <DiaryList data={data} /> : <div>로딩 중 ... </div>}
    </>
  );
};

export default Home;
