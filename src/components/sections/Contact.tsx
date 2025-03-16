import { Mail, User, Send, AtSign } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export function Contact() {
  return (
    <section className="py-20 bg-slate-900/50" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Get In Touch</h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
        </p>
        <div className="max-w-2xl mx-auto">
          <Card className="p-8 bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Send a Message</h3>
                <p className="text-sm text-gray-400">I'll get back to you as soon as possible</p>
              </div>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-gray-200" htmlFor="name">Name</Label>
                  <div className="relative">
                    <Input 
                      id="name"
                      placeholder="John Doe" 
                      className="bg-slate-700/50 border-slate-600 text-white pl-10"
                    />
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-gray-200" htmlFor="email">Email</Label>
                  <div className="relative">
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="john@example.com" 
                      className="bg-slate-700/50 border-slate-600 text-white pl-10"
                    />
                    <AtSign className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-gray-200" htmlFor="message">Message</Label>
                <Textarea 
                  id="message"
                  placeholder="Your message here..." 
                  className="bg-slate-700/50 border-slate-600 text-white min-h-[150px]"
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 flex items-center justify-center gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}