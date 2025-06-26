import styled, { css } from 'styled-components';

export const GalleryWrapper = styled.section(
  ({ theme: { space, breakpoint } }) => css`
    display: flex;
    flex-direction: column;
    max-width: 1760px;
    margin: 0 auto 74px;
    padding: 0 80px;

    ${breakpoint.xl} {
      padding: 0 ${space[4]}px;
    }

    ${breakpoint.s} {
      padding: 0 ${space[2]}px;
    }

    ${breakpoint.xs} {
      margin-bottom: 0;
      padding-bottom: ${space[2]}px;
    }
`);

export const GallerySearchInputWrapper = styled.div(
  ({ theme: { space, colors, breakpoint }, isRaised }) => css`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 340px;
    margin: 0 auto;
    padding-bottom: ${space[2]}px;
    background: ${colors.white};

    ${isRaised && css`
      position: sticky;
      top: 0;
      justify-content: flex-start;
      height: auto;
      margin: 0;
      padding-top: 40px;
   `}

    ${breakpoint.xl} {
      ${isRaised && css`
        padding-top: 24px;
     `}
    }

    ${breakpoint.s} {
      ${isRaised && css`
        padding-top: 10px;
     `}
    }
`);

export const GallerySearchText = styled.span(
  ({ theme: { colors } }) => css`
    margin-top: 40px;
    color: ${colors.text.tertiary};
`);

export const GalleryContainer = styled.div(
  ({ theme: { space, breakpoint } }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(204px, 1fr));
    gap: ${space[1]}px;
    padding: ${space[2]}px 0;
      
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
  object-fit: cover;
`;