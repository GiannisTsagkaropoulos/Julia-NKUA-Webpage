import { TEAM_MEMBERS } from "./team-members";

export const NOTEBOOKS = [
  {
    id: "notebook8",
    title: "Julia Guide",
    link: "https://nkuamath-julia.github.io/NASCA23/notebooks/julia_guide.html",
    thumbnail:
      "images/notebook_photos/thumbnails/julia_guide/julia-guide-thumbnail.png",
    content:
      "A description of Julia Language( History, Characteristics, Features, Environments, Tools, Frameworks, Specification of the Language etc.)",
    createdDate: "2021-05-12",
    tags: [
      {
        id: "tag1",
        title: "Guide",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
      {
        id: "tag2",
        title: "Interactive",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "Psitou"),
  },
  {
    id: "notebook10",
    title: "Accuracy of fomrulae: (a+b)(a-b) or a^2-b^2",
    link: "https://nkuamath-julia.github.io/NASCA23/notebooks/AccurateMathFormula.html",
    thumbnail:
      "images/notebook_photos/thumbnails/most_accurate_math_formula/most-accurate-math-formula-thumbnail.png",
    content:
      "Calculates exact result of formulae (a+b)(a-b) & a^2-b^2 via the BigFloat datatype provided by Julia (a ≈ b), relative errors for each of the 2 methods and compares them.",
    createdDate: "2021-05-12",
    tags: [
      {
        id: "tag1",
        title: "Arithmetical Analysis",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "Koukoudakis"),
  },
  {
    id: "notebook6",
    title: "Prime Number Check Benchmarks",
    link: "https://nkuamath-julia.github.io/NASCA23/notebooks/primesnotebook.html",
    thumbnail:
      "images/notebook_photos/thumbnails/prime_check/prime-check-thumnail.png",

    content:
      "Benchmark between Julia, Matlab & Python for 3 algorithms that check if a number is prime or not. Namely: Bruteforce, Improved Bruteforce & Root Algorithm.",
    createdDate: "2021-05-12",
    tags: [
      {
        id: "tag1",
        title: "Number Theory",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
      {
        id: "tag2",
        title: "Interactive",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "Maniatakos"),
  },
  {
    id: "notebook4",
    title: "Decimal to b-ary conversion",
    link: "https://giannistsagkaropoulos.github.io/Arithmetical-Analysis/notebooks/DecimalToBary.html",
    thumbnail:
      "images/notebook_photos/thumbnails/decimal_to_b_ary/decimal-to-b-ary-thumbnail.png",
    content:
      "Mathematical background of decimal to b-ary integer & fractional conversion with the result being saves in 24-bit fixed point format.",
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
        title: "Computer Arithmetic",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
      {
        id: "tag3",
        title: "Interactive",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "Tsagkaropoulos"),
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
        title: "Computer Arithmetic",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
      {
        id: "tag3",
        title: "Interactive",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "Tsagkaropoulos"),
  },
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
        title: "Computer Arithmetic",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
      {
        id: "tag3",
        title: "Interactive",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "Tsagkaropoulos"),
  },
  {
    id: "notebook7",
    title: "Benchmarks for Netwon-Raphson & Calculation of A’ · A · A’ product",
    link: "https://nkuamath-julia.github.io/NASCA23/notebooks/notebook.html",
    thumbnail:
      "images/notebook_photos/thumbnails/newton-raphson/newton-raphson-thumbnail.png",
    content:
      "Benchmark between Julia, Matlab & Python for Newton-Raphson method & for the calculation of the product: “ A’ · A · A’ ” (either from right to left or from left to right).",
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
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "Kremmydas"),
  },
  {
    id: "notebook9",
    title: "Pivot Pattern Finder for Hadamard Matrices of Order 20 using GECP",
    link: "https://nkuamath-julia.github.io/NASCA23/notebooks/Pivot%20Pattern%20Finder.html",
    thumbnail:
      "images/notebook_photos/thumbnails/hadamard/pivot-pattern-finder-thumbnail.png",
    content:
      "Code which is used to find possible pivot patterns of Hadamard matrices of order 20 using GECP. Note: In order to avoid rounding errors, the use of rational numbers was chosen for significant operations with potentially non-integer results.",
    createdDate: "2021-05-12",
    tags: [
      {
        id: "tag1",
        title: "Arithmetical Linear Algebra",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
      {
        id: "tag2",
        title: "Applied Mathematics",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "Lardas"),
  },
  {
    id: "notebook3",
    title: "Interpolation Polynomials",
    link: "https://giannistsagkaropoulos.github.io/Arithmetical-Analysis/notebooks/PolynomialInterpolation.html",
    thumbnail:
      "images/notebook_photos/thumbnails/polynomial_interpolation/interpolation-polynomials-thumbnail.png",

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
        title: "Intepolation",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
      {
        id: "tag3",
        title: "Interactive",
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "Tsagkaropoulos"),
  },

  {
    id: "notebook5",
    title: "Natural Cubic Spline",
    link: "https://giannistsagkaropoulos.github.io/Arithmetical-Analysis/notebooks/NaturalCubicSpline.html",
    thumbnail:
      "images/notebook_photos/thumbnails/natural_cubic_spline/natural-cubic-spline-thumbnail.png",
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
        color: "bg-julia-blue-light",
        hover: "hover:bg-julia-blue-dark",
      },
    ],
    author: TEAM_MEMBERS.find((member) => member.id === "Tsagkaropoulos"),
  },
];
