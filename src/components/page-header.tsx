import { cn } from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    description: string;
    className?: string;
    centered?: boolean;
}

export function PageHeader({ title, description, className, centered = true }: PageHeaderProps) {
    return (
        <section className={cn("pt-32 pb-16 md:pt-48 md:pb-24 bg-gray-50", className)}>
            <div className={cn("container mx-auto px-4 md:px-6", centered && "text-center")}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">{title}</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{description}</p>
            </div>
        </section>
    );
}
