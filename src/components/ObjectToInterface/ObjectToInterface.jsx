import { Tooltip } from "@mantine/core";
import { useEffect, useState } from "react";
import CopyToClipboard from "../../common/CopyToClipboard";
import {
  GetObjectFromJsonString,
  GetObjectFromString
} from "../../common/ObjectUtils";
import HelpTextComponent from "../HelpTextComponent/HelpTextComponent";

const ObjectToInterface = () => {
  const [inputObject, setInputObject] = useState("");
  const [outputObject, setOutputObject] = useState("");

  const processAndCovert = () => {
    if (!inputObject) {
      setOutputObject("");
      return;
    }

    let input = inputObject.trim();
    let obj = null;
    obj = GetObjectFromJsonString(input);
    if (obj === null) {
      obj = GetObjectFromString(input);
    }
    if (obj === null || typeof obj !== "object") {
      setOutputObject("");
      return;
    }

    let result = "export interface INTERFACENAME {\r\n";
    for (let key in obj) {
      let value = obj[key];
      if (typeof value === "string") {
        const date = new Date(value);
        if (!isNaN(date)) {
          result += `  ${key}: Date;\r\n`;
        } else {
          result += `  ${key}: string;\r\n`;
        }
      } else if (typeof value === "number") {
        result += `  ${key}: number;\r\n`;
      } else if (typeof value === "boolean") {
        result += `  ${key}: boolean;\r\n`;
      } else if (typeof value === "object") {
        result += `  ${key}: UNDETERMINED;\r\n`;
      }
    }
    result += "}";
    setOutputObject(result);
  };

  useEffect(() => {
    processAndCovert();
  }, [inputObject]);

  return (
    <div className="row">
      <div className="col-md-12 mb-4">
        <HelpTextComponent>
          <p>Converts a JSON/Object into an interface</p>
          <p>Below is the example conversion</p>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>JSON/Object</th>
                  <th>Interface</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    &#123;
                    <br />
                    &nbsp;&nbsp;&quot;name&quot;: &quot;John&quot;,
                    <br />
                    &nbsp;&nbsp;&quot;age&quot;: 30,
                    <br />
                    &nbsp;&nbsp;&quot;children&quot;: 2<br />
                    &#125;
                  </td>
                  <td>
                    export interface INTERFACENAME &#123;
                    <br />
                    &nbsp;&nbsp;name: string;
                    <br />
                    &nbsp;&nbsp;age: number;
                    <br />
                    &nbsp;&nbsp;children: number;
                    <br />
                    &#125;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </HelpTextComponent>
      </div>
      <div className="col-md-6">
        <h5 className="text-center">Object/JSON</h5>
        <div className="form-group mb-3">
          <textarea
            rows="20"
            className="form-control"
            value={inputObject}
            onChange={(e) => setInputObject(e.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="col-md-6">
        <h5 className="text-center">Interface</h5>
        <div className="form-group mb-3 position-relative">
          <textarea
            rows="20"
            className="form-control"
            value={outputObject}
            readOnly
          ></textarea>
          <div className="input-copy-button">
            <Tooltip label="Copy">
              <button
                className="btn btn-secondary"
                onClick={() => CopyToClipboard(null, outputObject)}
              >
                <i className="fa fa-clipboard"></i>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectToInterface;
