import { Platform, StyleSheet } from 'react-native';

import { isBig } from './space';
const sizeScale = isBig ? 1.2 : 1;

export const SMALL_FONT_SIZE = 12 * sizeScale;

export default StyleSheet.create({
  header: {
    fontFamily: 'System',
    fontSize: 24 * sizeScale,
    lineHeight: 32 * sizeScale,
    fontWeight: '600',
    color: '#222',
  },
  cardText: {
    fontFamily: 'System',
    fontSize: isBig ? 24 : 14,
    lineHeight: isBig ? 28 : 18,
  },
  text: {
    fontFamily: 'System',
    fontSize: 18 * sizeScale,
    lineHeight: 22 * sizeScale,
    color: '#222',
  },
  small: {
    fontFamily: 'System',
    fontSize: SMALL_FONT_SIZE,
    lineHeight: 18 * sizeScale,
    color: '#222',
  },
  smallLabel: {
    fontFamily: 'System',
    fontSize: 12 * sizeScale,
    lineHeight: 18 * sizeScale,
    letterSpacing: 0.3,
    color: '#444',
  },
  label: {
    fontFamily: 'System',
    fontSize: 16 * sizeScale,
    marginRight: 8 * sizeScale,
    color: '#222',
  },
  bigLabel: {
    fontFamily: 'System',
    fontSize: 22 * sizeScale,
    lineHeight: 28 * sizeScale,
    color: '#222',
  },
  bold: {
    fontWeight: '700',
    color: '#222',
  },
  gameFont: {
    fontFamily: 'Teutonic',
    fontSize: 18 * sizeScale,
    lineHeight: 26 * sizeScale,
    color: '#222',
  },
  mediumGameFont: {
    fontFamily: 'Teutonic',
    fontSize: 24 * sizeScale,
    lineHeight: 30 * sizeScale,
    color: '#222',
  },
  bigGameFont: {
    fontFamily: 'Teutonic',
    fontSize: 28 * sizeScale,
    lineHeight: 36 * sizeScale,
    color: '#222',
  },
  dialogLabel: Platform.select({
    ios: {
      fontSize: 13 * sizeScale,
      color: 'black',
    },
    android: {
      fontSize: 16 * sizeScale,
      color: '#33383D',
    },
  }),
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
});
