import dynamic from 'next/dynamic'
import { useState , useEffect , useRef } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";


import Link from 'next/link'









const Labs = ()=> {
  const [contentMarkdown, setcontentMarkdown] = useState('')
  const [theme, settheme] = useState('vs-dark')
  const [language, setLanguage] = useState('javascript')
  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor; 
  }
  const saveCode = async ()=> {
    // save to folder on computer
    // alert(editorRef.current.getValue());
    localStorage.setItem('myCode',editorRef.current.getValue() )
    const codeContent = editorRef.current.getValue()
    const backendvalue = {
      codeContent,
      language
    }
    const blob = new Blob([editorRef.current.getValue()], { type: `text/${language}` });
    console.log(blob , );
    const result = await fetch( 'api/saveCode',  {
      method:'POST' ,
      body: JSON.stringify(backendvalue)
    })
    const response = await result.json()
    console.log(response)
      
    console.log(language , blob );
  }

    



  return (
    <div>
        <h2>laboratory</h2>


        <button className='p-2 border bg-blue-700 text-white rounded  ' onClick={saveCode}>Save Code Snippet</button>
        <div className="flex justify-between my-2 ">
            <div className="flex  ">
              <button onClick={() => setLanguage('html')} className='p-2 border bg-red-600 rounded '>HTML</button>
              <button  onClick={() => setLanguage('css')} className='p-2 border mx-2 bg-gray-700 rounded'>CSS</button>
              <button  onClick={() => setLanguage('javascript')} className='p-2 border bg-yellow-600 rounded'>Javascript</button>
            </div>
            <div className="flex ">
              <button  onClick={() => settheme("vs-dark")} className='p-2 border mx-2 bg-black text-white rounded'>Dark Theme</button>
              <button  onClick={() => settheme("vs-light")} className='p-2 border mx-2 rounded'>Light Theme</button>
            </div>
        </div>


        <Editor
          height="90vh"
          theme={theme}
          defaultLanguage={language}
          defaultValue="// Type your  Code here below"
          onMount={handleEditorDidMount}
          onChange={(value ) =>setcontentMarkdown(value)}

        />

  
       
    </div>
  )
}

export default Labs