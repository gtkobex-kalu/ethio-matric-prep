import { useState } from 'react';
import { HIGH_SCHOOL_CURRICULUM } from "./curriculumData.js/curriculumData.js";

export default function App() {
  const [selectedGrade, setSelectedGrade] = useState("Grade_10");
  const [selectedSubject, setSelectedSubject] = useState("Mathematics");
  
  // Safely extract curriculum objects based on sidebar state changes
  const targetSegment = HIGH_SCHOOL_CURRICULUM[selectedGrade]?.[selectedSubject] || {};
  const chaptersList = targetSegment.lessons || [];
  const unitHeader = targetSegment.unitTitle || "Chapters View";

  const [currentChapter, setCurrentChapter] = useState(chaptersList[0] || {});
  const [checkedChapters, setCheckedChapters] = useState({});

  const toggleChapterStatus = (id) => {
    setCheckedChapters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePanelChange = (gradeKey, subjectKey) => {
    setSelectedGrade(gradeKey);
    setSelectedSubject(subjectKey);
    const upgradedSegment = HIGH_SCHOOL_CURRICULUM[gradeKey]?.[subjectKey]?.lessons || [];
    setCurrentChapter(upgradedSegment[0] || {});
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#0f172a', color: '#f8fafc', fontFamily: 'sans-serif' }}>
      
      {/* 🧭 Control Sidebar Tab Panel */}
      <div style={{ width: '110px', backgroundColor: '#1e293b', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 10px', gap: '16px', borderRight: '1px solid #334155' }}>
        
        {/* Grade Option Dropdown */}
        <div style={{ width: '100%', marginBottom: '6px' }}>
          <label style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase', display: 'block', marginBottom: '6px', textAlign: 'center' }}>Grade Tier</label>
          <select 
            value={selectedGrade} 
            onChange={(e) => handlePanelChange(e.target.value, selectedSubject)}
            style={{ width: '100%', padding: '6px 4px', borderRadius: '4px', backgroundColor: '#334155', color: '#fff', border: 'none', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
          >
            <option value="Grade_9">G-9</option>
            <option value="Grade_10">G-10</option>
            <option value="Grade_11">G-11</option>
            <option value="Grade_12">G-12</option>
          </select>
        </div>

        <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Subjects</span>
        
        {/* Core Subject Pickers */}
        {["Mathematics", "Physics", "Chemistry", "Biology", "English"].map((sub) => {
          const isSelected = selectedSubject === sub;
          return (
            <button
              key={sub}
              onClick={() => handlePanelChange(selectedGrade, sub)}
              style={{
                width: '100%',
                padding: '10px 2px',
                borderRadius: '6px',
                border: 'none',
                backgroundColor: isSelected ? '#2563eb' : '#334155',
                color: '#ffffff',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '11px',
                textAlign: 'center',
                transition: 'background-color 0.15s'
              }}
            >
              {sub.substring(0, 4)}
            </button>
          );
        })}
      </div>

      {/* 📋 Chapter Progression Sidebar */}
      <div style={{ width: '310px', backgroundColor: '#1e293b', padding: '20px', overflowY: 'auto', borderRight: '1px solid #334155' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0 0 4px 0', color: '#3b82f6', textAlign: 'center' }}>Ethio Matric Engine</h2>
        <p style={{ fontSize: '11px', color: '#64748b', margin: '0 0 20px 0', textAlign: 'center' }}>Dynamic Learning Platform</p>
        
        <div style={{ fontSize: '12px', fontWeight: '700', color: '#cbd5e1', marginBottom: '14px', paddingBottom: '6px', borderBottom: '1px solid #334155', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {selectedGrade.replace("_", " ")} - {unitHeader}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {chaptersList.map((chapter) => {
            const isActive = currentChapter.id === chapter.id;
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
                  transition: 'background-color 0.2s'
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
                  onChange={(e) => { e.stopPropagation(); toggleChapterStatus(chapter.id); }}
                  style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                />
              </div>
            );
          })}
          {chaptersList.length === 0 && (
            <div style={{ fontSize: '12px', color: '#64748b', textAlign: 'center', marginTop: '20px' }}>No chapters loaded yet.</div>
          )}
        </div>
      </div>

      {/* 🖥️ Dynamic Display Panel */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ borderBottom: '1px solid #334155', paddingBottom: '16px', marginBottom: '24px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 'bold', color: '#3b82f6', letterSpacing: '0.5px' }}>
              Study Hub / {selectedGrade.replace("_", " ")} / {selectedSubject}
            </span>
            <h1 style={{ fontSize: '26px', fontWeight: 'bold', margin: '8px 0 0 0' }}>
              {currentChapter.title || "Select a Target Unit Module"}
            </h1>
          </div>

          <div style={{ backgroundColor: '#1e293b', padding: '30px', borderRadius: '8px', border: '1px solid #334155', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.3)' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 12px 0', color: '#f1f5f9' }}>
              Active Learning Component Panel
            </h3>
            <p style={{ color: '#94a3b8', lineHeight: '1.7', fontSize: '14px', margin: 0 }}>
              This structural container block handles your live workbook features. As you start your regular Grade 11 school week sessions this Thursday, we can drop matching lecture documents, active recall note stacks, and question sets right into this panel viewport display!
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
