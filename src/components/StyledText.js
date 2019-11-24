import React from 'react';
import { Text as DefaultText } from 'react-native';

export const Text = ({ style = {}, ...props }) => {
  let fontFamily = 'Montserrat-Regular';

  if (Object.keys(style).length) {
    const { fontWeight = 'normal' } = style;

    fontFamily = 'Montserrat';

    switch (fontWeight) {
      case '500':
        fontFamily += '-Medium';
        break;
      case '600':
        fontFamily += '-SemiBold';
        break;
      default:
        fontFamily += '-Regular';
    }
  }

  return (
    <DefaultText {...props} style={[style, {fontFamily}]} />
  );
}