function minWindow(s, t) {
    const targetMap = {};
    for (let char of t) {
        targetMap[char] = (targetMap[char] || 0) + 1;
    }

    let left = 0;
    let right = 0;
    let minLen = Infinity;
    let minStart = 0;
    let remaining = t.length;

    while (right < s.length) {
        if (targetMap[s[right++]]-- > 0) {
            remaining--;
        }

        while (remaining === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                minStart = left;
            }
            if (targetMap[s[left++]]++ === 0) {
                remaining++;
            }
        }
    }

    return minLen === Infinity ? "" : s.substr(minStart, minLen);
}

// Example usage:
const s = "ADOBECWQODEBANC";
const t = "ABC";
console.log(minWindow(s, t)); // Output: "BANC"
