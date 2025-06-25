import styled, { css } from 'styled-components';
import { ReactComponent as PhotoCloseIcon } from '../../assets/icons/photo-close-icon.svg';

export const PhotoViewerOverlay = styled.div(
  ({ theme: { colors, breakpoint } }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${colors.highlight[0]};

    ${breakpoint.m} {
      align-items: flex-start;
    }
  `,
);

export const PhotoViewerImage = styled.img(
  ({ theme: { breakpoint } }) => css`
    width: 80%;
    max-width: 760px;
      
    ${breakpoint.m} {
      width: 100%;
      max-width: none;  
    }
`);

export const PhotoViewerClose = styled(PhotoCloseIcon)(
  ({ theme: { colors, breakpoint } }) => css`
    position: absolute;
    top: 24px;
    right: 24px;
    cursor: pointer;
      
    &::before, &::after {
      content: '';
      width: 20px;
      height: 2px;
      background-color: ${colors.highlight[1]};
    }
      
    ${breakpoint.m} {
      top: 16px;
      right: 16px;
    }
`);
