/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Configuração para exportar o site como um site estático e não como um servidor
  trailingSlash: true, // Configuração para adicionar uma barra no final das rotas
  images: {
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "raw.githubusercontent.com",
    //     pathname: "**",
    //   },
    // ],
    loader: "custom",
    loaderFile: "./src/app/imagem.ts",
  },
};

export default nextConfig;
