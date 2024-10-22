export const getInitials = (name: string): string => {
   // Split the name by spaces
   const words = name.split(" ");
   // First letter of the first word
   const firstInitial = words[0] ? words[0][0].toUpperCase() : "";

   let secondInitial = "";

   // Check if the second word exists and is not a symbol, or find alternatives
   const symbolPattern = /^[A-Za-z]/;
   if (words[1] && symbolPattern.test(words[1])) {
      secondInitial = words[1][0].toUpperCase();
   } else if (words[2] && words[2].length > 1) {
      // Use the first letter of the third word if it exists and is long enough
      secondInitial = words[2][0].toUpperCase();
   } else if (words[0].length > 1) {
      // Fallback to the second letter of the first word if it's long enough
      secondInitial = words[0][1].toUpperCase();
   }

   return firstInitial + secondInitial; // Concatenate initials
};
