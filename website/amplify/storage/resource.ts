import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'simounixWebsiteStorage',
  access: (allow) => ({
    'docs/*': [
      allow.guest.to(['read']),
    ]
  })
});