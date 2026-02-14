import React, { useState } from 'react';

interface Project {
  id: string;
  title: string;
  role: string;
  year: string;
  client: string;
  description: string;
  thumbnail: string;
  videoUrl: string; // YouTube embed URL
}

const departmentData: Record<string, { title: string; description: string; projects: Project[] }> = {
  sound: {
    title: 'Sound',
    description: 'Capturing the unseen. From field recording to post-production sound design.',
    projects: [
      { 
        id: 's1',
        title: 'Echoes of Silence', 
        role: 'Sound Designer', 
        year: '2024', 
        client: 'Independent Film', 
        description: 'Atmospheric soundscapes for a psychological thriller.',
        thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
      },
      { 
        id: 's2',
        title: 'Urban Pulse', 
        role: 'Location Sound', 
        year: '2023', 
        client: 'Nike', 
        description: 'High-energy commercial shoot in downtown Montreal.',
        thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
      },
    ],
  },
  production: {
    title: 'Production',
    description: 'Managing complexity. Bringing creative visions to life through meticulous planning.',
    projects: [
      { 
        id: 'p1',
        title: 'Global Summit 2024', 
        role: 'Executive Producer', 
        year: '2024', 
        client: 'TechCorp', 
        description: 'Multi-day international conference production.',
        thumbnail: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
      },
    ],
  },
  camera: {
    title: 'Camera',
    description: 'Visual storytelling. Crafting every frame with intention and light.',
    projects: [
      { 
        id: 'c1',
        title: 'Mountain High', 
        role: 'Cinematographer', 
        year: '2024', 
        client: 'Patagonia', 
        description: 'Stunning visuals captured in the Swiss Alps.',
        thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1'
      },
    ],
  },
};

const Department: React.FC<{ type: string }> = ({ type }) => {
  const data = departmentData[type];
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  if (!data) return null;

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <header className="mb-24">
        <h1 className="text-6xl md:text-8xl font-bold mb-8">
          {data.title}
        </h1>
        <p className="text-accent/60 max-w-2xl text-lg leading-relaxed">
          {data.description}
        </p>
      </header>

      <div className="space-y-32">
        {data.projects.map((project) => (
          <div key={project.id} className="group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Visual Content */}
              <div className="relative aspect-video bg-white/5 overflow-hidden">
                {activeVideoId === project.id ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={project.videoUrl}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0"
                  ></iframe>
                ) : (
                  <button 
                    onClick={() => setActiveVideoId(project.id)}
                    className="absolute inset-0 w-full h-full group/btn"
                  >
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover/btn:scale-110 group-hover/btn:bg-white group-hover/btn:text-dark transition-all duration-500">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </button>
                )}
              </div>

              {/* Project Details */}
              <div className="pt-4">
                <div className="flex flex-col mb-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-accent/30 mb-2 block">
                    {project.year} • {project.client}
                  </span>
                  <h3 className="text-4xl font-bold mb-4 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-sm uppercase tracking-widest text-accent/60 font-medium">
                    {project.role}
                  </div>
                </div>
                <p className="text-accent/40 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;