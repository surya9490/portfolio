export default function TechIcon({
  component,
}: {
  component: React.ElementType;
}) {
  const Component = component;
  return (
    <>
      <Component className="size-10 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(139, 92, 246)" />
          <stop offset="100%" stopColor="rgb(6, 182, 212)" />
        </linearGradient>
      </svg>
    </>
  );
}
