import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Utensils, Coffee, ShoppingCart, Clock, ExternalLink, Store } from "lucide-react";
import { useContentByKey } from "@/hooks/useContent";
import { ContentRenderer } from "@/components/ContentRenderer";

const MessAndFood = () => {
  // Fetch dynamic content
  const { data: heroTitle } = useContentByKey("mess_hero_title");
  const { data: heroSubtitle } = useContentByKey("mess_hero_subtitle");
  const { data: messSystemTitle } = useContentByKey("mess_system_title");
  const { data: messAllocation } = useContentByKey("mess_system_allocation");
  const { data: messFeatures } = useContentByKey("mess_system_features");
  const { data: rediTitle } = useContentByKey("redi_culture_title");
  const { data: rediDescription } = useContentByKey("redi_culture_description");
  const { data: rediTimings } = useContentByKey("redi_timings");
  const { data: rediMenu } = useContentByKey("redi_menu");
  const { data: coopTitle } = useContentByKey("coop_store_title");
  const { data: coopDescription } = useContentByKey("coop_store_description");
  const { data: coopItems } = useContentByKey("coop_store_items");
  const { data: cnotTitle } = useContentByKey("cnot_title");
  const { data: cnotDescription } = useContentByKey("cnot_description");
  const { data: eateriesTitle } = useContentByKey("campus_eateries_title");
  const { data: eateriesHours } = useContentByKey("campus_eateries_hours");
  const { data: eateryNames } = useContentByKey("eatery_names");
  const { data: laundryTitle } = useContentByKey("laundry_title");
  const { data: laundryPaid } = useContentByKey("laundry_paid");
  const { data: laundryDiy } = useContentByKey("laundry_diy");

  return (
    <section id="mess" className="py-16 px-4 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {heroTitle ? <ContentRenderer content={heroTitle} /> : "🍽️ Mess & Food"}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {heroSubtitle ? <ContentRenderer content={heroSubtitle} /> : "From hearty meals to late-night snacks, discover all the delicious options on campus!"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-orange-600" />
                {messSystemTitle ? <ContentRenderer content={messSystemTitle} /> : "Mess System"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {messAllocation && <ContentRenderer content={messAllocation} />}
                {messFeatures && <ContentRenderer content={messFeatures} />}
                <Button asChild variant="outline" size="sm" className="w-full">
                  <a href="https://www.ssms-pilani.in/" target="_blank" rel="noopener noreferrer">
                    📋 Mess Menus & Timings <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coffee className="h-5 w-5 text-purple-600" />
                {rediTitle ? <ContentRenderer content={rediTitle} /> : "Redi Culture"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {rediDescription && (
                  <p className="text-sm text-gray-600 mb-3">
                    <ContentRenderer content={rediDescription} />
                  </p>
                )}
                {rediTimings && <ContentRenderer content={rediTimings} />}
                {rediMenu && <ContentRenderer content={rediMenu} />}
              </div>
            </CardContent>
          </Card>

          <Card className="hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Store className="h-5 w-5 text-green-600" />
                {coopTitle ? <ContentRenderer content={coopTitle} /> : "BITS Co-op Store"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {coopDescription && <ContentRenderer content={coopDescription} />}
                {coopItems && <ContentRenderer content={coopItems} />}
                <p className="text-xs text-gray-500">💳 Pay via cash, UPI, or student ID card</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-blue-600" />
              {cnotTitle ? <ContentRenderer content={cnotTitle} /> : "C'not (Connaught Place) - The Heart of Student Life"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-gray-600 mb-4">
                  {cnotDescription ? <ContentRenderer content={cnotDescription} /> : "Affectionately called C'not, this is the central commercial hub inside BITS Pilani's campus — think of it as the student marketplace meets food court meets hangout zone."}
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">🛍️ What You'll Find:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Stationery shops for academic needs</li>
                    <li>• General stores, SIM cards, snacks</li>
                    <li>• Laundry services, photocopies, tailors</li>
                    <li>• Eateries & cafes including Maggi joints</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 p-6 rounded-xl text-center">
                  <h4 className="font-bold text-blue-800 text-lg mb-2">🌇 Evening Vibes</h4>
                  <p className="text-sm text-gray-600">
                    In the evenings, C'not comes alive with students from every corner of campus — chatting, eating, debating, or just chilling after classes.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-indigo-600" />
              {eateriesTitle ? <ContentRenderer content={eateriesTitle} /> : "Campus Eateries - ANC, Looters, TOTT, and DCC"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {eateriesHours && (
              <div className="mb-4 p-4 bg-indigo-50 rounded-lg">
                <ContentRenderer content={eateriesHours} />
              </div>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {eateryNames?.content_data && typeof eateryNames.content_data === 'object' && 'items' in eateryNames.content_data 
                ? (eateryNames.content_data as any).items?.map((name: string, index: number) => {
                    const colors = [
                      "from-orange-100 to-red-100 text-orange-800",
                      "from-purple-100 to-pink-100 text-purple-800", 
                      "from-blue-100 to-cyan-100 text-blue-800",
                      "from-green-100 to-emerald-100 text-green-800"
                    ];
                    return (
                      <div key={index} className="text-center">
                        <div className={`bg-gradient-to-br ${colors[index]} p-6 rounded-xl`}>
                          <h4 className="font-bold text-lg mb-2">{name}</h4>
                        </div>
                      </div>
                    );
                  })
                : (
                  // Fallback if data isn't loaded yet
                  <>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-xl">
                        <h4 className="font-bold text-orange-800 text-lg mb-2">ANC</h4>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-6 rounded-xl">
                        <h4 className="font-bold text-purple-800 text-lg mb-2">TOTT</h4>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-xl">
                        <h4 className="font-bold text-blue-800 text-lg mb-2">Looters</h4>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-xl">
                        <h4 className="font-bold text-green-800 text-lg mb-2">DCC</h4>
                      </div>
                    </div>
                  </>
                )}
            </div>
          </CardContent>
        </Card>

        <Card className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-orange-800">
              {laundryTitle ? <ContentRenderer content={laundryTitle} /> : "🧼 Laundry & Services"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {laundryPaid && (
                <div>
                  <ContentRenderer content={laundryPaid} />
                </div>
              )}
              {laundryDiy && (
                <div>
                  <ContentRenderer content={laundryDiy} />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default MessAndFood;
