import React from "react";
import { StyleSheet, css } from "aphrodite/no-important";

export default function Progressbar({ done }) {
  return (
    <div className={css(styles.progressbar)}>
      <div
        className={css(styles["progressbar-done"])}
        style={{ width: `${done}%` }}
      ></div>
    </div>
  );
}

const styles = StyleSheet.create({
  progressbar: {
    position: "absolute",
    bottom: "10px",
    width: "100%",
    height: "4px",
    backgroundColor: "gray"
  },
  "progressbar-done": {
    width: "0px",
    height: "5px",
    backgroundColor: "red"
  }
});
