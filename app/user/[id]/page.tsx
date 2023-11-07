export default function Page({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen pt-24  bg-gray-800">
      User page: {params.id}
    </main>
  );
}
