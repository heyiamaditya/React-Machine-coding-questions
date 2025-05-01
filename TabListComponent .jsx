import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: 'Tab 1', content: 'This is content for Tab 1' },
    { title: 'Tab 2', content: 'This is content for Tab 2' },
    { title: 'Tab 3', content: 'This is content for Tab 3' },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>React Tab List Component</h2>

        <div style={{ display: 'flex', borderBottom: '1px solid #ddd',alignItems:'center',justifyContent:'space-around' }}>
        {tabs.map((tab, index) => (
          <button
              onClick={()=>{setActiveTab(index)}}
              key={index}
              style ={{
                   padding:'10px 20px',
                  cursor:'pointer',
                  backgroundColor : index===activeTab ?'#ddd':'white'
              }}
          >
            {tab.title}
          </button>
        ))}
      </div>

        <div style={{ padding: '20px', border:'1px solid #ddd' , marginTop:'10px'}}>
            <p>{tabs[activeTab].content}</p>
        </div>
        
    </div>
  );
}
