import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDiaryStateContext } from "@context/DiaryProvider";
import { useDiaryDispatchContext } from "@context/DiaryProvider";

import Header from "@components/Header";
import Button from "@components/Button";
import DiaryEditor from "@components/DiaryEditor";

import TrashSVG from "@assets/trash.svg?react";
import LeftChevronSVG from "@assets/left-chevron.svg?react";

const Edit = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [origin, setOrigin] = useState();

  const diaryList = useDiaryStateContext();
  const { onRemove } = useDiaryDispatchContext();

  const handleDelete = (targeId) => {
    onRemove(targeId);
    navigate("/", { replace: "true" });
  };

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (el) => parseInt(el.id) === parseInt(id)
      );

      if (targetDiary) {
        setOrigin(targetDiary);
        return;
      }
    }
    navigate("/", { replace: true });
  }, [id, diaryList, navigate]);

  return (
    <>
      <Header
        leftChild={
          <Button onClick={() => navigate(-1)}>
            <LeftChevronSVG width="15" height="15" />
            뒤로 가기
          </Button>
        }
        rightChild={
          <Button variant="negative" onClick={() => handleDelete(id)}>
            <TrashSVG width="15" height="15" />
            삭제하기
          </Button>
        }
      >
        일기 수정하기
      </Header>
      {origin && <DiaryEditor isEdit={true} data={origin}></DiaryEditor>}
    </>
  );
};

export default Edit;
