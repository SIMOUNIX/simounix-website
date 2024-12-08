import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'bigBucket',
  isDefault: true,
  access: (allow) => ({
    'docs/*': [
      allow.guest.to(['read', 'write']),
      allow.authenticated.to(['read']),
    ],
  }),
});
