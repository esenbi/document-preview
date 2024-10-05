import './App.css';
import { useState, useEffect } from 'react';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
// import { pdf } from "./pdf";

function App() {
  const [docs, setDocs] = useState([
    // { uri: "https://url-to-my-pdf.pdf" }, // Remote file
    // { uri: pdf }, // Local File
    // { uri: './example-files/file-sample_100kB.doc', fileType: 'doc' }, // Local File
    // { uri: './example-files/file_example_PPT_250kB.ppt' }, // Local File
  ])

  useEffect(() => {
    const showFile = (blob) => {
      setDocs([{
        uri: blob,
      }])
    }
    window.showFile = showFile;
  }, [])

  return (
    <>  
      <h1>Preview document</h1>
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />
    </>
  );
}

export default App;
