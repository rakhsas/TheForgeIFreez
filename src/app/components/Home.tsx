import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Truck, MapPin, Leaf, Snowflake, Clock, BarChart3 } from "lucide-react"
import dynamic from "next/dynamic";
const MapCoverage = dynamic(() => import("@/app/components/MapCoverage"), { ssr: false });

export default function Home() {
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
              Avantages
            </Link>
            <Link href="#couverture" className="text-sm font-medium hover:text-[#6BBF59] transition-colors">
              Couverture
            </Link>
            <Link href="#temoignages" className="text-sm font-medium hover:text-[#6BBF59] transition-colors">
              Témoignages
            </Link>
          </nav>
          <div>
            <Button variant="outline" className="mr-2 hidden md:inline-flex">
              Se connecter
            </Button>
            <Button className="bg-[#6BBF59] hover:bg-[#6BBF59]/90">S'inscrire</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-12 md:py-24 lg:py-32">
          <Card className="overflow-hidden border-none shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col justify-center p-6 md:p-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#234E70]">
                  La livraison mutualisée et fraîche au service des petits producteurs
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Optimisez vos envois avec des véhicules adaptés à chaque produit, sans sacrifier votre marge
                </p>
                <div className="mt-8">
                  <Button size="lg" className="bg-[#6BBF59] hover:bg-[#6BBF59]/90">
                    Créer mon compte gratuitement
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
            <h2 className="text-3xl font-bold text-center text-[#234E70] mb-12">Nos avantages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card>
                <CardHeader className="pb-2">
                  <BarChart3 className="h-10 w-10 text-[#6BBF59] mb-2" />
                  <CardTitle>Mutualisation = Économie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Partagez les coûts de transport avec d'autres producteurs sur le même trajet.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Truck className="h-10 w-10 text-[#6BBF59] mb-2" />
                  <CardTitle>Véhicules réfrigérés adaptés</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Des véhicules spécialement équipés pour le transport de vos produits sensibles.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Snowflake className="h-10 w-10 text-[#6BBF59] mb-2" />
                  <CardTitle>Respect de la chaîne du froid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Garantie de la qualité et de la fraîcheur de vos produits jusqu'à destination.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <Clock className="h-10 w-10 text-[#6BBF59] mb-2" />
                  <CardTitle>Gestion simple des livraisons</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Interface intuitive pour planifier et suivre vos livraisons en temps réel.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="fruits" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid grid-cols-3 w-full mb-8">
                <TabsTrigger value="fruits">Fruits & Légumes</TabsTrigger>
                <TabsTrigger value="poisson">Poisson & Fruits de mer</TabsTrigger>
                <TabsTrigger value="laitiers">Produits Laitiers</TabsTrigger>
              </TabsList>
              <TabsContent value="fruits" className="mt-0">
                <Card>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6">
                      <CardTitle className="text-[#234E70] mb-4">
                        Transport optimal pour vos fruits et légumes
                      </CardTitle>
                      <CardDescription className="text-base">
                        Nos véhicules sont équipés de compartiments à température contrôlée pour préserver la fraîcheur
                        et la qualité de vos fruits et légumes pendant le transport.
                      </CardDescription>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <Leaf className="h-5 w-5 text-[#6BBF59]" />
                          <span>Température idéale entre 8°C et 12°C</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Leaf className="h-5 w-5 text-[#6BBF59]" />
                          <span>Humidité contrôlée</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Leaf className="h-5 w-5 text-[#6BBF59]" />
                          <span>Protection contre les chocs</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative min-h-[250px]">
                      <Image
                        src="/unnamed.png?height=400&width=600"
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6">
                      <CardTitle className="text-[#234E70] mb-4">
                        Fraîcheur garantie pour vos produits de la mer
                      </CardTitle>
                      <CardDescription className="text-base">
                        Nos camions frigorifiques maintiennent une température constante proche de 0°C pour préserver la
                        qualité exceptionnelle de vos poissons et fruits de mer.
                      </CardDescription>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <Snowflake className="h-5 w-5 text-[#6BBF59]" />
                          <span>Température constante entre 0°C et 2°C</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Snowflake className="h-5 w-5 text-[#6BBF59]" />
                          <span>Compartiments étanches</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Snowflake className="h-5 w-5 text-[#6BBF59]" />
                          <span>Traçabilité complète</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative min-h-[250px]">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6">
                      <CardTitle className="text-[#234E70] mb-4">
                        Protection optimale pour vos produits laitiers
                      </CardTitle>
                      <CardDescription className="text-base">
                        Nos véhicules assurent une température constante et adaptée pour préserver la qualité et la
                        sécurité de vos produits laitiers tout au long du transport.
                      </CardDescription>
                      <ul className="mt-4 space-y-2">
                        <li className="flex items-center gap-2">
                          <Snowflake className="h-5 w-5 text-[#6BBF59]" />
                          <span>Température stable entre 2°C et 4°C</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Snowflake className="h-5 w-5 text-[#6BBF59]" />
                          <span>Protection contre les variations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Snowflake className="h-5 w-5 text-[#6BBF59]" />
                          <span>Monitoring en temps réel</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative min-h-[250px]">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
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
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-[#234E70] mb-4">Notre couverture</h2>
            <p className="text-center text-lg text-muted-foreground mb-12">
              Nos tournées évoluent selon la disponibilité des véhicules
            </p>
            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-8">
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Carte de couverture"
                fill
                className="object-cover"
              />
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Badge className="bg-[#6BBF59] hover:bg-[#6BBF59]/90 text-white py-2 px-4">
                  <Truck className="h-4 w-4 mr-2" />
                  Camion Fruits dispo à Bordeaux
                </Badge>
                <Badge className="bg-[#234E70] hover:bg-[#234E70]/90 text-white py-2 px-4">
                  <Truck className="h-4 w-4 mr-2" />
                  Camion Poisson dispo à Marseille
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#6BBF59]" />
                  <span className="font-medium">Bordeaux</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#6BBF59]" />
                  <span className="font-medium">Marseille</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#6BBF59]" />
                  <span className="font-medium">Lyon</span>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-[#6BBF59]" />
                  <span className="font-medium">Nantes</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Témoignages */}
        <section id="temoignages" className="bg-slate-50 py-12 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-[#234E70] mb-12">Ils nous font confiance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg?height=100&width=100" alt="Sophie" />
                      <AvatarFallback>SM</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">Sophie Martin</CardTitle>
                      <CardDescription>Maraîchère, Gironde</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="italic">
                    "Grâce à ce service, j'ai pu livrer mes produits frais sans louer un camion complet. Mes légumes
                    arrivent en parfait état et mes clients sont ravis !"
                  </p>
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
                      <CardTitle className="text-lg">Pierre Durand</CardTitle>
                      <CardDescription>Pêcheur, Marseille</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="italic">
                    "La chaîne du froid est parfaitement respectée. Je peux enfin proposer mes poissons frais à des
                    restaurants plus éloignés sans compromettre la qualité."
                  </p>
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
                      <CardTitle className="text-lg">Marie Leroy</CardTitle>
                      <CardDescription>Fromagère, Auvergne</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="italic">
                    "La plateforme est très intuitive et me permet de planifier mes livraisons facilement. Mes fromages
                    arrivent toujours à la bonne température."
                  </p>
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
                <CardTitle className="text-2xl md:text-3xl text-center">
                  Intéressé par la logistique mutualisée ?
                </CardTitle>
                <CardDescription className="text-slate-200 text-center text-lg">
                  Laissez-nous vos coordonnées et nous vous contacterons pour discuter de vos besoins spécifiques.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col md:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Votre email"
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button className="bg-[#6BBF59] hover:bg-[#6BBF59]/90 text-white">Être contacté(e)</Button>
                </form>
              </CardContent>
              <CardFooter className="text-center text-sm text-slate-300">
                Nous respectons votre vie privée et ne partagerons jamais vos informations.
              </CardFooter>
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
              Mentions légales
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-[#6BBF59]">
              Politique de confidentialité
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-[#6BBF59]">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
