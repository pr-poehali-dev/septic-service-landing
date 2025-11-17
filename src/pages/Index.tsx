import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Droplets" className="text-primary" size={28} />
              <span className="font-heading font-bold text-xl text-foreground">СептикСервис</span>
            </div>
            <div className="hidden md:flex gap-6">
              {['Главная', 'О мне', 'Услуги', 'Цены', 'Портфолио', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection('контакты')} className="bg-secondary hover:bg-secondary/90">
              Заказать звонок
            </Button>
          </div>
        </nav>
      </header>

      <section id="главная" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading font-bold text-5xl md:text-6xl text-foreground mb-6 leading-tight">
                Обслуживание и ремонт септиков
              </h1>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Профессиональное техническое обслуживание септиков для вашего дома. Опыт работы более 10 лет. Гарантия качества.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8"
                  onClick={() => scrollToSection('контакты')}
                >
                  Заказать услугу
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('услуги')}
                >
                  Узнать подробнее
                </Button>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="font-heading font-bold text-3xl text-primary">10+</div>
                  <div className="text-sm text-foreground/60">лет опыта</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-3xl text-primary">500+</div>
                  <div className="text-sm text-foreground/60">выполненных работ</div>
                </div>
                <div>
                  <div className="font-heading font-bold text-3xl text-primary">100%</div>
                  <div className="text-sm text-foreground/60">гарантия</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/3a7100c7-bffb-408b-b638-3b993a9315a1/files/f07e316c-e2a6-4d33-b85a-16e3938a1355.jpg"
                alt="Обслуживание септиков"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="о-мне" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading font-bold text-4xl text-foreground mb-6">О мне</h2>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Меня зовут Александр, я специализируюсь на обслуживании и ремонте септиков уже более 10 лет. 
              За это время я помог сотням домовладельцев обеспечить бесперебойную работу их автономных систем канализации.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Award', title: 'Опыт', desc: 'Более 10 лет профессиональной работы' },
              { icon: 'CheckCircle', title: 'Качество', desc: 'Использую только проверенные материалы' },
              { icon: 'Clock', title: 'Оперативность', desc: 'Выезд в день обращения' }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon as any} className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-2">{item.title}</h3>
                  <p className="text-foreground/60">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">Услуги</h2>
            <p className="text-lg text-foreground/70">Полный комплекс работ по обслуживанию септиков</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Settings', title: 'Регулярное ТО', desc: 'Плановое техническое обслуживание септиков всех типов' },
              { icon: 'Wrench', title: 'Ремонт', desc: 'Устранение неисправностей и замена комплектующих' },
              { icon: 'Droplet', title: 'Очистка', desc: 'Профессиональная очистка камер и фильтров' },
              { icon: 'Search', title: 'Диагностика', desc: 'Полная проверка работы системы с отчетом' },
              { icon: 'AlertCircle', title: 'Аварийный выезд', desc: 'Срочный ремонт в случае поломки' },
              { icon: 'Package', title: 'Замена деталей', desc: 'Поставка и установка оригинальных запчастей' }
            ].map((service, idx) => (
              <Card key={idx} className="bg-white hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-secondary" size={24} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-foreground/60">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="цены" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">Цены</h2>
            <p className="text-lg text-foreground/70">Прозрачное ценообразование без скрытых платежей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: 'Базовое ТО', 
                price: '3 500', 
                features: ['Визуальный осмотр', 'Проверка работы', 'Базовая очистка', 'Рекомендации'] 
              },
              { 
                name: 'Полное ТО', 
                price: '6 500', 
                features: ['Комплексная диагностика', 'Глубокая очистка', 'Замена расходников', 'Настройка системы', 'Гарантия 6 месяцев'],
                popular: true
              },
              { 
                name: 'Ремонт', 
                price: 'от 4 000', 
                features: ['Диагностика', 'Устранение неисправности', 'Замена деталей', 'Тестирование', 'Гарантия на работы'] 
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : 'border-2'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярно
                  </div>
                )}
                <CardContent className="pt-6">
                  <h3 className="font-heading font-bold text-2xl mb-2 text-center">{plan.name}</h3>
                  <div className="text-center mb-6">
                    <span className="font-heading font-bold text-4xl text-primary">{plan.price}</span>
                    <span className="text-foreground/60 ml-1">₽</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span className="text-foreground/60">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`}
                    onClick={() => scrollToSection('контакты')}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="портфолио" className="py-20 bg-gradient-to-br from-orange-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-4xl text-foreground mb-4">Портфолио</h2>
            <p className="text-lg text-foreground/70">Примеры выполненных работ</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden hover:shadow-xl transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/3a7100c7-bffb-408b-b638-3b993a9315a1/files/700f5988-f415-448e-9b6b-68f537d8ac2d.jpg"
                alt="До и после"
                className="w-full h-64 object-cover"
              />
              <CardContent className="pt-4">
                <h3 className="font-heading font-semibold text-xl mb-2">Капитальная очистка</h3>
                <p className="text-foreground/60">Полная очистка септика с заменой фильтрующих элементов</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-all">
              <img 
                src="https://cdn.poehali.dev/projects/3a7100c7-bffb-408b-b638-3b993a9315a1/files/2160bab2-9dee-42f4-86b9-55c13e4a0b54.jpg"
                alt="Оборудование"
                className="w-full h-64 object-cover"
              />
              <CardContent className="pt-4">
                <h3 className="font-heading font-semibold text-xl mb-2">Профессиональное оборудование</h3>
                <p className="text-foreground/60">Использую современные инструменты для качественной работы</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="контакты" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-heading font-bold text-4xl text-foreground mb-4">Контакты</h2>
              <p className="text-lg text-foreground/70">Оставьте заявку и я свяжусь с вами</p>
            </div>
            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Введите имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите вашу проблему или задачу"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Отправить заявку
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" />
                    <div>
                      <div className="text-sm text-foreground/60">Телефон</div>
                      <a href="tel:+79001234567" className="font-semibold text-lg hover:text-primary">+7 (900) 123-45-67</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" />
                    <div>
                      <div className="text-sm text-foreground/60">Email</div>
                      <a href="mailto:info@septik-service.ru" className="font-semibold hover:text-primary">info@septik-service.ru</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" />
                    <div>
                      <div className="text-sm text-foreground/60">География работы</div>
                      <div className="font-semibold">Москва и Московская область</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Droplets" size={24} />
            <span className="font-heading font-bold text-xl">СептикСервис</span>
          </div>
          <p className="text-white/70">Профессиональное обслуживание септиков</p>
          <p className="text-white/50 text-sm mt-4">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
