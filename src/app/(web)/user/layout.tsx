import { Footer } from "../../_components/footer";
import { Header } from "../../_components/header";

export default function UserLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div>
       <Header/>
       <div>{children}</div>
        <main className="min-h-screen"></main>
       <Footer/>
      </div>
    );
  }
  