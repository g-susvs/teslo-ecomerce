
export default function AuthLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex justify-center">
            <div className="w-full sm:w-[350px] p-4">
                {children}
            </div>
        </main>
    );
}