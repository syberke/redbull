import { Flag, Github, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-rb-navy to-rb-sky">
                <Flag className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-none text-rb-navy dark:text-rb-yellow">
                  Red Bull Racing
                </span>
                <span className="text-xs text-muted-foreground">
                  Oracle Red Bull Racing
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Educational project showcasing Red Bull Racing Formula 1 team
              data. Built with Next.js 14, TypeScript, and the Ergast F1 API.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-rb-navy dark:text-rb-yellow">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/drivers"
                  className="text-muted-foreground hover:text-rb-yellow transition-colors"
                >
                  Drivers
                </Link>
              </li>
              <li>
                <Link
                  href="/races"
                  className="text-muted-foreground hover:text-rb-yellow transition-colors"
                >
                  Races
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-muted-foreground hover:text-rb-yellow transition-colors"
                >
                  Team Info
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4 text-rb-navy dark:text-rb-yellow">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://ergast.com/mrd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-rb-yellow transition-colors"
                >
                  Ergast F1 API
                </a>
              </li>
              <li>
                <a
                  href="https://www.redbullracing.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-rb-yellow transition-colors"
                >
                  Official Website
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Red Bull Racing F1 Educational Project. Level-E Software
            Project.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-rb-yellow transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-rb-yellow transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
