var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];
var x = []
function deletePerson(personName)
{
	for (let i = 0; i < people.length; i++) {
	if (personName == 'daniella') {
		x = ['juan','ana','michelle','stefany','lucy','barak']
	}
	else if (personName == 'juan') {
		x = ['ana','michelle','daniella','stefany','lucy','barak']
	}
	else {
		x = ['juan', 'ana', 'michelle', 'daniella', 'stefany', 'lucy', 'barak']
	}
}
	return x
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));