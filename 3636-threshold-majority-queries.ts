// Brute force approach
// Time complexity: O(Q * N), where Q is the number of queries and N is the length of the array
// Space complexity: O(N), where N is the length of the array
function subarrayMajority(nums: number[], queries: number[][]): number[] {
  const output: number[] = [];

  queries.forEach((q) => {
    const [l, r, t] = q;
    const sub = nums.slice(l, r + 1);
    const freq: Record<number, number> = {};

    sub.forEach((num) => {
      freq[num] = (freq[num] ?? 0) + 1;
    });

    let best = -1;
    let bestFreq = 0;

    for (const [valStr, cnt] of Object.entries(freq)) {
      const val = Number(valStr);
      if (cnt >= t) {
        if (cnt > bestFreq || (cnt === bestFreq && val < best)) {
          best = val;
          bestFreq = cnt;
        }
      }
    }

    output.push(best);
  });

  return output;
}
