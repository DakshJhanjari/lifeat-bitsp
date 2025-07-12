
import React from 'react';
import DOMPurify from 'dompurify';
import type { Tables } from '@/integrations/supabase/types';

type ContentSection = Tables<'content_sections'>;

interface ContentRendererProps {
  section: ContentSection;
  className?: string;
}

// Type guards for content data
const isTextContent = (data: any): data is { text: string } => {
  return data && typeof data === 'object' && typeof data.text === 'string';
};

const isHtmlContent = (data: any): data is { html: string } => {
  return data && typeof data === 'object' && typeof data.html === 'string';
};

const isListContent = (data: any): data is { title?: string; items: string[] } => {
  return data && typeof data === 'object' && Array.isArray(data.items);
};

const isCardContent = (data: any): data is { title?: string; content?: string } => {
  return data && typeof data === 'object' && (data.title || data.content);
};

const ContentRenderer: React.FC<ContentRendererProps> = ({ section, className = '' }) => {
  const { content_type, content_data } = section;

  const renderContent = () => {
    switch (content_type) {
      case 'text':
        if (!isTextContent(content_data)) {
          return <p className={`text-gray-500 italic ${className}`}>Invalid text content</p>;
        }
        return (
          <p className={`text-gray-700 ${className}`}>
            {content_data.text || ''}
          </p>
        );

      case 'html':
        if (!isHtmlContent(content_data)) {
          return <p className={`text-gray-500 italic ${className}`}>Invalid HTML content</p>;
        }
        // Sanitize HTML content to prevent XSS attacks
        const sanitizedHTML = DOMPurify.sanitize(content_data.html || '', {
          ALLOWED_TAGS: ['p', 'strong', 'em', 'u', 'br', 'ul', 'ol', 'li', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
          ALLOWED_ATTR: ['class'],
        });
        return (
          <div 
            className={className}
            dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
          />
        );

      case 'list':
        if (!isListContent(content_data)) {
          return <p className={`text-gray-500 italic ${className}`}>Invalid list content</p>;
        }
        const items = content_data.items || [];
        return (
          <div className={className}>
            {content_data.title && (
              <h4 className="font-semibold text-gray-800 mb-2">
                {content_data.title}
              </h4>
            )}
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {items.map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        );

      case 'card':
        if (!isCardContent(content_data)) {
          return <p className={`text-gray-500 italic ${className}`}>Invalid card content</p>;
        }
        return (
          <div className={`bg-white rounded-lg border p-4 ${className}`}>
            {content_data.title && (
              <h4 className="font-semibold text-gray-800 mb-2">
                {content_data.title}
              </h4>
            )}
            {content_data.content && (
              <p className="text-gray-700">
                {content_data.content}
              </p>
            )}
          </div>
        );

      default:
        return (
          <div className={`text-gray-500 italic ${className}`}>
            Unsupported content type: {content_type}
          </div>
        );
    }
  };

  return renderContent();
};

export default ContentRenderer;
