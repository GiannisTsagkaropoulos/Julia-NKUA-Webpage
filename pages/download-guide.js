import classes from "./PageBackground.module.css";

export default function DownloadGuidePage() {
  return (
    <section className={classes.gradient}>
      <h2>Julia programming</h2>
      <h3>A fresh approach to scientific computing</h3>
      <p>
        Pluto is an environment to work with the{" "}
        <a href="https://julialang.org/">Julia programming language</a>. Easy to
        use like Python, fast like C. <em>(We think it's the future!)</em>
      </p>
    </section>
  );
}
