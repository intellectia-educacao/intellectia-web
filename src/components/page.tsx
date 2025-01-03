import { cn } from "@/lib/utils"

export type DashboardPageGenericProps<T = any> = {
  children: React.ReactNode,
  className?: string
} & T

export function DashboardPage({ className, children }: DashboardPageGenericProps) {
  return (
    <section className={cn(['h-screen flex flex-col', className])}>
      {children}
    </section>
  )
}

export function DashboardPageHeader({ className, children }: DashboardPageGenericProps) {
  return (
    <header className={cn(['px-6 py-3 border-b border-border', className])}>
      {children}
    </header>
  )
}

export function DashboardPageHeaderTitle({ className, children }: DashboardPageGenericProps) {
  return (
    <h1 className={cn(['text-muted-foreground', className])}>
      {children}
    </h1>
  )
}

export function DashboardPageHeaderNav({ className, children }: DashboardPageGenericProps) {
  return (
    <nav className={cn(['', className])}>
      {children}
    </nav>
  )
}

export function DashboardPageMain({ className, children }: DashboardPageGenericProps) {
  return (
    <main className={cn(['', className])}>
      {children}
    </main>
  )
}

export function DashboardPageFooter({ className, children }: DashboardPageGenericProps) {
  return (
    <main className={cn(['px-6 py-3 border-t border-border', className])}>
      {children}
    </main>
  )
}
