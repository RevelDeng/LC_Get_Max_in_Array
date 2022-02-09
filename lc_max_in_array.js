var getMaximumGenerated = function(n) {
    var nums = Array(n + 1)
    for (let i = 0; i < nums.length; i++) {
        if (i == 0) {
            nums[i] = 0
        }
        if (i == 1) {
            nums[i] = 1
        }
        if (2 * i <= n && 2 * i >= 2) {
            nums[2 * i] = nums[i]
        }
        if (2 * i + 1 <= n && 2 * i >= 2) {
            nums[2 * i + 1] = nums[i] + nums[i + 1]
        }
    }
    return Math.max(...nums)
};