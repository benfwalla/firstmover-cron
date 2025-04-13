export default {
  async scheduled(event, env, ctx) {
    const url = 'https://firstmover-fast-api.vercel.app/insertListings?perPage=10';

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${env.API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ source: "cloudflare-cron" })
      });

      const text = await res.text();
      console.log(`Success: ${res.status} ${res.statusText}`);
      console.log(`Response: ${text}`);
    } catch (err) {
      console.error("Ping failed:", err);
    }
  }
}
