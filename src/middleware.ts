import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  
  // List of valid section paths that should redirect to homepage
  const sectionPaths = ['/home', '/oferta', '/realizacje', '/kontakt'];
  
  // If the path is a section path, rewrite to homepage
  if (sectionPaths.includes(pathname)) {
    return context.rewrite('/');
  }
  
  // Continue to the requested page for all other routes
  return next();
});
