import { useState, useEffect } from "react";

function CampaignsDashboard() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch("/api/campaigns?platform=google")
      .then((response) => response.json())
      .then((data) => setCampaigns(data.campaigns));
  }, []);

  return (
    <div>
      <h1>Métricas de Campanhas</h1>
      <ul>
        {campaigns.map((campaign) => (
          <li key={campaign.id}>
            {campaign.name} - {campaign.impressions} impressões
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CampaignsDashboard;
