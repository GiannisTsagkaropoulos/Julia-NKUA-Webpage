import CardGrid from "@/components/notebooks/CardGrid";
import { NOTEBOOKS } from "@/data/pluto-notebooks";

export default function OurWork() {
  return (
    <div>
      <CardGrid
        notebooks={NOTEBOOKS}
        //   title={notebook.title}
        //   link={notebook.link}
        //   thumbnail={notebook.thumbnail}
        //   content={notebook.content}
        //   tags={notebook.tags}
        //   author={notebook.author}
      />
    </div>
  );
}

// const notebook = {
//   id: "notebook1",
//   title: "Binary Rationals",
//   link: "https://giannistsagkaropoulos.github.io/Arithmetical-Analysis/notebooks/BinaryRationals.html",
//   content:
//     "Given 2 decimal numbers, a & b, and a maximum length of the fractional part, the programm will produce all the numbers in [a,b] with a finite binary representation (binary rationals).",
//   createdDate: "2021-05-12",
//   thumbnail:
//     "images/notebook_photos/thumbnails/binary_rationals/binary-rationals-thumbnail.png",
//   tags: [
//     {
//       id: "tag1",
//       title: "Arithmetical Analysis",
//       color: "bg-julia-blue-light",
//       hover: "hover:bg-julia-blue-dark",
//     },
//     {
//       id: "tag2",
//       title: "Interactive",
//       color: "bg-julia-green-light",
//       hover: "hover:bg-julia-green-dark",
//     },
//     {
//       id: "tag3",
//       title: "Computer Arithmetic",
//       color: "bg-julia-blue-light",
//       hover: "hover:bg-julia-blue-dark",
//     },
//   ],
//   author: {
//     id: "giannis",
//     name: "Giannis Tsagkaropoulos",
//     socailLink: "https://www.linkedin.com/in/ioannis-tsagkaropoulos-85a280233/",
//     image: "images/faces/giannis.jpg",
//     status: "Math Undergraduate",
//   },
// };
