import React from 'react';
import { AdminLayout } from './AdminLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Save, ArrowLeft, Image as ImageIcon, Layout, Type } from 'lucide-react';
import { Link } from "wouter";

export default function AdminEditPage() {
  const [loading, setLoading] = React.useState(false);
  const [heroImage, setHeroImage] = React.useState("https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80");
  const [formData, setFormData] = React.useState({
    headline: "Websites and Marketing for Service Businesses",
    subheadline: "We help service businesses look professional online and get found when people search.",
    features: [
      { title: "Try Before you Buy", desc: "See your site before paying." },
      { title: "Easy Onboarding", desc: "We handle the tech stuff." },
      { title: "Marketing Too", desc: "SEO and Ads included." },
      { title: "Ongoing Support", desc: "We update it for you." }
    ]
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setHeroImage(imageUrl);
    }
  };

  const handleSave = () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      // In a real app, this would show a toast notification
      alert("Changes saved successfully!");
    }, 1000);
  };

  const updateFeature = (index: number, field: 'title' | 'desc', value: string) => {
    const newFeatures = [...formData.features];
    newFeatures[index] = { ...newFeatures[index], [field]: value };
    setFormData({ ...formData, features: newFeatures });
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sticky top-[4.5rem] bg-gray-50/95 backdrop-blur z-10 py-2 -mx-2 px-2">
          <div className="flex items-center gap-4">
            <Link href="/admin/pages">
              <Button variant="ghost" size="icon" className="rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold font-heading text-gray-900">Edit Page: Home</h1>
              <p className="text-sm text-gray-500">Last saved 2 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline">Preview</Button>
            <Button
              className="bg-[var(--accent-color)] hover:brightness-90 text-white gap-2 transition-all"
              onClick={handleSave}
              disabled={loading}
            >
              <Save className="w-4 h-4" />
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>

        <Tabs defaultValue="content" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="seo">SEO & Metadata</TabsTrigger>
            <TabsTrigger value="settings">Page Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="content" className="space-y-6 mt-6">
            
            {/* Hero Section Edit */}
            <Card className="border-0 shadow-sm overflow-hidden">
               <div className="bg-slate-50 border-b border-gray-100 p-4 flex items-center gap-2">
                  <Layout className="w-4 h-4 text-slate-500" />
                  <span className="font-semibold text-gray-700">Hero Section</span>
               </div>
               <CardContent className="p-6 space-y-6">
                  <div className="grid gap-6">
                    <div className="space-y-2">
                       <Label>Hero Headline</Label>
                       <Input 
                         value={formData.headline} 
                         onChange={(e) => setFormData({...formData, headline: e.target.value})}
                         className="font-bold text-lg" 
                       />
                    </div>
                    <div className="space-y-2">
                       <Label>Hero Subheadline</Label>
                       <Textarea 
                         value={formData.subheadline}
                         onChange={(e) => setFormData({...formData, subheadline: e.target.value})}
                         rows={3} 
                       />
                    </div>
                    <div className="space-y-2">
                       <Label>Hero Image</Label>
                       <div className="relative group cursor-pointer">
                         <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center justify-center gap-4 hover:bg-gray-50 transition-colors h-64 relative overflow-hidden">
                            {heroImage ? (
                              <img src={heroImage} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" alt="Preview" />
                            ) : null}
                            
                            <div className="relative z-10 flex flex-col items-center gap-2">
                               <Button variant="secondary" size="sm" className="gap-2 pointer-events-none">
                                 <ImageIcon className="w-4 h-4" /> 
                                 {heroImage ? "Change Image" : "Upload Image"}
                               </Button>
                               <span className="text-xs text-gray-500">JPG, PNG, WebP up to 5MB</span>
                            </div>
                            
                            <input 
                              type="file" 
                              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                              accept="image/*"
                              onChange={handleImageUpload}
                            />
                         </div>
                       </div>
                    </div>
                  </div>
               </CardContent>
            </Card>

            {/* Why Us Section Edit */}
            <Card className="border-0 shadow-sm overflow-hidden">
               <div className="bg-slate-50 border-b border-gray-100 p-4 flex items-center gap-2">
                  <Type className="w-4 h-4 text-slate-500" />
                  <span className="font-semibold text-gray-700">Why Us Section</span>
               </div>
               <CardContent className="p-6 space-y-6">
                  <div className="space-y-4">
                     {formData.features.map((item, i) => (
                       <div key={i} className="flex gap-4 items-start p-4 bg-gray-50 rounded-lg border border-gray-100">
                          <div className="w-8 h-8 bg-white rounded flex items-center justify-center border border-gray-200 shrink-0 font-bold text-gray-400">
                             {i + 1}
                          </div>
                          <div className="flex-1 space-y-3">
                             <Input 
                               value={item.title} 
                               onChange={(e) => updateFeature(i, 'title', e.target.value)}
                               className="font-semibold" 
                             />
                             <Textarea 
                               value={item.desc}
                               onChange={(e) => updateFeature(i, 'desc', e.target.value)}
                               placeholder="Description text..." 
                               rows={2} 
                             />
                          </div>
                       </div>
                     ))}
                     <Button variant="outline" className="w-full border-dashed">
                        + Add Feature
                     </Button>
                  </div>
               </CardContent>
            </Card>

          </TabsContent>

          <TabsContent value="seo" className="mt-6">
             <Card>
                <CardContent className="p-6 space-y-6">
                   <div className="space-y-2">
                      <Label>Meta Title</Label>
                      <Input defaultValue="TwentyOne Solutions | Web Design for Service Businesses" />
                      <p className="text-xs text-gray-500">Recommended length: 50-60 characters</p>
                   </div>
                   <div className="space-y-2">
                      <Label>Meta Description</Label>
                      <Textarea defaultValue="We create professional websites and marketing strategies for service businesses. Get a free site preview in 24 hours." rows={4} />
                      <p className="text-xs text-gray-500">Recommended length: 150-160 characters</p>
                   </div>
                   <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg text-blue-800">
                      <div className="flex items-center gap-3">
                         <div className="font-semibold">Search Preview</div>
                         <div className="text-sm opacity-75">This is how your page will appear in Google search results.</div>
                      </div>
                   </div>
                </CardContent>
             </Card>
          </TabsContent>

          <TabsContent value="settings" className="mt-6">
             <Card>
                <CardContent className="p-6 space-y-6">
                   <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                         <Label className="text-base">Visibility</Label>
                         <div className="text-sm text-gray-500">Is this page visible to the public?</div>
                      </div>
                      <Switch defaultChecked />
                   </div>
                   <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                         <Label className="text-base">Show in Navigation</Label>
                         <div className="text-sm text-gray-500">Include this page in the main menu</div>
                      </div>
                      <Switch defaultChecked />
                   </div>
                </CardContent>
             </Card>
          </TabsContent>
        </Tabs>

      </div>
    </AdminLayout>
  );
}
