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

      {/* Introduction Section */}
      <section className="py-14 bg-gradient-to-b from-gray-50 to-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-200 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-1 h-24 bg-gradient-to-b from-green-500 to-green-200 rounded-full flex-shrink-0 mt-1"></div>
              <div>
                <p className="body-large text-gray-700 leading-relaxed mb-5">
                  Ce site est un espace d'écoute libre, de guidance et de réancrage personnel. En tant que thérapeute engagé, 
                  je vous propose un accompagnement sans pression, dans un cadre solidaire et respectueux.
                </p>
                <p className="body-large text-gray-700 leading-relaxed">
                  Vous y trouverez un soutien moral essentiel, particulièrement si vous traversez une période de transition, 
                  si vous êtes étudiant ou adulte en reconversion, ou si vous êtes en parcours de soin.
                </p>
              </div>
            </div>
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
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-1 mb-6">Pourquoi mon accompagnement répond à un besoin urgent et prioritaire ?</h2>
            
            <div className="space-y-4">
              <p className="body-medium text-gray-700 leading-relaxed">
                Les étudiants et les adultes en reconversion professionnelle ou en parcours de soin sont des populations particulièrement fragiles. 
                Ils traversent des périodes de transition où le stress, les doutes et les questionnements sont omniprésents. Mais, malgré la 
                multiplication des offres de soins, beaucoup se retrouvent soit "pathologisés" soit démunis face à des solutions classiques qui ne 
                répondent pas à leur besoin de soutien moral.
              </p>
              
              <p className="body-medium text-gray-700 leading-relaxed">
                Mon approche offre une réponse concrète à ce besoin de relance personnelle, avec un accompagnement adapté à chaque étape de votre 
                parcours, qu'il s'agisse de retrouver un équilibre émotionnel, de gérer des périodes de stress intense, ou de réorienter sa vie professionnelle.
              </p>
              
              <p className="body-medium text-gray-700 leading-relaxed">
                Ce que j'apporte comme valeur ajoutée par rapport aux offres classiques, c'est avant tout la dimension humaine de l'accompagnement : 
                je ne suis ni une machine, ni une solution rapide. Mon écoute est incarnée et adaptée à vos besoins, dans un cadre bienveillant, sans 
                pression ni jugement. Mon rôle est d'être un soutien moral, un guide dans vos réflexions, et un catalyseur de changement pour vous aider 
                à avancer dans la bonne direction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Alternative Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-1 mb-6 text-center">Une alternative humaine, incarnée, à l'ère de l'IA</h2>
            
            <div className="space-y-4 text-center">
              <p className="body-medium text-gray-700 leading-relaxed">
                Dans un monde où les réponses automatisées, les coachs virtuels et les interfaces émotionnelles pilotées par intelligence artificielle 
                prennent de plus en plus de place, mon approche revendique avec force l'importance de la présence humaine réelle, imparfaite et sensible.
              </p>
              
              <p className="body-medium text-gray-700 leading-relaxed font-medium">
                Ce que je propose n'est ni standardisé, ni préprogrammé.
              </p>
              
              <p className="body-medium text-gray-700 leading-relaxed">
                C'est un échange vivant, avec ses silences, ses hésitations, ses intuitions, ses résonances.
              </p>
              
              <div className="bg-white p-6 rounded-lg shadow-sm my-6">
                <p className="body-medium text-gray-700 leading-relaxed mb-2">
                  Je ne vous écoute pas à partir d'algorithmes, mais avec mon vécu, ma conscience et ma propre humanité.
                </p>
                <p className="body-medium text-gray-700 leading-relaxed mb-2">
                  Là où l'IA peut simuler l'empathie, je l'incarne.
                </p>
                <p className="body-medium text-gray-700 leading-relaxed mb-2">
                  Là où elle traite une demande, je reçois une personne.
                </p>
                <p className="body-medium text-gray-700 leading-relaxed">
                  Et là où elle "répond", moi, je me relie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-1 mb-6">En résumé</h2>
            <p className="body-large text-gray-700 leading-relaxed mb-8">
              Mon espace est un lieu où vous êtes entendu, écouté, soutenu, sans jugement ni contrainte. Mon objectif est de vous permettre 
              de retrouver l'énergie, de réaliser vos transitions sereinement et de cultiver votre bien-être à travers une écoute personnalisée, 
              solidaire et incarnée.
            </p>
            
            <Card className="bg-gray-50 border-gray-200">
              <CardContent className="p-6">
                <h3 className="heading-3 mb-3">En parallèle et "à venir":</h3>
                <p className="body-medium text-gray-700 leading-relaxed mb-3">
                  Par ailleurs, je suis en train de développer un projet confidentiel autour de l'écoute et du soin, destiné à valoriser les parcours 
                  de vie des thérapeutes, des étudiants dans le soin et des patients.
                </p>
                <p className="body-medium text-gray-700 leading-relaxed font-medium">
                  Une manière nouvelle de faire entendre l'humain et le soin.
                </p>
                <p className="body-small text-gray-600 mt-3">
                  Je vous tiendrai informé en priorité !
                </p>
              </CardContent>
            </Card>
            
            <p className="body-large text-gray-700 mt-8">
              À bientôt<br />
              Nicolas
            </p>
            
            <div className="mt-12">
              <Link to="/reservation">
                <Button className="btn-primary">
                  Réserver votre consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
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
