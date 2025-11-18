const BASE_URL = "https://api.jolpi.ca/ergast/f1";

// Helper fetch wrapper
async function fetchF1(endpoint: string) {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    next: { revalidate: 300 },
  });

  if (!res.ok) throw new Error("F1 API Error");
  return res.json();
}

/* =====================================
   TYPES
===================================== */
export interface DriverStanding {
  position: string | null;
  points: string | null;
  wins: string | null;
  Driver: {
    driverId: string;
    code: string;
    givenName: string;
    familyName: string;
    nationality: string;
    permanentNumber?: string;
  };
  Constructors: {
    constructorId: string;
    name: string;
  }[];
}

export interface Race {
  season: string;
  round: string;
  raceName: string;
  date: string;
  time?: string;
  Results?: any[];
  Circuit: {
    circuitId: string;
    circuitName: string;
    Location: {
      lat: string;
      long: string;
      locality: string;
      country: string;
    };
  };
}

/* =====================================
   ✅ GET RED BULL DRIVERS
===================================== */
export async function getRedBullDrivers() {
  const res = await fetch(
    "https://api.jolpi.ca/ergast/f1/current/constructors/red_bull/drivers.json",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch Red Bull drivers");
  }

  const data = await res.json();

  const drivers = data?.MRData?.DriverTable?.Drivers || [];

  return drivers.map((d: any) => ({
    Driver: {
      driverId: d.driverId,
      code: d.code,
      givenName: d.givenName,
      familyName: d.familyName,
      nationality: d.nationality,
      permanentNumber: d.permanentNumber,
    },
    position: null,
    points: null,
    wins: null,
    Constructors: [],
  }));
}


/* =====================================
   ✅ GET DRIVER INFO
===================================== */
export async function getDriverInfo(driverId: string) {
  const json = await fetchF1(`/drivers/${driverId}.json`);

  const d = json.MRData.DriverTable.Drivers[0];

  if (!d) return null;

  return {
    driverId: d.driverId,
    code: d.code,
    givenName: d.givenName,
    familyName: d.familyName,
    nationality: d.nationality,
    dateOfBirth: d.dateOfBirth,
    permanentNumber: d.permanentNumber ?? null,
  };
}

/* =====================================
   ✅ GET RACE SCHEDULE (CURRENT SEASON)
===================================== */
export async function getRaceSchedule(): Promise<Race[]> {
  const json = await fetchF1("/current.json");
  const races = json.MRData.RaceTable.Races;

  return races.map((r: any) => ({
    season: r.season,
    round: r.round,
    raceName: r.raceName,
    date: r.date,
    time: r.time,
    Circuit: {
      circuitId: r.Circuit.circuitId,
      circuitName: r.Circuit.circuitName,
      Location: {
        lat: r.Circuit.Location.lat,
        long: r.Circuit.Location.long,
        locality: r.Circuit.Location.locality,
        country: r.Circuit.Location.country,
      },
    },
  }));
}

/* =====================================
   ✅ GET RACE RESULTS (FINISHED RACES)
===================================== */
export async function getRaceResults(): Promise<Race[]> {
  const json = await fetchF1("/current/results.json");
  const races = json.MRData.RaceTable.Races || [];

  return races.map((r: any) => ({
    season: r.season,
    round: r.round,
    raceName: r.raceName,
    date: r.date,
    time: r.time,
    Results: r.Results || [],
    Circuit: {
      circuitId: r.Circuit.circuitId,
      circuitName: r.Circuit.circuitName,
      Location: {
        lat: r.Circuit.Location.lat,
        long: r.Circuit.Location.long,
        locality: r.Circuit.Location.locality,
        country: r.Circuit.Location.country,
      },
    },
  }));
}

/* =====================================
   ✅ GET DRIVER RESULTS (FULL CAREER)
   ✅ FIX — cocok dengan API Jolpi
===================================== */
export async function getDriverResults(driverId: string) {
  const json = await fetchF1(`/drivers/${driverId}/results.json`);

  return json.MRData.RaceTable.Races || [];
}
