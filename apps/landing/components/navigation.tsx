import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export function Navigation() {
	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
			<div className="container mx-auto px-6 py-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center space-x-8">
						<h1 className="text-xl font-bold">Springbok</h1>
						<div className="hidden md:flex items-center space-x-6">
							<a
								href="#docs"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Documentation
							</a>
							<a
								href="#examples"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								Examples
							</a>
							<a
								href="#api"
								className="text-sm text-muted-foreground hover:text-foreground transition-colors"
							>
								API Reference
							</a>
						</div>
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
			</div>
		</nav>
	);
}
