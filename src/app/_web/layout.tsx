import { Footer } from "../_components/footer";
import { Header } from "../_components/header";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div>
        <img src="https://res.cloudinary.com/dxkgrtted/image/upload/v1737306582/Image_e4pmho.png"></img>
      </div>
      <div>{children}</div>
      <Footer />
    </div>
  );
}
