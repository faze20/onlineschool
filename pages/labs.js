import Editor from '../components/Editor'

import { useState } from "react";
// import { render } from "react-dom";

import { split as SplitEditor } from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";



  

// Render editor
// render(
//     <SplitEditor
//       mode="java"
//       theme="github"
//       onChange={onChange}
//       splits={2}
//       orientation="below"
//       value={["hi", "hello"]}
//       name="UNIQUE_ID_OF_DIV"
//       editorProps={{ $blockScrolling: true }}
//     />,
//     document.getElementById("texteditor")
//   );

function Labs() {
    const [htmlValue , setHtmlValue] = useState('')
    const [cssValue , setCSSValue] = useState('')

    if (typeof window === 'undefined') {
        return (
            <div>
                <h2>Lab</h2>
            </div>
        )
    }
    console.log(typeof(window))
    
    const onChange= (newValue)=> {
        console.log("change", newValue);
        setHtmlValue(newValue)
      }
  return (
    <div>
        <h2>laboratory</h2>
  
       
    </div>
  )
}

export default Labs