"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Play,
  ChevronRight,
  ChevronDown,
  Eye,
  Search,
  Filter,
  MoreHorizontal,
  Clock,
  CheckCircle,
  XCircle,
  Circle,
  FileText,
  Folder,
  FolderOpen,
} from "lucide-react"

export default function Component() {
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(new Set(["tests"]))
  const [selectedTest, setSelectedTest] = useState("login.spec.ts")

  const toggleFolder = (folder: string) => {
    const newExpanded = new Set(expandedFolders)
    if (newExpanded.has(folder)) {
      newExpanded.delete(folder)
    } else {
      newExpanded.add(folder)
    }
    setExpandedFolders(newExpanded)
  }

  return (
    <div className="h-screen bg-[#1e1e1e] text-white flex">
      {/* Sidebar */}
      <div className="w-80 bg-[#252526] border-r border-[#3e3e42] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-[#3e3e42]">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-medium">Test Explorer</h2>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400 hover:text-white">
                <Search className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400 hover:text-white">
                <Filter className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400 hover:text-white">
                <MoreHorizontal className="h-3 w-3" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs bg-[#0e639c] hover:bg-[#1177bb] text-white">
              <Play className="h-3 w-3 mr-1" />
              Run all
            </Button>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400 hover:text-white">
              <Eye className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* File Tree */}
        <ScrollArea className="flex-1 p-2">
          <div className="space-y-1">
            <div className="flex items-center gap-1 py-1 px-2 hover:bg-[#2a2d2e] rounded cursor-pointer">
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 text-gray-400"
                onClick={() => toggleFolder("tests")}
              >
                {expandedFolders.has("tests") ? (
                  <ChevronDown className="h-3 w-3" />
                ) : (
                  <ChevronRight className="h-3 w-3" />
                )}
              </Button>
              {expandedFolders.has("tests") ? (
                <FolderOpen className="h-4 w-4 text-blue-400" />
              ) : (
                <Folder className="h-4 w-4 text-blue-400" />
              )}
              <span className="text-sm">tests</span>
            </div>

            {expandedFolders.has("tests") && (
              <div className="ml-4 space-y-1">
                <div
                  className={`flex items-center gap-2 py-1 px-2 rounded cursor-pointer ${
                    selectedTest === "login.spec.ts" ? "bg-[#094771]" : "hover:bg-[#2a2d2e]"
                  }`}
                  onClick={() => setSelectedTest("login.spec.ts")}
                >
                  <FileText className="h-4 w-4 text-green-400" />
                  <span className="text-sm">login.spec.ts</span>
                  <div className="ml-auto flex items-center gap-1">
                    <CheckCircle className="h-3 w-3 text-green-400" />
                    <Button variant="ghost" size="sm" className="h-4 w-4 p-0 text-gray-400 hover:text-white">
                      <Play className="h-2 w-2" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-4 w-4 p-0 text-gray-400 hover:text-white">
                      <Eye className="h-2 w-2" />
                    </Button>
                  </div>
                </div>

                <div className="ml-4 space-y-1">
                  <div className="flex items-center gap-2 py-1 px-2 hover:bg-[#2a2d2e] rounded cursor-pointer">
                    <CheckCircle className="h-3 w-3 text-green-400" />
                    <span className="text-xs text-gray-300">should login with valid credentials</span>
                    <div className="ml-auto flex items-center gap-1">
                      <span className="text-xs text-gray-500">1.2s</span>
                      <Button variant="ghost" size="sm" className="h-4 w-4 p-0 text-gray-400 hover:text-white">
                        <Play className="h-2 w-2" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 py-1 px-2 hover:bg-[#2a2d2e] rounded cursor-pointer">
                    <XCircle className="h-3 w-3 text-red-400" />
                    <span className="text-xs text-gray-300">should show error for invalid credentials</span>
                    <div className="ml-auto flex items-center gap-1">
                      <span className="text-xs text-gray-500">0.8s</span>
                      <Button variant="ghost" size="sm" className="h-4 w-4 p-0 text-gray-400 hover:text-white">
                        <Play className="h-2 w-2" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 py-1 px-2 hover:bg-[#2a2d2e] rounded cursor-pointer">
                  <FileText className="h-4 w-4 text-green-400" />
                  <span className="text-sm">dashboard.spec.ts</span>
                  <div className="ml-auto flex items-center gap-1">
                    <Circle className="h-3 w-3 text-gray-400" />
                    <Button variant="ghost" size="sm" className="h-4 w-4 p-0 text-gray-400 hover:text-white">
                      <Play className="h-2 w-2" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-4 w-4 p-0 text-gray-400 hover:text-white">
                      <Eye className="h-2 w-2" />
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Status Bar */}
        <div className="p-3 border-t border-[#3e3e42] text-xs text-gray-400">
          <div className="flex items-center justify-between">
            <span>2 passed, 1 failed</span>
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3" />
              <span>2.1s</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Timeline */}
        <div className="h-16 bg-[#252526] border-b border-[#3e3e42] p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs text-gray-400">Timeline</span>
            <span className="text-xs text-gray-500">should login with valid credentials</span>
          </div>
          <div className="relative h-6 bg-[#1e1e1e] rounded">
            <div className="absolute left-0 top-0 h-full w-1/4 bg-blue-500 rounded-l"></div>
            <div className="absolute left-1/4 top-0 h-full w-1/4 bg-green-500"></div>
            <div className="absolute left-1/2 top-0 h-full w-1/4 bg-yellow-500"></div>
            <div className="absolute left-3/4 top-0 h-full w-1/4 bg-purple-500 rounded-r"></div>
          </div>
        </div>

        {/* Content Tabs */}
        <div className="flex-1 bg-[#1e1e1e]">
          <Tabs defaultValue="actions" className="h-full flex flex-col">
            <TabsList className="bg-[#252526] border-b border-[#3e3e42] rounded-none h-10 p-0">
              <TabsTrigger
                value="actions"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent"
              >
                Actions
              </TabsTrigger>
              <TabsTrigger
                value="call"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent"
              >
                Call
              </TabsTrigger>
              <TabsTrigger
                value="log"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent"
              >
                Log
              </TabsTrigger>
              <TabsTrigger
                value="errors"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent"
              >
                Errors
              </TabsTrigger>
              <TabsTrigger
                value="console"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent"
              >
                Console
              </TabsTrigger>
              <TabsTrigger
                value="network"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-transparent"
              >
                Network
              </TabsTrigger>
            </TabsList>

            <TabsContent value="actions" className="flex-1 p-4 m-0">
              <ScrollArea className="h-full">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 hover:bg-[#252526] rounded">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-mono">page.goto('http://localhost:3000/login')</span>
                    <span className="text-xs text-gray-500 ml-auto">245ms</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-[#252526] rounded">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-mono">page.fill('[data-testid="email"]', 'user@example.com')</span>
                    <span className="text-xs text-gray-500 ml-auto">156ms</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-[#252526] rounded">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-mono">page.fill('[data-testid="password"]', 'password123')</span>
                    <span className="text-xs text-gray-500 ml-auto">98ms</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-[#252526] rounded">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm font-mono">page.click('[data-testid="login-button"]')</span>
                    <span className="text-xs text-gray-500 ml-auto">432ms</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-[#252526] rounded">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-mono">expect(page).toHaveURL('/dashboard')</span>
                    <span className="text-xs text-gray-500 ml-auto">89ms</span>
                  </div>
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="call" className="flex-1 p-4 m-0">
              <div className="text-gray-400 text-sm">Call details will be shown here...</div>
            </TabsContent>

            <TabsContent value="log" className="flex-1 p-4 m-0">
              <div className="text-gray-400 text-sm">Test logs will be shown here...</div>
            </TabsContent>

            <TabsContent value="errors" className="flex-1 p-4 m-0">
              <div className="text-gray-400 text-sm">Error details will be shown here...</div>
            </TabsContent>

            <TabsContent value="console" className="flex-1 p-4 m-0">
              <div className="text-gray-400 text-sm">Console output will be shown here...</div>
            </TabsContent>

            <TabsContent value="network" className="flex-1 p-4 m-0">
              <div className="text-gray-400 text-sm">Network requests will be shown here...</div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
