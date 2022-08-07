import React from "react";
// import { render } from "react-dom";
// import AceEditor from "react-ace";
// import { split as SplitEditor } from "react-ace";
// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/theme-github";
// import "ace-builds/src-noconflict/ext-language_tools";


// export default function Editor({value ,onChange}) {

//   const [open, setOpen] = useState(true)

//   function onChange( value) {
    // onChange(value);
//     console.log("change" , value);
//   }
//     return (
//     <SplitEditor
//         mode="java"
//         theme="github"
//         onChange={onChange}
//         splits={2}
//         orientation="below"
//         value={value}
//         name="code_editor"
//         editorProps={{ $blockScrolling: true }}
//     />,
//     document.getElementById("texteditor")
//     );




// import React, { useState } from 'react'
// import 'codemirror/lib/codemirror.css'
// import 'codemirror/theme/material.css'
// import 'codemirror/mode/xml/xml'
// import 'codemirror/mode/javascript/javascript'
// import 'codemirror/mode/css/css'
// import { Controlled as ControlledEditor } from 'react-codemirror2'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'

// export default function Editor(props) {
//   const {
//     language,
//     displayName,
//     value,
//     onChange
//   } = props
//   const [open, setOpen] = useState(true)

//   function handleChange(editor, data, value) {
//     onChange(value)
//   }

//   return (
//     <div className={`editor-container ${open ? '' : 'collapsed'}`}>
//       <div className="editor-title">
//         {displayName}
//         <button
//           type="button"
//           className="expand-collapse-btn"
//           onClick={() => setOpen(prevOpen => !prevOpen)}
//         >
//           <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
//         </button>
//       </div>
//       <ControlledEditor
//         onBeforeChange={handleChange}
//         value={value}
//         className="code-mirror-wrapper"
//         options={{
//           lineWrapping: true,
//           lint: true,
//           mode: language,
//           theme: 'material',
//           lineNumbers: true
//         }}
//       />
//     </div>
//   )
// }
