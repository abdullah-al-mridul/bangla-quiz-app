export function getRandomQuestions(questions, count) {
  // Create a copy of the array to avoid modifying the original
  const shuffled = [...questions]
    .sort(() => Math.random() - 0.5)
    .slice(0, count);

  // Reassign IDs to maintain sequential order
  return shuffled.map((question, index) => ({
    ...question,
    id: index + 1,
  }));
}
