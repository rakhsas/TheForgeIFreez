"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Truck, Leaf, Snowflake, Clock, BarChart3 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/translations"
import { LanguageSwitcher } from "@/components/language-switcher"
import dynamic from "next/dynamic";

export default function Home() {
  const { language, isRtl } = useLanguage()
  const t = translations[language]
  const MapCoverage = dynamic(() => import("@/app/components/MapCoverage"), { ssr: false });


  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Truck className="h-6 w-6 text-[#6BBF59]" />
            <span className="text-xl font-bold text-[#234E70]">FreshRoute</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#avantages" className="text-sm font-medium hover:text-[#6BBF59] transition-colors">
              {t.nav.advantages}
            </Link>
            <Link href="#couverture" className="text-sm font-medium hover:text-[#6BBF59] transition-colors">
              {t.nav.coverage}
            </Link>
            <Link href="#temoignages" className="text-sm font-medium hover:text-[#6BBF59] transition-colors">
              {t.nav.testimonials}
            </Link>
          </nav>
          <div className="flex items-center gap-2">
  <LanguageSwitcher />
  
  <Link href="/login" className="mr-2 hidden md:inline-flex">
    <Button variant="outline">{t.nav.login}</Button>
  </Link>

  <Link href="/signup">
    <Button className="bg-[#6BBF59] hover:bg-[#6BBF59]/90">
      {t.nav.signup}
    </Button>
  </Link>
</div>

        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isRtl ? "md:flex-row-reverse" : ""}`}>
              <div className="flex flex-col justify-center p-6 md:p-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#234E70]">
                  {t.hero.title}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">{t.hero.subtitle}</p>
                <div className="mt-8">
                  <Button size="lg" className="bg-[#6BBF59] hover:bg-[#6BBF59]/90">
                    {t.hero.cta}
                  </Button>
                </div>
              </div>
              <div className="relative min-h-[300px] md:min-h-0">
                <Image
                  src="/unnamed.png?height=600&width=800"
                  alt="Camion frigorifique et produits frais"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Avantages Section */}
        <section id="avantages" className="bg-slate-50 py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-[#234E70] mb-12">{t.advantages.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card>
                <CardHeader className="pb-2">
                  <BarChart3 className="h-10 w-10 text-[#6BBF59] mb-2" />
                  <CardTitle>{t.advantages.economy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t.advantages.economy.description}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Truck className="h-10 w-10 text-[#6BBF59] mb-2" />
                  <CardTitle>{t.advantages.vehicles.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t.advantages.vehicles.description}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Snowflake className="h-10 w-10 text-[#6BBF59] mb-2" />
                  <CardTitle>{t.advantages.coldChain.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t.advantages.coldChain.description}</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Clock className="h-10 w-10 text-[#6BBF59] mb-2" />
                  <CardTitle>{t.advantages.management.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{t.advantages.management.description}</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="fruits" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid grid-cols-3 w-full mb-8">
                <TabsTrigger value="fruits">{t.products.fruits}</TabsTrigger>
                <TabsTrigger value="poisson">{t.products.fish}</TabsTrigger>
                <TabsTrigger value="laitiers">{t.products.dairy}</TabsTrigger>
              </TabsList>
              <TabsContent value="fruits" className="mt-0">
                <Card>
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isRtl ? "md:flex-row-reverse" : ""}`}>
                    <div className="p-6">
                      <CardTitle className="text-[#234E70] mb-4">{t.products.fruitsTab.title}</CardTitle>
                      <CardDescription className="text-base">{t.products.fruitsTab.description}</CardDescription>
                      <ul className="mt-4 space-y-2">
                        {t.products.fruitsTab.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Leaf className={`h-5 w-5 text-[#6BBF59] ${isRtl ? "order-1 ml-2" : "mr-2"}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative min-h-[250px]">
                      <Image
                        src="/Transport-de-fruits-et-légumes.jpg?height=400&width=600"
                        alt="Transport de fruits et légumes"
                        fill
                        className="object-cover rounded-r-lg"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="poisson" className="mt-0">
                <Card>
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isRtl ? "md:flex-row-reverse" : ""}`}>
                    <div className="p-6">
                      <CardTitle className="text-[#234E70] mb-4">{t.products.fishTab.title}</CardTitle>
                      <CardDescription className="text-base">{t.products.fishTab.description}</CardDescription>
                      <ul className="mt-4 space-y-2">
                        {t.products.fishTab.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Snowflake className={`h-5 w-5 text-[#6BBF59] ${isRtl ? "order-1 ml-2" : "mr-2"}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative min-h-[250px]">
                      <Image
                        src="/Transport-de-poissons-et-fruits-de-me.jpg?height=400&width=600"
                        alt="Transport de poissons et fruits de mer"
                        fill
                        className="object-cover rounded-r-lg"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>
              <TabsContent value="laitiers" className="mt-0">
                <Card>
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isRtl ? "md:flex-row-reverse" : ""}`}>
                    <div className="p-6">
                      <CardTitle className="text-[#234E70] mb-4">{t.products.dairyTab.title}</CardTitle>
                      <CardDescription className="text-base">{t.products.dairyTab.description}</CardDescription>
                      <ul className="mt-4 space-y-2">
                        {t.products.dairyTab.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Snowflake className={`h-5 w-5 text-[#6BBF59] ${isRtl ? "order-1 ml-2" : "mr-2"}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative min-h-[250px]">
                      <Image
                        src="/transport-des-denrees-perissables.jpg?height=400&width=600"
                        alt="Transport de produits laitiers"
                        fill
                        className="object-cover rounded-r-lg"
                      />
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Carte de couverture */}
        <section id="couverture" className="py-12 md:py-24">
          <div className="container flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center text-[#234E70] mb-4">{t.coverage.title}</h2>
            <p className="text-center text-lg text-muted-foreground mb-12">{t.coverage.subtitle}</p>
            
            <MapCoverage />
          </div>
        </section>
        {/* <section id="couverture" className="py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-[#234E70] mb-4">{t.coverage.title}</h2>
            <p className="text-center text-lg text-muted-foreground mb-12">{t.coverage.subtitle}</p>
            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-8">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Carte de couverture"
                fill
                className="object-cover"
              />
              <div className={`absolute top-4 ${isRtl ? "left-4" : "right-4"} flex flex-col gap-2`}>
                <Badge className="bg-[#6BBF59] hover:bg-[#6BBF59]/90 text-white py-2 px-4">
                  <Truck className={`h-4 w-4 ${isRtl ? "ml-2" : "mr-2"}`} />
                  {t.coverage.fruitsTruck}
                </Badge>
                <Badge className="bg-[#234E70] hover:bg-[#234E70]/90 text-white py-2 px-4">
                  <Truck className={`h-4 w-4 ${isRtl ? "ml-2" : "mr-2"}`} />
                  {t.coverage.fishTruck}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2">
                  <MapPin className={`h-5 w-5 text-[#6BBF59] ${isRtl ? "order-1" : ""}`} />
                  <span className="font-medium">Agadir</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2">
                  <MapPin className={`h-5 w-5 text-[#6BBF59] ${isRtl ? "order-1" : ""}`} />
                  <span className="font-medium">Casablanca</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2">
                  <MapPin className={`h-5 w-5 text-[#6BBF59] ${isRtl ? "order-1" : ""}`} />
                  <span className="font-medium">Safi</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2">
                  <MapPin className={`h-5 w-5 text-[#6BBF59] ${isRtl ? "order-1" : ""}`} />
                  <span className="font-medium">Tanger</span>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Témoignages */}
        <section id="temoignages" className="bg-slate-50 py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-[#234E70] mb-12">{t.testimonials.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Sophie" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{t.testimonials.sophie.name}</CardTitle>
                      <CardDescription>{t.testimonials.sophie.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="italic">"{t.testimonials.sophie.quote}"</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Pierre" />
                      <AvatarFallback>PD</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{t.testimonials.pierre.name}</CardTitle>
                      <CardDescription>{t.testimonials.pierre.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="italic">"{t.testimonials.pierre.quote}"</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Marie" />
                      <AvatarFallback>ML</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{t.testimonials.marie.name}</CardTitle>
                      <CardDescription>{t.testimonials.marie.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="italic">"{t.testimonials.marie.quote}"</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 md:py-24">
          <div className="container">
            <Card className="max-w-3xl mx-auto bg-[#234E70] text-white">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl text-center">{t.cta.title}</CardTitle>
                <CardDescription className="text-slate-200 text-center text-lg">{t.cta.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <form className={`flex flex-col md:flex-row gap-4 ${isRtl ? "md:flex-row-reverse" : ""}`}>
                  <Input
                    type="email"
                    placeholder={t.cta.placeholder}
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button className="bg-[#6BBF59] hover:bg-[#6BBF59]/90 text-white">{t.cta.button}</Button>
                </form>
              </CardContent>
              <CardFooter className="text-center text-sm text-slate-300">{t.cta.privacy}</CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-[#6BBF59]" />
            <span className="font-bold text-[#234E70]">FreshRoute</span>
            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-sm text-muted-foreground hover:text-[#6BBF59]">
              {t.footer.legal}
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-[#6BBF59]">
              {t.footer.privacy}
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-[#6BBF59]">
              {t.footer.contact}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
