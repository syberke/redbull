import { Suspense } from 'react';
import { getRedBullDrivers, DriverStanding } from '@/lib/f1-api';
import { DriverCard } from '@/components/driver-card';
import { SectionTitle } from '@/components/section-title';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

async function DriversList() {
  try {
    const drivers = await getRedBullDrivers();

    if (!drivers || drivers.length === 0) {
      return (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>No Drivers Found</AlertTitle>
          <AlertDescription>
            Unable to load Red Bull Racing drivers at this time.
          </AlertDescription>
        </Alert>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {drivers.map((driver: DriverStanding, index: number) => (
          <DriverCard key={driver.Driver.driverId} standing={driver} index={index} />
        ))}
      </div>
    );
  } catch (error) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Failed to load driver data. Please try again later.
        </AlertDescription>
      </Alert>
    );
  }
}

function DriversLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[1, 2].map((i) => (
        <Skeleton key={i} className="h-64 rounded-lg" />
      ))}
    </div>
  );
}

export const metadata = {
  title: 'Drivers | Red Bull Racing F1',
  description: 'Meet the Red Bull Racing Formula 1 drivers - Max Verstappen and Sergio Pérez',
};

export default function DriversPage() {
  return (
    <div className="min-h-screen py-20 bg-background">
      <div className="container mx-auto px-4">
        <SectionTitle subtitle="Meet the elite drivers of Oracle Red Bull Racing">
          Our Drivers
        </SectionTitle>

        <Suspense fallback={<DriversLoading />}>
          <DriversList />
        </Suspense>
      </div>
    </div>
  );
}
