import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps extends React.PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
