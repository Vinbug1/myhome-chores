import styled, { css } from "styled-components";

const TrafficLight = styled.View`
    board-raduis: 50px;
    width: 10px;
    height: 10px;
    padding: 10px;
    ${(props) =>
        props.available &&
        css`
          background: #afec1a;
        `}
      ${(props) =>
        props.pending &&
        css`
          background: #ffe033;
        `}
        ${(props) =>
        props.unavailable &&
        css`
          background: #ec241a;
        `}
`;
export default TrafficLight;