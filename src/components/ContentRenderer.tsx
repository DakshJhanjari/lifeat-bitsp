
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

// Type guard functions
const isTextContent = (data: any): data is TextContent => {
  return data && typeof data === 'object' && typeof data.text === 'string';
};

const isCardContent = (data: any): data is CardContent => {
  return data && typeof data === 'object' && 
         typeof data.title === 'string' && 
         typeof data.content === 'string';
};

const isListContent = (data: any): data is ListContent => {
  return data && typeof data === 'object' && 
         typeof data.title === 'string' && 
         Array.isArray(data.items);
};

const isHtmlContent = (data: any): data is HtmlContent => {
  return data && typeof data === 'object' && typeof data.html === 'string';
};

export const ContentRenderer: React.FC<ContentRendererProps> = ({ content, className = "" }) => {
  const { content_type, content_data } = content;

  switch (content_type) {
    case 'text':
      if (isTextContent(content_data)) {
        return (
          <span className={className}>
            {content_data.text}
          </span>
        );
      }
      return <div className={className}>Invalid text content</div>;

    case 'card':
      if (isCardContent(content_data)) {
        return (
          <div className={`bg-slate-950/30 border border-slate-800/50 p-4 rounded-xl shadow-lg ${className}`}>
            <h4 className="font-semibold text-white mb-1">{content_data.title}</h4>
            <p className="text-sm text-slate-300 leading-relaxed">{content_data.content}</p>
          </div>
        );
      }
      return <div className={className}>Invalid card content</div>;

    case 'list':
      if (isListContent(content_data)) {
        return (
          <div className={className}>
            <h4 className="font-semibold text-white mb-2">{content_data.title}</h4>
            <ul className="text-sm text-slate-300 space-y-1.5">
              {content_data.items?.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-2 text-left">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      }
      return <div className={className}>Invalid list content</div>;

    case 'html':
      if (isHtmlContent(content_data)) {
        return (
          <div 
            className={className}
            dangerouslySetInnerHTML={{ __html: content_data.html }} 
          />
        );
      }
      return <div className={className}>Invalid HTML content</div>;

    default:
      return <div className={className}>Unsupported content type: {content_type}</div>;
  }
};
