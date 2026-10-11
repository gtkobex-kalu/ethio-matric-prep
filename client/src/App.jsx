import { useEffect, useMemo, useState } from 'react';
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

function App() {
  const defaultGrade = 'Grade_9';
  const defaultSubject = Object.keys(HIGH_SCHOOL_CURRICULUM[defaultGrade] ?? {})[0] ?? 'Biology';

  const [selectedGrade, setSelectedGrade] = useState(defaultGrade);
  const [selectedSubject, setSelectedSubject] = useState(defaultSubject);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [checkedChapters, setCheckedChapters] = useState({});
  const [openGrade, setOpenGrade] = useState(defaultGrade);

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

  useEffect(() => {
    if (selectedGrade === 'Past Papers') {
      return;
    }

    const validSubjects = Object.keys(HIGH_SCHOOL_CURRICULUM[selectedGrade] ?? {});
    if (!validSubjects.includes(selectedSubject)) {
      setSelectedSubject(validSubjects[0] ?? 'Biology');
    }
  }, [selectedGrade, selectedSubject]);

  useEffect(() => {
    if (selectedGrade === 'Past Papers' || chaptersList.length === 0) {
      setCurrentChapter(null);
      return;
    }

    if (!currentChapter || !chaptersList.some((chapter) => chapter.id === currentChapter.id)) {
      setCurrentChapter(chaptersList[0]);
    }
  }, [selectedGrade, chaptersList, currentChapter]);

  const unitHeader = selectedGrade === 'Past Papers'
    ? 'Matric Exams Library'
    : HIGH_SCHOOL_CURRICULUM[selectedGrade]?.[selectedSubject]?.unitTitle ?? 'Unit Overview';

  const toggleChapterStatus = (chapterId) => {
    setCheckedChapters((prev) => ({
      ...prev,
      [chapterId]: !prev[chapterId],
    }));
  };

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100vh',
        backgroundColor: '#020817',
        color: '#e2e8f0',
        fontFamily: 'Inter, Arial, sans-serif',
      }}
    >
      <div
        style={{
          width: '160px',
          flex: '0 0 160px',
          boxSizing: 'border-box',
          backgroundColor: '#0f172a',
          borderRight: '1px solid #334155',
          padding: '10px',
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
                      setCheckedChapters({});
                    } else {
                      const nextOpen = isOpen ? null : view;
                      setOpenGrade(nextOpen);
                      setSelectedGrade(view);
                      const nextSubjects = Object.keys(HIGH_SCHOOL_CURRICULUM[view] ?? {});
                      setSelectedSubject(nextSubjects[0] ?? 'Biology');
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

      <div style={{ width: '310px', backgroundColor: '#1e293b', padding: '20px', overflowY: 'auto', borderRight: '1px solid #334155' }}>
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
                    onClick={() => setCurrentChapter(chapter)}
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

      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ borderBottom: '1px solid #334155', paddingBottom: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 'bold', color: '#3b82f6', letterSpacing: '0.5px' }}>
              Study Hub / {formatViewLabel(selectedGrade)} / {selectedSubject}
            </span>
            <h1 style={{ fontSize: '26px', fontWeight: 'bold', margin: '8px 0 0 0' }}>
              {selectedGrade === 'Past Papers'
                ? selectedSubject ? `${selectedSubject} Matric Exams` : 'Choose a Matric Exam Subject'
                : currentChapter?.title || 'Select a Target Unit Module'}
            </h1>
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
            <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '8px', border: '1px solid #334155', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 12px 0', color: '#f1f5f9' }}>
                Active Learning Component Panel
              </h3>
              <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '14px', margin: 0 }}>
                This section stays focused on the active grade and subject, so the selected chapter stream remains clean and easy to follow.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
