"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Kenned Dsouza",
    quote:
      "I like that I got to meet the dog Walker who is walking my dog daily and consult with her. I also appreciate the daily communication I get about the dog and how my dog is doing",
  },
  {
    name: "Sarah Miller",
    quote:
      "The service has been exceptional! My pets are always happy and well-cared for. The daily updates give me peace of mind when I'm away.",
  },
  {
    name: "James Wilson",
    quote:
      "Fetch! Pet Care has been a lifesaver. The staff is professional, caring, and always reliable. I couldn't be happier with their service.",
  },
];

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative w-full px-4 py-12 overflow-hidden h-[90%]">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-[3rem] text-[#F9593F] text-center mb-16">
          Here&apos;s what pet owners have to
          <br />
          say about Fetch! Pet Care...
        </h3>

        <div className="flex items-center w-full justify-around">
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-20 w-12 h-12 rounded-full bg-[#F9593F] text-white hover:bg-[#F9593F]/90"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <div className="flex items-center gap-4">
            {[-1, 0, 1].map((offset) => {
              const index =
                (currentIndex + offset + testimonials.length) %
                testimonials.length;
              const isCenter = offset === 0;

              return (
                <Card
                  key={index}
                  className={`relative flex flex-col items-center p-8 transition-all duration-300 w-[500px] shadow-blue-500 shadow-md ${
                    isCenter
                      ? "bg-[#4169E1] text-white scale-105 z-10"
                      : "bg-[#F9593F] text-white scale-95"
                  }`}
                >
                  <Avatar className="w-20 h-20 mb-4 border-2 border-white">
                    <AvatarImage
                      src={"https://github.com/shadcn.png"}
                      alt={testimonials[index].name}
                    />
                    <AvatarFallback>
                      {testimonials[index].name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <h4 className="mb-4 text-xl font-semibold">
                    {testimonials[index].name}
                  </h4>
                  <blockquote className="text-center">
                    &quot;{testimonials[index].quote}&quot;
                  </blockquote>
                </Card>
              );
            })}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-20 w-12 h-12 rounded-full bg-[#F9593F] text-white hover:bg-[#F9593F]/90"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
}
