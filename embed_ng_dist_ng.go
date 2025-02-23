package gongng18

import "embed"

// NgDistNg is the export of angular distribution. This allows
// embedding of the pages in the web server
//
//go:embed ng-gongng18/dist/ng-gongng18
var NgDistNg embed.FS
