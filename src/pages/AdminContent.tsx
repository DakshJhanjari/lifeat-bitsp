import React, { useState } from "react";
import { useContent, useUpdateContent } from "@/hooks/useContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const AdminContent = () => {
  const { data: contentSections, isLoading } = useContent();
  const updateContent = useUpdateContent();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<any>({});

  const handleEdit = (section: any) => {
    setEditingId(section.id);
    setEditData({ ...section.content_data });
  };

  const handleSave = async (section: any) => {
    try {
      await updateContent.mutateAsync({
        id: section.id,
        content_data: editData,
        section_key: section.section_key,
        section_title: section.section_title,
        content_type: section.content_type,
      });
      toast.success("Content updated successfully!");
      setEditingId(null);
      setEditData({});
    } catch (error) {
      toast.error("Failed to update content");
      console.error("Error updating content:", error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  const renderEditForm = (section: any) => {
    const { content_type } = section;

    switch (content_type) {
      case 'text':
        return (
          <Input
            value={editData.text || ''}
            onChange={(e) => setEditData({ ...editData, text: e.target.value })}
            placeholder="Enter text content"
            className="bg-slate-900/60 border-slate-800 text-white"
          />
        );

      case 'card':
        return (
          <div className="space-y-2">
            <Input
              value={editData.title || ''}
              onChange={(e) => setEditData({ ...editData, title: e.target.value })}
              placeholder="Card title"
              className="bg-slate-900/60 border-slate-800 text-white"
            />
            <Textarea
              value={editData.content || ''}
              onChange={(e) => setEditData({ ...editData, content: e.target.value })}
              placeholder="Card content"
              className="bg-slate-900/60 border-slate-800 text-white"
            />
          </div>
        );

      case 'list':
        return (
          <div className="space-y-2">
            <Input
              value={editData.title || ''}
              onChange={(e) => setEditData({ ...editData, title: e.target.value })}
              placeholder="List title"
              className="bg-slate-900/60 border-slate-800 text-white"
            />
            <Textarea
              value={editData.items?.join('\n') || ''}
              onChange={(e) => setEditData({ 
                ...editData, 
                items: e.target.value.split('\n').filter(item => item.trim()) 
              })}
              placeholder="List items (one per line)"
              rows={5}
              className="bg-slate-900/60 border-slate-800 text-white"
            />
          </div>
        );

      case 'html':
        return (
          <Textarea
            value={editData.html || ''}
            onChange={(e) => setEditData({ ...editData, html: e.target.value })}
            placeholder="HTML content"
            rows={5}
            className="bg-slate-900/60 border-slate-800 text-white"
          />
        );

      default:
        return <div>Unsupported content type</div>;
    }
  };

  if (isLoading) {
    return <div className="p-8 text-slate-400">Loading content...</div>;
  }

  return (
    <div className="container mx-auto p-8 min-h-screen text-foreground">
      <h1 className="text-3xl font-bold mb-8 text-white">Content Management</h1>
      
      <div className="grid gap-6">
        {contentSections?.map((section) => (
          <Card key={section.id} className="bg-slate-900/40 border border-slate-800 text-foreground backdrop-blur-sm shadow-xl">
            <CardHeader>
              <CardTitle className="flex justify-between items-center text-white">
                <span>{section.section_title}</span>
                <div className="text-sm text-slate-500 font-normal">
                  {section.content_type} | {section.section_key}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {editingId === section.id ? (
                <div className="space-y-4">
                  {renderEditForm(section)}
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => handleSave(section)}
                      disabled={updateContent.isPending}
                      className="bg-blue-600 hover:bg-blue-500 text-white"
                    >
                      {updateContent.isPending ? "Saving..." : "Save"}
                    </Button>
                    <Button variant="outline" onClick={handleCancel} className="border-slate-800 text-slate-300 hover:bg-slate-900/60 hover:text-white">
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-slate-950/60 border border-slate-800/80 p-4 rounded text-slate-300">
                    <pre className="text-sm text-left">
                      {JSON.stringify(section.content_data, null, 2)}
                    </pre>
                  </div>
                  <Button onClick={() => handleEdit(section)} className="border-slate-800 bg-slate-900/60 text-slate-300 hover:bg-slate-800 hover:text-white">
                    Edit
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminContent;
