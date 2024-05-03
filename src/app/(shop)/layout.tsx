import { TopMenu } from "@/components";
import { Footer } from "@/components/ui/footer/Footer";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen">
            <TopMenu />
            <div className="px-0 md:px-10">

                {children}
            </div>
            <Footer />
        </main>
    );
}