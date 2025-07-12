
import React from 'react';
import DOMPurify from 'dompurify';
import type { Tables } from '@/integrations/supabase/types';

type ContentSection = Tables<'content_sections'>;

interface ContentRendererProps {
  section: ContentSection;
  className?: string;
}

const ContentRenderer: React.FC<ContentRendererProps> = ({ section, className = '' }) => {
  const { content_type, content_data } = section;

  const renderContent = () => {
    switch (content_type) {
      case 'text':
        return (
          <p className={`text-gray-700 ${className}`}>
            {content_data?.text || ''}
          </p>
        );

      case 'html':
        // Sanitize HTML content to prevent XSS attacks
        const sanitizedHTML = DOMPurify.sanitize(content_data?.html || '', {
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
        const items = content_data?.items || [];
        return (
          <div className={className}>
            {content_data?.title && (
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
        return (
          <div className={`bg-white rounded-lg border p-4 ${className}`}>
            {content_data?.title && (
              <h4 className="font-semibold text-gray-800 mb-2">
                {content_data.title}
              </h4>
            )}
            {content_data?.content && (
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
