// section title
export default function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <h1 className="text-3xl font-bold my-5">{children}</h1>;
}
