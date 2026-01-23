import React from 'react';
import { Link } from "wouter";
import { AdminLayout } from './AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MoreHorizontal, Edit, Eye, FileText } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AdminPages() {
  const [pages, setPages] = React.useState([
    { id: 1, title: 'Home', slug: '/', status: 'Published', lastModified: '2 mins ago', author: 'Tyler Huff' },
    { id: 2, title: 'About Us', slug: '/about', status: 'Published', lastModified: '2 days ago', author: 'Tyler Huff' },
    { id: 3, title: 'Services', slug: '/services', status: 'Published', lastModified: '1 week ago', author: 'System' },
    { id: 4, title: 'Portfolio', slug: '/portfolio', status: 'Published', lastModified: '3 weeks ago', author: 'Tyler Huff' },
    { id: 5, title: 'Contact', slug: '/contact', status: 'Published', lastModified: '1 month ago', author: 'System' },
    { id: 6, title: 'Privacy Policy', slug: '/privacy', status: 'Draft', lastModified: 'Yesterday', author: 'Legal' },
  ]);

  const toggleStatus = (id: number) => {
    setPages(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, status: p.status === 'Published' ? 'Draft' : 'Published' };
      }
      return p;
    }));
  };

  const deletePage = (id: number) => {
    if (window.confirm('Are you sure you want to delete this page?')) {
      setPages(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold font-heading text-gray-900">Pages</h1>
            <p className="text-gray-500">Manage your website content and page structure.</p>
          </div>
          <Button className="bg-[var(--accent-color)] hover:brightness-90 text-white transition-all">
            + Create New Page
          </Button>
        </div>

        <Card className="border-0 shadow-sm">
          <CardContent className="p-0">
             <div className="w-full overflow-auto">
               <table className="w-full text-left border-collapse">
                 <thead>
                   <tr className="bg-gray-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-semibold tracking-wider">
                     <th className="p-6">Page Title</th>
                     <th className="p-6">Status</th>
                     <th className="p-6">Last Modified</th>
                     <th className="p-6">Author</th>
                     <th className="p-6 text-right">Actions</th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-gray-100">
                   {pages.map((page) => (
                     <tr key={page.id} className="hover:bg-gray-50/50 transition-colors group">
                       <td className="p-6">
                         <div className="flex items-center gap-3">
                           <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                             <FileText className="w-5 h-5" />
                           </div>
                           <div>
                             <div className="font-bold text-gray-900">{page.title}</div>
                             <div className="text-xs text-gray-400 font-mono">{page.slug}</div>
                           </div>
                         </div>
                       </td>
                       <td className="p-6">
                         <Badge 
                           onClick={() => toggleStatus(page.id)}
                           variant="secondary" 
                           className={`cursor-pointer hover:opacity-80 transition-opacity ${
                           page.status === 'Published' ? "bg-green-100 text-green-700 hover:bg-green-200" : "bg-gray-100 text-gray-700"
                         }`}>
                           {page.status}
                         </Badge>
                       </td>
                       <td className="p-6 text-sm text-gray-600">{page.lastModified}</td>
                       <td className="p-6 text-sm text-gray-600">{page.author}</td>
                       <td className="p-6 text-right">
                         <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            {page.title === 'Home' ? (
                                <Link href="/admin/pages/edit">
                                  <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                    <Edit className="w-4 h-4" />
                                  </Button>
                                </Link>
                            ) : (
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-gray-400 cursor-not-allowed">
                                    <Edit className="w-4 h-4" />
                                </Button>
                            )}
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-gray-500 hover:text-gray-700">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>Page Settings</DropdownMenuItem>
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                <DropdownMenuItem 
                                  className="text-red-600"
                                  onClick={() => deletePage(page.id)}
                                >
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                         </div>
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
