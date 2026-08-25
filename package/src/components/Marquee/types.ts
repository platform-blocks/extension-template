import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface MarqueeProps {
  /** Content to scroll — text or any inline elements. */
  children: ReactNode;
  /** Scroll speed in pixels per second. */
  speed?: number;
  /** Gap in pixels between the end of the content and its next pass. */
  gap?: number;
  /** Pause the animation. */
  paused?: boolean;
  /** Style applied to the clipping container. */
  style?: StyleProp<ViewStyle>;
  /** Test ID for testing. */
  testID?: string;
}
