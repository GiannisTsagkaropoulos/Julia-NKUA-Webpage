import classes from "./PageBackground.module.css";

export default function DownloadGuidePage() {
  return (
    <div className="grid list-none grid-cols-1 gap-10 place-items-center bg-blue-100 mx-auto z-1 w-5/6">
      <h2 className="text-gray-500 text-4xl font-semibold">
        Julia programming
      </h2>
      <h3 className="text-gray-800 text-5xl font-extrabold">
        A fresh approach to <br />
        scientific computing
      </h3>
      <p className="text-gray-500 text-2xl font-semibold">
        Easy to use like Python, fast like C.{" "}
        <em>(We think it's the future!)</em>
      </p>
    </div>
  );
}
