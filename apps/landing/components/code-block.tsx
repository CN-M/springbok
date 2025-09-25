"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
	title: string;
	code: string;
	language: string;
}

export function CodeBlock({ title, code, language }: CodeBlockProps) {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = async () => {
		await navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
			<div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-muted/30">
				<span className="text-sm font-medium text-muted-foreground">
					{title}
				</span>
				<Button
					variant="ghost"
					size="sm"
					onClick={copyToClipboard}
					className="h-8 w-8 p-0"
				>
					{copied ? (
						<Check className="h-4 w-4 text-primary" />
					) : (
						<Copy className="h-4 w-4" />
					)}
				</Button>
			</div>
			<div className="p-4">
				<pre className="text-sm overflow-x-auto">
					<code className="font-mono text-foreground">{code}</code>
				</pre>
			</div>
		</Card>
	);
}
