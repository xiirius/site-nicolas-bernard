import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Decorative background elements */}
        <div className="hero-decoration hero-decoration-1"></div>
        <div className="hero-decoration hero-decoration-2"></div>
        <div className="hero-decoration hero-decoration-3"></div>
        
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-green-200 rounded-full px-5 py-2.5 mb-6 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Accompagnement bienveillant</span>
            </div>
            
            <h1 className="heading-hero mb-5">
              Bienvenue dans mon espace d'accompagnement
            </h1>
            
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto mb-6 opacity-40"></div>
            
            <p className="body-large text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Je suis <span className="font-semibold text-green-700">Nicolas Bernard</span>, thérapeute, coach de santé et de vie, ancien préparateur physique et éducateur spécialisé. 
              Mon parcours, riche de <span className="font-semibold text-green-700">30 ans d'expérience</span>, m'a permis de développer une approche unique qui lie écoute, soutien moral et accompagnement holistique.
            </p>
            
            {/* Introduction Text - Professional Design with Anise Green */}
            <div className="relative max-w-3xl mx-auto mb-8 group">
              {/* Decorative corner elements */}
              <div className="absolute -top-3 -left-3 w-20 h-20 border-t-2 border-l-2 border-green-400 opacity-40 rounded-tl-3xl transition-all duration-300 group-hover:opacity-70"></div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-b-2 border-r-2 border-green-400 opacity-40 rounded-br-3xl transition-all duration-300 group-hover:opacity-70"></div>
              
              {/* Main content box */}
              <div className="relative bg-gradient-to-br from-green-50/80 via-white to-green-50/60 backdrop-blur-sm border-2 border-green-200/50 rounded-3xl p-8 shadow-lg overflow-hidden">
                {/* Decorative background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-300/10 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-green-200/10 to-transparent rounded-full blur-2xl"></div>
                
                {/* Quote icon */}
                <div className="absolute top-4 left-4 text-green-300/30 text-6xl font-serif leading-none">"</div>
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-green-200 rounded-full"></div>
                    <span className="text-xs uppercase tracking-widest text-green-600 font-semibold">Mon engagement</span>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-5 font-light italic">
                    Ce site est un espace d'<span className="font-medium text-green-700 not-italic">écoute libre</span>, de guidance et de réancrage personnel. 
                    En tant que thérapeute engagé, je vous propose un accompagnement <span className="font-medium text-green-700 not-italic">sans pression</span>, 
                    dans un cadre solidaire et respectueux.
                  </p>
                  
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center shadow-sm">
                        <Heart className="w-5 h-5 text-green-600" />
                      </div>
                    </div>
                    <p className="text-base text-gray-700 leading-relaxed font-light">
                      Vous y trouverez un <span className="font-medium text-green-700">soutien moral essentiel</span>, particulièrement si vous traversez une période de transition, 
                      si vous êtes étudiant ou adulte en reconversion, ou si vous êtes en parcours de soin.
                    </p>
                  </div>
                  
                  {/* Bottom decorative line */}
                  <div className="flex items-center gap-3 mt-6">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-green-300 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Key Benefits Cards */}
            <div className="grid md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
              <div className="bg-white/60 backdrop-blur-sm border border-green-100 rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="w-11 h-11 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm">Écoute active</h3>
                <p className="text-xs text-gray-600">Sans jugement ni contrainte</p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm border border-green-100 rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="w-11 h-11 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm">Tarif solidaire</h3>
                <p className="text-xs text-gray-600">15 € de l'heure</p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm border border-green-100 rounded-xl p-4 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                <div className="w-11 h-11 bg-gradient-to-br from-green-100 to-green-50 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm">Flexible</h3>
                <p className="text-xs text-gray-600">En ligne ou en présentiel</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link to="/reservation">
                <Button className="btn-primary text-base px-8 py-3.5 shadow-lg hover:shadow-xl">
                  Réserver une consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 italic">Première consultation sans engagement</p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-wider text-green-600 font-semibold mb-3 block">Philosophie</span>
              <h2 className="heading-1 mb-3">Mon approche, ma vision et ma mission</h2>
              <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="bg-gradient-to-br from-green-50/50 to-white border border-green-100/50 rounded-2xl p-6 shadow-sm">
                <p className="body-medium text-gray-700 leading-relaxed">
                  En tant que coach de santé, de vie et psychopraticien, ma mission est d'apporter un soutien global à ceux qui en ont besoin, 
                  sans jugement et sans contrainte. Ma démarche est fondée sur une écoute incarnée et un accompagnement laïc, où chaque individu 
                  est vu dans sa globalité : émotionnelle, physique et mentale. (Une subtile alchimie en fonction de vos besoins entre 
                  l'accompagnement sans jugement, un soutient moral, une réorientation de votre trajectoire, un retour vers la vitalité moral et physique)
                </p>
              </div>
              
              <p className="body-medium text-gray-700 leading-relaxed pl-6 border-l-2 border-green-200">
                Je crois profondément en l'importance de la relance personnelle et du réancrage, que ce soit dans le cadre d'une reconversion 
                personnelle, d'un professionnel de soin, ou simplement dans l'envie de retrouver une vitalité perdue. Je vous guide sur le 
                chemin de la conscience de soi, du bien-être mental et de l'épanouissement personnel.
              </p>
            </div>

            <Card className="bg-white border-green-200 shadow-md overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-400"></div>
              <CardContent className="p-8 pt-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="heading-3 text-green-800">Mes valeurs fondamentales</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-100 transition-colors">
                      <span className="text-green-600 font-bold text-sm">1</span>
                    </div>
                    <span className="body-medium text-gray-700 pt-1">L'écoute active et l'accompagnement dans une démarche solidaire</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-100 transition-colors">
                      <span className="text-green-600 font-bold text-sm">2</span>
                    </div>
                    <span className="body-medium text-gray-700 pt-1">L'authenticité de la relation et la confiance</span>
                  </li>
                  <li className="flex items-start gap-4 group">
                    <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-100 transition-colors">
                      <span className="text-green-600 font-bold text-sm">3</span>
                    </div>
                    <span className="body-medium text-gray-700 pt-1">L'engagement humain et la transparence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-100 rounded-2xl p-6">
              <p className="body-medium text-gray-700 leading-relaxed italic">
                Je me considère comme un <strong>"confesseur laïc"</strong>, une figure d'accompagnement qui vous aide à trouver les réponses en vous-même, 
                en dehors de toute contrainte religieuse ou dogmatique. Ma mission est de vous soutenir dans vos réflexions et de vous offrir 
                un espace d'expression et de détente. Mon travail est celui d'un coach de santé et de vie dans toute sa profondeur, pour ceux 
                qui sont à la recherche d'un soutien moral, émotionnel et de réponses concrètes pour avancer sereinement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Formats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-wider text-green-600 font-semibold mb-3 block">Mes services</span>
              <h2 className="heading-1 mb-3">Formats de consultations-rencontres proposées</h2>
              <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 group bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-green-100 to-green-50 p-3.5 rounded-xl group-hover:scale-110 transition-transform">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-3 mb-2 group-hover:text-green-700 transition-colors">Consultation individuelle</h3>
                      <span className="text-xs bg-green-100 text-green-700 px-2.5 py-1 rounded-full font-medium">Temps libre</span>
                      <p className="body-small text-gray-600 mt-3 mb-3">
                        Dans cette formule, vous avez la possibilité de bénéficier d'un accompagnement sans contrainte de temps. 
                        La durée de la rencontre peut varier entre 30 minutes et 2 heures, selon vos besoins.
                      </p>
                      <div className="flex items-center gap-2 mt-4">
                        <div className="w-8 h-px bg-green-300"></div>
                        <p className="font-semibold text-green-700 text-sm">15 € / heure</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 group bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-3.5 rounded-xl group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-3 mb-2 group-hover:text-blue-700 transition-colors">Consultation en duo</h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-medium">Tarifs identiques</span>
                      <p className="body-small text-gray-600 mt-3 mb-3">
                        Vous souhaitez être accompagné(e) en duo ? Que ce soit avec un proche, un collègue ou un partenaire, 
                        je vous propose des consultations en binôme dans un cadre bienveillant.
                      </p>
                      <div className="flex items-center gap-2 mt-4">
                        <div className="w-8 h-px bg-blue-300"></div>
                        <p className="font-semibold text-blue-700 text-sm">15 € / personne / heure</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500 group bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-orange-100 to-orange-50 p-3.5 rounded-xl group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-3 mb-2 group-hover:text-orange-700 transition-colors">Consultation nomade</h3>
                      <span className="text-xs bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full font-medium">Flexible</span>
                      <p className="body-small text-gray-600 mt-3 mb-3">
                        Je vous offre également la possibilité de vous rencontrer là où vous vous sentez bien. Que ce soit dans un café, 
                        dans un lieu calme, ou même chez vous, je viens à votre rencontre.
                      </p>
                      <div className="flex items-center gap-2 mt-4">
                        <div className="w-8 h-px bg-orange-300"></div>
                        <p className="font-semibold text-orange-700 text-sm">15 € / heure <span className="text-gray-500 font-normal text-xs">(selon disponibilités)</span></p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500 group bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-3.5 rounded-xl group-hover:scale-110 transition-transform">
                      <Heart className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-3 mb-2 group-hover:text-purple-700 transition-colors">Réorientation thérapeutique</h3>
                      <span className="text-xs bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full font-medium">Réseau solidaire</span>
                      <p className="body-small text-gray-600 mt-3 mb-3">
                        Si vos besoins vont au-delà de ce que je peux vous offrir, je vous réoriente vers un collectif de thérapeutes solidaires. 
                        En tant que créateur et membre de ce collectif, je vous aiderai à trouver un autre professionnel.
                      </p>
                      <div className="flex items-center gap-2 mt-4">
                        <div className="w-8 h-px bg-purple-300"></div>
                        <p className="font-semibold text-purple-700 text-sm">Service gratuit</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-wider text-green-600 font-semibold mb-3 block">Un besoin réel</span>
              <h2 className="heading-1 mb-3">Pourquoi mon accompagnement répond à un besoin urgent et prioritaire ?</h2>
              <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              {/* Card 1 - Le constat */}
              <Card className="bg-gradient-to-br from-orange-50 to-white border-l-4 border-l-orange-400 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-2xl">⚠️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-orange-800 mb-3">Le constat</h3>
                      <p className="body-medium text-gray-700 leading-relaxed">
                        Les <strong className="text-orange-700">étudiants</strong> et les <strong className="text-orange-700">adultes en reconversion professionnelle</strong> ou en <strong className="text-orange-700">parcours de soin</strong> sont des populations particulièrement <strong>fragiles</strong>. 
                        Ils traversent des périodes de transition où le <span className="font-semibold text-gray-800">stress, les doutes et les questionnements</span> sont omniprésents. Mais, malgré la 
                        multiplication des offres de soins, beaucoup se retrouvent soit <strong className="text-orange-700">"pathologisés"</strong> soit démunis face à des solutions classiques qui ne 
                        répondent pas à leur besoin de <strong className="text-green-700">soutien moral</strong>.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 2 - La réponse */}
              <Card className="bg-gradient-to-br from-green-50 to-white border-l-4 border-l-green-500 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-2xl">✨</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-green-800 mb-3">Ma réponse concrète</h3>
                      <p className="body-medium text-gray-700 leading-relaxed">
                        Mon approche offre une <strong className="text-green-700">réponse concrète</strong> à ce besoin de <strong className="text-green-700">relance personnelle</strong>, avec un accompagnement adapté à <strong>chaque étape</strong> de votre 
                        parcours, qu'il s'agisse de retrouver un <span className="font-semibold text-gray-800">équilibre émotionnel</span>, de gérer des périodes de <span className="font-semibold text-gray-800">stress intense</span>, ou de réorienter sa vie professionnelle.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Card 3 - La valeur ajoutée */}
              <Card className="bg-gradient-to-br from-blue-50 to-white border-l-4 border-l-blue-400 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-blue-800 mb-3">La différence humaine</h3>
                      <p className="body-medium text-gray-700 leading-relaxed">
                        Ce que j'apporte comme <strong className="text-blue-700">valeur ajoutée</strong> par rapport aux offres classiques, c'est avant tout la <strong className="text-green-700">dimension humaine</strong> de l'accompagnement : 
                        je ne suis <strong>ni une machine</strong>, <strong>ni une solution rapide</strong>. Mon écoute est <strong className="text-green-700">incarnée</strong> et <strong className="text-green-700">adaptée</strong> à vos besoins, dans un cadre <span className="font-semibold text-gray-800">bienveillant</span>, sans 
                        pression ni jugement. Mon rôle est d'être un <strong className="text-blue-700">soutien moral</strong>, un <strong className="text-blue-700">guide</strong> dans vos réflexions, et un <strong className="text-blue-700">catalyseur de changement</strong> pour vous aider 
                        à avancer dans la bonne direction.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* AI Alternative Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-purple-200/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-wider text-purple-600 font-semibold mb-3 block">Humanité & Authenticité</span>
              <h2 className="heading-1 mb-3">Une alternative humaine, incarnée, à l'ère de l'IA</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Main statement */}
            <Card className="mb-6 border-2 border-purple-200 shadow-xl bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <p className="body-large text-gray-700 leading-relaxed pt-2">
                    Dans un monde où les <strong className="text-purple-700">réponses automatisées</strong>, les <strong className="text-purple-700">coachs virtuels</strong> et les interfaces émotionnelles pilotées par <strong className="text-purple-700">intelligence artificielle</strong> prennent de plus en plus de place, 
                    mon approche revendique avec force l'importance de la <strong className="text-green-700">présence humaine réelle</strong>, imparfaite et sensible.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-100 via-blue-50 to-purple-100 rounded-2xl p-6 border-l-4 border-purple-500">
                  <p className="text-xl font-semibold text-gray-800 mb-4 text-center">
                    Ce que je propose n'est <strong className="text-purple-700">ni standardisé</strong>, <strong className="text-purple-700">ni préprogrammé</strong>.
                  </p>
                  <p className="body-medium text-gray-700 text-center italic">
                    C'est un échange <strong>vivant</strong>, avec ses silences, ses hésitations, ses intuitions, ses résonances.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {/* IA Side */}
              <Card className="bg-gradient-to-br from-gray-100 to-gray-50 border-2 border-gray-300 shadow-md">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl">🤖</span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-700">L'Intelligence Artificielle</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span className="text-sm text-gray-600">Simule l'empathie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span className="text-sm text-gray-600">Traite une demande</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gray-400 mt-1">•</span>
                      <span className="text-sm text-gray-600">Répond avec des algorithmes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Human Side */}
              <Card className="bg-gradient-to-br from-green-100 to-blue-50 border-2 border-green-400 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-green-200 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl">👤</span>
                    </div>
                    <h3 className="font-bold text-lg text-green-800">Mon Accompagnement Humain</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-sm font-semibold text-green-800">J'incarne l'empathie</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-sm font-semibold text-green-800">Je reçois une personne</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-sm font-semibold text-green-800">Je me relie avec mon humanité</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Final statement */}
            <div className="bg-gradient-to-r from-green-50 via-white to-blue-50 rounded-2xl p-8 border-2 border-green-300 shadow-lg text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Je ne vous écoute pas <strong className="text-gray-800">à partir d'algorithmes</strong>, mais avec <strong className="text-green-700">mon vécu</strong>, <strong className="text-green-700">ma conscience</strong> et <strong className="text-green-700">ma propre humanité</strong>.
              </p>
              <div className="inline-block bg-white rounded-xl px-6 py-3 shadow-md border border-green-200">
                <p className="text-base font-semibold text-green-800">
                  Là où elle "répond", moi, je me <strong className="text-green-700 text-lg">relie</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-wider text-green-600 font-semibold mb-3 block">Pour conclure</span>
              <h2 className="heading-1 mb-3">En résumé</h2>
              <div className="w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
            </div>
            
            {/* Main summary card */}
            <Card className="bg-gradient-to-br from-green-50 to-white border-2 border-green-300 shadow-2xl mb-8 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600"></div>
              <CardContent className="p-8 pt-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7 text-green-600" />
                  </div>
                  <p className="body-large text-gray-700 leading-relaxed flex-1 pt-2">
                    Mon espace est un lieu où vous êtes <strong className="text-green-700">entendu</strong>, <strong className="text-green-700">écouté</strong>, <strong className="text-green-700">soutenu</strong>, <strong>sans jugement ni contrainte</strong>. 
                    Mon objectif est de vous permettre de retrouver <strong className="text-green-700">l'énergie</strong>, de réaliser vos <strong className="text-green-700">transitions sereinement</strong> et de cultiver votre 
                    <strong className="text-green-700"> bien-être</strong> à travers une écoute <span className="font-semibold text-gray-800">personnalisée, solidaire et incarnée</span>.
                  </p>
                </div>
                
                {/* Key points grid */}
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white rounded-xl p-4 border-2 border-green-200 text-center hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">👂</div>
                    <p className="font-semibold text-green-800 text-sm">Écoute personnalisée</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-green-200 text-center hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">🤝</div>
                    <p className="font-semibold text-green-800 text-sm">Accompagnement solidaire</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 border-2 border-green-200 text-center hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-2">💚</div>
                    <p className="font-semibold text-green-800 text-sm">Présence incarnée</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Future project card */}
            <Card className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-purple-200 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"></div>
              <CardContent className="p-8 relative">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-2xl">🔮</span>
                  </div>
                  <div>
                    <h3 className="heading-3 mb-3 text-purple-800">En parallèle et "à venir"</h3>
                    <p className="body-medium text-gray-700 leading-relaxed mb-4">
                      Par ailleurs, je suis en train de développer un <strong className="text-purple-700">projet confidentiel</strong> autour de l'écoute et du soin, destiné à valoriser les parcours 
                      de vie des <strong className="text-purple-700">thérapeutes</strong>, des <strong className="text-purple-700">étudiants dans le soin</strong> et des <strong className="text-purple-700">patients</strong>.
                    </p>
                    <div className="bg-white/70 rounded-xl p-4 border border-purple-200 mb-4">
                      <p className="body-medium font-semibold text-purple-800 text-center italic">
                        Une manière nouvelle de faire entendre l'humain et le soin.
                      </p>
                    </div>
                    <p className="body-small text-gray-600 italic">
                      Je vous tiendrai informé en priorité !
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Signature */}
            <div className="text-center mt-8">
              <p className="text-lg text-gray-700 mb-2">À bientôt</p>
              <p className="text-2xl font-semibold text-green-700">Nicolas</p>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto mt-4"></div>
            </div>
            
            {/* Final CTA */}
            <div className="mt-12 text-center">
              <Link to="/reservation">
                <Button className="btn-primary text-base px-10 py-4 shadow-2xl">
                  Réserver votre consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="body-small">© 2025 Nicolas Bernard - Thérapeute & Coach de Santé et de Vie</p>
          <p className="caption mt-2 text-gray-400">Accompagnement bienveillant et solidaire</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
