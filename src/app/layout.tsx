import "@/app/globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Topbar from "@/components/topbar/Topbar";
import { Providers } from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen w-full overflow-hidden">

        <div className="flex flex-col flex-1 bg-muted">
          <main className="flex-1 overflow-y-auto">
            <Providers>
              {children}
            </Providers>
          </main>
        </div>

      </body>
    </html>
  );
}
