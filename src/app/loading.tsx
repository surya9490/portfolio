import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <div className="container section-spacing">
      <div className="space-y-8">
        {/* Hero Section Loading */}
        <div className="space-y-4">
          <Skeleton variant="title" className="w-[60%] max-w-[500px]" />
          <Skeleton variant="text" className="w-[80%]" />
          <Skeleton variant="text" className="w-[70%]" />
        </div>

        {/* Projects Section Loading */}
        <div className="space-y-4">
          <Skeleton variant="title" className="w-[200px]" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-3">
                <Skeleton variant="image" />
                <Skeleton variant="title" className="w-[80%]" />
                <Skeleton variant="text" className="w-[90%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 