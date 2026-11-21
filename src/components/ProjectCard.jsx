const FALLBACK =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="100%" height="100%" fill="#e5e7eb"/><text x="50%" y="50%" font-size="11" text-anchor="middle" dominant-baseline="middle" fill="#6b7280">Project</text></svg>'
  );

export default function ProjectCard({ project }) {
  return (
    <div className="flex items-start gap-4 p-4 border border-gray-200 rounded-md bg-white hover:shadow-md transition-shadow">
      <img
        src={project.image || FALLBACK}
        alt={`${project.title} preview`}
        className="w-16 h-16 object-cover border border-gray-300 shrink-0 rounded"
        onError={(e) => {
          e.currentTarget.src = FALLBACK;
        }}
      />
      <div>
        <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
        <p className="text-gray-600 mt-1">{project.description}</p>
      </div>
    </div>
  );
}