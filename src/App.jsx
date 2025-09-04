import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Navbar } from './components/Navbar';
import { CardsContainer } from './components/cards-container';
import { ImageSlider } from './components/ImageSlider';
import { ImagePage } from './pages/ImagePage';
import { FloatingButtons } from "./components/FloatingButtons";


function App() {
  return (
    <Router>
      <main className="bg-black text-white min-h-screen">

        {/* Navbar siempre visible */}
        <div className="absolute top-0 left-0 w-full z-10 px-4 py-4">
          <Navbar />
        </div>

        <Routes>
          {/* Página principal con slider y cards */}
          <Route 
            path="/" 
            element={
              <>
                <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
                  <ImageSlider />
                </div>

                <section className="my-6 flex flex-col items-center justify-center">
                  <h1 className="text-[2.5rem] font-bold mb-[30px] text-center">
                    GALERÍA FANT ART
                  </h1>
                </section>

                <CardsContainer />
              </>
            } 
          />

          {/* Página de detalle de imagen */}
          <Route path="/image/:id" element={<ImagePage />} />
        </Routes>

            <FloatingButtons />

      </main>
    </Router>
  );
}

export default App;
