const fetch = require("node-fetch");

module.exports = async function (context, req) {
  const { platform } = req.query;

  let data;
  if (platform === "google") {
    const response = await fetch("https://googleadsapi.com/campaigns");
    data = await response.json();
  } else if (platform === "facebook") {
    const response = await fetch("https://graph.facebook.com/v10.0/me/ads");
    data = await response.json();
  }

  context.bindings.outputDocument = JSON.stringify({
    platform: platform,
    campaigns: data,
    timestamp: new Date().toISOString(),
  });

  context.res = {
    status: 200,
    body: "Dados de campanhas armazenados com sucesso",
  };
};
