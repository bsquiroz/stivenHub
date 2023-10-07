export function validationSearch(valueInput: string) {
	if (!valueInput) {
		return "You can't do a search without anything to search for 😋";
	}

	if (valueInput.length < 4) {
		return "Your search must contain at least 4 characters";
	}

	if (valueInput === "doublevpartners") {
		return "Your search cannot be doublevpartners jeje";
	}

	return false;
}
