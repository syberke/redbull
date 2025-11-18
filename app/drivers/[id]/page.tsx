import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getDriverInfo, getDriverResults } from '@/lib/f1-api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import {
  AlertCircle,
  Calendar,
  Trophy,
  MapPin,
  TrendingUp,
} from 'lucide-react';

interface DriverPageProps {
  params: {
    id: string;
  };
}

async function DriverDetails({ driverId }: { driverId: string }) {
  try {
    const [driver, results] = await Promise.all([
      getDriverInfo(driverId),
      getDriverResults(driverId),
    ]);

    if (!driver) {
      notFound();
    }

  const totalPoints = results.reduce((sum: number, race: any) => {

      const result = race.Results?.[0];
      return sum + (result ? parseFloat(result.points) : 0);
    }, 0);
const wins = results.filter(
  (race: any) => race.Results?.[0]?.position === '1'
).length;


   const podiums = results.filter((race: any) => {

      const position = race.Results?.[0]?.position;
      return position && ['1', '2', '3'].includes(position);
    }).length;

    return (
      <div className="space-y-8">
        <div className="bg-gradient-to-br from-rb-navy to-rb-sky/20 dark:from-rb-navy/50 dark:to-black rounded-2xl p-8 md:p-12 border border-rb-yellow/20">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-rb-yellow to-rb-red text-rb-navy font-black text-4xl">
             {driver.code || driver.permanentNumber || "N/A"}

            </div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-black text-white mb-2">
                {driver.givenName}{' '}
                <span className="text-rb-yellow">{driver.familyName}</span>
              </h1>
              <div className="flex flex-wrap items-center gap-3 text-white/80">
              {driver.permanentNumber && (
  <Badge>#{driver.permanentNumber}</Badge>
)}


                <span className="text-lg">{driver.nationality}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: 'Total Points',
              value: totalPoints.toFixed(0),
              icon: TrendingUp,
              color: 'rb-sky',
            },
            {
              label: 'Race Wins',
              value: wins,
              icon: Trophy,
              color: 'rb-yellow',
            },
            {
              label: 'Podiums',
              value: podiums,
              icon: Trophy,
              color: 'rb-red',
            },
            {
              label: 'Races',
              value: results.length,
              icon: Calendar,
              color: 'rb-navy',
            },
          ].map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <stat.icon className={`h-6 w-6 mx-auto mb-2 text-${stat.color}`} />
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-rb-yellow" />
              2024 Season Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {results.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                No race results available yet.
              </p>
            ) : (
              <div className="space-y-3">
                {results.slice(0, 10).map((race: any) =>  {
                  const result = race.Results?.[0];
                  if (!result) return null;

                  return (
                    <div
                      key={race.round}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <Badge
                          variant={
                            result.position === '1'
                              ? 'default'
                              : 'secondary'
                          }
                          className={
                            result.position === '1'
                              ? 'bg-rb-yellow text-rb-navy'
                              : ''
                          }
                        >
                          P{result.position}
                        </Badge>
                        <div>
                          <p className="font-semibold">{race.raceName}</p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{race.Circuit.Location.country}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-rb-yellow">
                          {result.points} pts
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {new Date(race.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    );
  } catch (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load driver information. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }
}

function DriverLoading() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-64 rounded-2xl" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-32 rounded-lg" />
        ))}
      </div>
      <Skeleton className="h-96 rounded-lg" />
    </div>
  );
}

export async function generateMetadata({ params }: DriverPageProps) {
  try {
    const driver = await getDriverInfo(params.id);
    if (!driver) {
      return {
        title: 'Driver Not Found | Red Bull Racing F1',
      };
    }
    return {
      title: `${driver.givenName} ${driver.familyName} | Red Bull Racing F1`,
      description: `View detailed statistics and race results for ${driver.givenName} ${driver.familyName}`,
    };
  } catch {
    return {
      title: 'Driver | Red Bull Racing F1',
    };
  }
}

export default function DriverPage({ params }: DriverPageProps) {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <Suspense fallback={<DriverLoading />}>
          <DriverDetails driverId={params.id} />
        </Suspense>
      </div>
    </div>
  );
}
