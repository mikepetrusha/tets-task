import { css, keyframes, styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  ${({ theme }) => {
    const { primary } = theme.palette;

    return css`
      border: 6px solid ${primary.main};
      border-top: 6px ${primary.light} solid;
      border-radius: 50%;
      height: 50px;
      width: 50px;
      animation: ${rotate360} 1s linear infinite;
    `;
  }}
`;
