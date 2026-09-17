"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import type { LessonPlan, LessonResource } from "../domain/lesson-plan";

type LessonPlansPageProps = { lessonPlans: LessonPlan[] };

const resourceLabels: Record<LessonResource["type"], string> = {
  video: "Watch",
  worksheet: "Practice",
  game: "Play",
};

const fundesLogo = "https://media.licdn.com/dms/image/v2/C4E0BAQGAosnlkNmzHQ/company-logo_200_200/company-logo_200_200/0/1630580529303/institucin_universitaria_fundacin_de_estudios_superiores_monseor_abraham_escudero_montoya_fundes_logo?e=2147483647&v=beta&t=qRoow5M1BHVlsC16AamiLtfeLBHE6nid0-gkSnXeB2I";

export function LessonPlansPage({ lessonPlans }: LessonPlansPageProps) {
  const [activePlanId, setActivePlanId] = useState(lessonPlans[0]?.id ?? "");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const activePlan = lessonPlans.find((plan) => plan.id === activePlanId) ?? lessonPlans[0];

  if (!activePlan) return null;

  const score = activePlan.questions.filter((question, index) => answers[`${activePlan.id}-${index}`] === question.answer).length;

  function choosePlan(planId: string) {
    setActivePlanId(planId);
    setAnswers({});
    setIsSubmitted(false);
  }

  return (
    <div className="lesson-plans-page">
      <header className="lesson-plans-header">
        <Link className="brand" href="/" aria-label="eŠkolica home">
          <span>Fundes</span>Discovery<span className="brand-dot">.</span>
        </Link>
        <Link className="lesson-plans-back" href="/">← Back to home</Link>
      </header>

      <main>
        <section className="lesson-plans-hero">
          <div>
            <p className="hero-kicker"><span /> Learn by doing</p>
            <h1>Lesson <em>plans</em><br />made for you.</h1>
            <p className="lesson-plans-lead">Three friendly routes to practice English, built for primary students in public schools who may not have access to private tutoring, so they can learn at their own pace.</p>
          </div>
          <div className="lesson-plans-hero-note">
            <Image className="fundes-logo" src={fundesLogo} alt="Logo de FUNDES" width={58} height={58} unoptimized />
            <strong>A1 → A2</strong>
            <span>Start with the basics, then use them in your everyday life.</span>
          </div>
        </section>

        <section className="lesson-plans-shell" aria-labelledby="topics-title">
          <div className="section-heading lesson-plans-heading">
            <p className="eyebrow">Choose a topic</p>
            <h2 id="topics-title">Your next small win</h2>
            <p>Each plan includes clear goals, free materials, a quick exam-style practice and a moment to think.</p>
          </div>

          <div className="lesson-topic-tabs" role="tablist" aria-label="Lesson plan topics">
            {lessonPlans.map((plan) => (
              <button
                className={`lesson-topic-tab lesson-topic-tab--${plan.color} ${plan.id === activePlan.id ? "is-active" : ""}`}
                key={plan.id}
                type="button"
                role="tab"
                aria-selected={plan.id === activePlan.id}
                onClick={() => choosePlan(plan.id)}
              >
                <span>{plan.emoji}</span>
                <strong>{plan.title}</strong>
                <small>{plan.level}</small>
              </button>
            ))}
          </div>

          <article className={`lesson-plan lesson-plan--${activePlan.color}`}>
            <div className="lesson-plan-intro">
              <Image className="lesson-plan-image" src={activePlan.image} alt={activePlan.imageAlt} width={150} height={110} unoptimized />
              <div>
                <p className="eyebrow">Level {activePlan.level} · Topic {activePlan.icon} {activePlan.emoji}</p>
                <h3>{activePlan.title}</h3>
                <p>{activePlan.subtitle}</p>
              </div>
              <div className="lesson-plan-badge">FREE<br /><span>resources</span></div>
            </div>

            <div className="lesson-plan-grid">
              <section className="lesson-plan-block lesson-explanation">
                <p className="lesson-block-label">01 / Let&apos;s understand</p>
                <h4>What is this about? {activePlan.emoji}</h4>
                <p>{activePlan.explanation}</p>
                <div className="example-list">
                  {activePlan.examples.map((example) => <span key={example}>{example}</span>)}
                </div>
              </section>
              <section className="lesson-plan-block lesson-plan-objectives">
                <p className="lesson-block-label">02 / Why this matters</p>
                <h4>Today I will...</h4>
                <ul>{activePlan.objectives.map((objective) => <li key={objective}>{objective}</li>)}</ul>
              </section>

              <section className="lesson-plan-block lesson-resources">
                <p className="lesson-block-label">03 / Open and explore</p>
                <h4>Materials for your class</h4>
                <div className="resource-list">
                  {activePlan.resources.map((resource) => (
                    <a className="resource-link" href={resource.url} key={resource.type} target="_blank" rel="noreferrer">
                      <span className={`resource-icon resource-icon--${resource.type}`} aria-hidden="true">{resource.type === "video" ? "▶" : resource.type === "worksheet" ? "✎" : "✦"}</span>
                      <span><strong>{resource.label}</strong><small>{resourceLabels[resource.type]}</small></span>
                      <b aria-hidden="true">↗</b>
                    </a>
                  ))}
                </div>
              </section>
            </div>

            <section className="lesson-quiz" aria-labelledby="quiz-title">
              <div className="quiz-heading">
                <p className="lesson-block-label">04 / Check your learning</p>
                <h4 id="quiz-title">Mini practice</h4>
                <p>Choose one answer for each question, just like a school exam.</p>
              </div>
              <div className="quiz-questions">
                {activePlan.questions.map((question, questionIndex) => {
                  const questionId = `${activePlan.id}-${questionIndex}`;
                  return (
                    <fieldset className="quiz-question" key={question.prompt}>
                      <legend><span>{questionIndex + 1}</span>{question.prompt}</legend>
                      <div className="quiz-options">
                        {question.options.map((option) => (
                          <label className={isSubmitted && option === question.answer ? "is-correct" : ""} key={option}>
                            <input
                              type="radio"
                              name={questionId}
                              value={option}
                              checked={answers[questionId] === option}
                              onChange={() => setAnswers((current) => ({ ...current, [questionId]: option }))}
                            />
                            <span>{option}</span>
                          </label>
                        ))}
                      </div>
                    </fieldset>
                  );
                })}
              </div>
              <div className="quiz-result-row">
                <button className="primary-button quiz-submit" type="button" onClick={() => setIsSubmitted(true)}>Check answers <span aria-hidden="true">→</span></button>
                {isSubmitted && <p className="quiz-result" role="status">You got <strong>{score}/{activePlan.questions.length}</strong>. Keep practicing!</p>}
              </div>
            </section>

            <section className="lesson-reflection">
              <span className="reflection-mark" aria-hidden="true">?</span>
              <div><p className="lesson-block-label">05 / Think about it</p><h4>My reflection</h4><p>{activePlan.reflection}</p></div>
            </section>
          </article>
        </section>
      </main>
      <footer className="site-footer">eŠKOLICA <span>Learning that feels like progress.</span></footer>
    </div>
  );
}