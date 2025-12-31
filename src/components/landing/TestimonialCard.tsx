import Card from '@/components/ui/Card';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  imageSrc?: string;
}

export default function TestimonialCard({ quote, author, role, imageSrc }: TestimonialCardProps) {
  return (
    <Card variant="elevated" className="h-full flex flex-col">
      {/* Quote */}
      <blockquote className="text-lg leading-relaxed text-gray-700 mb-6 flex-grow">
        &ldquo;{quote}&rdquo;
      </blockquote>
      
      {/* Author */}
      <div className="flex items-center gap-4">
        {imageSrc && (
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            <img 
              src={imageSrc} 
              alt={author} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-semibold text-gray-900">{author}</div>
          <div className="text-sm text-gray-600">{role}</div>
        </div>
      </div>
    </Card>
  );
}

