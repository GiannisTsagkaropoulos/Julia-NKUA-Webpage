import CaseStudy from "./CaseStudy";

export default function CaseStudyGrid(props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-3 pb-4">
      {props.caseStudies.map((caseStudy) => {
        return (
          <CaseStudy
            key={caseStudy.id}
            link={caseStudy.link}
            company={caseStudy.company}
            companyHelper={caseStudy.companyHelper}
            title={caseStudy.title}
            paragraph={caseStudy.paragraph}
            image={caseStudy.image}
          ></CaseStudy>
        );
      })}
    </section>
  );
}
