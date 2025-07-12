import { Code, Lightbulb, Users } from "lucide-react";
import React from "react";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Web Developer focused on building fast, accessible, and visually
              engaging user experiences that deliver results.
            </h3>

            <p className="text-muted foreground">
              I’m a front-end development enthusiast with hands-on experience
              building real-world projects using HTML, CSS, JavaScript, and
              React. I’ve developed responsive interfaces like a feature-rich
              Todo App, a portfolio site, and a live Weather Dashboard — all
              with performance and clean UI in mind.
            </p>

            <p className="text-muted foreground">
              I enjoy breaking down complex problems into elegant, user-friendly
              solutions. I'm always learning modern tools and best practices to
              stay sharp in the fast-changing tech world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/my resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive and accessible websites using React,
                    JavaScript, and modern CSS techniques to create clean and
                    efficient user interfaces.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Collaboration & Growth
                  </h4>
                  <p className="text-muted-foreground">
                    Enjoy working in team environments, learning from others,
                    and contributing meaningfully to shared goals through open
                    communication and continuous feedback.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Whether debugging front-end issues, optimizing UI
                    performance, or solving layout challenges — I approach
                    problems with logic, patience, and curiosity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
