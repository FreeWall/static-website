import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps extends React.PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="flex w-full flex-1 flex-col items-center">{children}</main>
      <Footer />
    </div>
  );
}
