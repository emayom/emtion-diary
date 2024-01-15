import { useEffect, useState } from "react";
import { add, getDay, getDaysInMonth, startOfMonth } from "date-fns";

import { DAY_OF_WEEK, DEFAULT_VALUE } from "./constants";

/**
 * 1차원 배열을 받아 일정한 길이로 이루어진 2차원 배열을 리턴한다.
 */
const chunk = (data: (Date | null)[], size: number = 1) => {
  const result: (Date | null)[][] = [];

  for (let i = 0; i < data.length; i += size) {
    result.push(data.slice(i, i + size));
  }

  return result;
};

/** 캘린더 셀 개수 */
const getCalendarCellLength = (days: number, startAt: number) =>
  days === 31 && startAt > 4 ? 42 : 35;

/**
 * 5주를 기준으로 2차원 배열의 달력 배열을 리턴한다.
 * [[1주차], [2주차], [3주차], [4주차], [5주차]]
 */
const useCalendar = (initValue: Date) => {
  const [current, setCurrent] = useState(startOfMonth(initValue));
  const [calendar, setCalendar] = useState<(Date | null)[][]>([]);

  useEffect(() => {
    /** 해당 달의 일수 */
    const NUMBER_OF_DAYS = getDaysInMonth(current);

    /** 캘린더 1일 시작 위치 */
    const START_AT = getDay(current);

    /** 캘린더 배열 길이 */
    const CALENDER_LENGTH = getCalendarCellLength(NUMBER_OF_DAYS, START_AT);

    /** 다음 달과 이어진 빈칸 길이 */
    const SUBSEQUENCE_LENGTH = CALENDER_LENGTH - NUMBER_OF_DAYS - START_AT;

    const prev = Array(START_AT).fill(DEFAULT_VALUE);
    const subseq = Array(SUBSEQUENCE_LENGTH).fill(DEFAULT_VALUE);

    setCalendar(
      chunk(
        prev.concat(
          [...Array(NUMBER_OF_DAYS)].map((_, i) => add(current, { days: i })),
          subseq
        ),
        DAY_OF_WEEK
      )
    );
  }, [initValue]);

  return [calendar, current, setCurrent];
};

export default useCalendar;
