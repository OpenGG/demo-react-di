import { useState } from 'react';
import './App.css';
import { DIContainer } from './Container';
import { alertLog } from './Services/Log/alertLog';
import { consoleLog } from './Services/Log/consoleLog';
import { BizXXXView } from './Biz/XXX/BizXXXView';
import { PrePreview } from './Components/Preview/PrePreview';
import { TextAreaPreview } from './Components/Preview/TextAreaPreview';

function App() {
  const [isPre, setIsPre] = useState(true);
  const [isAlert, setIsAlert] = useState(true);

  return (
    <div className="App">
      <p>
        <button onClick={() => setIsPre((b) => !b)}>{`render with ${
          isPre ? '<pre>' : '<textarea>'
        } element`}</button>
      </p>

      <p>
        <button onClick={() => setIsAlert((b) => !b)}>{`log to ${
          isAlert ? 'alert' : 'console'
        }`}</button>
      </p>

      <DIContainer
        r={{
          ILog: isAlert ? alertLog : consoleLog,
          IPreview: isPre ? PrePreview : TextAreaPreview,
        }}
      >
        <BizXXXView
          title="Outer Scope"
          content="preview content of outer scope"
        />

        <DIContainer
          r={{
            ILog: consoleLog,
            IPreview: TextAreaPreview,
          }}
        >
          <BizXXXView
            title="Inner Scope"
            content="preview content of inner scope"
          />
        </DIContainer>
      </DIContainer>
    </div>
  );
}

export default App;
