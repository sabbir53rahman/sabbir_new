import { Terminal, Server, Database, Code2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function Skills() {
  return (
    <section className="skills-section py-20 bg-slate-800/50" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="skill-card p-6 bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300">
            <Terminal className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Frontend Development</h3>
            <p className="text-gray-300">
              React.js, Redux, TypeScript, Tailwind CSS
            </p>
          </Card>
          <Card className="skill-card p-6 bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300">
            <Server className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Backend Development</h3>
            <p className="text-gray-300">
              Node.js, Express.js, REST APIs
            </p>
          </Card>
          <Card className="skill-card p-6 bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300">
            <Database className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Database Management</h3>
            <p className="text-gray-300">
              MongoDB, Mongoose, Data Modeling
            </p>
          </Card>
          <Card className="skill-card p-6 bg-slate-700/50 border-slate-600 hover:bg-slate-700/70 transition-all duration-300">
            <Code2 className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Full Stack Development</h3>
            <p className="text-gray-300">
              MERN Stack, API Integration, DevOps
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}