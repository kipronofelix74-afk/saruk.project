import { useState } from 'react';
import Header from './components/Header';
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';

const initialProjects = [
  { id: 1, title: 'Baba Fua Project', description: 'This project is about getting reliable auxiliary staff in minutes. Whether it\'s for cleaning, security, or administrative tasks.' },
  { id: 2, title: 'Lawyer Portal', description: 'A platform for lawyers to manage their cases and client communications.' },
  { id: 3, title: 'E-Commerce Website', description: 'A modern e-commerce platform for selling products online.' },
  { id: 4, title: 'Social Media App', description: 'A social media application for connecting with friends and sharing updates.' },
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