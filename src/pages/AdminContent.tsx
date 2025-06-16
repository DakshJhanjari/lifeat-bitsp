
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContent, useUpdateContent } from "@/hooks/useContent";
import { toast } from "sonner";
import { Loader2, Save, Edit, X } from "lucide-react";
import type { Tables } from "@/integrations/supabase/types";

type ContentSection = Tables<"content_sections">;

const AdminContent = () => {
  const { data: content, isLoading } = useContent();
  const updateContent = useUpdateContent();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<any>({});

  const handleEdit = (section: ContentSection) => {
    setEditingId(section.id);
    setEditData({ ...section.content_data });
  };

  const handleSave = async (section: ContentSection) => {
    try {
      await updateContent.mutateAsync({
        id: section.id,
        content_data: editData
      });
      setEditingId(null);
      toast.success("Content updated successfully!");
    } catch (error) {
      toast.error("Failed to update content");
      console.error(error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
  };

  const renderEditForm = (section: ContentSection) => {
    switch (section.content_type) {
      case 'text':
        return (
          <div className="space-y-2">
            <Label htmlFor="text">Text Content</Label>
            <Input
              id="text"
              value={editData.text || ''}
              onChange={(e) => setEditData({ ...editData, text: e.target.value })}
            />
          </div>
        );

      case 'card':
        return (
          <div className="space-y-2">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={editData.title || ''}
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="content">Content</Label>
              <Input
                id="content"
                value={editData.content || ''}
                onChange={(e) => setEditData({ ...editData, content: e.target.value })}
              />
            </div>
          </div>
        );

      case 'list':
        return (
          <div className="space-y-2">
            <div>
              <Label htmlFor="list-title">List Title</Label>
              <Input
                id="list-title"
                value={editData.title || ''}
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="items">Items (one per line)</Label>
              <textarea
                id="items"
                className="w-full p-2 border rounded-md min-h-[100px]"
                value={editData.items?.join('\n') || ''}
                onChange={(e) => setEditData({ 
                  ...editData, 
                  items: e.target.value.split('\n').filter(item => item.trim())
                })}
              />
            </div>
          </div>
        );

      default:
        return <div>Unsupported content type for editing</div>;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Content Management</h1>
          <p className="text-gray-600">Edit the content that appears throughout the website</p>
        </div>

        <div className="grid gap-6">
          {content?.map((section) => (
            <Card key={section.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-lg">{section.section_title}</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">
                      Type: {section.content_type} | Key: {section.section_key}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {editingId === section.id ? (
                      <>
                        <Button
                          onClick={() => handleSave(section)}
                          disabled={updateContent.isPending}
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          {updateContent.isPending ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Save className="h-4 w-4" />
                          )}
                        </Button>
                        <Button
                          onClick={handleCancel}
                          variant="outline"
                          size="sm"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </>
                    ) : (
                      <Button
                        onClick={() => handleEdit(section)}
                        variant="outline"
                        size="sm"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {editingId === section.id ? (
                  renderEditForm(section)
                ) : (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                      {JSON.stringify(section.content_data, null, 2)}
                    </pre>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminContent;
