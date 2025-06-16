
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Tables } from "@/integrations/supabase/types";

type ContentSection = Tables<"content_sections">;

interface ContentRendererProps {
  content: ContentSection;
  className?: string;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ content, className = "" }) => {
  const { content_type, content_data } = content;

  switch (content_type) {
    case 'text':
      return (
        <span className={className}>
          {content_data.text}
        </span>
      );

    case 'card':
      return (
        <div className={`bg-orange-50 p-3 rounded-lg ${className}`}>
          <h4 className="font-semibold text-orange-800">{content_data.title}</h4>
          <p className="text-sm text-gray-600">{content_data.content}</p>
        </div>
      );

    case 'list':
      return (
        <div className={className}>
          <h4 className="font-medium mb-2">{content_data.title}</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {content_data.items?.map((item: string, index: number) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      );

    case 'html':
      return (
        <div 
          className={className}
          dangerouslySetInnerHTML={{ __html: content_data.html }} 
        />
      );

    default:
      return <div className={className}>Unsupported content type: {content_type}</div>;
  }
};
