"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Github,
	ExternalLink,
	Zap,
	Shield,
	Rocket,
	CheckCircle,
	Clock,
	Star,
} from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import { Navigation } from "@/components/navigation";

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<Navigation />

			{/* Hero Section */}
			<main className="container mx-auto px-6 pt-32 pb-16">
				<div className="max-w-4xl mx-auto text-center">
					<Badge variant="secondary" className="mb-6 text-sm font-medium">
						Inspired by Zustand
					</Badge>

					<h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance gradient-text">
						Springbok
					</h1>

					<p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
						A minimal state management library for modern applications. Simple,
						fast, and TypeScript-first.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
						<Button size="lg" className="text-lg px-8">
							<Rocket className="mr-2 h-5 w-5" />
							Get Started
						</Button>
						<Button
							variant="outline"
							size="lg"
							className="text-lg px-8 bg-transparent"
						>
							<Github className="mr-2 h-5 w-5" />
							View on GitHub
						</Button>
					</div>

					<div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
						<CodeBlock
							title="Vanilla JavaScript"
							code="npm i @cn-m/springbok-core"
							language="bash"
						/>
						<CodeBlock
							title="React"
							code="npm i @cn-m/springbok-react"
							language="bash"
						/>
					</div>
				</div>
			</main>

			{/* Features Section */}
			<section className="container mx-auto px-6 py-16">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
						Why Springbok?
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						<Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105">
							<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center mb-6">
								<Zap className="w-6 h-6 text-primary" />
							</div>
							<h3 className="text-xl font-semibold mb-4">Minimal & Fast</h3>
							<p className="text-muted-foreground leading-relaxed">
								Zero dependencies and a tiny bundle size. Built for performance
								without sacrificing developer experience.
							</p>
						</Card>

						<Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105">
							<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-2/20 to-chart-4/20 flex items-center justify-center mb-6">
								<Shield className="w-6 h-6 text-chart-2" />
							</div>
							<h3 className="text-xl font-semibold mb-4">TypeScript First</h3>
							<p className="text-muted-foreground leading-relaxed">
								Built with TypeScript from the ground up. Get full type safety
								and excellent IntelliSense support out of the box.
							</p>
						</Card>

						<Card className="p-8 border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 hover:scale-105">
							<div className="w-12 h-12 rounded-lg bg-gradient-to-br from-chart-4/20 to-primary/20 flex items-center justify-center mb-6">
								<Star className="w-6 h-6 text-chart-4" />
							</div>
							<h3 className="text-xl font-semibold mb-4">Framework Agnostic</h3>
							<p className="text-muted-foreground leading-relaxed">
								Use with React, Vue, or vanilla JavaScript. Adapters available
								for popular frameworks with consistent APIs.
							</p>
						</Card>
					</div>
				</div>
			</section>

			{/* Code Examples */}
			<section className="container mx-auto px-6 py-16">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
						Simple to Use
					</h2>

					<div className="space-y-8">
						<CodeBlock
							title="Create a Store"
							code={`import { create } from '@cn-m/springbok-react'

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))`}
							language="typescript"
						/>

						<CodeBlock
							title="Use in Components"
							code={`function Counter() {
  const { count, increment, decrement } = useStore()
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}`}
							language="typescript"
						/>
					</div>
				</div>
			</section>

			{/* Roadmap Section */}
			<section className="container mx-auto px-6 py-16">
				<div className="max-w-4xl mx-auto">
					<h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-balance">
						Roadmap
					</h2>

					<div className="space-y-6">
						<Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0">
									<CheckCircle className="w-6 h-6 text-primary mt-1" />
								</div>
								<div>
									<h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
										Core Library Release
										<Badge variant="secondary" className="text-xs">
											Completed
										</Badge>
									</h3>
									<p className="text-muted-foreground">
										Initial release with TypeScript support, React adapter, and
										vanilla JavaScript core.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0">
									<Clock className="w-6 h-6 text-chart-2 mt-1" />
								</div>
								<div>
									<h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
										DevTools Integration
										<Badge variant="outline" className="text-xs">
											In Progress
										</Badge>
									</h3>
									<p className="text-muted-foreground">
										Browser extension for debugging state changes, time-travel
										debugging, and performance monitoring.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0">
									<Clock className="w-6 h-6 text-chart-4 mt-1" />
								</div>
								<div>
									<h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
										Framework Adapters
										<Badge variant="outline" className="text-xs">
											Planned
										</Badge>
									</h3>
									<p className="text-muted-foreground">
										Official adapters for Vue.js, Svelte, and Angular with
										framework-specific optimizations.
									</p>
								</div>
							</div>
						</Card>

						<Card className="p-6 border-border/50 bg-card/50 backdrop-blur-sm">
							<div className="flex items-start gap-4">
								<div className="flex-shrink-0">
									<Clock className="w-6 h-6 text-muted-foreground mt-1" />
								</div>
								<div>
									<h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
										Persistence Layer
										<Badge variant="outline" className="text-xs">
											Future
										</Badge>
									</h3>
									<p className="text-muted-foreground">
										Built-in persistence with localStorage, sessionStorage, and
										IndexedDB support with automatic hydration.
									</p>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-border/50 mt-16">
				<div className="container mx-auto px-6 py-8">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex items-center space-x-4 mb-4 md:mb-0">
							<span className="font-semibold">Springbok</span>
							<Badge variant="outline">v1.0.0</Badge>
						</div>

						<div className="flex items-center space-x-4">
							<Button variant="ghost" size="sm">
								<Github className="h-4 w-4" />
							</Button>
							<Button variant="ghost" size="sm">
								<ExternalLink className="h-4 w-4" />
							</Button>
						</div>
					</div>

					<div className="mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
						<p>Ntsako Mbhalati</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
