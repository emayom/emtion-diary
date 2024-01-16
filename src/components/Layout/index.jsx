import { useNavigate } from "react-router-dom";

import { useViewTypeContext } from "@context/ViewTypeProvider";

import Button from "@components/Button";

import PlusSVG from "@assets/plus.svg?react";
import CalendarSVG from "@assets/calendar.svg?react";
import ListViewSVG from "@assets/list-view.svg?react";

import * as styles from "./styles.css";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const { setViewType } = useViewTypeContext();

  return (
    <div className={styles.layout}>
      <header className={styles.layoutHeader}>
        <div>
          <Button
            variant="icon"
            data-view-type="calendar"
            onClick={() => setViewType("calendar")}
          >
            <CalendarSVG width={18} height={18} />
            캘린더
          </Button>
          <Button
            variant="icon"
            data-view-type="list"
            onClick={() => setViewType("list")}
          >
            <ListViewSVG width={18} height={18} />
            목록
          </Button>
        </div>
        <Button variant="icon" onClick={() => navigate("/new")}>
          <PlusSVG width={15} height={15} />
        </Button>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
