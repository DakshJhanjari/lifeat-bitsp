
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

  const handleSave = async (id: string) => {
    try {
      await updateContent.mutateAsync({
        id,
        content_data: editData,
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
          />
        );

      case 'card':
        return (
          <div className="space-y-2">
            <Input
              value={editData.title || ''}
              onChange={(e) => setEditData({ ...editData, title: e.target.value })}
              placeholder="Card title"
            />
            <Textarea
              value={editData.content || ''}
              onChange={(e) => setEditData({ ...editData, content: e.target.value })}
              placeholder="Card content"
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
            />
            <Textarea
              value={editData.items?.join('\n') || ''}
              onChange={(e) => setEditData({ 
                ...editData, 
                items: e.target.value.split('\n').filter(item => item.trim()) 
              })}
              placeholder="List items (one per line)"
              rows={5}
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
          />
        );

      default:
        return <div>Unsupported content type</div>;
    }
  };

  if (isLoading) {
    return <div className="p-8">Loading content...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Content Management</h1>
      
      <div className="grid gap-6">
        {contentSections?.map((section) => (
          <Card key={section.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{section.section_title}</span>
                <div className="text-sm text-gray-500">
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
                      onClick={() => handleSave(section.id)}
                      disabled={updateContent.isPending}
                    >
                      {updateContent.isPending ? "Saving..." : "Save"}
                    </Button>
                    <Button variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <pre className="text-sm">
                      {JSON.stringify(section.content_data, null, 2)}
                    </pre>
                  </div>
                  <Button onClick={() => handleEdit(section)}>
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
