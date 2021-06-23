import React from 'react';
import {AdminPanel} from '@instinct-web/admin';
import { CosmicTheme } from '@instinct-theme/cosmic';

export function InstinctWeb() {
  return (
    <>
      <CosmicTheme />
      <AdminPanel />
    </>
  );
}
