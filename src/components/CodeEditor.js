import React, { useState, useEffect } from 'react';
import './CodeEditor.css';
function CodeEditor(props) {
// console.log(props.nm);  
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [toggle, setToggle] = useState(1);
 
useEffect(() => {
  const runCodeEffect = () => {
    runCode();
  };
  runCodeEffect();
}, [htmlCode, cssCode]);
function updateToggle(id) {
    setToggle(id);
  }
 


  const runCode = () => {
    const output = document.getElementById('output');
    if (output) {
      const doc = output.contentDocument;
      if (doc) {
        doc.body.innerHTML = htmlCode + "<style>" + cssCode + "</style>";
       
      }
    }
  };
  const handleHtmlChange = (event) => {
    setHtmlCode(event.target.value);
  };

  const handleCssChange = (event) => {
    setCssCode(event.target.value);
  };

  
  return (
    
    <div className="codeeditordiv">
      <div className="left">
        <li>Output</li>
        <iframe id="output" title="output"></iframe>
      </div>
      <div className="right">
        <div className="tabs">
            <ul>
              <li className="h" onClick={() => updateToggle(1)}>
                <label ><ion-icon name="logo-html5"></ion-icon></label> HTML
              </li>
              <li className="c" onClick={() => updateToggle(2)}>
                <label ><ion-icon name="logo-css3"></ion-icon></label> CSS
              </li>
            </ul>
          </div>
          <div className={toggle === 1 ? "show-content" : "content"}>
            <textarea className="html" value={htmlCode} onChange={handleHtmlChange}></textarea>
          </div>
          <div className={toggle === 2 ? "show-content" : "content"}>
            <textarea className="css" value={cssCode} onChange={handleCssChange}></textarea>
          </div>
      </div>
    </div>
  );
}

export default CodeEditor
