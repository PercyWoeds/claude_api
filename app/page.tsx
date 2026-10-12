import Sidebar from "@/components/Sidebar";
import AlertBanner from "@/components/AlertBanner";
import CreditBalance from "@/components/CreditBalance";
import PaymentDetails from "@/components/PaymentDetails";
import SpendingLimits from "@/components/SpendingLimits";
import InvoiceHistory from "@/components/InvoiceHistory";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-bg text-ink">
      <Sidebar />
      <main className="flex-1 min-w-0">
        <div className="max-w-3xl mx-auto px-10 py-10">
          <h1 className="text-2xl font-semibold mb-5">Facturación</h1>

          <AlertBanner />

          <div className="mt-10 space-y-10">
            <CreditBalance />
            <PaymentDetails />
            <SpendingLimits />
            <InvoiceHistory />
          </div>
        </div>
      </main>
    </div>
  );
}