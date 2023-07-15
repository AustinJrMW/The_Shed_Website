// sanity.js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'vk193aib',
  dataset: 'production',
  // You can find your projectId and dataset name in your Sanity.io project settings
  // Remember to keep these sensitive details in a safe place or use environment variables.
  useCdn: true, // Enable this for faster responses, but the data might be slightly outdated
});

export default client;



