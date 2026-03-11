import Navigation from './Navigation';

interface LayoutProps extends React.PropsWithChildren {}

export default function Layout(props: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Navigation />
      <main className="flex w-full flex-1 flex-col items-center justify-center p-6 pt-24 md:p-16 md:pt-32">
        <div className="fade-up-animated w-full max-w-5xl">{props.children}</div>
      </main>
    </div>
  );
}
