'use client'

import { mockDashboardData } from './mockdata.js'
import { useState, useEffect } from 'react'
import { Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

interface ChartDataItem {
  timestamp: string
  count: number
}

interface DashboardData {
  userMetrics: {
    daily: {
      totalUser: number
      totalReferral: number
      activeUser: number
      creator: number
      chartData: ChartDataItem[]
    }
    monthly: {
      totalUser: number
      totalReferral: number
      activeUser: number
      creator: number
      chartData: ChartDataItem[]
    }
    allTime: {
      totalUser: number
      totalReferral: number
      activeUser: number
      creator: number
    }
  }
  contentMetrics: {
    daily: {
      totalPosts: number
      totalCategory: number
      totalPostExitCount: number
      totalPostShares: number
      totalViews: number
      totalComments: number
      totalPostBlocked: number
      totalPostDeleted: number
      chartData: ChartDataItem[]
    }
    monthly: {
      totalPosts: number
      totalCategory: number
      totalPostExitCount: number
      totalPostShares: number
      totalViews: number
      totalComments: number
      totalPostBlocked: number
      totalPostDeleted: number
      chartData: ChartDataItem[]
    }
    allTime: {
      totalPosts: number
      totalCategory: number
      totalPostExitCount: number
      totalPostShares: number
      totalViews: number
      totalComments: number
      totalPostBlocked: number
      totalPostDeleted: number
    }
  }
  engagementMetrics: {
    daily: {
      totalLikes: number
      totalViews: number
      totalNotifications: number
      totalMessage: number
      privateChats: number
      chartData: ChartDataItem[]
    }
    monthly: {
      totalLikes: number
      totalViews: number
      totalNotifications: number
      totalMessage: number
      privateChats: number
      chartData: ChartDataItem[]
    }
    allTime: {
      totalLikes: number
      totalViews: number
      totalNotifications: number
      totalMessage: number
      privateChats: number
    }
  }
  blockchainMetrics: {
    daily: {
      totalTokens: number
      totalWalletOnSolana: number
      totalWalletOnPolygon: number
      totalWalletOnEthereum: number
      chartData: ChartDataItem[]
    }
    monthly: {
      totalTokens: number
      totalWalletOnSolana: number
      totalWalletOnPolygon: number
      totalWalletOnEthereum: number
      chartData: ChartDataItem[]
    }
    allTime: {
      totalTokens: number
      totalWalletOnSolana: number
      totalWalletOnPolygon: number
      totalWalletOnEthereum: number
      totalChains: string[]
    }
  }
}

export default function Dashboard() {
  const [dashboardData, setDashboardData] = useState<DashboardData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setDashboardData(mockDashboardData)
      setIsLoading(false)
  }, [])

  if (isLoading) return <div className="text-center p-4">Loading...</div>
  if (!dashboardData) return <div className="text-center p-4">No data available</div>

  const userActivityData = {
    labels: dashboardData.userMetrics.daily.chartData.map(item => new Date(item.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'User Activity',
        data: dashboardData.userMetrics.daily.chartData.map(item => item.count),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  }

  const contentMetricsData = {
    labels: dashboardData.contentMetrics.daily.chartData.map(item => new Date(item.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Content Activity',
        data: dashboardData.contentMetrics.daily.chartData.map(item => item.count),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">User Metrics (Daily)</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Total Users</p>
              <p className="text-2xl font-bold">{dashboardData.userMetrics.daily.totalUser}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Users</p>
              <p className="text-2xl font-bold">{dashboardData.userMetrics.daily.activeUser}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Referrals</p>
              <p className="text-2xl font-bold">{dashboardData.userMetrics.daily.totalReferral}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Creators</p>
              <p className="text-2xl font-bold">{dashboardData.userMetrics.daily.creator}</p>
            </div>
          </div>
          <Bar data={userActivityData} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Content Metrics (Daily)</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-sm text-gray-600">Total Posts</p>
              <p className="text-2xl font-bold">{dashboardData.contentMetrics.daily.totalPosts}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Views</p>
              <p className="text-2xl font-bold">{dashboardData.contentMetrics.daily.totalViews}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Comments</p>
              <p className="text-2xl font-bold">{dashboardData.contentMetrics.daily.totalComments}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Shares</p>
              <p className="text-2xl font-bold">{dashboardData.contentMetrics.daily.totalPostShares}</p>
            </div>
          </div>
          <Line data={contentMetricsData} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Engagement Metrics (Daily)</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Total Likes</p>
              <p className="text-2xl font-bold">{dashboardData.engagementMetrics.daily.totalLikes}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Views</p>
              <p className="text-2xl font-bold">{dashboardData.engagementMetrics.daily.totalViews}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Notifications</p>
              <p className="text-2xl font-bold">{dashboardData.engagementMetrics.daily.totalNotifications}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Messages</p>
              <p className="text-2xl font-bold">{dashboardData.engagementMetrics.daily.totalMessage}</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Blockchain Metrics (Daily)</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600">Total Tokens</p>
              <p className="text-2xl font-bold">{dashboardData.blockchainMetrics.daily.totalTokens}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Solana Wallets</p>
              <p className="text-2xl font-bold">{dashboardData.blockchainMetrics.daily.totalWalletOnSolana}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Polygon Wallets</p>
              <p className="text-2xl font-bold">{dashboardData.blockchainMetrics.daily.totalWalletOnPolygon}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Ethereum Wallets</p>
              <p className="text-2xl font-bold">{dashboardData.blockchainMetrics.daily.totalWalletOnEthereum}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}