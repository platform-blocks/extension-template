import React from 'react';
import { Animated, Easing, View, type LayoutChangeEvent } from 'react-native';
import { useTheme } from '@plocks/ui';

import type { MarqueeProps } from './types';

/**
 * Horizontally scrolling ticker. Content glides from the right edge to the
 * left, then loops with `gap` pixels of breathing room. Colors come from the
 * active plocks theme, so the component follows light/dark mode like
 * any built-in component.
 */
export function Marquee({
  children,
  speed = 50,
  gap = 48,
  paused = false,
  style,
  testID,
}: MarqueeProps) {
  const theme = useTheme();
  const [translateX] = React.useState(() => new Animated.Value(0));
  const [containerWidth, setContainerWidth] = React.useState(0);
  const [contentWidth, setContentWidth] = React.useState(0);

  const handleContainerLayout = React.useCallback((event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  }, []);

  const handleContentLayout = React.useCallback((event: LayoutChangeEvent) => {
    setContentWidth(event.nativeEvent.layout.width);
  }, []);

  React.useEffect(() => {
    if (paused || containerWidth === 0 || contentWidth === 0) {
      return;
    }

    const distance = containerWidth + contentWidth + gap;
    translateX.setValue(containerWidth);

    const animation = Animated.loop(
      Animated.timing(translateX, {
        toValue: -(contentWidth + gap),
        duration: (distance / Math.max(1, speed)) * 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    );

    animation.start();
    return () => animation.stop();
  }, [paused, containerWidth, contentWidth, gap, speed, translateX]);

  return (
    <View
      testID={testID}
      onLayout={handleContainerLayout}
      style={[
        {
          overflow: 'hidden',
          backgroundColor: theme.backgrounds.surface,
          borderRadius: 8,
          paddingVertical: 8,
        },
        style,
      ]}
    >
      <Animated.View
        onLayout={handleContentLayout}
        style={{ alignSelf: 'flex-start', flexDirection: 'row', transform: [{ translateX }] }}
      >
        {children}
      </Animated.View>
    </View>
  );
}
