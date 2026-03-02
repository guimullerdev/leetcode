function twoSum(nums: number[], target: number): number[] {
    const numMap: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;
        if (complement in numMap) {
            return [numMap[complement], i];
        }
        numMap[currentNum] = i;
    }

    return [];
};