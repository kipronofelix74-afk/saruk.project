/* eslint-disable no-unused-vars */
import ProjectCard from './ProjectCard';

export default function ProjectList({ projects }) {
  return (
    <section className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
      <div className="space-y-4">
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="text-center text-gray-500 py-4">No projects found.</p>
        )}
      </div>
    </section>
  );
}