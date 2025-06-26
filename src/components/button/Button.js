import styled, { css } from 'styled-components';

export const Button = styled.button.attrs(() => ({ role: 'button' }))(
  ({ theme: { colors, borderRadius } }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    min-width: 84px;
    font-family: inherit;
    font-size: inherit;
    color: ${colors.text.secondary};
    background: ${colors.primary.main};
    border: none;
    border-radius: ${borderRadius[1]}px;
    transition: 0.2s ease-in-out background;
      
    &:hover {
      background: ${colors.secondary.main};
    }
`);