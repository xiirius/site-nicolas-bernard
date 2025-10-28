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
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 rounded-full px-4 py-2 mb-8">
              <Heart className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Accompagnement bienveillant</span>
            </div>
            
            <h1 className="heading-hero mb-6">
              Bienvenue dans mon espace d'accompagnement
            </h1>
            
            <p className="body-large text-gray-600 mb-8 max-w-3xl mx-auto">
              Je suis Nicolas Bernard, thérapeute, coach de santé et de vie, ancien préparateur physique et éducateur spécialisé. 
              Mon parcours, riche de 30 ans d'expérience, m'a permis de développer une approche unique qui lie écoute, soutien moral et accompagnement holistique.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/reservation">
                <Button className="btn-primary">
                  Réserver une consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <p className="body-large text-gray-700 leading-relaxed mb-6">
              Ce site est un espace d'écoute libre, de guidance et de réancrage personnel. En tant que thérapeute engagé, 
              je vous propose un accompagnement sans pression, dans un cadre solidaire et respectueux.
            </p>
            <p className="body-large text-gray-700 leading-relaxed">
              Vous y trouverez un soutien moral essentiel, particulièrement si vous traversez une période de transition, 
              si vous êtes étudiant ou adulte en reconversion, ou si vous êtes en parcours de soin.
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-1 mb-8 text-center">Mon approche, ma vision et ma mission</h2>
            
            <div className="space-y-6 mb-8">
              <p className="body-medium text-gray-700 leading-relaxed">
                En tant que coach de santé, de vie et psychopraticien, ma mission est d'apporter un soutien global à ceux qui en ont besoin, 
                sans jugement et sans contrainte. Ma démarche est fondée sur une écoute incarnée et un accompagnement laïc, où chaque individu 
                est vu dans sa globalité : émotionnelle, physique et mentale. (Une subtile alchimie en fonction de vos besoins entre 
                l'accompagnement sans jugement, un soutient moral, une réorientation de votre trajectoire, un retour vers la vitalité moral et physique)
              </p>
              
              <p className="body-medium text-gray-700 leading-relaxed">
                Je crois profondément en l'importance de la relance personnelle et du réancrage, que ce soit dans le cadre d'une reconversion 
                personnelle, d'un professionnel de soin, ou simplement dans l'envie de retrouver une vitalité perdue. Je vous guide sur le 
                chemin de la conscience de soi, du bien-être mental et de l'épanouissement personnel.
              </p>
            </div>

            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="heading-3 mb-4 text-green-800">Mon approche repose sur des valeurs solides :</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="body-medium text-gray-700">L'écoute active et l'accompagnement dans une démarche solidaire</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="body-medium text-gray-700">L'authenticité de la relation et la confiance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">•</span>
                    <span className="body-medium text-gray-700">L'engagement humain et la transparence</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <p className="body-medium text-gray-700 leading-relaxed mt-6">
              Je me considère comme un "confesseur laïc", une figure d'accompagnement qui vous aide à trouver les réponses en vous-même, 
              en dehors de toute contrainte religieuse ou dogmatique. Ma mission est de vous soutenir dans vos réflexions et de vous offrir 
              un espace d'expression et de détente. Mon travail est celui d'un coach de santé et de vie dans toute sa profondeur, pour ceux 
              qui sont à la recherche d'un soutien moral, émotionnel et de réponses concrètes pour avancer sereinement.
            </p>
          </div>
        </div>
      </section>

      {/* Consultation Formats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-1 mb-12 text-center">Formats de consultations-rencontres proposées</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-3 mb-2">Consultation individuelle (temps libre)</h3>
                      <p className="body-small text-gray-600 mb-3">
                        Dans cette formule, vous avez la possibilité de bénéficier d'un accompagnement sans contrainte de temps. 
                        La durée de la rencontre peut varier entre 30 minutes et 2 heures, selon vos besoins.
                      </p>
                      <p className="font-medium text-green-700">Tarif solidaire : 15 € de l'heure</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-3 mb-2">Consultation en duo (tarifs identiques)</h3>
                      <p className="body-small text-gray-600 mb-3">
                        Vous souhaitez être accompagné(e) en duo ? Que ce soit avec un proche, un collègue ou un partenaire, 
                        je vous propose des consultations en binôme dans un cadre bienveillant.
                      </p>
                      <p className="font-medium text-green-700">Tarif solidaire : 15 € par personne, à l'heure</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-3 mb-2">Consultation nomade</h3>
                      <p className="body-small text-gray-600 mb-3">
                        Je vous offre également la possibilité de vous rencontrer là où vous vous sentez bien. Que ce soit dans un café, 
                        dans un lieu calme, ou même chez vous, je viens à votre rencontre.
                      </p>
                      <p className="font-medium text-green-700">Tarif solidaire : 15 € de l'heure (selon mes disponibilités)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-3 mb-2">Réorientation vers d'autres thérapeutes solidaires</h3>
                      <p className="body-small text-gray-600 mb-3">
                        Si vos besoins vont au-delà de ce que je peux vous offrir, je vous réoriente vers un collectif de thérapeutes solidaires. 
                        En tant que créateur et membre de ce collectif, je vous aiderai à trouver un autre professionnel.
                      </p>
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
