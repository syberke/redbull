import { Suspense } from 'react';
import { getRaceSchedule, getRaceResults } from '@/lib/f1-api';
import { RaceCard } from '@/components/race-card';
import { SectionTitle } from '@/components/section-title';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

async function RacesList() {
  try {
    const [schedule, results] = await Promise.all([
      getRaceSchedule(),
      getRaceResults(),
    ]);

    const today = new Date();
    const upcomingRaces = schedule.filter(
      (race) => new Date(race.date) > today
    );
    const pastRaces = results
      .filter((race) => new Date(race.date) <= today)
      .reverse();

    return (
      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
          <TabsTrigger value="upcoming" className="text-base">
            Upcoming Races ({upcomingRaces.length})
          </TabsTrigger>
          <TabsTrigger value="results" className="text-base">
            Past Races ({pastRaces.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingRaces.length === 0 ? (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>No Upcoming Races</AlertTitle>
              <AlertDescription>
                The season has concluded. Check back next year!
              </AlertDescription>
            </Alert>
          ) : (
            upcomingRaces.map((race, index) => (
              <RaceCard key={race.round} race={race} index={index} />
            ))
          )}
        </TabsContent>

        <TabsContent value="results" className="space-y-4">
          {pastRaces.length === 0 ? (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>No Results Yet</AlertTitle>
              <AlertDescription>
                Race results will appear here after races are completed.
              </AlertDescription>
            </Alert>
          ) : (
            pastRaces.map((race, index) => (
              <RaceCard
                key={race.round}
                race={race}
                index={index}
                isPast={true}
              />
            ))
          )}
        </TabsContent>
      </Tabs>
    );
  } catch (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load race data. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }
}

function RacesLoading() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <Skeleton key={i} className="h-48 rounded-lg" />
      ))}
    </div>
  );
}

export const metadata = {
  title: 'Race Calendar & Results | Red Bull Racing F1',
  description:
    'View the complete Formula 1 race calendar and results for Red Bull Racing',
};

export default function RacesPage() {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Complete schedule and results for the 2024 Formula 1 season">
          Race Calendar
        </SectionTitle>

        <Suspense fallback={<RacesLoading />}>
          <RacesList />
        </Suspense>
      </div>
    </div>
  );
}
