#!/usr/bin/env node
import sade from "sade";
import { getSDKVersion } from "./lib/agent-config";
import { Provider } from "./lib/providers";
import { Providers } from "./types";

const provider = new Provider();
const version = getSDKVersion();

sade("rapidsec")
  .version(version)
  .command(Providers.Netlify)
  .describe(`Adds security headers to _headers file using RapidSec Service`)
  .option(`-i, --input`, `Provide path to existing _headers file`)
  .option(`-o, --output`, `Provide path to output _headers file`)
  .example(`netlify -o ./dist`)
  .example(`netlify -i ./public/_headers -o ./dist`)
  .action((options) => {
    provider.handleProvider(options, Providers.Netlify);
  })
  .command(Providers.Vercel)
  .describe(`Adds security headers to vercel.json file using RapidSec Service`)
  .option(`-i, --input`, `Provide path to existing vercel.json file`)
  .option(`-o, --output`, `Provide path to output vercel.json file`)
  .example(`netlify -o ./out`)
  .example(`netlify -i ./public/vercel.json -o ./out`)
  .action((options) => {
    provider.handleProvider(options, Providers.Vercel);
  })
  .command(Providers.Firebase)
  .describe(`Adds security headers to vercel.json file using RapidSec Service`)
  .option(`-i, --input`, `Provide path to existing vercel.json file`)
  .option(`-o, --output`, `Provide path to output vercel.json file`)
  .example(`firebase -o ./out`)
  .example(`firebase -i ./firebase.json -o ./out`)
  .action((options) => {
    provider.handleProvider(options, Providers.Firebase);
  })
  .parse(process.argv);
