'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';

export function RequestForm() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    priority: 'normal',
    attachments: [] as File[]
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('priority', formData.priority);
      
      formData.attachments.forEach(file => {
        formDataToSend.append('attachments', file);
      });

      const response = await fetch('/api/requests', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Soʻrov yuborishda xato');
      }

      toast.success('Soʻrov muvaffaqiyatli yuborildi');
      router.push('/requests');
    } catch (error) {
      toast.error('Soʻrov yuborishda xato yuz berdi');
      console.error('Xato:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        attachments: [...prev.attachments, ...newFiles]
      }));
    }
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  return (
    <Card className="border border-purple-900/50 bg-gray-900">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-purple-400">
          Yangi So'rov Yaratish
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-2">Sarlavha</label>
            <Input
              type="text"
              className="bg-gray-800 border-purple-900/50 text-white focus-visible:ring-purple-500"
              placeholder="So'rov nomini kiriting"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-2">Tavsif</label>
            <Textarea
              className="bg-gray-800 border-purple-900/50 text-white focus-visible:ring-purple-500 min-h-[150px]"
              placeholder="So'rov haqida batafsil ma'lumot"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-2">Kategoriya</label>
            <Select
              value={formData.category}
              onValueChange={(value) => setFormData({...formData, category: value})}
              required
            >
              <SelectTrigger className="bg-gray-800 border-purple-900/50 text-white">
                <SelectValue placeholder="Kategoriyani tanlang" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-purple-900/50 text-white">
                <SelectItem value="texnik">Texnik yordam</SelectItem>
                <SelectItem value="hisob">Hisob-kitob</SelectItem>
                <SelectItem value="boshqa">Boshqa</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-2">Prioritet</label>
            <div className="flex gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  className="text-purple-600 focus:ring-purple-600 border-gray-600"
                  name="priority"
                  value="low"
                  checked={formData.priority === 'low'}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                />
                <span className="text-gray-300">Past</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  className="text-purple-600 focus:ring-purple-600 border-gray-600"
                  name="priority"
                  value="normal"
                  checked={formData.priority === 'normal'}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                />
                <span className="text-gray-300">Normal</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  className="text-purple-600 focus:ring-purple-600 border-gray-600"
                  name="priority"
                  value="high"
                  checked={formData.priority === 'high'}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                />
                <span className="text-gray-300">Yuqori</span>
              </label>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-purple-300 mb-2">Ilovalar</label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  accept=".jpg,.jpeg,.png,.pdf"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="bg-purple-900/20 border-purple-700 text-purple-300 hover:bg-purple-900/30"
                >
                  <Icons.upload className="mr-2 h-4 w-4" />
                  Fayllarni tanlash
                </Button>
              </label>
              <span className="text-sm text-gray-400">
                Maksimal hajm: 5MB
              </span>
            </div>
            
            {formData.attachments.length > 0 && (
              <div className="mt-4 space-y-2">
                {formData.attachments.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-800/50 p-2 rounded">
                    <div className="flex items-center gap-2">
                      <Icons.file className="h-4 w-4 text-purple-400" />
                      <span className="text-sm text-gray-300 truncate max-w-xs">
                        {file.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {(file.size / 1024 / 1024).toFixed(2)}MB
                      </span>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 text-red-400 hover:bg-red-900/20"
                      onClick={() => removeFile(index)}
                    >
                      <Icons.trash className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                Yuborilmoqda...
              </>
            ) : (
              "So'rovni Yuborish"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}