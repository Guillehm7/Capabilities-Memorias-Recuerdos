import { render, screen } from '@testing-library/react';
import CapabilityMap from '../components/CapabilityMap';
import '@testing-library/jest-dom';

describe('Componente CapabilityMap', () => {
  it('debe renderizar el título principal de la aplicación', () => {
    render(<CapabilityMap />);
    const mainTitle = screen.getByText(/Elaboración de Imanes Personalizados/i);
    expect(mainTitle).toBeInTheDocument();
  });

  it('debe renderizar todas las fases principales del proceso', () => {
    render(<CapabilityMap />);
    expect(screen.getAllByText('Envío de fotos').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Edición de fotos').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Producción de imanes').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Recepción de Pago').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Despacho').length).toBeGreaterThan(0);
  });

  it('debe mostrar las tareas específicas de la producción física', () => {
    render(<CapabilityMap />);
    expect(screen.getByText('Uso de máquina especial para producción')).toBeInTheDocument();
    expect(screen.getByText('Secuencia manual de ensamblado')).toBeInTheDocument();
  });
});
