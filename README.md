Update to the new version
Review these changes and perform the actions to update your application.

- [ ] Make sure that you are using a supported version of node.js before you upgrade your application. Angular v18 supports node.js versions: v18.19.0 and newer
- [ ] In the application's project directory, run ng update @angular/core@18 @angular/cli@18 to update your application to Angular v18.
- [ ] Run ng update @angular/material@18.
- [ ] Update TypeScript to versions 5.4 or newer.
- [ ] Import StateKey and TransferState from @angular/core instead of @angular/platform-browser.
- [ ] Use includeRequestsWithAuthHeaders: true in withHttpTransferCache to opt-in of caching for HTTP requests that require authorization.
- [ ] Tests may run additional rounds of change detection to fully reflect test state in the DOM. As a last resort, revert to the old behavior by adding provideZoneChangeDetection({ignoreChangesOutsideZone: true}) to the TestBed providers.
- [ ] Remove expressions that write to properties in templates that use [(ngModel)]
- [ ] Move any environment providers that should be available to routed components from the component that defines the RouterOutlet to the providers of bootstrapApplication or the Route config.
- [ ] Provide an absolute url instead of using useAbsoluteUrl and baseUrl from PlatformConfig.
- [ ] Remove all imports of ServerTransferStateModule from your application. It is no longer needed.
- [ ] For any components using OnPush change detection, ensure they are properly marked dirty to enable host binding updates.

After you update
You don't need to do anything after moving between these versions.