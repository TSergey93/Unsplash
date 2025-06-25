import styled, { css } from 'styled-components';
import { ReactComponent as SearchClearIcon } from '../../assets/icons/search-clear-icon.svg';

export const SearchInputWrapper = styled.div(
  ({ theme: { space } }) => css`
    display: flex;
    gap: ${space[1]}px;
    width: 100%;
  `,
);

export const SearchInputContainer = styled.div(
  ({ theme: { space, colors, borderRadius } }) => css`
    display: flex;
    flex-grow: 1;
    align-items: center;
    gap: ${space[0]}px;
    padding: 0 ${space[1]}px;
    background: ${colors.primary.disabled};
    border-radius: ${borderRadius[1]}px;
    cursor: pointer;
  `,
);

export const SearchInputStyled = styled.input(
  ({ theme: { colors, fontSizes } }) => css`
    width: 100%;
    height: 48px;
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