const fs = require('fs');

// Update layout.js to use next/font/google Inter
let layout = fs.readFileSync('app/layout.js', 'utf8');
if (!layout.includes('next/font/google')) {
    const fontImport = `import { Inter } from 'next/font/google'\nconst inter = Inter({ subsets: ['latin'], variable: '--font-inter' })\n\n`;
    layout = layout.replace("import './globals.css'", "import './globals.css'\n" + fontImport);
    layout = layout.replace('<body className="flex flex-col min-h-screen">', '<body className={`flex flex-col min-h-screen ${inter.variable} font-sans bg-background text-foreground`}>');
    fs.writeFileSync('app/layout.js', layout);
}

// Update tailwind.config.js to include font family and animations
let twConfig = fs.readFileSync('tailwind.config.js', 'utf8');
if (!twConfig.includes('fontFamily: {')) {
    twConfig = twConfig.replace('extend: {', "extend: {\n      fontFamily: { sans: ['var(--font-inter)', 'sans-serif'] },");
}
fs.writeFileSync('tailwind.config.js', twConfig);

console.log("Done");
