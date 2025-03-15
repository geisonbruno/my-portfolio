import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5 sm:h-6 sm:w-6 " />,
    url: "http://github.com/geisonbruno",
    color: "hover:bg-[#333] hover:text-white",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5 sm:h-6 sm:w-6 " />,
    url: "https://www.linkedin.com/in/geison-bruno-ab4079224/",
    color: "hover:bg-[#0077B5] hover:text-white ",
  },
];

const SocialSection = () => {
  return (
    <section
      id="social"
      className="py-16 sm:py-20 min-h-[70vh]  dark:bg-gray-900/50 flex flex-col items-center justify-center"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-16 text-center dark:text-white">
          Let's{" "}
          <span className="text-orange-500 dark:text-orange-500">Connect</span>
        </h2>

        <div className="flex justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 ">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 flex flex-col items-center justify-center rounded-lg border 
                 shadow-lg transform hover:translate-y-[5px] active:scale-95 w-24 sm:w-32
                transition-transform duration-300 hover:scale-110 "
            >
              {link.icon}
              <span className="mt-2 text-xs sm:text-sm font-medium">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col items-center ">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 dark:text-white ">
            Get in touch
          </h3>
          <Button
            asChild
            className="mt-2 sm:mt-4 text-sm sm:text-base dark:bg-orange-500 flex items-center 
           transition-all transform hover:translate-y-[5px] active:scale-95
              transition-transform duration-300 hover:scale-110 hover:shadow-lg"
          >
            <a href="mailto:geisonbruno0@gmail.com">
              <Mail className="mr-2 h-4 w-4 " />
              geisonbruno0@gmail.com
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
