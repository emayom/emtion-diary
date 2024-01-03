import { useState, useEffect } from "react";
import { useDiaryStateContext } from "../../../context/DiaryProvider";

import Header from "../../layout/Header";
import Button from "../../Button";
import DiaryList from "../../DiaryList";
import LeftChevronSVG from "../../../assets/leftChevron.svg?react";
import RightChevronSVG from "../../../assets/rightChevron.svg?react";

const Home = () => {
  const [data, setData] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const diaryList = useDiaryStateContext();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const FIRST_DATE = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getTime();
      const LAST_DATE = new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0).getTime();

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
            <LeftChevronSVG width="24" height="24" />
          </Button>
        }
        rightChild={
          <Button onClick={() => handleViewDate(+1)}>
            <RightChevronSVG width="24" height="24" />
          </Button>
        }
      >
        {`${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`}
      </Header>
      <DiaryList data={data} />
    </>
  );
};

export default Home;
