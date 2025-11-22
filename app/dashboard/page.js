'use client';

import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const [user, setUser] = useState({
    email: 'user@example.com',
    plan: 'free', // 'free' or 'premium'
    tasksToday: 7,
    tasksLimit: 10,
    totalTasks: 156
  });

  const [recentTasks, setRecentTasks] = useState([
    { id: 1, tool: 'Compress PDF', file: 'document.pdf', size: '2.3 MB → 1.6 MB', time: '2 minutes ago', status: 'completed' },
    { id: 2, tool: 'JPG Compress', file: 'photo.jpg', size: '1.8 MB → 0.9 MB', time: '15 minutes ago', status: 'completed' },
    { id: 3, tool: 'MP3 to WAV', file: 'audio.mp3', size: '4.2 MB → 8.1 MB', time: '1 hour ago', status: 'completed' },
    { id: 4, tool: 'Video Compress', file: 'video.mp4', size: '45 MB → 22 MB', time: '2 hours ago', status: 'completed' }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <a href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CC</span>
                </div>
                <span className="text-xl font-bold text-gray-900">CompressConverter</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">{user.email}</span>
              <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h1>
          <p className="text-gray-600">Manage your files and track your usage</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {/* Usage Today */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Usage Today</h3>
              <span className="text-2xl">📊</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {user.tasksToday}/{user.tasksLimit}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-600 h-2 rounded-full" 
                style={{ width: `${(user.tasksToday / user.tasksLimit) * 100}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {user.tasksLimit - user.tasksToday} tasks remaining
            </p>
          </div>

          {/* Plan Status */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Current Plan</h3>
              <span className="text-2xl">{user.plan === 'premium' ? '💎' : '🆓'}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {user.plan === 'premium' ? 'Premium' : 'Free'}
            </div>
            {user.plan === 'free' && (
              <a href="/pricing" className="text-xs text-blue-600 hover:text-blue-700 font-medium">
                Upgrade to Premium →
              </a>
            )}
          </div>

          {/* Total Tasks */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Total Tasks</h3>
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {user.totalTasks}
            </div>
            <p className="text-xs text-gray-500">All time</p>
          </div>

          {/* Files Saved */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">Space Saved</h3>
              <span className="text-2xl">💾</span>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-2">
              2.4 GB
            </div>
            <p className="text-xs text-gray-500">Through compression</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentTasks.map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">
                            {task.tool.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{task.tool}</h3>
                          <p className="text-sm text-gray-600">{task.file}</p>
                          <p className="text-xs text-gray-500">{task.size}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-green-600 font-medium mb-1">
                          ✓ Completed
                        </div>
                        <div className="text-xs text-gray-500">{task.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Quick Actions</h2>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <a href="/tools/pdf/compress-pdf" className="flex items-center p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <span className="text-2xl mr-3">📄</span>
                    <span className="font-medium text-gray-900">Compress PDF</span>
                  </a>
                  <a href="/tools/image/compress-jpg" className="flex items-center p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                    <span className="text-2xl mr-3">🖼️</span>
                    <span className="font-medium text-gray-900">Compress Images</span>
                  </a>
                  <a href="/tools/video/compress-video" className="flex items-center p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                    <span className="text-2xl mr-3">🎬</span>
                    <span className="font-medium text-gray-900">Compress Video</span>
                  </a>
                  <a href="/tools/audio/mp3-to-wav" className="flex items-center p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <span className="text-2xl mr-3">🎵</span>
                    <span className="font-medium text-gray-900">Convert Audio</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Upgrade CTA */}
            {user.plan === 'free' && (
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white mt-6">
                <h3 className="font-semibold mb-2">Upgrade to Premium</h3>
                <p className="text-sm opacity-90 mb-4">
                  Get unlimited tasks and access to all 120+ tools
                </p>
                <a href="/pricing" className="inline-flex items-center px-4 py-2 bg-white text-blue-600 rounded-lg text-sm font-medium hover:bg-gray-50">
                  Upgrade Now
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
