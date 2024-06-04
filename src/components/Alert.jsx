// Start coding here
/**@jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import SuccessAlert from "../assets/success-alert.jsx";
import WarningAlert from "../assets/warning-alert.jsx";
import InfoAlert from "../assets/info-alert.jsx";
import ErrorAlert from "../assets/error-alert.jsx";

function Alert(props) {
  let bgColor = "#F9EBC8";
  let AlertIcon = InfoAlert;

  if (props.severity === "error") {
    bgColor = "#F9C8C8";
    AlertIcon = ErrorAlert;
  } else if (props.severity === "warning") {
    bgColor = "#F9D9C8";
    AlertIcon = WarningAlert;
  } else if (props.severity === "success") {
    bgColor = "#CEF7CD";
    AlertIcon = SuccessAlert;
  }

  return (
    <div
      css={css`
      margin: 10px;
      display: flex;
      align-items: center;
      width: 650px;
      height: 76px;
      font-family: "Kanit", sans-serif;
      font-weight: 700;
      font-size: 20px;
      color: #444444;
      border-radius: 10px;
      background-color: ${bgColor};
      `}
    >
      <div
        css={css`
          margin-right: 20px;
        `}
      >
        <AlertIcon />
      </div>
    </div>
  );
}

export default Alert;


