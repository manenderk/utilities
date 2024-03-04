import { Tooltip } from '@mantine/core';
import { useEffect, useState } from 'react';
import CopyToClipboard from '../../common/CopyToClipboard';
import GetEOL from '../../common/GetEOL';
import HelpTextComponent from '../HelpTextComponent/HelpTextComponent';

const CsvToHtmlTableComponent = () => {
  const tab = '\t';
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const getTabs = (count) => {
    let tabs = '';
    for (let i = 0; i < count; i++) {
      tabs += tab;
    }
    return tabs;
  };

  const processInput = () => {
    const inp = inputText.trim();
    if (!inp) {
      setOutputText('');
      return;
    }

    const eol = GetEOL(inp);
    let out = `<div className="table-responsive">${eol}`;
    out += `${getTabs(1)}<table className="table table-bordered">${eol}`;


    
    const rows = inp.split(eol);
    
    rows.forEach((row, index) => {
      const cols = row.split(tab);
      if (index === 0) {
        out += `${getTabs(2)}<thead>${eol}`;
        out += `${getTabs(3)}<tr>${eol}`;

        cols.forEach(col => {
          col = col.trim();
          out += `${getTabs(4)}<th>${col}</th>${eol}`;
        });

        out += `${getTabs(3)}</tr>${eol}`;
        out += `${getTabs(2)}</thead>${eol}`;
        return;
      }

      if (index === 1) {
        out += `${getTabs(2)}<tbody>${eol}`;
      }

      out += `${getTabs(3)}<tr>${eol}`;

      cols.forEach(col => {
        col = col.trim();
        out += `${getTabs(4)}<td>${col}</td>${eol}`;
      });

      out += `${getTabs(3)}</tr>${eol}`;


      if (index === rows.length - 1) {
        out += `${getTabs(2)}</tbody>${eol}`; 
      }
    });

    out += `${getTabs(1)}</table>${eol}`;
    out += `</div>${eol}`;

    setOutputText(out);




  }

  useEffect(() => {
    console.log(inputText);
    processInput();
  }, [inputText])
  

  return (
    <div className="row animate__animated animate__fadeIn">
      <div className="col-md-12 mb-4">
        <HelpTextComponent>
          <p>Converts a CSV/Text to html table</p>
          <p>Below is the example conversion</p>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>CSV Input</th>
                  <th>HTML Table</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <pre>
Log ID	Cleaning Name	Cleaning Status	Date Completed	Campus	Rooms<br />
473690	Consumables Incubator - Germicide	In Process		East Campus	INC-054<br />
473717	ECDS - Decon-Spore	In Process		East Campus	M336.1<br />
473738	Equipment Cleaning (Decon-Quat)	In Process		West Campus	118<br />
473739	Equipment Cleaning (Decon-Quat)	In Process		West Campus	122<br />
473740	Equipment Cleaning (Decon-Quat)	In Process		West Campus	124<br />
                    </pre>
                  </td>
                  <td>
<pre>
&lt;div className=&quot;table-responsive&quot;&gt;<br />&lt;table className=&quot;table table-bordered&quot;&gt;<br />&lt;thead&gt;<br />&lt;tr&gt;<br />&lt;th&gt;Log ID&lt;/th&gt;<br />&lt;th&gt;Cleaning Name&lt;/th&gt;<br />&lt;th&gt;Cleaning Status&lt;/th&gt;<br />&lt;th&gt;Date Completed&lt;/th&gt;<br />&lt;th&gt;Campus&lt;/th&gt;<br />&lt;th&gt;Rooms&lt;/th&gt;<br />&lt;/tr&gt;<br />&lt;/thead&gt;<br />&lt;tbody&gt;<br />&lt;tr&gt;<br />&lt;td&gt;473690&lt;/td&gt;<br />&lt;td&gt;Consumables Incubator - Germicide&lt;/td&gt;<br />&lt;td&gt;In Process&lt;/td&gt;<br />&lt;td&gt;&lt;/td&gt;<br />&lt;td&gt;East Campus&lt;/td&gt;<br />&lt;td&gt;INC-054&lt;/td&gt;<br />&lt;/tr&gt;<br />&lt;tr&gt;<br />&lt;td&gt;473717&lt;/td&gt;<br />&lt;td&gt;ECDS - Decon-Spore&lt;/td&gt;<br />&lt;td&gt;In Process&lt;/td&gt;<br />&lt;td&gt;&lt;/td&gt;<br />&lt;td&gt;East Campus&lt;/td&gt;<br />&lt;td&gt;M336.1&lt;/td&gt;<br />&lt;/tr&gt;<br />&lt;tr&gt;<br />&lt;td&gt;473738&lt;/td&gt;<br />&lt;td&gt;Equipment Cleaning (Decon-Quat)&lt;/td&gt;<br />&lt;td&gt;In Process&lt;/td&gt;<br />&lt;td&gt;&lt;/td&gt;<br />&lt;td&gt;West Campus&lt;/td&gt;<br />&lt;td&gt;118&lt;/td&gt;<br />&lt;/tr&gt;<br />&lt;tr&gt;<br />&lt;td&gt;473739&lt;/td&gt;<br />&lt;td&gt;Equipment Cleaning (Decon-Quat)&lt;/td&gt;<br />&lt;td&gt;In Process&lt;/td&gt;<br />&lt;td&gt;&lt;/td&gt;<br />&lt;td&gt;West Campus&lt;/td&gt;<br />&lt;td&gt;122&lt;/td&gt;<br />&lt;/tr&gt;<br />&lt;tr&gt;<br />&lt;td&gt;473740&lt;/td&gt;<br />&lt;td&gt;Equipment Cleaning (Decon-Quat)&lt;/td&gt;<br />&lt;td&gt;In Process&lt;/td&gt;<br />&lt;td&gt;&lt;/td&gt;<br />&lt;td&gt;West Campus&lt;/td&gt;<br />&lt;td&gt;124&lt;/td&gt;<br />&lt;/tr&gt;<br />&lt;/tbody&gt;<br />&lt;/table&gt;<br />&lt;/div&gt;
</pre>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </HelpTextComponent>
      </div>
      <div className="col-md-6">
        <h5 className="text-center">Table Input</h5>
        <div className="form-group mb-3">
          <textarea
            rows="20"
            className="form-control"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="col-md-6">
        <h5 className="text-center">HTML Table</h5>
        <div className="form-group mb-3 position-relative">
          <textarea
            rows="20"
            className="form-control"
            value={outputText}
            readOnly
          ></textarea>
          <div className="input-copy-button">
            <Tooltip label="Copy">
              <button
                className="btn btn-secondary"
                onClick={() => CopyToClipboard(null, outputText)}
              >
                <i className="fa fa-clipboard"></i>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CsvToHtmlTableComponent