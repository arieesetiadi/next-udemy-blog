function Hero() {
  return (
    <div
      className="hero min-h-[70vh]"
      style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1437419764061-2473afe69fc2)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-slate-100">Hi, i'm Arie</h1>
          <p className="mb-5 text-lg text-slate-100">
            Empowering Digital Growth: Leveraging Cutting-Edge Technologies and Creative Solutions to Engineer
            Exceptional Web Experiences
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
