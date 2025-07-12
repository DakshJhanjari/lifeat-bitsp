
import React, { useState } from "react";
import { useContent, useUpdateContent } from "@/hooks/useContent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import DOMPurify from "dompurify";
import ProtectedRoute from "@/components/ProtectedRoute";

// Validation schemas
const textContentSchema = z.object({
  text: z.string().min(1, "Text cannot be empty").max(1000, "Text too long"),
});

const cardContentSchema = z.object({
  title: z.string().min(1, "Title cannot be empty").max(200, "Title too long"),
  content: z.string().min(1, "Content cannot be empty").max(2000, "Content too long"),
});

const listContentSchema = z.object({
  title: z.string().min(1, "Title cannot be empty").max(200, "Title too long"),
  items: z.array(z.string().min(1, "Item cannot be empty").max(500, "Item too long")).min(1, "At least one item required"),
});

const htmlContentSchema = z.object({
  html: z.string().min(1, "HTML cannot be empty").max(5000, "HTML too long"),
});

const AdminContent = () => {
  const { data: contentSections, isLoading } = useContent();
  const updateContent = useUpdateContent();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editData, setEditData] = useState<any>({});
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const sanitizeInput = (input: string): string => {
    return DOMPurify.sanitize(input, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
  };

  const validateContent = (section: any, data: any): boolean => {
    try {
      setValidationErrors({});
      
      switch (section.content_type) {
        case 'text':
          textContentSchema.parse(data);
          break;
        case 'card':
          cardContentSchema.parse(data);
          break;
        case 'list':
          listContentSchema.parse(data);
          break;
        case 'html':
          htmlContentSchema.parse(data);
          break;
        default:
          throw new Error('Unsupported content type');
      }
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const errors: Record<string, string> = {};
        error.errors.forEach((err) => {
          errors[err.path.join('.')] = err.message;
        });
        setValidationErrors(errors);
      }
      return false;
    }
  };

  const handleEdit = (section: any) => {
    setEditingId(section.id);
    setEditData({ ...section.content_data });
    setValidationErrors({});
  };

  const handleSave = async (id: string) => {
    const section = contentSections?.find(s => s.id === id);
    if (!section) return;

    // Sanitize input data
    const sanitizedData = { ...editData };
    Object.keys(sanitizedData).forEach(key => {
      if (typeof sanitizedData[key] === 'string') {
        sanitizedData[key] = sanitizeInput(sanitizedData[key]);
      } else if (Array.isArray(sanitizedData[key])) {
        sanitizedData[key] = sanitizedData[key].map((item: any) => 
          typeof item === 'string' ? sanitizeInput(item) : item
        );
      }
    });

    // Validate content
    if (!validateContent(section, sanitizedData)) {
      toast.error("Please fix validation errors before saving");
      return;
    }

    try {
      await updateContent.mutateAsync({
        id,
        content_data: sanitizedData,
      });
      toast.success("Content updated successfully!");
      setEditingId(null);
      setEditData({});
      setValidationErrors({});
    } catch (error) {
      toast.error("Failed to update content");
      console.error("Error updating content:", error);
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditData({});
    setValidationErrors({});
  };

  const renderEditForm = (section: any) => {
    const { content_type } = section;

    switch (content_type) {
      case 'text':
        return (
          <div className="space-y-2">
            <Input
              value={editData.text || ''}
              onChange={(e) => setEditData({ ...editData, text: e.target.value })}
              placeholder="Enter text content"
              className={validationErrors.text ? "border-red-500" : ""}
              maxLength={1000}
            />
            {validationErrors.text && (
              <p className="text-sm text-red-500">{validationErrors.text}</p>
            )}
          </div>
        );

      case 'card':
        return (
          <div className="space-y-2">
            <div>
              <Input
                value={editData.title || ''}
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                placeholder="Card title"
                className={validationErrors.title ? "border-red-500" : ""}
                maxLength={200}
              />
              {validationErrors.title && (
                <p className="text-sm text-red-500">{validationErrors.title}</p>
              )}
            </div>
            <div>
              <Textarea
                value={editData.content || ''}
                onChange={(e) => setEditData({ ...editData, content: e.target.value })}
                placeholder="Card content"
                className={validationErrors.content ? "border-red-500" : ""}
                maxLength={2000}
              />
              {validationErrors.content && (
                <p className="text-sm text-red-500">{validationErrors.content}</p>
              )}
            </div>
          </div>
        );

      case 'list':
        return (
          <div className="space-y-2">
            <div>
              <Input
                value={editData.title || ''}
                onChange={(e) => setEditData({ ...editData, title: e.target.value })}
                placeholder="List title"
                className={validationErrors.title ? "border-red-500" : ""}
                maxLength={200}
              />
              {validationErrors.title && (
                <p className="text-sm text-red-500">{validationErrors.title}</p>
              )}
            </div>
            <div>
              <Textarea
                value={editData.items?.join('\n') || ''}
                onChange={(e) => setEditData({ 
                  ...editData, 
                  items: e.target.value.split('\n').filter(item => item.trim()) 
                })}
                placeholder="List items (one per line)"
                rows={5}
                className={validationErrors.items ? "border-red-500" : ""}
              />
              {validationErrors.items && (
                <p className="text-sm text-red-500">{validationErrors.items}</p>
              )}
            </div>
          </div>
        );

      case 'html':
        return (
          <div className="space-y-2">
            <Textarea
              value={editData.html || ''}
              onChange={(e) => setEditData({ ...editData, html: e.target.value })}
              placeholder="HTML content (limited tags allowed)"
              rows={5}
              className={validationErrors.html ? "border-red-500" : ""}
              maxLength={5000}
            />
            {validationErrors.html && (
              <p className="text-sm text-red-500">{validationErrors.html}</p>
            )}
            <p className="text-xs text-gray-500">
              Allowed tags: p, strong, em, u, br, ul, ol, li, h1-h6. All HTML will be sanitized.
            </p>
          </div>
        );

      default:
        return <div>Unsupported content type</div>;
    }
  };

  if (isLoading) {
    return <div className="p-8">Loading content...</div>;
  }

  return (
    <ProtectedRoute requireAdmin>
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
    </ProtectedRoute>
  );
};

export default AdminContent;
