import Sidebar from "@/components/Sidebar";
import TopBar from "@/components/TopBar";
import BillingPage from "@/components/BillingPage";
export default function Home() {
  return (
    <div className="flex min-h-screen bg-cream text-ink">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <TopBar />
        <main className="flex-1 px-10 py-8 max-w-6xl w-full mx-auto">
          <BillingPage />
        </main>
      </div>
    </div>
  );
}
