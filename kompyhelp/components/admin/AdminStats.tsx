'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';

const fetchStats = async () => {
  const res = await fetch('/api/admin/stats');
  return res.json();
};

export default function AdminStats() {
  const { data, isLoading } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: fetchStats
  });

  if (isLoading) return <Loader2 className="animate-spin" />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Foydalanuvchilar</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{data?.users || 0}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Aktiv So'rovlar</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{data?.activeRequests || 0}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Bugungi So'rovlar</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{data?.todayRequests || 0}</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Biznes A'zolar</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{data?.businessUsers || 0}</p>
        </CardContent>
      </Card>
    </div>
  );
}