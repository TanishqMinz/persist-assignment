export const mockDashboardData = {
    userMetrics: {
      daily: {
        totalUser: 500,
        totalReferral: 120,
        activeUser: 320,
        creator: 80,
        chartData: Array.from({ length: 7 }, (_, i) => ({
          timestamp: new Date(Date.now() - i * 3600000).toISOString(),
          count: Math.floor(Math.random() * 100),
        })).reverse(),
      },
      monthly: {
        totalUser: 15000,
        totalReferral: 3500,
        activeUser: 9800,
        creator: 1200,
        chartData: Array.from({ length: 30 }, (_, i) => ({
          timestamp: new Date(Date.now() - i * 86400000).toISOString(),
          count: Math.floor(Math.random() * 500),
        })).reverse(),
      },
      allTime: {
        totalUser: 500000,
        totalReferral: 90000,
        activeUser: 320000,
        creator: 45000,
      },
    },
    contentMetrics: {
      daily: {
        totalPosts: 200,
        totalCategory: 15,
        totalPostExitCount: 50,
        totalPostShares: 80,
        totalViews: 4000,
        totalComments: 700,
        totalPostBlocked: 5,
        totalPostDeleted: 12,
        chartData: Array.from({ length: 7 }, (_, i) => ({
          timestamp: new Date(Date.now() - i * 3600000).toISOString(),
          count: Math.floor(Math.random() * 200),
        })).reverse(),
      },
      monthly: {
        totalPosts: 6000,
        totalCategory: 20,
        totalPostExitCount: 1200,
        totalPostShares: 2400,
        totalViews: 120000,
        totalComments: 21000,
        totalPostBlocked: 45,
        totalPostDeleted: 120,
        chartData: Array.from({ length: 30 }, (_, i) => ({
          timestamp: new Date(Date.now() - i * 86400000).toISOString(),
          count: Math.floor(Math.random() * 500),
        })).reverse(),
      },
      allTime: {
        totalPosts: 150000,
        totalCategory: 25,
        totalPostExitCount: 45000,
        totalPostShares: 90000,
        totalViews: 4500000,
        totalComments: 750000,
        totalPostBlocked: 200,
        totalPostDeleted: 800,
      },
    },
    engagementMetrics: {
      daily: {
        totalLikes: 1200,
        totalViews: 7000,
        totalNotifications: 250,
        totalMessage: 500,
        privateChats: 180,
        chartData: Array.from({ length: 7 }, (_, i) => ({
          timestamp: new Date(Date.now() - i * 3600000).toISOString(),
          count: Math.floor(Math.random() * 300),
        })).reverse(),
      },
      monthly: {
        totalLikes: 36000,
        totalViews: 210000,
        totalNotifications: 7500,
        totalMessage: 15000,
        privateChats: 5400,
        chartData: Array.from({ length: 30 }, (_, i) => ({
          timestamp: new Date(Date.now() - i * 86400000).toISOString(),
          count: Math.floor(Math.random() * 1000),
        })).reverse(),
      },
      allTime: {
        totalLikes: 900000,
        totalViews: 5000000,
        totalNotifications: 200000,
        totalMessage: 600000,
        privateChats: 200000,
      },
    },
    blockchainMetrics: {
      daily: {
        totalTokens: 50000,
        totalWalletOnSolana: 3000,
        totalWalletOnPolygon: 2500,
        totalWalletOnEthereum: 4000,
        chartData: Array.from({ length: 7 }, (_, i) => ({
          timestamp: new Date(Date.now() - i * 3600000).toISOString(),
          count: Math.floor(Math.random() * 5000),
        })).reverse(),
      },
      monthly: {
        totalTokens: 1500000,
        totalWalletOnSolana: 90000,
        totalWalletOnPolygon: 75000,
        totalWalletOnEthereum: 120000,
        chartData: Array.from({ length: 30 }, (_, i) => ({
          timestamp: new Date(Date.now() - i * 86400000).toISOString(),
          count: Math.floor(Math.random() * 20000),
        })).reverse(),
      },
      allTime: {
        totalTokens: 50000000,
        totalWalletOnSolana: 3000000,
        totalWalletOnPolygon: 2500000,
        totalWalletOnEthereum: 4000000,
        totalChains: ["Ethereum", "Polygon", "Solana", "Binance Smart Chain"],
      },
    },
  }
  