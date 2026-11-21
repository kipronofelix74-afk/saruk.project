import { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';

const initialProjects = [
  { id: 1, title: 'iphone 17 pro max', image: '/iphone17-pro-max.jpg', description: '...same text as before...' },
  { id: 2, title: 'iphone 17 max', image: '/iphone17-max.jpg', description: '...' },
  { id: 3, title: 'iphone 15 pro max', image: '/iphone15-pro-max.jpg', description: '...' },
  { id: 4, title: 'iphone 15 max', image: '', description: '...' },
];

export default function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddProject = (newProject) => {
    setProjects((prevProjects) => [newProject, ...prevProjects]);
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 pb-12">
      <Header />
      <main className="max-w-2xl mx-auto px-4">
        <ProjectForm onAddProject={handleAddProject} />
        <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <ProjectList projects={filteredProjects} />
        </div>
      </main>
    </div>
  );
}