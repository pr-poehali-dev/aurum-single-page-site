import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-gray-900">АУРУМ</h1>
                <p className="text-sm text-blue-600">Орган сертификации</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Виды сертификации</a>
              <a href="#advantages" className="text-gray-600 hover:text-blue-600 transition-colors">Преимущества</a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 leading-tight">
                Профессиональная сертификация продукции и услуг
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Аккредитованный орган по сертификации с многолетним опытом работы. 
                Обеспечиваем соответствие вашей продукции всем требованиям стандартов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Icon name="FileCheck" size={20} className="mr-2" />
                  Получить сертификат
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Консультация
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-blue-100 text-sm">Сертификатов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">15</div>
                    <div className="text-blue-100 text-sm">Лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">98%</div>
                    <div className="text-blue-100 text-sm">Успешных проектов</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-blue-100 text-sm">Поддержка</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О нас</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Орган сертификации "Аурум" — надежный партнер в области подтверждения соответствия продукции и услуг
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Award" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Аккредитация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Аккредитованы в Федеральной службе по аккредитации (Росаккредитация) 
                  на проведение сертификации продукции и услуг
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-green-600" />
                </div>
                <CardTitle>Экспертиза</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Команда высококвалифицированных экспертов с многолетним опытом 
                  работы в области сертификации и стандартизации
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Clock" size={24} className="text-purple-600" />
                </div>
                <CardTitle>Скорость</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Оперативное проведение сертификации с минимальными временными затратами 
                  и максимальным качеством результата
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Виды сертификации</h2>
            <p className="text-xl text-gray-600">
              Широкий спектр услуг по сертификации продукции и услуг
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon name="Shield" size={32} className="text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Техническая продукция</CardTitle>
                <CardDescription>
                  Сертификация промышленной и технической продукции
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Машины и оборудование
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Электротехническая продукция
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Медицинские изделия
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                  <Icon name="Leaf" size={32} className="text-green-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Пищевая продукция</CardTitle>
                <CardDescription>
                  Сертификация продуктов питания и напитков
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Продукты питания
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Напитки
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Биологически активные добавки
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <Icon name="Cog" size={32} className="text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Услуги</CardTitle>
                <CardDescription>
                  Сертификация различных видов услуг
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Транспортные услуги
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Услуги общественного питания
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Торговые услуги
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors">
                  <Icon name="Zap" size={32} className="text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Энергетическая продукция</CardTitle>
                <CardDescription>
                  Сертификация энергетического оборудования
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Энергетическое оборудование
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Электроустановки
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Альтернативная энергетика
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <Icon name="Flame" size={32} className="text-red-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Пожарная безопасность</CardTitle>
                <CardDescription>
                  Сертификация средств пожарной безопасности
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Противопожарные системы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Огнезащитные материалы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Пожарное оборудование
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-600 transition-colors">
                  <Icon name="Building" size={32} className="text-teal-600 group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl">Строительные материалы</CardTitle>
                <CardDescription>
                  Сертификация строительной продукции
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Строительные материалы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Отделочные материалы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="text-green-600 mr-2" />
                    Изоляционные материалы
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Наши преимущества</h2>
            <p className="text-xl text-gray-600">
              Почему выбирают именно нас для сертификации
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                <Icon name="Zap" size={32} className="text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Быстрая сертификация</h3>
              <p className="text-gray-600">
                Минимальные сроки проведения процедуры сертификации без потери качества
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors">
                <Icon name="BadgeCheck" size={32} className="text-green-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Высокое качество</h3>
              <p className="text-gray-600">
                Тщательная проверка на соответствие всем требованиям стандартов
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-colors">
                <Icon name="Headphones" size={32} className="text-purple-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Поддержка 24/7</h3>
              <p className="text-gray-600">
                Круглосуточная поддержка клиентов на всех этапах сертификации
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-colors">
                <Icon name="DollarSign" size={32} className="text-orange-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Выгодные цены</h3>
              <p className="text-gray-600">
                Конкурентные цены на все виды услуг по сертификации
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для получения консультации
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                  <p className="text-gray-600">+7 (800) 555-01-23</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">info@aurum-cert.ru</p>
                  <p className="text-gray-600">certification@aurum-cert.ru</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Адрес</h3>
                  <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                  <p className="text-gray-600">Бизнес-центр "Сертификация", офис 456</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Время работы</h3>
                  <p className="text-gray-600">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-gray-600">Сб-Вс: по предварительной записи</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Получить консультацию</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Введите ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Опишите вашу задачу..."
                  ></textarea>
                </div>
                <Button className="w-full" size="lg">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">АУРУМ</h3>
              <p className="text-gray-400 mb-4">
                Аккредитованный орган по сертификации продукции и услуг
              </p>
              <div className="flex space-x-4">
                <Badge variant="outline" className="text-gray-400 border-gray-600">
                  Аккредитация: RA.RU.21АБ34
                </Badge>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Сертификация продукции</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сертификация услуг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консультации</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Документооборот</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@aurum-cert.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  г. Москва, ул. Примерная, д. 123
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Орган сертификации "Аурум". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;