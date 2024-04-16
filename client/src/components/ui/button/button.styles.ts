import { css, styled } from 'styled-components';

import { IStyledButtonProps } from './button.types';

export const Button = styled.button<IStyledButtonProps>`
  ${({ theme, $variant }) => {
    const { fontSize, fontStyle, lineHeight, fontFamily, fontWeight } = theme.typography;
    const { grey, green, white, error } = theme.palette;

    return css`
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 5px 16px;
      color: ${white};
      background-color: transparent;
      border: none;
      border-radius: ${theme.borderRadius.default};
      font-family: ${fontFamily};
      font-style: ${fontStyle.default};
      font-size: ${fontSize.default};
      line-height: ${lineHeight.default};
      font-weight: ${fontWeight.semiBold};
      transition: background-color 0.3s ease;
      cursor: pointer;

      &:focus-visible {
        box-shadow: ${grey[300]} 2px 2px 8px 0;
      }

      ${$variant === 'contained' &&
      `
      background-color: ${green};
      &:hover {
        background-color: ${green};
      }

      &:disabled {
        background-color: ${green};
        opacity: 50%;
        &:hover {
          cursor: default;
        }
      }
      `}

      ${$variant === 'mobile' &&
      `
      background-color: ${green};
      border-radius: 50%;
      width: 64px;
      height: 64px;
      padding: 0;
      font-size: 48px; 
      font-weight: ${fontWeight.normal};
    
      &:hover {
        background-color: ${green};
      }

      &:disabled {
        background-color: ${green};
        opacity: 50%;
        &:hover {
          cursor: default;
        }
      }
      `}

      ${$variant === 'outlined' &&
      `
      color: ${grey.borderGrey};
      border: 1px solid ${grey.borderGrey};


      &:disabled {
        color: ${grey[300]};
        border: 1px solid ${grey[300]};
        &:hover {
          color: ${grey[300]};
          border: 1px solid ${grey[300]};
          box-shadow: none;
          filter: none;
          cursor: default;
        }
      }
      `}

   ${$variant === 'destructive' &&
      `
      color: ${error};
      `}
    `;
  }}
`;
