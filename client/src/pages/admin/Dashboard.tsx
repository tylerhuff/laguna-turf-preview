import React from 'react';
import { AdminLayout } from './AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Eye, MousePointer2, TrendingUp, Calendar, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  const [leads, setLeads] = React.useState([
    { id: 1, name: 'Sarah Connor', email: 'sarah@skynet.com', date: '2 hours ago', status: 'New' },
    { id: 2, name: 'John Wick', email: 'john@continental.com', date: '5 hours ago', status: 'Contacted' },
    { id: 3, name: 'Bruce Wayne', email: 'bruce@wayne.corp', date: '1 day ago', status: 'Pending' },
    { id: 4, name: 'Tony Stark', email: 'tony@stark.ind', date: '2 days ago', status: 'Closed' },
  ]);

  const [stats, setStats] = React.useState([
    { title: 'Total Visitors', value: '12,345', change: '+12%', icon: Users },
    { title: 'Page Views', value: '45,678', change: '+8%', icon: Eye },
    { title: 'Conversion Rate', value: '3.2%', change: '+0.4%', icon: MousePointer2 },
    { title: 'New Leads', value: '145', change: '+24%', icon: TrendingUp },
  ]);

  // Update stats when leads change (mock logic)
  React.useEffect(() => {
    setStats(prev => prev.map(stat => {
      if (stat.title === 'New Leads') {
        return { ...stat, value: leads.length.toString() };
      }
      return stat;
    }));
  }, [leads]);

  const deleteLead = (id: number) => {
    setLeads(prev => prev.filter(l => l.id !== id));
  };

  const toggleStatus = (id: number) => {
    setLeads(prev => prev.map(l => {
      if (l.id === id) {
        const statuses = ['New', 'Contacted', 'Pending', 'Closed'];
        const currentIndex = statuses.indexOf(l.status);
        const nextStatus = statuses[(currentIndex + 1) % statuses.length];
        return { ...l, status: nextStatus };
      }
      return l;
    }));
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold font-heading text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here's what's happening with your website.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <Card key={i} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[var(--accent-color)]/10 flex items-center justify-center text-[var(--accent-color)]">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-2.5 py-0.5 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                  <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 border-0 shadow-sm">
            <CardHeader className="border-b border-gray-100 bg-white">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-heading">Recent Inquiries</CardTitle>
                <Button variant="outline" size="sm">View All</Button>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100">
                {leads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between p-6 hover:bg-gray-50 transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                        {lead.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{lead.name}</h4>
                        <p className="text-sm text-gray-500">{lead.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <span className="text-sm text-gray-400 hidden sm:block">{lead.date}</span>
                       <button 
                         onClick={() => toggleStatus(lead.id)}
                         className={`px-3 py-1 rounded-full text-xs font-bold cursor-pointer hover:opacity-80 transition-opacity ${
                         lead.status === 'New' ? 'bg-blue-100 text-blue-700' :
                         lead.status === 'Contacted' ? 'bg-yellow-100 text-yellow-700' :
                         lead.status === 'Closed' ? 'bg-green-100 text-green-700' :
                         'bg-gray-100 text-gray-700'
                       }`}>
                         {lead.status}
                       </button>
                       <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => deleteLead(lead.id)}
                       >
                         Delete
                       </Button>
                    </div>
                  </div>
                ))}
                {leads.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    No recent leads found.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-sm h-fit">
            <CardHeader className="border-b border-gray-100">
              <CardTitle className="text-xl font-heading">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
               <Button className="w-full justify-between bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 h-12">
                 Edit Home Page
                 <ArrowUpRight className="w-4 h-4 text-gray-400" />
               </Button>
               <Button className="w-full justify-between bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 h-12">
                 Add Portfolio Item
                 <ArrowUpRight className="w-4 h-4 text-gray-400" />
               </Button>
               <Button className="w-full justify-between bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 h-12">
                 Update SEO Settings
                 <ArrowUpRight className="w-4 h-4 text-gray-400" />
               </Button>
               
               <Button 
                onClick={() => {
                  alert("Backup Download Started\n\nThis will download a .zip file containing:\n- Source Code\n- Media Assets\n- Content Database");
                }}
                className="w-full justify-between bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 h-12"
               >
                 Download Full Backup
                 <ArrowUpRight className="w-4 h-4 text-gray-400" />
               </Button>
               
               <div className="pt-4 mt-4 border-t border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-2">System Status</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Server Status</span>
                      <span className="text-green-600 font-medium">Operational</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Last Backup</span>
                      <span className="text-gray-700 font-medium">Today, 4:00 AM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Version</span>
                      <span className="text-gray-700 font-medium">v2.1.0</span>
                    </div>
                  </div>
               </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
