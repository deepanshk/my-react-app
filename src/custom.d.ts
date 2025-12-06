import 'react';

declare module 'react' {
  interface HTMLAttributes {
    clientId?: string; // your custom attribute
    placementId?: string; // your custom attribute
    debateId?: string; // your custom attribute
    width?: string; // your custom attribute
    height?: string; // your custom attribute
  }
}
