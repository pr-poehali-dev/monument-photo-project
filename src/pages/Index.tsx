import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const whatsappNumber = "89892606158";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const monuments = [
    {
      id: 1,
      title: "Памятник «Вечная память»",
      description: "Черный гранит с православным крестом и русской надписью",
      price: "от 28 000 ₽",
      image: "/img/0335ffe1-32ff-477b-ac5e-29ce1f146f62.jpg"
    },
    {
      id: 2,
      title: "Мраморное надгробие «Покойся с миром»",
      description: "Белый мрамор с кириллической гравировкой и датами",
      price: "от 32 000 ₽",
      image: "/img/0e5e10ff-fadd-4810-8e58-d99f35c75b8f.jpg"
    },
    {
      id: 3,
      title: "Семейный памятник «Любимому мужу»",
      description: "Красный гранит с золотыми буквами и цветочным орнаментом",
      price: "от 42 000 ₽",
      image: "/img/ec7b1499-f30d-4591-acfb-1a6a792d6cb1.jpg"
    }
  ];

  const services = [
    {
      title: "Изготовление памятника",
      price: "от 20 000 ₽",
      description: "Полный цикл изготовления из гранита или мрамора"
    },
    {
      title: "Установка и монтаж",
      price: "от 8 000 ₽",
      description: "Профессиональная установка на кладбище"
    },
    {
      title: "Гравировка портрета",
      price: "от 5 000 ₽",
      description: "Художественная гравировка портрета на камне"
    },
    {
      title: "Реставрация",
      price: "от 3 000 ₽",
      description: "Восстановление и обновление памятников"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Landmark" size={24} className="text-primary" />
            <h1 className="text-xl font-montserrat font-semibold text-primary">Памятники</h1>
          </div>
          <Button asChild className="bg-green-600 hover:bg-green-700">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <Icon name="MessageCircle" size={16} />
              <span>WhatsApp</span>
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
            Памятники с душой
          </h2>
          <p className="text-lg text-gray-600 font-open-sans mb-8 max-w-2xl mx-auto">
            Создаем достойные памятники из качественных материалов. 
            Индивидуальный подход к каждому заказу.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#catalog">Каталог памятников</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Icon name="MessageCircle" size={16} />
                <span>Консультация</span>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-montserrat font-bold text-center text-primary mb-12">
            Каталог памятников
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {monuments.map((monument) => (
              <Card key={monument.id} className="hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={monument.image} 
                    alt={monument.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat text-primary">{monument.title}</CardTitle>
                  <CardDescription className="font-open-sans">{monument.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-primary">{monument.price}</span>
                    <Button size="sm" asChild>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        Заказать
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Prices Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-montserrat font-bold text-center text-primary mb-12">
            Цены на услуги
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-montserrat text-primary">{service.title}</CardTitle>
                    <span className="text-lg font-semibold text-primary">{service.price}</span>
                  </div>
                  <CardDescription className="font-open-sans">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-montserrat font-bold text-center text-primary mb-12">
            Контактная информация
          </h3>
          <div className="max-w-2xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="font-montserrat text-primary flex items-center justify-center space-x-2">
                  <Icon name="Phone" size={24} />
                  <span>Свяжитесь с нами</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-2xl font-semibold text-primary">
                  8 (989) 260-61-58
                </div>
                <p className="text-gray-600 font-open-sans">
                  Работаем ежедневно с 9:00 до 18:00<br />
                  Бесплатная консультация и выезд замерщика
                </p>
                <Button size="lg" asChild className="bg-green-600 hover:bg-green-700">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                    <Icon name="MessageCircle" size={20} />
                    <span>Написать в WhatsApp</span>
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <Icon name="Landmark" size={20} />
              <span className="font-montserrat font-semibold">Памятники</span>
            </div>
            <p className="text-center text-sm opacity-80 font-open-sans">
              © 2024 Изготовление памятников. Все права защищены.
            </p>
            <Button variant="secondary" size="sm" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <Icon name="MessageCircle" size={16} />
                <span>WhatsApp: 8 (989) 260-61-58</span>
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}