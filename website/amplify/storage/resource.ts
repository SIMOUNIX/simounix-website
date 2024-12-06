import { defineStorage} from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'bigBucket',
  access: (allow) => ({
    'docs/*': [
      allow.guest.to(['read']),
    ]
  })
});
