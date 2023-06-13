import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
import { Controlled as CodeMirror } from "react-codemirror2";
import "../Styles/style.css";

export default function Editor(props) {
  const { title, language, value, onChange } = props;

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <div className="editor-container">
      <div className="editor-title">{title}</div>
      <CodeMirror
        onBeforeChange={handleChange}
        value={value}
        // className="code-mirror"
        options={{
          lineWrapping: true,
          lineNumbers: true,
          mode: language,
          lint: true,
        }}
      />
    </div>
  );
}
