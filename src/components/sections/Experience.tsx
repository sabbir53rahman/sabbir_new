import { Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function Experience() {
  return (
    <section className="py-20 bg-slate-900/50" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 bg-slate-800/50 border-slate-700">
            <div className="flex items-start gap-4">
              <Briefcase className="w-8 h-8 text-purple-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white">Senior MERN Stack Developer</h3>
                <p className="text-gray-300">Company Name • 2022-Present</p>
                <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                  <li>Led development of multiple full-stack applications</li>
                  <li>Implemented real-time features using WebSocket</li>
                  <li>Optimized application performance and scalability</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}