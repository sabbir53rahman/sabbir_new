import { Github, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack MERN e-commerce platform with real-time inventory and payment integration",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    github: "#",
    demo: "#",
    details: "Feature-rich e-commerce platform with user authentication, product management, cart functionality, and secure payment processing."
  },
  {
    title: "Task Management App",
    description: "Real-time collaborative task management application with team features",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000",
    tags: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
    details: "Collaborative task management tool with real-time updates, team chat, task assignment, and progress tracking features."
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management and content scheduling",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
    tags: ["React", "Chart.js", "Node.js", "Express"],
    github: "#",
    demo: "#",
    details: "Comprehensive dashboard for managing social media accounts, scheduling posts, and analyzing engagement metrics."
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export function Projects() {
  return (
    <section className="py-20 bg-slate-900/50 overflow-x-hidden" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-6 h-6 text-blue-400" />
            <h2 className="text-4xl font-bold text-white">Featured Projects</h2>
          </div>
          <p className="text-gray-400 mb-16 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my expertise in full-stack development
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <HoverCard>
                <HoverCardTrigger>
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-slate-800/50 border-slate-700 overflow-hidden hover:border-blue-500/50 transition-colors duration-300">
                      <div 
                        className="aspect-video w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex gap-2 flex-wrap mb-4">
                          {project.tags.map((tag, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <Badge 
                                variant="secondary" 
                                className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20"
                              >
                                {tag}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                        <div className="flex gap-4">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                          <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 bg-slate-800 border-slate-700">
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-white">{project.title}</h4>
                    <p className="text-sm text-gray-300">
                      {project.details}
                    </p>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}