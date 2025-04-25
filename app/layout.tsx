import { lusitana } from "./ui/fonts";
import "./ui/global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        {children}
        <footer className="bg-gray-800 text-white py-10 mt-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Mi Empresa</h3>
                <p className="text-sm text-gray-400">
                  Soluciones de climatización eficientes y confiables para tu
                  hogar o negocio.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Enlaces útiles</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>
                    <a href="/servicios" className="hover:underline">
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a href="/cotizaciones" className="hover:underline">
                      Cotizaciones
                    </a>
                  </li>
                  <li>
                    <a href="/contacto" className="hover:underline">
                      Contacto
                    </a>
                  </li>
                  <li>
                    <a href="/sobre-nosotros" className="hover:underline">
                      Sobre nosotros
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Mi Empresa. Todos los derechos
              reservados.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
