import { useMemo, useState } from 'react';
import { HIGH_SCHOOL_CURRICULUM } from './curriculumData.js/curriculumData.js';
import paperData from './papersData.json/papersData.json';

const gradeOptions = ['Grade_9', 'Grade_10', 'Grade_11', 'Grade_12'];
const primaryViews = [...gradeOptions, 'Past Papers'];
const paperSubjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English'];
const subjectNameMap = {
  Mathematics: 'Math',
  Math: 'Math',
  Biology: 'Biology',
  Physics: 'Physics',
  Chemistry: 'Chemistry',
  English: 'English',
  Aptitude: 'Aptitude',
};

const formatViewLabel = (value) => (value === 'Past Papers' ? 'Matric Exams' : value.replace('_', ' '));

const formatContentLabel = (value) => value
  .replaceAll('_', ' ')
  .replace(/\b\w/g, (character) => character.toUpperCase());

const renderStructuredContent = (value, keyPrefix = 'content') => {
  if (typeof value === 'string' || typeof value === 'number') {
    return <p style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '15px', margin: 0 }}>{value}</p>;
  }

  if (Array.isArray(value)) {
    return (
      <ul style={{ color: '#cbd5e1', lineHeight: '1.8', fontSize: '15px', margin: 0, paddingLeft: '24px' }}>
        {value.map((item, index) => (
          <li key={`${keyPrefix}-${index}`} style={{ marginBottom: '10px', paddingLeft: '3px' }}>
            {renderStructuredContent(item, `${keyPrefix}-${index}`)}
          </li>
        ))}
      </ul>
    );
  }

  if (value && typeof value === 'object') {
    return (
      <dl style={{ display: 'grid', gap: '12px', margin: 0 }}>
        {Object.entries(value).map(([key, item]) => (
          <div key={`${keyPrefix}-${key}`}>
            <dt style={{ color: '#f1f5f9', fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>
              {formatContentLabel(key)}
            </dt>
            <dd style={{ margin: 0 }}>
              {renderStructuredContent(item, `${keyPrefix}-${key}`)}
            </dd>
          </div>
        ))}
      </dl>
    );
  }

  return null;
};

function App() {
  const defaultGrade = 'Grade_9';
  const defaultSubject = Object.keys(HIGH_SCHOOL_CURRICULUM[defaultGrade] ?? {})[0] ?? 'Biology';

  const [selectedGrade, setSelectedGrade] = useState(defaultGrade);
  const [selectedSubject, setSelectedSubject] = useState(defaultSubject);
  const [currentChapter, setCurrentChapter] = useState(
    () => HIGH_SCHOOL_CURRICULUM[defaultGrade]?.[defaultSubject]?.lessons?.[0] ?? null,
  );
  const [checkedChapters, setCheckedChapters] = useState({});
  const [openGrade, setOpenGrade] = useState(defaultGrade);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [quizProgress, setQuizProgress] = useState({
    lessonId: null,
    questionIndex: 0,
    selectedOption: null,
    submitted: false,
  });

  const chaptersList = useMemo(() => {
    if (selectedGrade === 'Past Papers') {
      return [];
    }
    return HIGH_SCHOOL_CURRICULUM[selectedGrade]?.[selectedSubject]?.lessons ?? [];
  }, [selectedGrade, selectedSubject]);

  const activePapers = useMemo(() => {
    if (selectedGrade !== 'Past Papers') {
      return [];
    }
    if (!selectedSubject) {
      return [];
    }
    const key = subjectNameMap[selectedSubject] ?? selectedSubject;
    return paperData[key] ?? [];
  }, [selectedGrade, selectedSubject]);

  const unitHeader = selectedGrade === 'Past Papers'
    ? 'Matric Exams Library'
    : HIGH_SCHOOL_CURRICULUM[selectedGrade]?.[selectedSubject]?.unitTitle ?? 'Unit Overview';
  const activeLesson = chaptersList.find((chapter) => chapter.id === currentChapter?.id);
  const activeChapterIndex = chaptersList.findIndex((chapter) => chapter.id === activeLesson?.id);
  const isInteractiveQuiz = activeLesson?.type === 'quiz'
    && Array.isArray(activeLesson?.questions)
    && activeLesson.questions.length > 0;
  const currentQuizProgress = quizProgress.lessonId === activeLesson?.id
    ? quizProgress
    : { questionIndex: 0, selectedOption: null, submitted: false };
  const activeQuestion = isInteractiveQuiz
    ? activeLesson.questions[currentQuizProgress.questionIndex]
    : null;
  const questionOptions = Object.entries(activeQuestion?.opts ?? {})
    .filter(([letter]) => ['A', 'B', 'C', 'D'].includes(letter));
  const correctOption = activeQuestion?.ans ?? activeQuestion?.correctAnswer;
  const isQuizComplete = isInteractiveQuiz
    && currentQuizProgress.questionIndex === activeLesson.questions.length - 1
    && currentQuizProgress.submitted;
  const hasNextChapter = activeChapterIndex >= 0 && activeChapterIndex < chaptersList.length - 1;
  const canContinue = !isInteractiveQuiz || isQuizComplete;
  const displayedLessonFields = [
    'id',
    'type',
    'title',
    'description',
    'introduction',
    'foundational_traits',
    'comparison_matrix',
    'taxonomic_divisions',
    'chordate_relationship',
    'biomimicry_cases',
  ];
  const additionalLessonContent = Object.entries(activeLesson ?? {})
    .filter(([key]) => !displayedLessonFields.includes(key));
  const hasLessonContent = Boolean(activeLesson?.description || additionalLessonContent.length);

  const toggleChapterStatus = (chapterId) => {
    setCheckedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  const openChapter = (chapter) => {
    setCurrentChapter(chapter);
    setQuizProgress({
      lessonId: chapter.id,
      questionIndex: 0,
      selectedOption: null,
      submitted: false,
    });
  };

  const continueToNextChapter = () => {
    const nextChapter = chaptersList[activeChapterIndex + 1];
    if (!nextChapter || !canContinue) {
      return;
    }

    if (activeLesson) {
      setCheckedChapters((previous) => ({
        ...previous,
        [activeLesson.id]: true,
      }));
    }
    openChapter(nextChapter);
  };

  const resetQuizProgress = () => {
    setQuizProgress({
      lessonId: null,
      questionIndex: 0,
      selectedOption: null,
      submitted: false,
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        boxSizing: 'border-box',
        minHeight: '100vh',
        backgroundColor: '#020817',
        color: '#e2e8f0',
        fontFamily: 'Inter, Arial, sans-serif',
      }}
    >
      <div
        style={{
          display: isFocusMode ? 'none' : 'block',
          width: '105px',
          flex: '0 0 105px',
          boxSizing: 'border-box',
          backgroundColor: '#0f172a',
          borderRight: '1px solid #334155',
          padding: '8px',
          overflowY: 'auto',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
          {primaryViews.map((view) => {
            const isGradeView = gradeOptions.includes(view);
            const isSelected = selectedGrade === view;
            const isPastPapersView = view === 'Past Papers';
            const isFolderView = isGradeView || isPastPapersView;
            const isOpen = isFolderView && openGrade === view;
            const label = formatViewLabel(view);
            const subjects = isGradeView ? Object.keys(HIGH_SCHOOL_CURRICULUM[view] ?? {}) : paperSubjects;

            return (
              <div key={view} style={{ display: 'flex', flexDirection: 'column' }}>
                <button
                  type="button"
                  onClick={() => {
                    if (isPastPapersView) {
                      setSelectedGrade(view);
                      setOpenGrade(isOpen ? null : view);
                      if (selectedGrade !== view) {
                        setSelectedSubject(null);
                      }
                      setCurrentChapter(null);
                      resetQuizProgress();
                      setCheckedChapters({});
                    } else {
                      const nextOpen = isOpen ? null : view;
                      setOpenGrade(nextOpen);
                      setSelectedGrade(view);
                      const nextSubjects = Object.keys(HIGH_SCHOOL_CURRICULUM[view] ?? {});
                      const nextSubject = nextSubjects[0] ?? 'Biology';
                      setSelectedSubject(nextSubject);
                      const firstChapter = HIGH_SCHOOL_CURRICULUM[view]?.[nextSubject]?.lessons?.[0] ?? null;
                      setCurrentChapter(firstChapter);
                      resetQuizProgress();
                      setCheckedChapters({});
                    }
                  }}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    padding: '9px 12px',
                    borderRadius: '6px',
                    border: isSelected ? '1px solid #3b82f6' : '1px solid transparent',
                    backgroundColor: isSelected ? '#1d4ed8' : '#1e293b',
                    color: '#f8fafc',
                    fontSize: '12px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span>{label}</span>
                  {isFolderView && <span>{isOpen ? '▾' : '▸'}</span>}
                </button>

                {isFolderView && isOpen && (
                  <div
                    style={{
                      overflow: 'hidden',
                      marginTop: '6px',
                      paddingLeft: '8px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px',
                    }}
                  >
                    {subjects.map((subject) => {
                      const isSelectedSubject = selectedSubject === subject;
                      return (
                        <button
                          key={subject}
                          type="button"
                          onClick={() => {
                            setSelectedSubject(subject);
                            setSelectedGrade(view);
                            const firstChapter = HIGH_SCHOOL_CURRICULUM[view]?.[subject]?.lessons?.[0] ?? null;
                            setCurrentChapter(firstChapter);
                            resetQuizProgress();
                          }}
                          style={{
                            width: '100%',
                            boxSizing: 'border-box',
                            padding: '7px 10px',
                            borderRadius: '6px',
                            border: 'none',
                            backgroundColor: isSelectedSubject ? '#2563eb' : '#334155',
                            color: '#ffffff',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontSize: '11px',
                            textAlign: 'center',
                            transition: 'background-color 0.15s',
                          }}
                        >
                          {subject}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ display: isFocusMode ? 'none' : 'block', width: '235px', maxWidth: '20vw', minWidth: '205px', flex: '0 1 235px', boxSizing: 'border-box', backgroundColor: '#1e293b', padding: '16px', overflowY: 'auto', borderRight: '1px solid #334155' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#3b82f6', textAlign: 'center' }}>
          Ethio Matric Engine
        </h2>
        <p style={{ fontSize: '11px', color: '#64748b', margin: '0 0 20px 0', textAlign: 'center' }}>
          Dynamic Learning Platform
        </p>

        <div
          style={{
            fontSize: '12px',
            fontWeight: '700',
            color: '#cbd5e1',
            marginBottom: '14px',
            paddingBottom: '6px',
            borderBottom: '1px solid #334155',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {formatViewLabel(selectedGrade)} - {unitHeader}
        </div>

        {selectedGrade === 'Past Papers' ? (
          <div style={{ fontSize: '12px', color: '#94a3b8', padding: '10px', backgroundColor: '#0f172a', borderRadius: '6px', textAlign: 'center' }}>
            {selectedSubject
              ? `Viewing ${selectedSubject} papers in ${formatViewLabel(selectedGrade)}.`
              : `Select a subject from ${formatViewLabel(selectedGrade)} to view its papers.`}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {chaptersList.length === 0 ? (
              <div style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', marginTop: '20px' }}>
                No chapters loaded yet.
              </div>
            ) : (
              chaptersList.map((chapter) => {
                const isActive = currentChapter?.id === chapter.id;
                const isCompleted = !!checkedChapters[chapter.id];

                return (
                  <div
                    key={chapter.id}
                    onClick={() => openChapter(chapter)}
                    style={{
                      padding: '14px 12px',
                      borderRadius: '6px',
                      backgroundColor: isActive ? '#1e3a8a' : '#0f172a',
                      border: isActive ? '1px solid #3b82f6' : '1px solid transparent',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'background-color 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '85%' }}>
                      <span style={{ fontSize: '13px', color: '#e2e8f0', lineHeight: '1.4' }}>
                        {chapter.title}
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={isCompleted}
                      onChange={(event) => {
                        event.stopPropagation();
                        toggleChapterStatus(chapter.id);
                      }}
                      style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                    />
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>

      <div style={{ flex: '1 1 0', minWidth: 0, padding: isFocusMode ? 'clamp(24px, 5vw, 72px)' : 'clamp(20px, 3vw, 48px)', overflowY: 'auto' }}>
        <div style={{ width: '100%', maxWidth: isFocusMode ? 'none' : '1100px', margin: '0 auto', textAlign: 'left' }}>
          <div style={{ borderBottom: '1px solid #334155', paddingBottom: '16px', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
              <div>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 'bold', color: '#3b82f6', letterSpacing: '0.5px' }}>
                  Study Hub / {formatViewLabel(selectedGrade)} / {selectedSubject}
                </span>
                <h1 style={{ fontSize: '26px', fontWeight: 'bold', margin: '8px 0 0 0' }}>
                  {selectedGrade === 'Past Papers'
                    ? selectedSubject ? `${selectedSubject} Matric Exams` : 'Choose a Matric Exam Subject'
                      : activeLesson?.title || 'Select a Target Unit Module'}
                </h1>
              </div>
              <button
                type="button"
                aria-pressed={isFocusMode}
                onClick={() => setIsFocusMode((enabled) => !enabled)}
                style={{
                  flex: '0 0 auto',
                  padding: '9px 14px',
                  borderRadius: '6px',
                  border: '1px solid #3b82f6',
                  backgroundColor: '#1e3a8a',
                  color: '#f8fafc',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                }}
              >
                {isFocusMode ? 'Show Menu' : 'Focus Mode'}
              </button>
            </div>
          </div>

          {selectedGrade === 'Past Papers' ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px' }}>
              {activePapers.map((paper, index) => (
                <a
                  key={`${paper.year}-${index}`}
                  href={`/${paper.path}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px 12px',
                    backgroundColor: '#1e293b',
                    border: '1px solid #334155',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    color: '#3b82f6',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                    transition: 'transform 0.15s, border-color 0.15s, background-color 0.15s',
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.borderColor = '#2563eb';
                    event.currentTarget.style.backgroundColor = '#1e3a8a';
                    event.currentTarget.style.transform = 'translateY(-2px)';
                    event.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.borderColor = '#334155';
                    event.currentTarget.style.backgroundColor = '#1e293b';
                    event.currentTarget.style.transform = 'none';
                    event.currentTarget.style.color = '#3b82f6';
                  }}
                >
                  <span style={{ fontSize: '24px', marginBottom: '8px' }}>📕</span>
                  <span style={{ fontSize: '13px', color: '#e2e8f0', textAlign: 'center' }}>{paper.year}</span>
                </a>
              ))}
              {activePapers.length === 0 && (
                <div style={{ gridColumn: '1/-1', color: '#94a3b8', fontSize: '14px', textAlign: 'center', padding: '20px' }}>
                  No national entrance papers indexed for this subject yet.
                </div>
              )}
            </div>
          ) : (
            <div style={{ backgroundColor: '#1e293b', padding: 'clamp(20px, 3vw, 36px)', borderRadius: '8px', border: '1px solid #334155', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 12px 0', color: '#f1f5f9' }}>
                Active Learning Component Panel
              </h3>
              {isInteractiveQuiz ? (
                <section aria-labelledby="quiz-question" style={{ maxWidth: '900px' }}>
                  <div style={{ color: '#94a3b8', fontSize: '13px', marginBottom: '12px' }}>
                    Question {currentQuizProgress.questionIndex + 1} of {activeLesson.questions.length}
                  </div>
                  <h4 id="quiz-question" style={{ color: '#f1f5f9', fontSize: '18px', lineHeight: '1.6', margin: '0 0 20px' }}>
                    {activeQuestion?.q ?? activeQuestion?.question ?? activeQuestion?.questionText}
                  </h4>

                  <fieldset style={{ border: 0, padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
                    <legend style={{ position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px', overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
                      Choose an answer
                    </legend>
                    {questionOptions.map(([letter, text]) => {
                      const isSelected = currentQuizProgress.selectedOption === letter;
                      return (
                        <label
                          key={letter}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '12px',
                            padding: '14px 16px',
                            border: isSelected ? '1px solid #3b82f6' : '1px solid #475569',
                            borderRadius: '7px',
                            backgroundColor: isSelected ? '#172554' : '#0f172a',
                            color: '#cbd5e1',
                            fontSize: '15px',
                            lineHeight: '1.65',
                            cursor: currentQuizProgress.submitted ? 'default' : 'pointer',
                          }}
                        >
                          <input
                            type="radio"
                            name={`quiz-${activeLesson.id}`}
                            value={letter}
                            checked={isSelected}
                            disabled={currentQuizProgress.submitted}
                            onChange={() => setQuizProgress({
                              lessonId: activeLesson.id,
                              questionIndex: currentQuizProgress.questionIndex,
                              selectedOption: letter,
                              submitted: false,
                            })}
                            style={{ marginTop: '5px', accentColor: '#3b82f6' }}
                          />
                          <span><strong>{letter}.</strong> {text}</span>
                        </label>
                      );
                    })}
                  </fieldset>

                  {!currentQuizProgress.submitted ? (
                    <button
                      type="button"
                      disabled={!currentQuizProgress.selectedOption}
                      onClick={() => setQuizProgress({
                        ...currentQuizProgress,
                        lessonId: activeLesson.id,
                        submitted: true,
                      })}
                      style={{
                        marginTop: '20px',
                        padding: '11px 18px',
                        border: '1px solid #3b82f6',
                        borderRadius: '6px',
                        backgroundColor: currentQuizProgress.selectedOption ? '#2563eb' : '#334155',
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: currentQuizProgress.selectedOption ? 'pointer' : 'not-allowed',
                      }}
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <>
                      <div
                        role="status"
                        style={{
                          marginTop: '20px',
                          padding: '16px',
                          border: `1px solid ${currentQuizProgress.selectedOption === correctOption ? '#22c55e' : '#f97316'}`,
                          borderRadius: '7px',
                          backgroundColor: currentQuizProgress.selectedOption === correctOption ? '#052e16' : '#431407',
                          color: '#f8fafc',
                          lineHeight: '1.7',
                        }}
                      >
                        <strong>
                          {currentQuizProgress.selectedOption === correctOption ? 'Correct!' : 'Not quite.'}
                        </strong>
                        <p style={{ margin: '6px 0 0' }}>
                          Correct answer: {correctOption}
                          {activeQuestion?.opts?.[correctOption] ? ` — ${activeQuestion.opts[correctOption]}` : ''}
                        </p>
                        <div style={{ marginTop: '10px' }}>
                          {renderStructuredContent(
                            activeQuestion?.explanation
                              ?? `The correct choice is ${correctOption}${activeQuestion?.opts?.[correctOption] ? `: ${activeQuestion.opts[correctOption]}` : '.'}`,
                            'quiz-explanation',
                          )}
                        </div>
                      </div>
                      {currentQuizProgress.questionIndex < activeLesson.questions.length - 1 ? (
                        <button
                          type="button"
                          onClick={() => setQuizProgress({
                            lessonId: activeLesson.id,
                            questionIndex: currentQuizProgress.questionIndex + 1,
                            selectedOption: null,
                            submitted: false,
                          })}
                          style={{
                            marginTop: '16px',
                            padding: '10px 16px',
                            border: '1px solid #475569',
                            borderRadius: '6px',
                            backgroundColor: '#0f172a',
                            color: '#e2e8f0',
                            fontSize: '14px',
                            fontWeight: '600',
                            cursor: 'pointer',
                          }}
                        >
                          Next Question
                        </button>
                      ) : (
                        <p style={{ color: '#94a3b8', margin: '16px 0 0', fontSize: '14px' }}>
                          You have completed this quiz.
                        </p>
                      )}
                    </>
                  )}
                </section>
              ) : (
                <>
              {activeLesson?.description && (
                <p style={{ color: '#94a3b8', lineHeight: '1.8', fontSize: '15px', margin: '0 0 22px' }}>
                  {activeLesson.description}
                </p>
              )}
              {activeLesson?.introduction && (
                <p style={{ color: '#cbd5e1', lineHeight: '1.85', fontSize: '16px', margin: '0 0 28px' }}>
                  {activeLesson.introduction}
                </p>
              )}

              {Array.isArray(activeLesson?.foundational_traits) && activeLesson.foundational_traits.length > 0 && (
                <section style={{ marginBottom: '24px' }}>
                  <h4 style={{ color: '#f1f5f9', fontSize: '15px', margin: '0 0 10px' }}>Foundational Traits</h4>
                  {renderStructuredContent(activeLesson.foundational_traits, 'foundational-trait')}
                </section>
              )}

              {Array.isArray(activeLesson?.comparison_matrix) && activeLesson.comparison_matrix.length > 0 && (
                <section style={{ marginBottom: '24px' }}>
                  <h4 style={{ color: '#f1f5f9', fontSize: '15px', margin: '0 0 10px' }}>Comparison Matrix</h4>
                  <div style={{ overflowX: 'auto', border: '1px solid #475569', borderRadius: '6px' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '520px', textAlign: 'left', fontSize: '13px' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#0f172a', color: '#f1f5f9' }}>
                          {['Characteristic', 'Invertebrates', 'Vertebrates'].map((heading) => (
                            <th key={heading} scope="col" style={{ padding: '12px', borderBottom: '1px solid #475569' }}>
                              {heading}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {activeLesson.comparison_matrix.map((row, index) => (
                          <tr key={`${row?.characteristic ?? 'comparison'}-${index}`}>
                            <th scope="row" style={{ color: '#f1f5f9', fontWeight: '600', padding: '12px', borderBottom: '1px solid #334155', verticalAlign: 'top' }}>
                              {row?.characteristic ?? '—'}
                            </th>
                            <td style={{ color: '#cbd5e1', padding: '12px', borderBottom: '1px solid #334155', verticalAlign: 'top' }}>
                              {row?.invertebrates ?? '—'}
                            </td>
                            <td style={{ color: '#cbd5e1', padding: '12px', borderBottom: '1px solid #334155', verticalAlign: 'top' }}>
                              {row?.vertebrates ?? '—'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>
              )}

              {activeLesson?.taxonomic_divisions && (
                <section style={{ marginBottom: '24px' }}>
                  <h4 style={{ color: '#f1f5f9', fontSize: '15px', margin: '0 0 10px' }}>Taxonomic Divisions</h4>
                  {renderStructuredContent(activeLesson.taxonomic_divisions, 'taxonomic-division')}
                </section>
              )}

              {activeLesson?.chordate_relationship && (
                <section style={{ marginBottom: '24px' }}>
                  <h4 style={{ color: '#f1f5f9', fontSize: '15px', margin: '0 0 10px' }}>Chordate Relationship</h4>
                  {renderStructuredContent(activeLesson.chordate_relationship, 'chordate-relationship')}
                </section>
              )}

              {activeLesson?.biomimicry_cases && (
                <section style={{ marginBottom: '24px' }}>
                  <h4 style={{ color: '#f1f5f9', fontSize: '15px', margin: '0 0 10px' }}>Biomimicry Cases</h4>
                  {renderStructuredContent(activeLesson.biomimicry_cases, 'biomimicry-case')}
                </section>
              )}

              {additionalLessonContent.map(([key, value]) => (
                <section key={key} style={{ marginBottom: '24px' }}>
                  <h4 style={{ color: '#f1f5f9', fontSize: '15px', margin: '0 0 10px' }}>
                    {formatContentLabel(key)}
                  </h4>
                  {renderStructuredContent(value, key)}
                </section>
              ))}

              {!hasLessonContent && (
                  <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '14px', margin: 0 }}>
                    This section stays focused on the active grade and subject, so the selected chapter stream remains clean and easy to follow.
                  </p>
                )}
                </>
              )}
              {activeLesson && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginTop: '32px',
                    paddingTop: '20px',
                    borderTop: '1px solid #334155',
                  }}
                >
                  {isInteractiveQuiz && !isQuizComplete && hasNextChapter && (
                    <span style={{ alignSelf: 'center', color: '#94a3b8', fontSize: '12px', marginRight: '12px' }}>
                      Complete the quiz to continue.
                    </span>
                  )}
                  {hasNextChapter ? (
                    <button
                      type="button"
                      onClick={continueToNextChapter}
                      disabled={!canContinue}
                      style={{
                        padding: '11px 18px',
                        border: '1px solid #3b82f6',
                        borderRadius: '6px',
                        backgroundColor: canContinue ? '#2563eb' : '#334155',
                        color: '#fff',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: canContinue ? 'pointer' : 'not-allowed',
                        opacity: canContinue ? 1 : 0.65,
                      }}
                    >
                      Next Section: {chaptersList[activeChapterIndex + 1]?.title} →
                    </button>
                  ) : (
                    <p role="status" style={{ color: '#94a3b8', fontSize: '14px', margin: 0 }}>
                      You have reached the end of this subject.
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
