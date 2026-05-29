import React from 'react';
import { capabilitiesMap } from '../data/capabilities';

export default function CapabilityMap() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-800">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-[#d4a373] mb-2">
          Elaboración de Imanes Personalizados
        </h1>
        <p className="text-gray-600">Mapa de Capacidades del Negocio</p>
      </header>

      <div className="max-w-7xl mx-auto">
        {/* Contenedor del flujo principal */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-4">
          {capabilitiesMap.map((stage, index) => (
            <div key={stage.id} className="w-full flex flex-col items-center">
              
              {/* Bloque de Nivel Superior (Chevron/Flecha simulada) */}
              <div className="w-full bg-[#faedcd] border border-[#d4a373] rounded-md p-4 text-center font-semibold mb-6 shadow-sm relative">
                {stage.title}
                {/* Indicador de flujo para pantallas grandes */}
                {index < capabilitiesMap.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 text-[#d4a373]">
                    &#10142;
                  </div>
                )}
              </div>

              {/* Contenedor de Sub-capacidades */}
              <div className="w-full bg-[#fefae0] border border-[#e9edc9] rounded-lg p-5 shadow-sm min-h-[250px]">
                <h3 className="font-bold text-sm mb-4 border-b pb-2 text-center">
                  {stage.title}
                </h3>
                <ul className="space-y-3">
                  {stage.subtasks.map((task, i) => (
                    <li 
                      key={i} 
                      className="bg-white border border-gray-200 p-3 rounded text-sm text-center shadow-sm hover:shadow-md transition-shadow"
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
