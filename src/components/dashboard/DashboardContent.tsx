import { metrics, recentActivity, shortcuts } from "@/src/constants";
import { FiTrendingUp, FiTrendingDown, FiChevronRight } from "react-icons/fi";

export default function DashboardContent() {
  return (
    <div className="flex flex-col h-full w-full overflow-y-auto px-6">
      {/* Dashboard Content */}
      <main className="py-6 space-y-6 overflow-y-auto">
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
                  >
                    {metric.icon}
                  </div>
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
          <h2 className="text-xl font-bold text-gray-900 mb-6">Shortcuts</h2>
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
