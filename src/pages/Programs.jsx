import { programsData } from '../data/programsData';
import ProgramCard from '../sections/programs/ProgramCard';

export default function Programs() {
  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Programs</p>
        <h1 className="section-title">Training programs for every goal</h1>
        <p className="section-copy" style={{ maxWidth: 720, marginTop: 12 }}>
          Pick the training style that matches your starting point, your schedule, and the results you want to see.
        </p>
        <p className="section-copy" style={{ maxWidth: 760, marginTop: 10 }}>
          Every program at PowerFit is meant to remove confusion. Instead of random workouts, members get a clear direction, better structure, and a training path that feels easier to follow week after week.
        </p>
        <div className="grid programs-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', marginTop: 24 }}>
          {programsData.map((program) => (
            <ProgramCard key={program.title} program={program} />
          ))}
        </div>

        <div className="programs-story card">
          <div className="programs-story__copy">
            <p className="eyebrow">How It Works</p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.7rem)' }}>
              A clearer path from first visit to visible progress
            </h2>
            <p className="section-copy">
              The programs are designed to match a member's real goal, not just fill space on the website. That means better coaching, smarter recommendations, and more confidence during the first few weeks.
            </p>
            <div className="programs-story__points">
              <div className="programs-story__point">
                <strong>Goal-based selection</strong>
                <p>Members choose the format that fits their body goal, training level, and available time.</p>
              </div>
              <div className="programs-story__point">
                <strong>Coach-led progression</strong>
                <p>Each path focuses on consistency, form, and measurable improvement instead of random effort.</p>
              </div>
              <div className="programs-story__point">
                <strong>Plan recommendation</strong>
                <p>Every program is paired with the membership that makes the most sense for that type of training.</p>
              </div>
            </div>
          </div>

          <div className="programs-video">
            <div className="programs-video__frame">
              <iframe
                src="https://www.youtube-nocookie.com/embed/0om8vBTv2Kw?rel=0"
                title="Beginner strength workout by cult fit"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <p className="programs-video__caption">
              Beginner-friendly strength workout reference to show the kind of guided format members can expect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
