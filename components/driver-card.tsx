'use client';

import { motion } from 'framer-motion';
import { Trophy, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import type { DriverStanding } from '@/lib/f1-api';

interface DriverCardProps {
  standing: DriverStanding;
  index: number;
}

export function DriverCard({ standing, index }: DriverCardProps) {
  const { Driver, position, points, wins } = standing;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Link href={`/drivers/${Driver.driverId}`}>
        <Card className="group overflow-hidden border-2 border-transparent hover:border-rb-yellow transition-all duration-300 bg-card">
          <CardContent className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-rb-navy text-white font-bold text-xl">
                  {Driver.code || position}
                </div>
                <div>
                  <h3 className="font-bold text-xl group-hover:text-rb-yellow transition-colors">
                    {Driver.givenName}
                  </h3>
                  <p className="text-2xl font-black text-rb-navy dark:text-rb-yellow">
                    {Driver.familyName.toUpperCase()}
                  </p>
                </div>
              </div>
              <Badge
                variant="secondary"
                className="bg-rb-yellow/10 text-rb-navy dark:text-rb-yellow border-rb-yellow/20"
              >
                P{position}
              </Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                <TrendingUp className="h-5 w-5 text-rb-sky" />
                <div>
                  <p className="text-xs text-muted-foreground">Points</p>
                  <p className="text-xl font-bold">{points}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                <Trophy className="h-5 w-5 text-rb-yellow" />
                <div>
                  <p className="text-xs text-muted-foreground">Wins</p>
                  <p className="text-xl font-bold">{wins}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                #{Driver.permanentNumber}
              </span>
              <span className="text-muted-foreground">{Driver.nationality}</span>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
