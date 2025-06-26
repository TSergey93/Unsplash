import styled, { css } from 'styled-components';
import { ReactComponent as SearchClearIcon } from '../../assets/icons/search-clear-icon.svg';

export const SearchInputWrapper = styled.div(
  ({ theme: { space } }) => css`
    display: flex;
    gap: ${space[1]}px;
    width: 100%;
    max-width: 512px;
  `,
);

export const SearchInputContainer = styled.div(
  ({ theme: { space, colors, borderRadius } }) => css`
    display: flex;
    flex-grow: 1;
    align-items: center;
    gap: ${space[0]}px;
    height: 48px;
    padding: 0 ${space[1]}px;
    background: ${colors.primary.dark};
    border-radius: ${borderRadius[1]}px;
    cursor: pointer;
    transition: 0.2s ease-in-out background;
      
    &:hover {
      background: ${colors.secondary.dark};
    }
  `,
);

export const SearchInputStyled = styled.input(
  ({ theme: { colors, fontSizes } }) => css`
    flex: 1;
    min-height: 24px;
    padding-left: 0;
    font-size: ${fontSizes[7]}px;
    font-weight: 400;
    background: transparent;
    text-overflow: ellipsis;
    cursor: inherit;

    &::placeholder {
      color: ${colors.text.disabled};
    }
  `,
);

export const SearchInputClear = styled(SearchClearIcon)`
  cursor: pointer;
`;