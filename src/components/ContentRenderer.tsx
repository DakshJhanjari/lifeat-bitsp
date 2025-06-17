
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Tables } from "@/integrations/supabase/types";

type ContentSection = Tables<"content_sections">;

interface ContentRendererProps {
  content: ContentSection;
  className?: string;
}

interface TextContent {
  text: string;
}

interface CardContent {
  title: string;
  content: string;
}

interface ListContent {
  title: string;
  items: string[];
}

interface HtmlContent {
  html: string;
}

export const ContentRenderer: React.FC<ContentRendererProps> = ({ content, className = "" }) => {
  const { content_type, content_data } = content;

  switch (content_type) {
    case 'text':
      const textData = content_data as TextContent;
      return (
        <span className={className}>
          {textData.text}
        </span>
      );

    case 'card':
      const cardData = content_data as CardContent;
      return (
        <div className={`bg-orange-50 p-3 rounded-lg ${className}`}>
          <h4 className="font-semibold text-orange-800">{cardData.title}</h4>
          <p className="text-sm text-gray-600">{cardData.content}</p>
        </div>
      );

    case 'list':
      const listData = content_data as ListContent;
      return (
        <div className={className}>
          <h4 className="font-medium mb-2">{listData.title}</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {listData.items?.map((item: string, index: number) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>
        </div>
      );

    case 'html':
      const htmlData = content_data as HtmlContent;
      return (
        <div 
          className={className}
          dangerouslySetInnerHTML={{ __html: htmlData.html }} 
        />
      );

    default:
      return <div className={className}>Unsupported content type: {content_type}</div>;
  }
};
