import { BottomNav } from '../../modules/ui/components/admin/bottom-nav/BottomNav';

export default function AdminLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <main className='relative'>
                {children}

            </main>
            <BottomNav />
        </>
    );
}