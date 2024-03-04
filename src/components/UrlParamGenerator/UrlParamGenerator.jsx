import { Tooltip } from "@mantine/core";
import { useEffect, useState } from "react";
import CopyToClipboard from "../../common/CopyToClipboard";
import HelpTextComponent from "../HelpTextComponent/HelpTextComponent";

const UrlParamGenerator = () => {
  const [url, setUrl] = useState("");
  const [updatedUrl, setUpdatedUrl] = useState("");
  const [urlParams, setUrlParams] = useState("");

  const firstCharToLower = (str) => {
    let upperRegex = /[A-Z]/;
    let newStr = str.charAt(0).toLowerCase() + str.slice(1);
    for (let i = 0; i < newStr.length; i++) {
      if (i === 0) {
        continue;
      }
      let prevChar = newStr[i - 1];
      let currentChar = newStr[i];

      if (upperRegex.test(prevChar) && upperRegex.test(currentChar)) {
        newStr =
          newStr.slice(0, i) +
          newStr[i].toLowerCase() +
          newStr.slice(i + 1, newStr.length);
      }
    }
    return newStr;
  };

  useEffect(() => {
    if (!url) {
      setUpdatedUrl("");
      setUrlParams("");
      return;
    }

    const inputUrl = url.trim();
    const baseString = inputUrl.split("?")[0] || "";
    const queryString = inputUrl.split("?")[1] || "";
    const paramsString = queryString.split("&");

    let valueArr = [];

    const params = paramsString.map((param) => {
      let [key] = param.split("=");
      let newValue = firstCharToLower(key);
      valueArr.push(newValue);
      return `${key}={${newValue}}`;
    });

    valueArr = valueArr.map((value) => {
      return `${value}: ,`;
    });

    valueArr = valueArr.join("\r\n");

    const result = params.join("&");
    const finalUrl = `${baseString}?${result}`;

    setUpdatedUrl(finalUrl);
    setUrlParams(valueArr);
  }, [url]);

  return (
    <div className="row animate__animated animate__fadeIn">
      <div className="col-md-12 mb-4">
        <HelpTextComponent>
          <p>
            Generates URL params from the URL. It will also generate the Object to subsiture params.
          </p>
          <p>Below is the example conversion</p>
          <div className="row pt-2">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>URL</td>
                      <td>http://example.com/AuthenticatorAPI/api/ApplicationDetails/GetAllUserActivePermissions?LoginID=123&applicationID=123</td>
                    </tr>
                    <tr>
                      <td>Updated URL</td>
                      <td>http://example.com/AuthenticatorAPI/api/ApplicationDetails/GetAllUserActivePermissions?LoginID=&#123;loginId&#125;&applicationID=&#123;applicationId&#125;</td>
                    </tr>
                    <tr>
                      <td>URL Params</td>
                      <td>
                        loginId: ,<br/>
                        applicationId: ,
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </HelpTextComponent>
      </div>
      <div className="col-md-6">
        <h5 className="text-center">URL</h5>
        <div className="form-group mb-3">
          <textarea
            rows="5"
            className="form-control"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          ></textarea>
        </div>
        <h5 className="text-center">Updated URL</h5>
        <div className="form-group position-relative ">
          <textarea
            rows="5"
            className="form-control"
            value={updatedUrl}
            readOnly
          ></textarea>
          <div className="input-copy-button">
            <Tooltip label="Copy">
              <button
                className="btn btn-secondary"
                onClick={() => CopyToClipboard(null, updatedUrl)}
              >
                <i className="fa fa-clipboard"></i>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        
        <h5 className="text-center">URL Params</h5>
        <div className="form-group position-relative">
          <textarea
            rows="13"
            className="form-control"
            value={urlParams}
            readOnly
          ></textarea>
          <div className="input-copy-button">
            <Tooltip label="Copy">
              <button
                className="btn btn-secondary"
                onClick={() => CopyToClipboard(null, urlParams)}
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

export default UrlParamGenerator;
