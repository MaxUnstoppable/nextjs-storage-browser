import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "tgbot-storage-test",
  access: (allow: any) => ({
    'public/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read',]),
    ],
    'protected/{entity_id}/*': [
      allow.authenticated.to(['read']),
      allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'private/{entity_id}/*': [
      allow.entity('identity').to(['read', 'write', 'delete'])
    ]
  })
});
