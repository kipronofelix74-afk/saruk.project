import { useState } from 'react';

export default function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    const newProject = {
      id: Date.now(),
      title,
      description,
     
      image: 'https://via.placeholder.com/100?text=Project'
    };

    onAddProject(newProject);
    setTitle('');
    setDescription('');
  };

  return (
    <section className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm mb-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Add Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter project title"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter project description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-md transition-colors"
        >
          Add
        </button>
      </form>
    </section>
  );
}