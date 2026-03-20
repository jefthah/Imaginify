export default function TestPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-dark-600">
      <h1 className="text-4xl font-bold text-purple-500 mb-8">
        Tailwind v4 Config Test
      </h1>
      <div className="p-10 bg-purple-gradient rounded-xl border border-border">
        <p className="text-foreground font-IBMPlex text-xl">
          If you see a purple gradient background and dark blue page color, the config is working!
        </p>
      </div>
      <div className="mt-8 animate-accordion-down p-4 bg-accent text-accent-foreground">
        Testing accordion-down animation from config.
      </div>
    </div>
  );
}
