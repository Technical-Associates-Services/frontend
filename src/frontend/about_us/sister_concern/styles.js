import styled from "styled-components";

export const ExpandButton = styled.div`
      .material-symbols-outlined {
            font-variation-settings: "FILL" 0, "wght" 200, "GRAD" 0, "opsz" 24;
      }
      cursor: pointer;
      background: #dd3333;
      height: 30px;
      width: 30px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
`;

export const BlockDescription = styled.div`
      font-size: 14px;
      color: #666;
      line-height: 24px;

      ol {
            list-style: decimal !important;
      }
      ul {
            list-style: disc !important;
      }
`;
