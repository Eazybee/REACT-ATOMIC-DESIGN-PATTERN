
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '<styles>/theme';

const Text = ({
  fontSize,
  textAlign,
  color,
  display,
  fontWeight,
  children,
  padding,
}) => (
  <Text.Container
    fontSize={fontSize}
    textAlign={textAlign}
    color={color}
    display={display}
    fontWeight={fontWeight}
    padding={padding}>
    {children}
  </Text.Container>
);

Text.Container = styled.span`
${({
    padding,
    fontSize: userFontSize,
    fontWeight: userFontWeight,
    display,
    textAlign,
    color,
    theme: {
      fontSize, fontWeight, textColors, spacing,
    },
  }) => `
    text-align: ${textAlign};
    color: ${textColors[color]};
    display: ${display};
    padding: ${spacing[padding] || '0'};
    font-size: ${fontSize[userFontSize]};
    font-weight: ${fontWeight[userFontWeight]};
`}`;


Text.defaultProps = {
  display: 'inline',
  fontWeight: 'normal',
  textAlign: 'left',
  fontSize: 'sm',
  color: 'black',
};

const {
  textColors, fontSize, fontWeight, spacing,
} = theme;
Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  display: PropTypes.oneOf(['block', 'inline', 'flex', 'inline-block', 'none']),
  color: PropTypes.oneOf(Object.keys(textColors)),
  fontSize: PropTypes.oneOf(Object.keys(fontSize)),
  textAlign: PropTypes.oneOf(['left', 'center', 'right', 'justify']),
  fontWeight: PropTypes.oneOf(Object.keys(fontWeight)),
  padding: PropTypes.oneOf(Object.keys(spacing)),
};

export default Text;
