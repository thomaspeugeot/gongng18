package main

import (
	"time"

	"gongng18/go/models"

	// injection point for ident package import declaration{{ImportPackageDeclaration}}
)

// generated in order to avoid error in the package import
// if there are no elements in the stage to marshall
var _ time.Time

// _ point for meta package dummy declaration{{ImportPackageDummyDeclaration}}

// When parsed, those maps will help with the renaming process
var _ map[string]any = map[string]any{
	// injection point for docLink to identifiers{{EntriesDocLinkStringDocLinkIdentifier}}
}

// function will stage objects
func _(stage *models.StageStruct) {

	// Declaration of instances to stage

	__Country__000000_a := (&models.Country{}).Stage(stage)

	__Hello__000000_sss := (&models.Hello{}).Stage(stage)

	// Setup of values

	__Country__000000_a.Name = `a`

	__Hello__000000_sss.Name = `sss`

	// Setup of pointers
	__Country__000000_a.Hello = __Hello__000000_sss
	__Country__000000_a.AlternateHellos = append(__Country__000000_a.AlternateHellos, __Hello__000000_sss)
}
