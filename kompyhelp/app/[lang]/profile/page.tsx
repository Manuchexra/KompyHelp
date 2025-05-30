// src/app/[lang]/profile/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { toast } from '@/components/ui/use-toast';
import {
  Loader2,
  Edit,
  ArrowRight,
  LogOut,
  User,
  Mail,
  Phone,
  Briefcase,
  Shield,
  CalendarIcon,
  Lock,
  CreditCard,
  Settings,
  HelpCircle,
  MessageSquare,
  Star
} from 'lucide-react';

type UserData = {
  id: number;
  full_name: string;
  email: string;
  phone_number: string;
  role: string;
  created_at: string;
  avatar_url?: string;
  address?: string;
  last_login?: string;
  service_requests?: number;
  rating?: number;
};

export default function ProfilePage({ params }: { params: { lang: string } }) {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [avatarLoading, setAvatarLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone_number: '',
    address: '',
  });
  const [selectedDate, setSelectedDate] = useState<Date>();

  // Translations
  const t = {
    uz: {
      profile: "Profil",
      personalInfo: "Shaxsiy Ma'lumotlar",
      fullName: "To'liq Ism",
      email: "Elektron Pochta",
      phone: "Telefon Raqam",
      accountSettings: "Hisob Sozlamalari",
      memberSince: "A'zo Bo'lgan Sana",
      accountType: "Hisob Turi",
      dashboard: "Boshqaruv Paneli",
      logout: "Chiqish",
      editProfile: "Profilni Tahrirlash",
      saveChanges: "O'zgarishlarni Saqlash",
      cancel: "Bekor Qilish",
      individual: "Shaxsiy",
      business: "Biznes",
      notProvided: "Kiritilmagan",
      activeSince: "Faol foydalanuvchi",
      lastLogin: "Oxirgi kirish",
      serviceRequests: "Xizmat so'rovlari",
      userRating: "Foydalanuvchi reytingi",
      changePassword: "Parolni o'zgartirish",
      paymentMethods: "To'lov usullari",
      notifications: "Bildirishnomalar",
      helpSupport: "Yordam va qo'llab-quvvatlash",
      feedback: "Fikr-mulohaza",
      address: "Manzil",
      updateSuccess: "Profil muvaffaqiyatli yangilandi!",
      updateError: "Profilni yangilashda xatolik yuz berdi",
      uploadPhoto: "Rasm yuklash",
      removePhoto: "Rasmni o'chirish"
    },
    en: {
      profile: "Profile",
      personalInfo: "Personal Information",
      fullName: "Full Name",
      email: "Email",
      phone: "Phone Number",
      accountSettings: "Account Settings",
      memberSince: "Member Since",
      accountType: "Account Type",
      dashboard: "Dashboard",
      logout: "Logout",
      editProfile: "Edit Profile",
      saveChanges: "Save Changes",
      cancel: "Cancel",
      individual: "Individual",
      business: "Business",
      notProvided: "Not provided",
      activeSince: "Active since",
      lastLogin: "Last login",
      serviceRequests: "Service requests",
      userRating: "User rating",
      changePassword: "Change password",
      paymentMethods: "Payment methods",
      notifications: "Notifications",
      helpSupport: "Help & Support",
      feedback: "Feedback",
      address: "Address",
      updateSuccess: "Profile updated successfully!",
      updateError: "Error updating profile",
      uploadPhoto: "Upload photo",
      removePhoto: "Remove photo"
    }
  }[params.lang === 'uz' ? 'uz' : 'en'];

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/auth/profile');
      if (!response.ok) throw new Error('Failed to fetch');
      const data = await response.json();
      setUserData(data);
      setFormData({
        full_name: data.full_name || '',
        email: data.email || '',
        phone_number: data.phone_number || '',
        address: data.address || '',
      });
      if (data.created_at) {
        setSelectedDate(new Date(data.created_at));
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Xatolik",
        description: "Profil ma'lumotlarini yuklab bo'lmadi",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = () => setEditing(true);
  const handleCancel = () => {
    setEditing(false);
    if (userData) {
      setFormData({
        full_name: userData.full_name || '',
        email: userData.email || '',
        phone_number: userData.phone_number || '',
        address: userData.address || '',
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/auth/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to update');

      await fetchUserData();
      setEditing(false);
      toast({
        title: t.updateSuccess,
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: t.updateError,
        variant: "destructive",
      });
    }
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      try {
        setAvatarLoading(true);
        const formData = new FormData();
        formData.append('avatar', e.target.files[0]);

        const response = await fetch('/api/auth/upload-avatar', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) throw new Error('Upload failed');

        const data = await response.json();
        setUserData(prev => prev ? { ...prev, avatar_url: data.avatarUrl } : null);
        toast({
          title: "Rasm muvaffaqiyatli yuklandi!",
        });
      } catch (error) {
        console.error('Error uploading avatar:', error);
        toast({
          title: "Rasm yuklashda xatolik",
          variant: "destructive",
        });
      } finally {
        setAvatarLoading(false);
      }
    }
  };

  const handleRemoveAvatar = async () => {
    try {
      setAvatarLoading(true);
      const response = await fetch('/api/auth/remove-avatar', {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Remove failed');

      setUserData(prev => prev ? { ...prev, avatar_url: undefined } : null);
      toast({
        title: "Rasm muvaffaqiyatli o'chirildi!",
      });
    } catch (error) {
      console.error('Error removing avatar:', error);
      toast({
        title: "Rasmni o'chirishda xatolik",
        variant: "destructive",
      });
    } finally {
      setAvatarLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return t.notProvided;
      
      return params.lang === 'uz' 
        ? format(date, "dd MMMM, yyyy")
        : format(date, "MMMM dd, yyyy");
    } catch (error) {
      console.error('Date formatting error:', error);
      return t.notProvided;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-purple-600" />
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Profil ma'lumotlari mavjud emas</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Iltimos, qaytadan kirishni urunib ko'ring yoki texnik yordamga murojaat qiling.</p>
          </CardContent>
          <CardFooter>
            <Button onClick={() => router.push(`/uz/login`)}>
              Kirish sahifasiga qaytish
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-900 dark:to-purple-950 py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              {t.profile}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              {t.activeSince} {formatDate(userData.created_at)}
            </p>
          </div>
          
          {!editing ? (
            <Button onClick={handleEdit} className="gap-2">
              <Edit className="h-4 w-4" />
              {t.editProfile}
            </Button>
          ) : (
            <Button variant="outline" onClick={handleCancel}>
              {t.cancel}
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <Card className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                <div className="flex justify-between items-center">
                  <CardTitle>{t.personalInfo}</CardTitle>
                  <Badge variant="secondary" className="text-purple-600 dark:text-purple-300">
                    {userData.role === 'BUSINESS' ? t.business : t.individual}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar Section */}
                  <div className="flex flex-col items-center space-y-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={userData.avatar_url} />
                      <AvatarFallback>
                        {userData.full_name ? userData.full_name.charAt(0) : <User />}
                      </AvatarFallback>
                    </Avatar>
                    {editing && (
                      <div className="flex gap-2">
                        <label className="cursor-pointer">
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={handleAvatarUpload}
                            disabled={avatarLoading}
                          />
                          <Button variant="outline" size="sm" disabled={avatarLoading}>
                            {avatarLoading ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              t.uploadPhoto
                            )}
                          </Button>
                        </label>
                        {userData.avatar_url && (
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={handleRemoveAvatar}
                            disabled={avatarLoading}
                          >
                            {avatarLoading ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              t.removePhoto
                            )}
                          </Button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Form Section */}
                  {editing ? (
                    <form onSubmit={handleSubmit} className="flex-1 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="full_name">{t.fullName}</Label>
                        <Input
                          id="full_name"
                          name="full_name"
                          value={formData.full_name}
                          onChange={handleChange}
                          placeholder={t.fullName}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">{t.email}</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t.email}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone_number">{t.phone}</Label>
                        <Input
                          id="phone_number"
                          name="phone_number"
                          type="tel"
                          value={formData.phone_number}
                          onChange={handleChange}
                          placeholder={t.phone}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="address">{t.address}</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder={t.address}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>{t.memberSince}</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !selectedDate && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {selectedDate ? format(selectedDate, "PPP") : <span>Sana tanlang</span>}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              disabled
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <div className="flex justify-end gap-3 pt-4">
                        <Button type="button" variant="outline" onClick={handleCancel}>
                          {t.cancel}
                        </Button>
                        <Button type="submit">
                          {t.saveChanges}
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className="flex-1 space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                          <User className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t.fullName}</p>
                          <p className="text-lg font-semibold text-gray-800 dark:text-white">
                            {userData.full_name || t.notProvided}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t.email}</p>
                          <p className="text-lg font-semibold text-gray-800 dark:text-white">
                            {userData.email || t.notProvided}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t.phone}</p>
                          <p className="text-lg font-semibold text-gray-800 dark:text-white">
                            {userData.phone_number || t.notProvided}
                          </p>
                        </div>
                      </div>

                      {userData.address && (
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                            <Briefcase className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t.address}</p>
                            <p className="text-lg font-semibold text-gray-800 dark:text-white">
                              {userData.address}
                            </p>
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                          <Shield className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t.memberSince}</p>
                          <p className="text-lg font-semibold text-gray-800 dark:text-white">
                            {formatDate(userData.created_at)}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Stats Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300">
                      <CalendarIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t.lastLogin}</p>
                      <p className="text-lg font-semibold">
                        {userData.last_login ? formatDate(userData.last_login) : t.notProvided}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t.serviceRequests}</p>
                      <p className="text-lg font-semibold">
                        {userData.service_requests || 0}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-300">
                      <Star className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{t.userRating}</p>
                      <p className="text-lg font-semibold">
                        {userData.rating ? `${userData.rating}/5` : t.notProvided}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Account Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>{t.accountSettings}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="ghost" 
                  className="w-full justify-between h-14 px-6"
                  onClick={() => router.push(`/uz/change-password`)}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                      <Lock className="h-5 w-5" />
                    </div>
                    <span>{t.changePassword}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </Button>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between h-14 px-6"
                  onClick={() => router.push(`/uz/payment-methods`)}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                      <CreditCard className="h-5 w-5" />
                    </div>
                    <span>{t.paymentMethods}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </Button>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between h-14 px-6"
                  onClick={() => router.push(`/uz/notifications`)}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                      <Settings className="h-5 w-5" />
                    </div>
                    <span>{t.notifications}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t.helpSupport}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="ghost" 
                  className="w-full justify-between h-14 px-6"
                  onClick={() => router.push(`/uz/help`)}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                      <HelpCircle className="h-5 w-5" />
                    </div>
                    <span>{t.helpSupport}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </Button>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between h-14 px-6"
                  onClick={() => router.push(`/uz/feedback`)}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <span>{t.feedback}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </Button>

                <Button 
                  variant="ghost" 
                  className="w-full justify-between h-14 px-6 text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                  onClick={() => router.push(`/${params.lang}/logout`)}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400">
                      <LogOut className="h-5 w-5" />
                    </div>
                    <span>{t.logout}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}