import React, { useContext, useEffect, useReducer } from "react";

const reducer = (state, action) => {
  const newState = {
    INIT: () => action.data,
    CREATE: () => [{ ...action.data }, ...state],
    REMOVE: () => state.filter((el) => el.id !== parseInt(action.targetId)),
    EDIT: () =>
      state.map((el) => (el.id === parseInt(action.targetId) ? { ...action.data } : el)),
  }[action.type]();

  if(action.type !== "INIT"){
    localStorage.setItem('emotion-diary', JSON.stringify(newState));
  }

  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

export const DiaryProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, []);

  const onCreate = ({ date, title, content, emotion }) => {
    dispatch({
      type: "CREATE",
      data: {
        id:  new Date().getTime(),
        date:  new Date(date).getTime(),
        title,
        content,
        emotion,
      },
    });
  };

  const onRemove = (targetId) => dispatch({ type: "REMOVE", targetId })

  const onEdit = (targetId, { title, date, content, emotion }) => {
    dispatch({
      type: "EDIT",
      targetId,
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        title,
        content,
        emotion,
      },
    });
  };

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: JSON.parse(localStorage.getItem('emotion-diary')),
    })
  }, [])

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        {children}
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export const useDiaryStateContext = () => useContext(DiaryStateContext);
export const useDiaryDispatchContext = () => useContext(DiaryDispatchContext);
