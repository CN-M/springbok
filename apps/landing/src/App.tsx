import {
	ArrowRight,
	Check,
	Code,
	Copy,
	Download,
	ExternalLink,
	GitBranch,
	Github,
	Package,
	Star,
	Zap,
} from "lucide-react";
import React, { useState } from "react";

function App() {
	const [copiedCode, setCopiedCode] = useState<string>("");

	const copyToClipboard = (text: string, id: string) => {
		navigator.clipboard.writeText(text);
		setCopiedCode(id);
		setTimeout(() => setCopiedCode(""), 2000);
	};

	const CodeBlock = ({
		children,
		language = "typescript",
		copyId,
	}: {
		children: string;
		language?: string;
		copyId: string;
	}) => (
		<div className="relative bg-gray-900 rounded-xl p-6 font-mono text-sm overflow-x-auto">
			<button
				onClick={() => copyToClipboard(children, copyId)}
				className="absolute top-4 right-4 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200"
			>
				{copiedCode === copyId ? (
					<Check className="w-4 h-4 text-green-400" />
				) : (
					<Copy className="w-4 h-4 text-gray-400" />
				)}
			</button>
			<pre className="text-gray-100 leading-relaxed pr-12">
				<code>{children}</code>
			</pre>
		</div>
	);

	return (
		<div className="min-h-screen bg-white">
			{/* Navigation */}
			<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
				<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
					<div className="flex items-center space-x-2">
						<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
							<Zap className="w-5 h-5 text-white" />
						</div>
						<h1 className="text-xl font-bold text-gray-900">Springbok</h1>
					</div>
					<div className="hidden md:flex items-center space-x-8">
						<a
							href="#features"
							className="text-gray-600 hover:text-gray-900 transition-colors"
						>
							Features
						</a>
						<a
							href="#installation"
							className="text-gray-600 hover:text-gray-900 transition-colors"
						>
							Installation
						</a>
						<a
							href="#examples"
							className="text-gray-600 hover:text-gray-900 transition-colors"
						>
							Examples
						</a>
						<a
							href="#roadmap"
							className="text-gray-600 hover:text-gray-900 transition-colors"
						>
							Roadmap
						</a>
						<button className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center space-x-2">
							<Github className="w-4 h-4" />
							<span>GitHub</span>
						</button>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100">
				<div className="max-w-6xl mx-auto px-6 text-center">
					<div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
						<Star className="w-4 h-4" />
						<span>Inspired by Zustand</span>
					</div>

					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
						Minimal State Management
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
						A lightweight, flexible state management library for modern
						JavaScript applications. Simple to use, powerful to scale.
					</p>

					<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
						<button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2 font-medium">
							<Download className="w-5 h-5" />
							<span>Get Started</span>
						</button>
						<button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-all duration-200 flex items-center space-x-2 font-medium">
							<ExternalLink className="w-5 h-5" />
							<span>View Docs</span>
						</button>
					</div>

					<div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
						<div className="flex items-center justify-between mb-4">
							<span className="text-sm font-medium text-gray-500">INSTALL</span>
							<button
								onClick={() =>
									copyToClipboard("npm i @cn-m/springbok-react", "install")
								}
								className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
							>
								{copiedCode === "install" ? (
									<Check className="w-4 h-4 text-green-500" />
								) : (
									<Copy className="w-4 h-4 text-gray-400" />
								)}
							</button>
						</div>
						<code className="text-gray-900 font-mono text-lg">
							npm i @cn-m/springbok
						</code>
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Built for Modern Development
						</h2>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							Springbok provides the perfect balance between simplicity and
							power, letting you focus on building great applications.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						<div className="bg-gray-50 rounded-xl p-8 text-center">
							<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
								<Zap className="w-6 h-6 text-blue-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Lightweight
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Minimal bundle size with zero dependencies. Get powerful state
								management without the bloat.
							</p>
						</div>

						<div className="bg-gray-50 rounded-xl p-8 text-center">
							<div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
								<Code className="w-6 h-6 text-green-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								TypeScript First
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Built with TypeScript from the ground up. Enjoy full type safety
								and excellent developer experience.
							</p>
						</div>

						<div className="bg-gray-50 rounded-xl p-8 text-center">
							<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
								<Package className="w-6 h-6 text-purple-600" />
							</div>
							<h3 className="text-xl font-bold text-gray-900 mb-3">
								Framework Agnostic
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Use the vanilla core in any framework, or leverage the React
								bindings for seamless integration.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Installation Section */}
			<section id="installation" className="py-20 bg-gray-50">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Quick Installation
						</h2>
						<p className="text-lg text-gray-600">
							Choose the package that fits your needs
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
							<div className="flex items-center space-x-3 mb-6">
								<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
									<Package className="w-5 h-5 text-blue-600" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-900">
										React Package
									</h3>
									<p className="text-gray-600 text-sm">
										For React applications
									</p>
								</div>
							</div>

							<CodeBlock copyId="react-install">
								{`# Install the main package
npm i @cn-m/springbok-react

# Includes React hooks and utilities`}
							</CodeBlock>
						</div>

						<div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
							<div className="flex items-center space-x-3 mb-6">
								<div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
									<Code className="w-5 h-5 text-orange-600" />
								</div>
								<div>
									<h3 className="text-xl font-bold text-gray-900">
										Vanilla Core
									</h3>
									<p className="text-gray-600 text-sm">Framework agnostic</p>
								</div>
							</div>

							<CodeBlock copyId="core-install">
								{`# Install the core package
npm i @cn-m/springbok-core

# Import from core
import { create } from '@cn-m/springbok/core'`}
							</CodeBlock>
						</div>
					</div>
				</div>
			</section>

			{/* Examples Section */}
			<section id="examples" className="py-20 bg-white">
				<div className="max-w-6xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Simple Examples
						</h2>
						<p className="text-lg text-gray-600">
							Get started in seconds with intuitive APIs
						</p>
					</div>

					<div className="grid lg:grid-cols-2 gap-8">
						<div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
								<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
									<Package className="w-4 h-4 text-blue-600" />
								</div>
								<span>React Usage</span>
							</h3>

							<CodeBlock copyId="react-example">
								{`import { create } from '@cn-m/springbok'

const useStore = create((set, get) => ({
  count: 0,
  increment: () => set(state => ({ 
    count: state.count + 1 
  })),
  decrement: () => set(state => ({ 
    count: state.count - 1 
  })),
  reset: () => set({ count: 0 })
}))

function Counter() {
  const { count, increment, decrement } = useStore()
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}`}
							</CodeBlock>
						</div>

						<div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
								<div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
									<Code className="w-4 h-4 text-orange-600" />
								</div>
								<span>Vanilla Usage</span>
							</h3>

							<CodeBlock copyId="vanilla-example">
								{`import { create } from '@cn-m/springbok/core'

const store = create((set, get) => ({
  user: null,
  isLoading: false,
  
  login: async (credentials) => {
    set({ isLoading: true })
    try {
      const user = await api.login(credentials)
      set({ user, isLoading: false })
    } catch (error) {
      set({ isLoading: false })
      throw error
    }
  },
  
  logout: () => set({ user: null })
}))

// Subscribe to changes
store.subscribe((state) => {
  console.log('State changed:', state)
})

// Access state
console.log(store.getState().user)`}
							</CodeBlock>
						</div>
					</div>
				</div>
			</section>

			{/* Roadmap Section */}
			<section id="roadmap" className="py-20 bg-gray-50">
				<div className="max-w-4xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Roadmap
						</h2>
						<p className="text-lg text-gray-600">
							What's coming next for Springbok
						</p>
					</div>

					<div className="space-y-6">
						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex items-start space-x-4">
							<div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<Check className="w-4 h-4 text-white" />
							</div>
							<div>
								<h3 className="text-lg font-bold text-gray-900 mb-2">
									Core Library & React Bindings
								</h3>
								<p className="text-gray-600">
									Minimal state management with TypeScript support and React
									hooks.
								</p>
								<span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full mt-2">
									Completed
								</span>
							</div>
						</div>

						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex items-start space-x-4">
							<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<GitBranch className="w-4 h-4 text-white" />
							</div>
							<div>
								<h3 className="text-lg font-bold text-gray-900 mb-2">
									DevTools Integration
								</h3>
								<p className="text-gray-600">
									Browser extension support for debugging and state inspection.
								</p>
								<span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mt-2">
									In Progress
								</span>
							</div>
						</div>

						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex items-start space-x-4">
							<div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<Package className="w-4 h-4 text-gray-600" />
							</div>
							<div>
								<h3 className="text-lg font-bold text-gray-900 mb-2">
									Middleware System
								</h3>
								<p className="text-gray-600">
									Plugin architecture for persistence, logging, and custom
									behaviors.
								</p>
								<span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full mt-2">
									Planned
								</span>
							</div>
						</div>

						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex items-start space-x-4">
							<div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<Zap className="w-4 h-4 text-gray-600" />
							</div>
							<div>
								<h3 className="text-lg font-bold text-gray-900 mb-2">
									Vue & Svelte Bindings
								</h3>
								<p className="text-gray-600">
									Official bindings for Vue.js and Svelte frameworks.
								</p>
								<span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full mt-2">
									Planned
								</span>
							</div>
						</div>

						<div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 flex items-start space-x-4">
							<div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
								<ArrowRight className="w-4 h-4 text-gray-600" />
							</div>
							<div>
								<h3 className="text-lg font-bold text-gray-900 mb-2">
									Performance Optimizations
								</h3>
								<p className="text-gray-600">
									Advanced selectors, memoization, and performance monitoring
									tools.
								</p>
								<span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded-full mt-2">
									Future
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-12">
				<div className="max-w-6xl mx-auto px-6">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="flex items-center space-x-2 mb-4 md:mb-0">
							<div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
								<Zap className="w-5 h-5 text-white" />
							</div>
							<span className="text-xl font-bold">Springbok</span>
						</div>

						<div className="flex items-center space-x-6">
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
							>
								<Github className="w-5 h-5" />
								<span>GitHub</span>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Documentation
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors"
							>
								NPM
							</a>
						</div>
					</div>

					<div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
						<p>Built with ❤️ for modern JavaScript development</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
