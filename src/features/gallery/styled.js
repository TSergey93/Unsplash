import styled, { css } from 'styled-components';

export const GalleryWrapper = styled.section(
  ({ theme: { space, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 1760px;
    margin: 0 auto ${space[6]}px;
    padding: 0 80px;

    ${breakpoint.xl} {
      padding: 0 ${space[4]}px;
    }

    ${breakpoint.s} {
      padding: 0 ${space[2]}px;
    }

    ${breakpoint.xs} {
      margin-bottom: ${space[4]}px;
    }
`);

export const GallerySearchInputWrapper = styled.div(
  ({ theme: { breakpoint }, isRaised }) => css`
    width: 100%;
    max-width: 512px;
    margin: 40vh auto 0;

    ${isRaised && css`
      margin: 40px 0 0;
   `}

    ${breakpoint.s} {
      ${isRaised && css`
        margin-top: 10px;
     `}
    }
`);

export const GallerySearchText = styled.span(
  ({ theme: { colors } }) => css`
    margin-top: 24px;
    color: ${colors.text.tertiary};
`);

export const GalleryContainer = styled.div(
  ({ theme: { space, breakpoint } }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(204px, 1fr));
    gap: ${space[1]}px;
      
    ${breakpoint.l} {
      grid-template-columns: repeat(3, 1fr);
    }

    ${breakpoint.xs} {
      grid-template-columns: repeat(auto-fill, minmax(114px, 1fr));
    }
`);

export const GalleryImageWrapper = styled.div(
  ({ theme: { colors, borderRadius }, onClick }) => css`
    border: 1px solid ${colors.border};
    border-radius: ${borderRadius[0]}px;
    aspect-ratio: 1 / 1;
    overflow: hidden;

    ${onClick && css`
      cursor: pointer;
    `}
`);

export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
`;