'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function LogoutPage({ params }: { params: { lang: string } }) {
  const router = useRouter();

  useEffect(() => {
    const logout = async () => {
      try {
        // 1. Backendga logout so'rovini yuborish
        const response = await fetch('/api/auth/logout', {
          method: 'POST',
          credentials: 'include',
        });

        // 2. Local storagedan ma'lumotlarni o'chirish
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user');

        // 3. Bosh sahifaga yo'naltirish
        router.push(`/uz`);
      } catch (error) {
        console.error('Chiqishda xatolik:', error);
        router.push(`/uz`);
      }
    };

    logout();
  }, [params.lang, router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">
          {params.lang === 'uz' ? "Chiqish jarayoni..." : "Logging out..."}
        </h2>
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    </div>
  );
}