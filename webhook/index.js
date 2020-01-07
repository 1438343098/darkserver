// install with: npm install @octokit/webhooks
const WebhooksApi = require("@octokit/webhooks");
const webhooks = new WebhooksApi({
  secret: "liu19971026"
});

const webhookProxyUrl = "http://superliu.cn:6606/push"; // replace with your own Webhook Proxy URL
const source = new EventSource(webhookProxyUrl);
source.onmessage = event => {
  const webhookEvent = JSON.parse(event.data);
  webhooks
    .verifyAndReceive({
      id: webhookEvent["x-request-id"],
      name: webhookEvent["x-github-event"],
      signature: webhookEvent["x-hub-signature"],
      payload: webhookEvent.body
    })
    .catch(console.error);
};

webhooks.on("push", ({ id, name, payload }) => {
  console.log(name, "event received");
});



require("http")
  .createServer(webhooks.middleware)
  .listen(6606);
// can now receive webhook events at port 6606