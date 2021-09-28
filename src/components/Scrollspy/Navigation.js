import { createRef, useContext } from "react";
import FancyButton from "./FancyButton";
import LayoutContext from "./LayoutContext";
import styles from "./Navigation.module.css";
import ScrollSpy from "react-scrollspy-navigation";

export default function Navigation() {
  const [isColumn, setIsColumn] = useContext(LayoutContext);
  const toggleSuffix = isColumn ? "Horizontal" : "Vertical";

  function onClickToggleLayout(e) {
    e.preventDefault();
    setIsColumn(!isColumn);
  }

  return (
    <nav className={styles.container}>
      <ScrollSpy>
        <FancyButton
          href="#toggleLayout"
          text={`Toggle to ${toggleSuffix}`}
          onClick={onClickToggleLayout}
        />
        <FancyButton href="#box-1" text="Box 1" ref={createRef()} />
        <FancyButton href="#box-2" text="Box 2" ref={createRef()} />
        <FancyButton href="#box-3" text="Box 3" ref={createRef()} />
        <FancyButton href="#box-4" text="Box 4" ref={createRef()} />
        <FancyButton href="#box-5" text="Box 5" ref={createRef()} />
        <FancyButton href="#box-6" text="Box 6" ref={createRef()} />
      </ScrollSpy>
    </nav>
  );
}
