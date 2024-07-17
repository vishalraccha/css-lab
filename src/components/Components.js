import './Components.css';
import React, { useState, useEffect } from 'react';

function Components({ name, output, html, css }) {
  const [htmlCode, setHtmlCode] = useState(html);
  const [cssCode, setCssCode] = useState(css);
  const [toggle, setToggle] = useState(1);

  function handleHtmlChange(event) {
    setHtmlCode(event.target.value);
  }

  function handleCssChange(event) {
    setCssCode(event.target.value);
  }

  useEffect(() => { 
    const outputElement = document.getElementById(name);
    outputElement.innerHTML = `
      <style>${cssCode}</style>
      ${htmlCode}
    `;
  }, [htmlCode, cssCode, name]);

  function updateToggle(id) {
    setToggle(id);
  }

  return (
    <>
      <div className="edit">
        <div className="component">
         <div className="component-body" id={name}>
            {output}
          </div>
        </div>
        <div className="codingpart">
          <div className="tabs">
            <ul>
              <li onClick={() => updateToggle(1)}>
                <label><ion-icon name="logo-html5"></ion-icon></label> HTML
              </li>
              <li onClick={() => updateToggle(2)}>
                <label><ion-icon name="logo-css3"></ion-icon></label> CSS
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
    </>
  );
}

export default Components;
