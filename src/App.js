import { useState } from "react";
import Editor from "./Components/Editor";

function App() {
  const [html, sethtml] = useState("");
  const [css, setcss] = useState("");
  const [js, setjs] = useState("");
  // const [output, setOutput] = useState("");

  const srcDoc = `
  <html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
  </html
  `;

  return (
    <>
      <div class="pane top-pane">
        <Editor title="HTML" language="xml" value={html} onChange={sethtml} />
        <Editor title="CSS" language="css" value={css} onChange={setcss} />
        <Editor title="JS" language="javascript" value={js} onChange={setjs} />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
