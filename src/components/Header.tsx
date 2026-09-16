import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

function Brand() {
  return (
    <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${site.name} home`}>
      {/* 
        The dark:brightness-0 dark:invert classes automatically flip the logo 
        colors to white when dark mode is active, keeping it visible! 
      */}
      <img
        src="/images/logo.png"
        alt={`${site.name} logo`}
        className="h-10 w-auto shrink-0 object-contain sm:h-12 dark:brightness-0 dark:invert"
      />
      
      {/* 
        NOTE: If your logo.png already has the church name written on it, 
        you can safely delete this entire <span> block below so it doesn't show twice! 
      */}
      <span className="min-w-0 leading-tight">
        <span className="block truncate font-display text-lg font-semibold">{site.name}</span>
        <span className="block truncate text-xs text-muted-foreground">{site.campus}</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur transition-shadow",
        scrolled && "shadow-[0_10px_30px_-24px_oklch(0.28_0.05_45/0.7)]",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
        <Brand />

        <div ref={navRef} className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item) => {
                const active = pathname === item.to;
                if (!item.children) {
                  return (
                    <li key={item.label}>
                      <Link
                        to={item.to}
                        className={cn(
                          "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                          active && "text-primary",
                        )}
                        activeProps={{ className: "text-primary" }}
                        activeOptions={{ exact: item.to === "/" }}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }
                const open = openMenu === item.label;
                return (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(item.label)}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <button
                      type="button"
                      aria-expanded={open}
                      aria-haspopup="true"
                      onClick={() => setOpenMenu(open ? null : item.label)}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                        (open || pathname.startsWith(item.to)) && "text-primary",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
                      />
                    </button>
                    <div
                      className={cn(
                        "absolute left-0 top-full w-80 origin-top pt-2 transition-all duration-200",
                        open
                          ? "visible scale-100 opacity-100"
                          : "invisible -translate-y-1 scale-95 opacity-0",
                      )}
                    >
                      <ul className="overflow-hidden rounded-xl border border-border bg-popover p-2 shadow-[var(--shadow-lift)]">
                        {item.children.map((child) => (
                          <li key={child.label + child.hash}>
                            <Link
                              to={child.to}
                              {...(child.hash ? { hash: child.hash } : {})}
                              className="block rounded-lg px-3 py-2.5 transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              <span className="block text-sm font-semibold">{child.label}</span>
                              {child.description ? (
                                <span className="mt-0.5 block text-xs text-muted-foreground">
                                  {child.description}
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <Link
              to="/giving"
              className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Give
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!mobileOpen}
        className="border-t border-border bg-background lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page max-h-[70vh] overflow-y-auto py-4">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="block rounded-lg px-3 py-3 text-base font-semibold transition-colors hover:bg-accent"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <ul className="mb-2 ml-3 border-l border-border pl-3">
                    {item.children.map((child) => (
                      <li key={child.label + child.hash}>
                        <Link
                          to={child.to}
                          {...(child.hash ? { hash: child.hash } : {})}
                          className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-3 pb-2">
            <Link
              to="/giving"
              className="rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Give
            </Link>
            <Link
              to="/prayer-requests"
              className="rounded-full border border-primary px-5 py-3 text-center text-sm font-semibold text-primary"
            >
              Need Prayer?
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}