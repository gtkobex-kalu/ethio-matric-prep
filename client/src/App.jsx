import { useState } from 'react';

// Hardcoded Grade 9 Curriculum Flow mimicking Khan Academy structure
const GRADE_9_CURRICULUM = {
  unitTitle: "Unit 1: Structure and Functions of Cells",
  lessons: [
    { id: "L1", type: "lesson", title: "1.1 Introduction to the Cell Theory", completed: false },
    { id: "L2", type: "lesson", title: "1.2 Types of Cells: Prokaryotic vs Eukaryotic", completed: false },
    { id: "L3", type: "lesson", title: "1.3 Animal Cell Structures and Functions", completed: false },
    { id: "Q1", type: "quiz", title: "⚡ Quiz 1 (Lessons 1.1 - 1.3)", completed: false, questionsCount: 5 },
    { id: "L4", type: "lesson", title: "1.4 Plant Cell Structures and Specialized Tissues", completed: false },
    { id: "L5", type: "lesson", title: "1.5 Cell Membrane Transport Mechanisms", completed: false },
    { id: "UT1", type: "test", title: "🏆 Unit 1 Comprehensive Test", completed: false, questionsCount: 15 }
  ]
};

export default function App() {
  const [currentContent, setCurrentContent] = useState(GRADE_9_CURRICULUM.lessons[0]);
  const [completedTracks, setCompletedTracks] = useState({});
  const [quizScore, setQuizScore] = useState(null);

  const toggleComplete = (id) => {
    setCompletedTracks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleQuizSubmit = (score) => {
    setQuizScore(score);
    if(score >= 80) {
      setCompletedTracks(prev => ({ ...prev, [currentContent.id]: true }));
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: '#111827', color: '#f3f4f6', fontFamily: 'sans-serif' }}>
      
      {/* Left Navigation Sidebar */}
      <div style={{ width: '320px', borderRight: '1px solid #374151', padding: '20px', overflowY: 'auto' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '4px', color: '#3b82f6' }}>Ethio Matric Prep</h2>
        <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '20px' }}>Grade 9 Curriculum Tracker</p>
        
        <div style={{ fontWeight: '600', fontSize: '14px', marginBottom: '12px', color: '#e5e7eb' }}>
          {GRADE_9_CURRICULUM.unitTitle}
        </div>

        <div style={{ display: 'flex', flexDirection: 'col', gap: '8px' }}>
          {GRADE_9_CURRICULUM.lessons.map((item) => {
            const isSelected = currentContent.id === item.id;
            const isDone = completedTracks[item.id];
            
            let badgeColor = '#3b82f6'; 
            if (item.type === 'quiz') badgeColor = '#f59e0b';
            if (item.type === 'test') badgeColor = '#10b981';

            return (
              <div 
                key={item.id}
                onClick={() => { setCurrentContent(item); setQuizScore(null); }}
                style={{
                  padding: '12px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  backgroundColor: isSelected ? '#1e3a8a' : '#1f2937',
                  border: isSelected ? '1px solid #3b82f6' : '1px solid transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'background-color 0.2s'
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '80%' }}>
                  <span style={{ fontSize: '11px', textTransform: 'uppercase', fontWeight: 'bold', color: badgeColor }}>
                    {item.type}
                  </span>
                  <span style={{ fontSize: '13px', color: '#f3f4f6', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {item.title}
                  </span>
                </div>
                <input 
                  type="checkbox" 
                  checked={!!isDone} 
                  onChange={(e) => { e.stopPropagation(); toggleComplete(item.id); }}
                  style={{ width: '16px', height: '16px', cursor: 'pointer' }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Content Panel Display */}
      <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          
          <div style={{ borderBottom: '1px solid #374151', paddingBottom: '16px', marginBottom: '24px' }}>
            <span style={{ textTransform: 'uppercase', fontSize: '12px', fontWeight: 'bold', color: '#3b82f6', letterSpacing: '1px' }}>
              Dashboard View / Grade 9
            </span>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginTop: '8px' }}>{currentContent.title}</h1>
          </div>

          {currentContent.type === 'lesson' && (
            <div style={{ backgroundColor: '#1f2937', padding: '24px', borderRadius: '8px', border: '1px solid #374151' }}>
              <div style={{ width: '100%', height: '360px', backgroundColor: '#000', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <span style={{ color: '#9ca3af' }}>📺 [ Video Resource Placeholder for {currentContent.title} ]</span>
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>Lesson Overview</h3>
              <p style={{ color: '#9ca3af', lineHeight: '1.6', fontSize: '15px' }}>
                Welcome to your interactive workspace. This module contains matching lesson materials mapped strictly from the Ethiopian Grade 9 Natural Science textbook framework. Review the recorded materials above, then click the checkbox in the sidebar once you've completed this section to track your progress!
              </p>
              <button 
                onClick={() => toggleComplete(currentContent.id)}
                style={{ marginTop: '24px', backgroundColor: completedTracks[currentContent.id] ? '#dc2626' : '#2563eb', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}
              >
                {completedTracks[currentContent.id] ? "Mark as Incomplete" : "Mark Lesson as Complete"}
              </button>
            </div>
          )}

          {(currentContent.type === 'quiz' || currentContent.type === 'test') && (
            <div style={{ backgroundColor: '#1f2937', padding: '24px', borderRadius: '8px', border: '1px solid #374151' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Interactive Assessment Module</h3>
              <p style={{ color: '#9ca3af', marginBottom: '20px', fontSize: '14px' }}>
                This resource contains **{currentContent.questionsCount} multiple-choice questions** compiled from previous matric-level evaluation trends.
              </p>
              
              {quizScore === null ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ border: '1px solid #374151', padding: '16px', borderRadius: '6px', backgroundColor: '#111827' }}>
                    <p style={{ fontWeight: '500', marginBottom: '12px', fontSize: '15px' }}>Sample Question 1: Which of the following statements is a core tenet of the classical cell theory?</p>
                    <label style={{ display: 'block', margin: '8px 0', fontSize: '14px', cursor: 'pointer' }}><input type="radio" name="sample" /> A) Cells form spontaneously out of non-living matter.</label>
                    <label style={{ display: 'block', margin: '8px 0', fontSize: '14px', cursor: 'pointer' }}><input type="radio" name="sample" /> B) All living organisms are composed of one or more cells.</label>
                    <label style={{ display: 'block', margin: '8px 0', fontSize: '14px', cursor: 'pointer' }}><input type="radio" name="sample" /> C) Multicellular organisms do not contain unique cells.</label>
                  </div>
                  <button 
                    onClick={() => handleQuizSubmit(100)}
                    style={{ backgroundColor: '#10b981', color: '#fff', border: 'none', padding: '12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '15px' }}
                  >
                    Submit Assessment Answers
                  </button>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ fontSize: '48px', marginBottom: '8px' }}>🎉</div>
                  <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#10b981' }}>Score: {quizScore}%</h4>
                  <p style={{ color: '#9ca3af', marginTop: '4px', fontSize: '14px' }}>Excellent work! This assessment tier has been updated in your history ledger.</p>
                </div>
              )}
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
