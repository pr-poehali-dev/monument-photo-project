import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const phone = "89892606158";
  const whatsappUrl = `https://wa.me/${phone}`;
  const phoneFormatted = "8 (989) 260-61-58";

  const monuments = [
    {
      id: 1,
      title: "Гранитные памятники",
      description: "Черный и серый гранит",
      price: "от 25 000 ₽",
      image: "/img/2f28a04d-c6a7-429f-b4b0-53f22bfcfd15.jpg"
    },
    {
      id: 2,
      title: "Цветные памятники",
      description: "Красный и розовый гранит",
      price: "от 30 000 ₽",
      image: "/img/33532f34-dc8d-4f73-a51f-b18e58d35dd6.jpg"
    },
    {
      id: 3,
      title: "Мраморные памятники",
      description: "Белый и серый мрамор",
      price: "от 35 000 ₽",
      image: "/img/0e5e10ff-fadd-4810-8e58-d99f35c75b8f.jpg"
    }
  ];

  const services = [
    { title: "Изготовление", price: "от 20 000 ₽" },
    { title: "Установка", price: "от 8 000 ₽" },
    { title: "Гравировка", price: "от 3 000 ₽" },
    { title: "Доставка", price: "от 2 000 ₽" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Icon name="Landmark" size={28} className="text-primary" />
            <div>
              <h1 className="text-xl font-montserrat font-bold text-primary">Мастерская Альтаир</h1>
              <p className="text-sm text-gray-600">Памятники в Краснодаре</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <div className="font-semibold text-lg">{phoneFormatted}</div>
              <div className="text-sm text-gray-600">Ежедневно 9:00-18:00</div>
            </div>
            <Button asChild className="bg-green-600 hover:bg-green-700">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-primary mb-6">
            Памятники из гранита и мрамора
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Изготовление • Установка • Доставка
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <a href="#catalog">Каталог</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={`tel:${phone}`}>
                <Icon name="Phone" size={16} className="mr-2" />
                Позвонить
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-montserrat font-bold text-center mb-12">Каталог</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {monuments.map((monument) => (
              <Card key={monument.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img 
                    src={monument.image} 
                    alt={monument.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-montserrat">{monument.title}</CardTitle>
                  <CardDescription>{monument.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">{monument.price}</span>
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

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-montserrat font-bold text-center mb-12">Услуги</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="text-xl font-semibold text-primary">
                    {service.price}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-montserrat font-bold mb-6">О мастерской</h3>
              <div className="space-y-4 text-gray-600">
                <p>Изготавливаем памятники из качественного гранита и мрамора.</p>
                <p>Работаем в Краснодаре и Краснодарском крае.</p>
                <p>Гарантия на все работы.</p>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Консультация
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img 
                src="/img/6d5079db-2714-4a4b-8ed9-949a1c7b1056.jpg" 
                alt="Мастерская"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-montserrat font-bold mb-8">Контакты</h3>
          <div className="max-w-md mx-auto space-y-6">
            <div>
              <div className="text-2xl font-bold mb-2">{phoneFormatted}</div>
              <div className="opacity-90">Ежедневно с 9:00 до 18:00</div>
            </div>
            <div className="flex justify-center space-x-4">
              <Button variant="secondary" asChild>
                <a href={`tel:${phone}`}>
                  <Icon name="Phone" size={16} className="mr-2" />
                  Позвонить
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Landmark" size={20} />
            <span className="font-montserrat font-semibold">Мастерская Альтаир</span>
          </div>
          <p className="text-sm opacity-75">© 2024 Памятники в Краснодаре</p>
        </div>
      </footer>
    </div>
  );
}