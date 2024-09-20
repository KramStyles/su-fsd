// Helper function to split filenames into parts (numbers and strings)
export const sortByFilenameAsc = (result) => {
    // Sort the result by filenames
    return Object.fromEntries(
        Object.entries(result).sort(([, valueA], [, valueB]) => {
            return valueA.localeCompare(valueB);
        })
    );
}

export const sortByFilenameDesc = (result) => {
    // Sort the result by filename in descending order
    return Object.fromEntries(
        Object.entries(result).sort(([, valueA], [, valueB]) => {
            return valueB.localeCompare(valueA);
        })
    );
}

export const sortByCreateAt = (result) => {
    // Sort the object by created at
    return Object.fromEntries(
        Object.entries(result).sort(([keyA], [keyB]) => {
            return new Date(keyA) - new Date(keyB); // Sorting by date
        })
    );
}