import * as Sentry from "@sentry/react";
import Boundry from "./Boundry";
const env = import.meta.env.VITE_ENV;
const sentryToken = import.meta.env.VITE_SENTRY_TOKEN;

const config = {
  dsn: sentryToken,
  environment: env,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
};

export const SentryInit = () => (sentryToken ? Sentry.init(config) : undefined);

export const SentryErrorBoundary = sentryToken ? Sentry.ErrorBoundary : Boundry;
