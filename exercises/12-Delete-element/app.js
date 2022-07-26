var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
		let newArray = people.filter((value)=>{
			if (value !== personName) {
				return value
			}
		})

		return newArray
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));