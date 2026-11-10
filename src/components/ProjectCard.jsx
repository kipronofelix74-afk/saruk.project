export default function ProjectCard({ project }) {
  return (
    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-md bg-white hover:shadow-md transition-shadow">
      <div className="w-16 h-16 bg-gray-100 border border-gray-300 flex items-center justify-center shrink-0 rounded">
        
        <span className="text-gray-400 font-bold text-xl">✕</span>
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
        <p className="text-gray-600 mt-1">{project.description}</p>
      </div>
    </div>
  );
}