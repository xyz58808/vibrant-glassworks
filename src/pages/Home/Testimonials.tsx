
import React, { useRef } from 'react';
import Heading from '@/components/UI/Heading';
import GlassCard from '@/components/UI/GlassCard';
import Section from '@/components/UI/Section';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajiv Mehta',
    position: 'CEO, TechStart India',
    content: 'YZAG Digitals transformed our online presence completely. Our website traffic has increased by 150% and leads have doubled since we started working with them. Their team is professional, creative, and truly understands digital marketing.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwYnVzaW5lc3NtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    position: 'Marketing Director, Wellness Plus',
    content: 'We've been working with YZAG for our digital marketing needs for over a year now. Their strategies have helped us reach new audiences and establish our brand in a competitive market. They're responsive, detail-oriented, and results-driven.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwYnVzaW5lc3N3b21hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    name: 'Vikram Desai',
    position: 'Founder, Artisan Crafts',
    content: 'As a small business, our digital presence was minimal before YZAG Digitals. They designed a beautiful website and implemented effective SEO strategies that have put us on the map. Their attention to our unique needs was impressive.',
    image: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 4,
    name: 'Sunita Patel',
    position: 'Operations Manager, Global Tours',
    content: 'The team at YZAG Digitals exceeded our expectations. They not only redesigned our outdated website but also provided valuable insights for our content strategy. Our booking inquiries have increased significantly since launch.',
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGluZGlhbiUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Section id="testimonials" snapAlign backgroundVariant="dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <Heading level={2} center className="text-white">
            What Our Clients Say
          </Heading>
          <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our services.
          </p>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-none gap-6 pb-8 px-4 -mx-4 snap-x snap-mandatory"
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-center"
              >
                <GlassCard variant="dark" className="h-full">
                  <Quote className="text-yzag-blue w-10 h-10 mb-4 opacity-50" />
                  <p className="text-white/90 mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>

          <button
            onClick={scrollLeft}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300 hidden md:block"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-colors duration-300 hidden md:block"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
