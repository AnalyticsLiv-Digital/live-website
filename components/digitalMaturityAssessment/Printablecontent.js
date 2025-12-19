import Hero  from './hero';
import AssessmentPanel from './Assessmentpanel';
import ResultsPanel from './Resultspanel';

export default function PrintableContent({
  mode,
  depth,
  scores,
  model,
  activeCat,
  email,
  activeTab,
  onStart,
  onShareResume,
  onShareLanding,
  onSetActiveCat,
  onSetAnswer,
  onNext,
  onPrev,
  onEmailChange,
  onTabChange,
  onOpenRadarModal,
  showToast
}) {
  return (
    <div id="printable-content">
      {/* Hero Section */}
      <Hero
        mode={mode}
        depth={depth}
        scores={scores}
        onStart={onStart}
        onShareResume={onShareResume}
        onShareLanding={onShareLanding}
      />

      {/* Grid Layout for Screen, Single Column for Print */}
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-5 mt-5 print:grid-cols-1 print:gap-8">
        {/* Assessment Panel */}
        <AssessmentPanel
          model={model}
          activeCat={activeCat}
          onSetActiveCat={onSetActiveCat}
          onSetAnswer={onSetAnswer}
          onNext={onNext}
          onPrev={onPrev}
        />

        {/* Results Panel */}
        <ResultsPanel
          scores={scores}
          mode={mode}
          depth={depth}
          model={model}
          email={email}
          onEmailChange={onEmailChange}
          activeTab={activeTab}
          onTabChange={onTabChange}
          onOpenRadarModal={onOpenRadarModal}
          showToast={showToast}
        />
      </div>
    </div>
  );
}