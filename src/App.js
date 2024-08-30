import React, { useState } from 'react';

function App() {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f0f0f0',
        padding: '5px 10px',
        height: '40px',
        borderBottom: '1px solid #ccc',
      }}>
        <div>My Electron App</div>
        <img 
          src="calendar-icon.png" 
          alt="Calendar" 
          style={{ width: '24px', height: '24px', cursor: 'pointer' }} 
          onClick={() => setShowCalendar(!showCalendar)}
        />
      </div>
      {showCalendar && (
        <div id="calendar" style={{ marginTop: '10px' }}>
          <p>Calendar will be shown here.</p>
        </div>
      )}
    </div>
  );
}

export default App;
