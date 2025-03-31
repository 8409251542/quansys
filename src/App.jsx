import { useState } from "react";

const tabs = [
  { id: 1, title: "Insights", content: "View call details, billing, ratings, assigned numbers, and imported contacts in a comprehensive dashboard.",img_url:"https://quansys.ai/screen-1.png" },
  { id: 2, title: "Onboarding", content: "Configure AI Agents to integrate with your knowledge base, select phone numbers, and automate actions like SMS and emails.", img_url:"https://quansys.ai/screen-2.png" },
  { id: 3, title: "Import Data", content: "Import data from Excel/CSV or integrate directly with your ERP for seamless data synchronization.", img_url:"https://quansys.ai/screen-3.png" },
  { id: 4, title: "Make Calls & Export Data", content: "Make bulk outbound calls with one click and export updated data to Excel or sync with your ERP." , img_url:"https://quansys.ai/screen-4.png"},
  { id: 5, title: "Individual User Call Insights", content: "Get detailed insights into each user’s call history and performance.", img_url:"https://quansys.ai/screen-5.png" }
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="flex bg-[#fff] p-6 rounded-lg shadow-lg">
      {/* Sidebar Tabs */}
      <div className="w-1/3 pr-4">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`block w-full text-left py-3 px-4  transition-all font-medium 
              ${activeTab === tab.id ? " border-l-4 border-[#2dd4bf]" : ""}`}
          >
            <h3 className={`text-xl ${activeTab=== tab.id ? "text-[#2dd4bf]":"text-[#071d22]"}` }>{tab.id}. {tab.title}</h3>
            <p className="text-[#6A7282]">{tab.content}</p>
          </div>
          
        ))}
        
         
        
      </div>

      {/* Tab Content */}
      <div className="w-2/3 p-6 rounded-lg text-gray-200">
        {tabs.map((tab) => (
          <div key={tab.id} className={activeTab === tab.id ? "block" : "hidden"}>
            <img src={tab.img_url} alt="" srcset="" />
          </div>
        ))}
      </div>
    </div>
  );
}
