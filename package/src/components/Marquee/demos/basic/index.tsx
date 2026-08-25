import { Text } from '@platform-blocks/ui';

import { Marquee } from '../../Marquee';

export default function Demo() {
  return (
    <Marquee speed={60}>
      <Text weight="medium">
        Platform Blocks extensions scroll too — build yours from this template. 🧱
      </Text>
    </Marquee>
  );
}
