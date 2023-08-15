import classes from "./Button.module.css";

export default function ContactButton() {
  return (
    <button className={classes.btn}>
      {" "}
      <div className={classes.content}>Contact</div>
    </button>
  );
}
