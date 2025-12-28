import TokenTable from "@/components/organisms/TableToken";

export default function Home() {
  return (
    <main className="min-h-screen px-4 pt-6 text-white">
      <h1 className="text-[15px] font-semibold mb-4">
        Token Discovery
      </h1>

      <div className="rounded-lg border border-[#1f1f1f]">
        {/* Table goes here */}
        <TokenTable />
      </div>
    </main>
  );
}
