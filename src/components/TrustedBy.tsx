export function TrustedBy() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black border-y-2 border-[#FF4500]/30 py-20 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF4500]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="relative">
          {/* Quote card with dramatic styling */}
          <div className="bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl p-12 lg:p-16 relative overflow-hidden border-2 border-[#FF4500]/20 shadow-2xl">
            {/* Orange accent stripe */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF4500] via-orange-600 to-[#FF4500]"></div>
            
            {/* Decorative quote mark */}
            <div className="absolute top-8 left-8 text-[#FF4500]/10 font-serif" style={{ fontSize: '10rem', lineHeight: '1' }}>"</div>
            
            <blockquote className="relative z-10">
              <p className="font-serif text-black mb-8 text-center leading-tight" style={{ fontSize: '2.25rem' }}>
                I fired my accountant after using EQ
              </p>
              <footer className="text-center space-y-2">
                <div className="text-gray-900 font-mono">
                  Rahul Jaiswal
                </div>
                <div className="text-gray-600">
                  COO @ Easlearn AI
                </div>
                <div className="flex items-center justify-center gap-1 mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-6 h-6 text-[#FF4500]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
