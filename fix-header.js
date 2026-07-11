const fs = require('fs');

function processFile(file) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace hardcoded slate colors
    content = content.replace(/dark:bg-slate-900\/80/g, 'dark:bg-background/80');
    content = content.replace(/dark:bg-slate-900\/95/g, 'dark:bg-background/95');
    content = content.replace(/dark:border-slate-700\/50/g, 'dark:border-border/50');
    content = content.replace(/text-slate-900 dark:text-white/g, 'text-foreground');
    content = content.replace(/text-slate-600 dark:text-slate-300/g, 'text-muted-foreground');
    content = content.replace(/hover:text-slate-900 dark:hover:text-white/g, 'hover:text-foreground');
    content = content.replace(/hover:bg-slate-100 dark:hover:bg-slate-800/g, 'hover:bg-accent hover:text-accent-foreground');
    content = content.replace(/text-slate-700 dark:text-slate-200/g, 'text-foreground');
    content = content.replace(/dark:hover:bg-slate-800/g, 'dark:hover:bg-accent');
    content = content.replace(/border-slate-100 dark:border-slate-800/g, 'border-border');
    
    // Make gradients more subtle
    content = content.replace(/from-red-600 to-red-500/g, 'from-primary/90 to-primary');
    content = content.replace(/text-red-500/g, 'text-primary');
    content = content.replace(/bg-red-50 dark:bg-red-500\/10/g, 'bg-primary/10');
    content = content.replace(/hover:text-red-500/g, 'hover:text-primary');
    content = content.replace(/shadow-red-500\/30/g, 'shadow-primary/30');
    
    fs.writeFileSync(file, content);
}

processFile('components/Header.js');
console.log("Done");
