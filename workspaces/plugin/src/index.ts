import type { Plugin } from 'vite';
import type { AllowedEvent, MpaOptions } from './api-types';
import { createMpaPlugin as mpaPlugin } from './plugin';
import { htmlMinifyPlugin } from './html-minify';

export * from './api-types';
export { createPages } from './utils';

export function createMpaPlugin<
  PN extends string,
  PFN extends string,
  Event extends AllowedEvent,
>(
  config: MpaOptions<PN, PFN, Event>,
): Plugin[] {
  const { htmlMinify } = config;
  return !htmlMinify
    ? [mpaPlugin(config)]
    : [
      mpaPlugin(config),
      htmlMinifyPlugin(htmlMinify === true ? {} : htmlMinify),
    ];
}
