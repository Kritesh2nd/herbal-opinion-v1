"use client";

import {
  getClinicWeeklyStats,
  getContactWeeklyStats,
  getDashboardRecentActivities,
  getDashboardTotalSubmission,
} from "@/src/app/(ADMIN_ROUTE)/(PROTECTED_ROUTE)/dashboard/action";
import { formatDate } from "@/src/app/utils";
import { shortcuts } from "@/src/constants";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { BiTransfer } from "react-icons/bi";
import { FaMessage } from "react-icons/fa6";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiChevronRight,
  FiMail,
  FiRefreshCw,
} from "react-icons/fi";
import { IoDocumentText } from "react-icons/io5";

export interface TotalSubmissionType {
  submissionCount: number;
  weeklyChange: number;
}

export interface RecentActivitieType {
  id: number;
  name: string;
  submittedAt: Date;
  type: string;
}

const SubMetric = ({
  data,
  heading,
  icon,
}: {
  data: TotalSubmissionType;
  heading: string;
  icon: ReactNode;
}) => {
  return (
    <div className="bg-white rounded-lg border-[1px] border-[#CFCCCE] relative overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-2">{heading}</p>
            <p className="text-2xl  text-gray-900 mb-1">
              {data.submissionCount}
            </p>
            <p className="text-sm text-gray-500">This Week</p>
          </div>
          <div className={`flex`}>{icon}</div>
        </div>

        <div className="flex items-center gap-1 mt-4">
          {data.weeklyChange > 0 ? (
            <FiTrendingUp className="w-4 h-4 text-green-500" />
          ) : (
            <FiTrendingDown className="w-4 h-4 text-red-500" />
          )}
          <span
            className={`text-sm font-medium ${
              data.weeklyChange > 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {data.weeklyChange}
          </span>
          <span className="text-sm text-gray-500">vs last week</span>
        </div>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const [totalSubmission, setTotalSubmission] = useState<TotalSubmissionType>({
    submissionCount: 0,
    weeklyChange: 0,
  });
  const [contactTotalSubmission, setContactTotalSubmission] =
    useState<TotalSubmissionType>({
      submissionCount: 0,
      weeklyChange: 0,
    });
  const [clinicTotalSubmission, setClinicTotalSubmission] =
    useState<TotalSubmissionType>({
      submissionCount: 0,
      weeklyChange: 0,
    });

  const [dashboardRecentActivities, setDashboardRecentActivities] = useState<
    RecentActivitieType[]
  >([]);

  const fetcDashboardRecentActivities = async () => {
    const data = await getDashboardRecentActivities();
    setDashboardRecentActivities(data);
  };

  const fetchTotalSubmission = async () => {
    const data = await getDashboardTotalSubmission();
    setTotalSubmission({
      submissionCount: data.totalSubmission,
      weeklyChange: data.weeklyChange,
    });
  };
  const fetchContactWeeklyStats = async () => {
    const data = await getContactWeeklyStats();
    setContactTotalSubmission({
      submissionCount: data.currentWeekTotal,
      weeklyChange: data.weeklyChange,
    });
  };
  const fetchClinicWeeklyStats = async () => {
    const data = await getClinicWeeklyStats();
    setClinicTotalSubmission({
      submissionCount: data.currentWeekTotal,
      weeklyChange: data.weeklyChange,
    });
  };

  useEffect(() => {
    fetcDashboardRecentActivities();
    fetchTotalSubmission();
    fetchContactWeeklyStats();
    fetchClinicWeeklyStats();
  }, []);

  useEffect(() => {
    console.log("dashboardRecentActivities", dashboardRecentActivities);
  }, [
    totalSubmission,
    contactTotalSubmission,
    clinicTotalSubmission,
    dashboardRecentActivities,
  ]);

  // getDashboardTotalSubmission
  return (
    <div className="flex flex-col h-full w-full p-6">
      {/* Dashboard Content */}
      <main className="py-6 space-y-6 overflow-y-auto">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SubMetric
            data={totalSubmission}
            heading="Total Submissions"
            icon={
              <div className="flex justify-center items-center w-10 h-10 rounded-full bg-green-100">
                <IoDocumentText className="text-2xl text-green-600" />
              </div>
            }
          />
          <SubMetric
            data={contactTotalSubmission}
            heading="New Contact Messages"
            icon={
              <div className="flex justify-center items-center w-10 h-10 rounded-full bg-blue-100">
                <FaMessage className="text-lg text-blue-600" />
              </div>
            }
          />
          <SubMetric
            data={clinicTotalSubmission}
            heading="New Switch Clinic Requests"
            icon={
              <div className="flex justify-center items-center w-10 h-10 rounded-full bg-[#E5EA98]">
                <BiTransfer className="text-xl text-[#F5933C]" />
              </div>
            }
          />
        </div>

        {/* Shortcuts */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Shortcuts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {shortcuts.map((shortcut, index) => (
              <Link
                href={shortcut.url}
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
              </Link>
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
              {dashboardRecentActivities &&
                dashboardRecentActivities.length > 0 &&
                dashboardRecentActivities.map((activity, index) => (
                  <div
                    key={index}
                    className="p-6 flex items-center justify-between hover:bg-gray-50"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type == "contact"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-purple-100 text-purple-600"
                        }`}
                      >
                        {activity.type == "contact" ? (
                          <FiMail />
                        ) : (
                          <FiRefreshCw />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {activity.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {formatDate(activity.submittedAt)}
                        </p>
                      </div>
                    </div>
                    <Link
                      href={
                        activity.type == "contact"
                          ? "/dashboard/contact"
                          : "/dashboard/clinic"
                      }
                      className="px-3 py-1 text-sm text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-colors cursor-pointer rounded-sm"
                    >
                      View
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
