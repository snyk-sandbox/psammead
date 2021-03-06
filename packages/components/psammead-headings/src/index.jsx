import styled from 'styled-components';
import { C_EBON, C_STORM } from '@bbc/psammead-styles/colours';
import {
  FF_NEWS_SERIF_MDM,
  FF_NEWS_SANS_REG,
} from '@bbc/psammead-styles/fonts';
import { GEL_SPACING_DBL, GEL_SPACING_QUAD } from '@bbc/gel-constants/spacings';
import {
  GEL_CANON,
  GEL_TRAFALGAR,
} from '@bbc/gel-foundations-styled-components/typography';

export const Headline = styled.h1`
  color: ${C_EBON};
  font-family: ${FF_NEWS_SERIF_MDM};
  margin: 0; /* Reset */
  padding: ${GEL_SPACING_QUAD} 0 ${GEL_SPACING_DBL} 0;
  ${GEL_CANON};
`;

const regexPunctuationSymbols = /[^a-z0-9\s-]/gi;
const regexSpaces = /\s+/g;

export const SubHeading = styled.h2.attrs(({ text }) => ({
  id: text.replace(regexPunctuationSymbols, '').replace(regexSpaces, '-'),
  tabIndex: '-1',
}))`
  color: ${C_STORM};
  font-family: ${FF_NEWS_SANS_REG};
  margin: 0; /* Reset */
  padding: ${GEL_SPACING_DBL} 0;
  font-weight: 400;
  ${GEL_TRAFALGAR};
`;
