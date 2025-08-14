export const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-teal-500 text-center bg-black p-4 border-t border-teal-500 w-full flex items-center justify-center">
      <p>CopyRight © {new Date().getFullYear()} Francisco López — All Rights Reserved</p>

      {/* Duende GIF caminando */}
      <img
        src="/duendesito.gif"
        alt=""                // decorativo
        aria-hidden="true"
        className="goblin"
        style={{
          // más chico:
          ['--goblin-w' as any]: '40px',
          // más lento (más segundos = más lento):
          animationDuration: '28s',
        }}
      />
    </footer>
  );
};
