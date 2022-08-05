import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'ScienceHub',
  spsModulePath: 'YOUR OWN MODULE PATH HERE',
  outDir: './docs',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: './blog',
      },
    },
    // '/papers/:id': {
    //   type: 'json',
    //   paperId: {
    //     url: 'https://olympiadhub.github.io',
    //     property: 'id'
    //   }
    // }
  },
  extraRoutes: ['/papers/1', '/papers/2', '/papers/3', '/papers/4'],
};
