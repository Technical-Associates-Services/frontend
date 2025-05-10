import styled from "styled-components";

export const FooterLogoContainer = styled.div``;
export const FooterParent = styled.div`
      position: relative;
      border-left: 1px solid #fff;
      padding-left: 1.5rem;
      &:after {
            position: absolute;
      }
      img {
            width: 50px;
            min-width: 18px !important;
      }
`;
export const FooterText = styled.div`
      padding-left: 15px;
      border-left: 2px solid #dd3333;
      p {
            font-size: 14px !important;
            line-height: 1.75;
      }
`;
