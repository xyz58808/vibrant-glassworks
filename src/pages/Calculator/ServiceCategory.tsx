
import React, { useState } from 'react';
import { Plus, Minus, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface ServiceCategoryProps {
  category: {
    id: string;
    name: string;
    icon: React.ReactNode;
    description: string;
    services: Service[];
  };
  selectedServices: string[];
  onToggleService: (serviceId: string) => void;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({
  category,
  selectedServices,
  onToggleService,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const hasSelectedServices = category.services.some(
    service => selectedServices.includes(service.id)
  );

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={cn(
      "border border-gray-200 rounded-2xl overflow-hidden transition-all duration-500",
      hasSelectedServices && "border-yzag-blue shadow-md transform scale-[1.02]",
      isExpanded && "shadow-lg"
    )}>
      {/* Category Header */}
      <div 
        className={cn(
          "p-6 cursor-pointer flex items-center justify-between bg-white transition-all duration-300",
          hasSelectedServices && "bg-gradient-to-r from-yzag-blue/5 to-yzag-blue-light/5",
          isExpanded && "border-b border-gray-200"
        )}
        onClick={toggleExpand}
      >
        <div className="flex items-center">
          <div className="mr-4 text-yzag-blue">
            {category.icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-yzag-text">
              {category.name}
            </h3>
            <p className="text-sm text-yzag-text/60 mt-1">
              {category.description}
            </p>
          </div>
        </div>
        <button 
          className="text-yzag-text/60 hover:text-yzag-blue transition-colors duration-300"
          onClick={(e) => {
            e.stopPropagation();
            toggleExpand();
          }}
        >
          {isExpanded ? <Minus size={20} /> : <Plus size={20} />}
        </button>
      </div>
      
      {/* Services List */}
      <div 
        className={cn(
          "max-h-0 overflow-hidden transition-all duration-500",
          isExpanded && "max-h-[1000px]"
        )}
      >
        <div className="p-6 bg-yzag-gray-light">
          <div className="space-y-4">
            {category.services.map(service => {
              const isSelected = selectedServices.includes(service.id);
              
              return (
                <div 
                  key={service.id}
                  className={cn(
                    "p-4 rounded-xl border cursor-pointer transition-all duration-300 transform",
                    isSelected 
                      ? "border-yzag-blue bg-white shadow-md" 
                      : "border-gray-200 bg-white/60 hover:bg-white hover:shadow-sm",
                    isSelected && "scale-[1.01]"
                  )}
                  onClick={() => onToggleService(service.id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="font-medium text-yzag-text">
                        {service.name}
                      </h4>
                      <p className="text-sm text-yzag-text/70 mt-1">
                        {service.description}
                      </p>
                    </div>
                    <div className="ml-4 flex flex-col items-end">
                      <div className="text-right mb-1 font-semibold">
                        ₹{service.price.toLocaleString()}
                      </div>
                      <div 
                        className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center",
                          isSelected 
                            ? "bg-yzag-blue text-white" 
                            : "border border-gray-300"
                        )}
                      >
                        {isSelected && <Check size={14} />}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCategory;
