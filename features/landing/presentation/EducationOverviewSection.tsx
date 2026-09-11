export function EducationOverviewSection() {
  return (
    <section className="section-shell education-overview" id="about" aria-labelledby="overview-title">
      <div className="overview-intro">
        <p className="eyebrow">About the project</p>
        <h2 id="overview-title">Learning English through meaningful digital experiences.</h2>
      </div>
      <div className="overview-panels">
        <article className="overview-panel overview-panel--objective">
          <span className="overview-panel__index">01</span>
          <h3>General objective</h3>
          <p>
            To design and create an educational website as a pedagogical tool to support the development of basic English competencies in primary school students, using interactive digital resources that foster meaningful, autonomous, and motivating learning.
          </p>
        </article>
        <article className="overview-panel overview-panel--context">
          <span className="overview-panel__index">02</span>
          <h3>Introduction</h3>
          <p>
            Learning English during primary education is essential for developing the communicative skills that enable students to navigate the language effectively in various academic and social contexts. However, in some educational settings—particularly in public institutions—access to diverse and interactive teaching resources can be limited. Therefore, this proposal involves creating an educational website that brings together English-language materials and activities tailored to the needs and characteristics of primary school students. The site will feature interactive resources, exercises, images, games, and activities focused on basic vocabulary and expressions, with the aim of making English learning a more dynamic, accessible, and meaningful experience.
          </p>
        </article>
        <article className="overview-panel overview-panel--audience">
          <span className="overview-panel__index">03</span>
          <h3>Target audience</h3>
          <p>
            The target audience consists of primary school students approximately 7 to 12 years old—from public educational institutions. The website will be designed with their developmental stage in mind.
          </p>
        </article>
      </div>
    </section>
  );
}