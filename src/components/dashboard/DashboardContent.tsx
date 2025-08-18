import { StatCard } from "@/src/types";
import { BiTransfer } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import {FiDollarSign,FiHelpCircle,FiMail,FiRefreshCw,FiTrendingUp,FiTrendingDown,FiChevronRight,} from "react-icons/fi";
import { IoDocumentText } from "react-icons/io5";


export const metrics:StatCard[] = [
  {
    title: "Total Submissions",
    value: "24",
    subtitle: "This week",
    icon: <IoDocumentText className="w-4 h-4 text-primary " />,
    change: "+12%",
    changeType: "positive",
    period: "vs last week",
    color: "bg-[#DCFCE7]",
  },
  {
    title: "New Contact Messages",
    value: "9",
    subtitle: "This week",
    icon: <FaMessage className="w-4 h-4 text-[#2563EB]" />,
    change: "+5%",
    changeType: "positive",
    period: "vs last week",
    color: "bg-[#DBEAFE]",
  },
  {
    title: "New Switch Clinic Requests",
    value: "7",
    subtitle: "This week",
    icon: <BiTransfer className="w-4 h-4 text-[#F5933C]" />,
    change: "-3%",
    changeType: "negative",
    period: "vs last week",
    color: "bg-[#E5EA98]",
  },
];


const shortcuts = [
  {
    icon: FiDollarSign,
    title: "Edit Pricing",
    description: "Update your service pricing plans",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: FiHelpCircle,
    title: "Edit FAQs",
    description: "Manage frequently asked questions",
    color: "bg-purple-100 text-purple-600",
  },
];

const recentActivity = [
  {
    icon: FiMail,
    title: "New contact form submission from Sarah Johnson",
    time: "Today, 10:45 AM",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: FiRefreshCw,
    title: "New switch clinic request from Michael Brown",
    time: "Yesterday, 3:20 PM",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: FiRefreshCw,
    title: "New switch clinic request from Rita Heist",
    time: "2024-04-05",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: FiMail,
    title: "New contact form submission from Mila Milson",
    time: "2024-03-02",
    color: "bg-blue-100 text-blue-600",
  },
];

export  default function DashboardContent() {
  return (
    <div className="flex-1 w-[81vw] ">
      <header className="bg-white shadow-sm px-6 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#1F2937]">Dashboard</h1>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#7B7B7B] rounded-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-600"><FaUserAlt color="white" /></span>
            </div>
            <div className="text-left">
              <div className="text-base  text-gray-900">
                Dr. James Wilson
              </div>
              <div className="text-xs text-gray-500">Administrator</div>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="p-6 space-y-6 overflow-y-auto">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border-[1px] border-[#CFCCCE] relative overflow-hidden"
            >
              <div className="p-6">
                
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      {metric.title}
                    </p>
                    <p className="text-2xl  text-gray-900 mb-1">
                      {metric.value}
                    </p>
                    <p className="text-sm text-gray-500">{metric.subtitle}</p>
                  </div>
                  <div
                    className={`w-fit h-fit p-2 rounded-full ${metric.color}`}
                  >{metric.icon}</div>
                </div>

                <div className="flex items-center gap-1 mt-4">
                  {metric.changeType === "positive" ? (
                    <FiTrendingUp className="w-4 h-4 text-green-500" />
                  ) : (
                    <FiTrendingDown className="w-4 h-4 text-red-500" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      metric.changeType === "positive"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {metric.change}
                  </span>
                  <span className="text-sm text-gray-500">{metric.period}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Shortcuts */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Shortcuts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shortcuts.map((shortcut, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border-[1px] border-[#CFCCCE] cursor-pointer"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${shortcut.color}`}
                      >
                        <shortcut.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">
                          {shortcut.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {shortcut.description}
                        </p>
                      </div>
                    </div>
                    <FiChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="divide-y divide-gray-200">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="p-6 flex items-center justify-between hover:bg-gray-50"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${activity.color}`}
                    >
                      <activity.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                  <button className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded transition-colors">
                    View
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
