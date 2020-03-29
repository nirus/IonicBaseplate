/*
 * Tab1Page Messages
 *
 * This contains all the text for the Tab1Page component.
 */
import { defineMessages } from 'react-intl';
import { NameSpace } from './constants';

export const modName = `baseplate.pages.${NameSpace}`;

export default defineMessages({
  startProjectHeader: {
    id: `${modName}.header`,
    defaultMessage: 'Start your next react project in seconds',
  },
  startProjectMessage: {
    id: `${modName}.message`,
    defaultMessage:
      'A highly scalable, offline-first foundation with the best DX and a focus on performance and best practices',
  },
});
