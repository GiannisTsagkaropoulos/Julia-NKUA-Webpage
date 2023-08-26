import { TEAM_MEMBERS } from "./team-members";

export const NOTEBOOKS = [
  {
    id: "notebook1",
    title: "Binary Rationals",
    link: "https://giannistsagkaropoulos.github.io/Arithmetical-Analysis/notebooks/BinaryRationals.html",
    content:
      "Given 2 decimal numbers, a & b, and a maximum length of the fractional part, the programm will produce all the numbers in [a,b] with a finite binary representation (binary rationals).",
    createdDate: "2021-05-12",
    thumbnail:
      "images/notebook_photos/thumbnails/binary_rationals/binary-rationals-thumbnail.png",
    tags: [
      {
        id: "tag1",
        title: "Arithmetical Analysis",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
      {
        id: "tag2",
        title: "Interactive",
        color: "bg-julia-green-light",
        hover: "hover:bg-julia-green-dark",
      },
      {
        id: "tag3",
        title: "Computer Arithmetic",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "giannis"),
  },
  {
    id: "notebook4",
    title: "Decimal to b-ary conversion",
    link: "https://giannistsagkaropoulos.github.io/Arithmetical-Analysis/notebooks/DecimalToBary.html",
    thumbnail:
      "images/notebook_photos/thumbnails/decimal_to_b_ary/decimal-to-b-ary-thumbnail.png",
    content:
      "Mathmetical background of decimal to b-ary integer & fractional conversion with the result being saves in 24-bit fixed point format.",
    createdDate: "2021-05-12",
    tags: [
      {
        id: "tag1",
        title: "Arithmetical Analysis",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
      {
        id: "tag2",
        title: "Interactive",
        color: "bg-julia-green-light",
        hover: "hover:bg-julia-green-dark",
      },
      {
        id: "tag3",
        title: "Computer Arithmetic",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "giannis"),
  },
  {
    id: "notebook2",
    title: "Binary Saving Formats",
    link: "https://giannistsagkaropoulos.github.io/Arithmetical-Analysis/notebooks/BinarySavingFormats.html",
    thumbnail:
      "images/notebook_photos/thumbnails/binary_saving_formats/binary-saving-formats-thumbnail.png",
    content:
      " Introduces decimal to binary conversion & the following saving formats: Fixed-point 24-bits, IEEE 754 32-bits, IEEE 754 64-bits",
    createdDate: "2021-05-12",
    tags: [
      {
        id: "tag1",
        title: "Arithmetical Analysis",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
      {
        id: "tag2",
        title: "Interactive",
        color: "bg-julia-green-light",
        hover: "hover:bg-julia-green-dark",
      },
      {
        id: "tag3",
        title: "Computer Arithmetic",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "giannis"),
  },
  {
    id: "notebook3",
    title: "Interpolation Polynomials",
    link: "https://giannistsagkaropoulos.github.io/Arithmetical-Analysis/notebooks/PolynomialInterpolation.html",
    thumbnail:
      "images/notebook_photos/thumbnails/polynomial_interpolation/interpolation-polynomials.png",
    content:
      "Mathematical theory of Interpolation Polynomials & interactive interpolation of given functions with Lagrange's and Newton's interpolations methods.",
    createdDate: "2021-05-12",
    tags: [
      {
        id: "tag1",
        title: "Arithmetical Analysis",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
      {
        id: "tag2",
        title: "Interactive",
        color: "bg-julia-green-light",
        hover: "hover:bg-julia-green-dark",
      },
      {
        id: "tag3",
        title: "Intepolation",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "giannis"),
  },

  {
    id: "notebook5",
    title: "Natural Cubic Spline",
    link: "https://giannistsagkaropoulos.github.io/Arithmetical-Analysis/notebooks/NaturalCubicSpline.html",
    thumbnail:
      "images/notebook_photos/thumbnails/natural_cubic_spline/natural-cubic-spline-thumbnail-white.png",
    content:
      "Brief introduction to natural cubic splines, algebra behind their construction & interactive interpolation of given functions using natural cubic splines.",
    createdDate: "2021-05-12",
    tags: [
      {
        id: "tag1",
        title: "Arithmetical Analysis",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
      {
        id: "tag2",
        title: "Interpolation",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
      {
        id: "tag3",
        title: "Interactive",
        color: "bg-julia-green-light",
        hover: "hover:bg-julia-green-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "giannis"),
  },
];

// export function getFeaturedNotebooks() {
//   return DUMMY_EVENTS.filter((event) => event.isFeatured);
// }

// export function getAllNotebooks() {
//   return NOTEBOOKS;
// }

// export function getFilteredEvents(dateFilter) {
//   const { year, month } = dateFilter;

//   let filteredEvents = NOTEBOOKS.filter((event) => {
//     const eventDate = new Date(event.date);
//     return (
//       eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
//     );
//   });

//   return filteredEvents;
// }

// export function getEventById(id) {
//   return DUMMY_EVENTS.find((event) => event.id === id);
// }
