'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import type { Race } from '@/lib/f1-api';

interface RaceCardProps {
  race: Race;
  index: number;
  isPast?: boolean;
}

export function RaceCard({ race, index, isPast = false }: RaceCardProps) {
  const raceDate = new Date(race.date);
  const formattedDate = raceDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ x: 8, scale: 1.01 }}
    >
      <Card
        className={`group overflow-hidden border-l-4 transition-all duration-300 ${
          isPast
            ? 'border-l-rb-sky bg-muted/30'
            : 'border-l-rb-yellow bg-card hover:shadow-lg hover:border-rb-yellow'
        }`}
      >
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Badge
                  variant={isPast ? 'secondary' : 'default'}
                  className={
                    isPast
                      ? 'bg-rb-sky/10 text-rb-sky border-rb-sky/20'
                      : 'bg-rb-yellow text-rb-navy border-0'
                  }
                >
                  Round {race.round}
                </Badge>
                {!isPast && (
                  <Badge
                    variant="outline"
                    className="border-rb-red text-rb-red"
                  >
                    Upcoming
                  </Badge>
                )}
              </div>
              <h3 className="font-bold text-xl mb-1 group-hover:text-rb-yellow transition-colors">
                {race.raceName}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>
                  {race.Circuit.Location.locality},{' '}
                  {race.Circuit.Location.country}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-rb-sky" />
              <span className="font-medium">{formattedDate}</span>
            </div>
            {race.time && (
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-rb-sky" />
                <span className="font-medium">
                  {race.time.replace('Z', ' UTC')}
                </span>
              </div>
            )}
          </div>

          {isPast && race.Results && race.Results.length > 0 && (
            <div className="mt-4 pt-4 border-t border-border/50">
              <p className="text-xs text-muted-foreground mb-2">Winner</p>
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-rb-yellow" />
                <span className="font-bold text-sm">
                 {race.Results[0]?.Driver?.givenName ?? ''} {race.Results[0]?.Driver?.familyName ?? 'Unknown'}
                </span>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

function Trophy({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
