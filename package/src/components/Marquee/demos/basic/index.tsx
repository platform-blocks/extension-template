import { Text } from '@plocks/ui';

import { Marquee } from '../../Marquee';

export default function Demo() {
  return (
    <Marquee speed={60}>
      <Text fw="medium">
        plocks extensions scroll too — build yours from this template. 🧱
      </Text>
    </Marquee>
  );
}
