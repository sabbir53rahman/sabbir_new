import { GraduationCap, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function Education() {
  return (
    <section className="education-section py-20 bg-slate-800/50" id="education">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-16">Education & Certifications</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <Card className="education-item p-6 bg-slate-700/50 border-slate-600">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-blue-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white">Bachelor of Computer Science</h3>
                <p className="text-gray-300">University Name • 2018-2022</p>
                <p className="text-gray-400 mt-2">
                  Specialized in Web Development and Software Engineering
                </p>
              </div>
            </div>
          </Card>
          <Card className="education-item p-6 bg-slate-700/50 border-slate-600">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white">Full Stack Development Certification</h3>
                <p className="text-gray-300">Platform Name • 2023</p>
                <p className="text-gray-400 mt-2">
                  Advanced MERN Stack Development and Modern Web Technologies
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}