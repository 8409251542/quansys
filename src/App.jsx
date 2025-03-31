import { useState, useEffect } from "react";

const tabs = [
  { id: 1, title: "Insights", content: "View call details, billing, ratings, assigned numbers, and imported contacts in a comprehensive dashboard.", img_url: "https://quansys.ai/screen-1.png" },
  { id: 2, title: "Onboarding", content: "Configure AI Agents to integrate with your knowledge base, select phone numbers, and automate actions like SMS and emails.", img_url: "https://quansys.ai/screen-2.png" },
  { id: 3, title: "Import Data", content: "Import data from Excel/CSV or integrate directly with your ERP for seamless data synchronization.", img_url: "https://quansys.ai/screen-3.png" },
  { id: 4, title: "Make Calls & Export Data", content: "Make bulk outbound calls with one click and export updated data to Excel or sync with your ERP.", img_url: "https://quansys.ai/screen-4.png" },
  { id: 5, title: "Individual User Call Insights", content: "Get detailed insights into each user’s call history and performance.", img_url: "https://quansys.ai/screen-5.png" },
  { id: 6, title: "Swarm Agent (Manual)", content: "Activate AI analysis of call data to automatically update databases and prepare communications across channels.", img_url: "https://quansys.ai/screen-6.png" },
  { id: 7, title: "Email/SMS Services (Manual)", content: "Draft and review communications before sending them to users with human oversight.", img_url: "https://quansys.ai/screen-7.png" }
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev < tabs.length ? prev + 1 : 1));
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex bg-white p-6 rounded-lg shadow-lg">
      {/* Sidebar Tabs */}
      <div className="h-[80vh] overflow-y-auto w-1/3 pr-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`block w-full text-left py-3 px-4 cursor-pointer transition-all font-medium 
              ${activeTab === tab.id ? "border-l-4 border-[#2dd4bf] bg-gray-100" : ""}`}
          >
            <h3 className={`text-xl ${activeTab === tab.id ? "text-[#2dd4bf]" : "text-[#071d22]"}`}>
              {tab.id}. {tab.title}
            </h3>
            <p className="text-[#6A7282]">{tab.content}</p>
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="w-2/3 p-6 rounded-lg text-gray-200">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
            <img src={tab.img_url} alt={tab.title} className="w-full rounded-lg shadow-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
