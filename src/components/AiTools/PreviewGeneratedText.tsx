'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

interface PreviewGeneratedTextProps {
  generatedContent: string;
  height?: number;
}

export default function PreviewGeneratedText({ generatedContent, height = 300 }: PreviewGeneratedTextProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!generatedContent || generatedContent === 'Loading....') {
      toast.error('Nothing to copy yet');
      return;
    }
    
    try {
      await navigator.clipboard.writeText(generatedContent);
      setCopied(true);
      toast.success('Copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy');
    }
  };

  return (
    <div className="lg:col-span-8">
      <div className="rounded-lg bg-dark-8 p-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Generated Content</h2>
          {generatedContent && generatedContent !== 'Loading....' && (
            <button
              onClick={handleCopy}
              className="rounded-lg bg-purple px-4 py-2 text-white hover:bg-purple/80"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          )}
        </div>
        <div 
          className="overflow-y-auto rounded-lg bg-dark-7 p-4 text-white"
          style={{ height: `${height}px` }}
        >
          {generatedContent || 'Your generated content will appear here...'}
        </div>
      </div>
    </div>
  );
}