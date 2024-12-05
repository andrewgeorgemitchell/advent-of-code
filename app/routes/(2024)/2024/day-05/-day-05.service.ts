export function calculatePartOne(input: string | null | undefined): number {
  // Handle invalid input
  if (!input) {
    return 0;
  }
  const trimmedInput = String(input).trim();
  if (trimmedInput === '') {
    return 0;
  }

  try {
    // Split input into rules and updates sections
    const [rulesSection, updatesSection] = trimmedInput.split('\n\n');
    
    // Parse rules
    const rules = new Map<number, Set<number>>();
    rulesSection.split('\n').forEach(rule => {
      const [before, after] = rule.split('|').map(Number);
      if (!rules.has(before)) {
        rules.set(before, new Set());
      }
      rules.get(before)!.add(after);
    });

    // Parse updates
    const updates = updatesSection.split('\n').map(update => 
      update.split(',').map(Number)
    );

    // Function to check if an update is in correct order
    function isCorrectOrder(update: number[]): boolean {
      // For each pair of numbers in the update
      for (let i = 0; i < update.length; i++) {
        for (let j = i + 1; j < update.length; j++) {
          const before = update[i];
          const after = update[j];
          
          // Check if there's a rule saying after should come before before
          if (rules.has(after) && rules.get(after)!.has(before)) {
            return false;
          }
        }
      }
      return true;
    }

    // Find correctly ordered updates and their middle numbers
    let sum = 0;
    for (const update of updates) {
      if (isCorrectOrder(update)) {
        const middleIndex = Math.floor(update.length / 2);
        sum += update[middleIndex];
      }
    }

    return sum;
  } catch {
    return 0;
  }
}

export function calculatePartTwo(input: string | null | undefined): number {
  // Handle invalid input
  if (!input) {
    return 0;
  }
  const trimmedInput = String(input).trim();
  if (trimmedInput === '') {
    return 0;
  }

  try {
    // Split input into rules and updates sections
    const [rulesSection, updatesSection] = trimmedInput.split('\n\n');
    
    // Parse rules
    const rules = new Map<number, Set<number>>();
    rulesSection.split('\n').forEach(rule => {
      const [before, after] = rule.split('|').map(Number);
      if (!rules.has(before)) {
        rules.set(before, new Set());
      }
      rules.get(before)!.add(after);
    });

    // Parse updates
    const updates = updatesSection.split('\n').map(update => 
      update.split(',').map(Number)
    );

    // Function to check if an update is in correct order
    function isCorrectOrder(update: number[]): boolean {
      for (let i = 0; i < update.length; i++) {
        for (let j = i + 1; j < update.length; j++) {
          const before = update[i];
          const after = update[j];
          if (rules.has(after) && rules.get(after)!.has(before)) {
            return false;
          }
        }
      }
      return true;
    }

    // Function to compare two numbers based on rules
    function compareNumbers(a: number, b: number): number {
      if (rules.has(b) && rules.get(b)!.has(a)) {
        return 1; // b should come before a
      }
      if (rules.has(a) && rules.get(a)!.has(b)) {
        return -1; // a should come before b
      }
      return 0; // no direct rule between a and b
    }

    // Function to sort an update according to rules
    function sortUpdate(update: number[]): number[] {
      return [...update].sort((a, b) => {
        const comparison = compareNumbers(a, b);
        return comparison !== 0 ? comparison : a - b;
      });
    }

    // Find incorrectly ordered updates, sort them, and sum their middle numbers
    let sum = 0;
    for (const update of updates) {
      if (!isCorrectOrder(update)) {
        const sortedUpdate = sortUpdate(update);
        const middleIndex = Math.floor(sortedUpdate.length / 2);
        sum += sortedUpdate[middleIndex];
      }
    }

    return sum;
  } catch {
    return 0;
  }
} 