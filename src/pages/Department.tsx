import React, { useState } from "react";
import content from "../data/projects.json";

interface Project {
	id: string;
	title: string;
	role: string;
	year: string;
	client: string;
	description: string;
	thumbnails: {
		sm: string;
		md: string;
		lg: string;
	};
	videoUrl: string; // YouTube embed URL
}

interface DepartmentData {
	title: string;
	description: string;
	projects: Project[];
}

const Department: React.FC<{ type: string }> = ({ type }) => {
	const data = (content as Record<string, DepartmentData>)[type];
	const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

	if (!data) return null;

	return (
		<div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
			<header className="mb-24">
				<h1 className="text-6xl md:text-8xl font-bold mb-8">{data.title}</h1>
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
											src={project.thumbnails.md} // default fallback
											srcSet={`
                        ${project.thumbnails.sm} 640w,
                        ${project.thumbnails.md} 1024w,
                        ${project.thumbnails.lg} 1600w
                      `}
											sizes="(max-width: 768px) 100vw, 50vw"
											alt={project.title}
											className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
										/>
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover/btn:scale-110 group-hover/btn:bg-white group-hover/btn:text-dark transition-all duration-500">
												<svg
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="currentColor"
												>
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
