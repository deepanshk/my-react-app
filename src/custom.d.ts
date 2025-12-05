import 'react';

declare module 'react' {
  interface HTMLAttributes {
    clientId?: string; // your custom attribute
    placementId?: string; // your custom attribute
  }
}
