import "../css/styles.css";
import cn from "classnames";

export default function SelectStyles({ mode }) {
  return (
    <div className={cn("box", mode === "light" ? "light" : "dark")}>
      Hello World!
    </div>
  );
}
