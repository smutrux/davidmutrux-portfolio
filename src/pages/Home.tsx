import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import content from "../data/home.json";

const Home: React.FC = () => {
	return (
		<div className="relative">
			{/* Hero Section */}
			<section className="h-screen flex items-center justify-center relative overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"
					style={{
						backgroundImage: `image-set(url(${content.hero.sm}) 1x, url(${content.hero.md}) 2x, url(${content.hero.lg}) 3x)`,
					}}
				/>
				<div className="absolute inset-0 cinematic-gradient" />

				<div className="relative z-10 text-center px-6">
					<h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
						DAVID MUTRUX
					</h1>
					<p className="text-sm md:text-base uppercase tracking-[0.3em] text-accent/60 mb-12">
						Sound • Production • Camera
					</p>
					<div>
						<Link
							to="/about"
							className="inline-flex items-center space-x-2 border border-white/20 px-8 py-4 hover:bg-white hover:text-dark transition-all duration-500 uppercase tracking-widest text-xs"
						>
							<span>Contact Me</span>
							<ArrowRight size={14} />
						</Link>
					</div>
				</div>
			</section>

			{/* Department Teasers */}
			<section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-3 gap-12">
				{[
					{
						title: "Sound",
						path: "/sound",
						desc: content.departments.sound,
					},
					{
						title: "Production",
						path: "/production",
						desc: content.departments.production,
					},
					{
						title: "Camera",
						path: "/camera",
						desc: content.departments.camera,
					},
				].map((dept) => (
					<div key={dept.title}>
						<Link to={dept.path} className="group block">
							<h2 className="text-3xl font-bold mb-4 transition-all duration-500">
								{dept.title}
							</h2>
							<p className="text-accent/40 text-sm leading-relaxed mb-6">
								{dept.desc}
							</p>
							<div className="h-px w-12 bg-white/20 group-hover:w-full transition-all duration-700" />
						</Link>
					</div>
				))}
			</section>
		</div>
	);
};

export default Home;
