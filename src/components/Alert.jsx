// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as Icon from 'react-feather';
export function Error() {
  return (
    <button
      css={css`
        width: 650px;
        height: 76px;
        background-color: #f9c8c8;
        color: #444444;
        font-family: Kanit;
        font-size: 20px;
        font-weight: 700;
        line-height: 29.9px;
        text-align: left;
      `}
    ><Icon.Frown css={css`color:#ED5050; padding-right: 15px`}/> 
    This is error alert box
    </button>
  );
}
export function Warn() {
    return (
      <button
        css={css`
          width: 650px;
          height: 76px;
          background-color: #F9D9C8;
          color: #444444;
          font-family: Kanit;
          font-size: 20px;
          font-weight: 700;
          line-height: 29.9px;
          text-align: left;
        `}
      ><Icon.AlertTriangle css={css`color:#EA712D; padding-right: 15px`}/> This is warning alert box
      </button>
    );
  }
  export function Alert() {
    return (
      <button
        css={css`
          width: 650px;
          height: 76px;
          background-color: #F9D9C8;
          color: #444444;
          font-family: Kanit;
          font-size: 20px;
          font-weight: 700;
          line-height: 29.9px;
          text-align: left;
        `}
      ><Icon.AlertCircle css={css`color:#F29811; padding-right: 15px`}/> This is info alert box
      </button>
    );
  }
export function Success() {
  return (
    <button
      css={css`
        width: 650px;
        height: 76px;
        background-color: #cef7cd;
        color: #444444;
        font-family: Kanit;
        font-size: 20px;
        font-weight: 700;
        line-height: 29.9px;
        text-align: left;
      `}
    ><Icon.CheckCircle css={css`color:#14944F; padding-right: 15px`}/>
      This is success alert box
    </button>
  );
}
