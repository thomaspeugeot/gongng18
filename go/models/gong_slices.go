// generated code - do not edit
package models

// ComputeReverseMaps computes the reverse map, for all intances, for all slice to pointers field
// Its complexity is in O(n)O(p) where p is the number of pointers
func (stage *StageStruct) ComputeReverseMaps() {
	// insertion point per named struct
	// Compute reverse map for named struct Country
	// insertion point per field
	clear(stage.Country_AlternateHellos_reverseMap)
	stage.Country_AlternateHellos_reverseMap = make(map[*Hello]*Country)
	for country := range stage.Countrys {
		_ = country
		for _, _hello := range country.AlternateHellos {
			stage.Country_AlternateHellos_reverseMap[_hello] = country
		}
	}

	// Compute reverse map for named struct Hello
	// insertion point per field

}
